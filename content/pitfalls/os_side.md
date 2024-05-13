# Pitfalls - Hardware/Server limitations

```{admonition} Summary
- **Hardware/Server Limitations**: Constraints from hardware or scheduler in parallel code.

- **File Access Limitations**:
  - Spinning disks slower than SSDs; striping improves read speed for large files.
  - Caches insufficient for many small files in parallel.
  - Solutions: Use local disks or sharding to improve I/O speed.

- **Scheduling Limitations**:
  - Many small jobs burden the scheduler and increase overhead.
  - Group iterations into fewer, longer jobs (e.g., 1-hour minimum) to improve efficiency.
```

While parallelizing code can often speed up processing of large quantities of problems, there are often limitations
which are easily missed on the side of the scheduler, or the hardware used.

## File access limitations

While your own computer will most likely have a fast SSD drive, many file servers still operate using spinning
disks, which are inherently slower. To still provide fast access to data, this is commonly addressed by file
systems where files get spread over multiple disks, and the file system starts to read from multiple disks at
once, leading to an overall read speed similar to that of an SSD. However, this "striping" is commonly only
applied to larger files, since the benefit for really small files is irrelevant.

At the same time, the file systems or even the disks themselves commonly provide some caches, which allow for
fast access to smaller files if they are read repetitively. However, imagine you have some code that loads
many small files and you run this code in parallel (as is typical for a workflow training a model). All those
processes will try to read thousands of small files at random. In this situation, the caches of the file
system will not be large enough to contain all your requested files, while at the same time, each of the files
will only be available on one disk. This drastically reduces the I/O speed of all of your runs.

If your cluster has fast local disks on the compute nodes, it might be possible to copy all the files to the
machine before starting your computation and then benefit from the speed on the local disks. However, this is
limited by the size of the local disks and thus might not be applicable to large datasets.

Another way to address this bottleneck is to use sharding. The idea is essentially to bunch smaller files into
larger blocks. By doing so, you take advantage of the "pre-read" capability of the file system, leading to I/O
speeds that are no longer limited by the read speed but by the network speed. Essentially, you store the files
into a format that can be read sequentially (i.e., from start to finish of the file, like a tar file), and
start reading through it. The disadvantage is that you no longer have random access to the files, i.e., you need
to handle the order in which the files are read. For python and the pytorch environment, webdataset handles many
parts of this process (once you have the shards). It will start reading from multiple files at once and keep a
buffer of elements, from which it randomly chooses elements. This ensures that the model does not train on the
order (as it is still somewhat random).

## Scheduling limitations

If you parallelize code into very small units, you might end up with a lot of jobs that are very short (e.g.,
because one run of your loop only takes a few seconds). While you will get your results, this poses a huge
burden on the scheduler that assigns the start-times for the jobs on your cluster, as it has to reschedule your
jobs very often (since most likely you won't just give it a few seconds as run time).

At the same time, you create a huge overhead by loading the same files thousands of times (everything used from
your environment) and all the startup time necessary for your code. Imagine some code that has a startup
(starting up python, importing some larger packages, loading data, etc.) which takes 60 seconds, it then runs
a loop ten thousand times, with each iteration taking 2 minutes. So in total, you have a runtime of about 333
hours. If you now split this into ten thousand individual jobs, you:

- Try to read the same files in your environment ten thousand times (leading to the I/O speed issues described
  above), which can increase the startup time.
- Add 10000 minutes of startup time to the execution of your code.

Overall, out of 20002 minutes of CPU time, you now likely have some 35000 minutes (if not more). Depending on
whether you pay for your usage, this might cause significant cost increases. In addition, the sheer amount of
the jobs puts a lot of burden on the scheduler, and you might even run into job limits on your cluster.

To avoid this kind of scenario and more efficiently use the resources, it is often better to group multiple
iterations into one job. From our experience, a good minimum target runtime is about one hour. In the case
described above, this would mean grouping about 60 iterations each into one job.

This would leave us with 334 jobs, and a total CPU usage of about 20500 minutes, with the jobs likely finishing
in about the same time as the 10000 jobs we had earlier.
