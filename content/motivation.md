# Motivation

```{objectives}
- Get options how to run workflows in parallel.
- Structuring workflows to avoid repeating already executed steps
- Pitfalls and problems occuring in workflows
- Avoid unnecessary learning curve of language internal parallelization mechanisms
- General applicability to any programming language
- Harness resource availability on large clusters```
```

## Why parallelize at all

While the actual processing speeds of processors hasn't increased that much over the last decade (~3.6 Ghz in 2010 vs 4.1 Ghz in 2020)
the number of cores has increased significantly (from max 6 (most machines having 2) to up to 64 (with most having ~6)). This is particularly
true if we look at clusters, where the number of machines and thus available cores has risen a lot, while the single core speed hasn't
improved that much.
In addition, the amount of data we are processing nowadays, often requires us to repeat the same processes multiple times for each data
point (e.g. in pre-processing). And while many libraries have inherent parallelization mechanisms for several types of mathematical
processes that does not cover re-application of the same process unless we use in-language parallelization techniques.

## Advantages and pitfalls of parallelization

The main advantage of parallelizing code is the speedup achieved from parallel processing of the same lines of code for multiple input
values. In theory, this leads to a computation time that's about 1/n of the unparallelized process, where n is the number of cores used
for processing the data. However, this theoretical maximum is rarely reached, as there often is some overhead in collecting the final
results of the parallelized process. There are also often costs associated with parallelizing code. Depending on the programming
language, one cost is clarity of the code (as parallelization often requires the initialization of worker pools) another is often
additional memory requirements, as data might need to be copied to be available to each of the processes performing the calculation.
In addition to these costs, there can be hidden side effects that can actually make parallel processing slow down a computation.
Imagine, you have a system with 4 cores and you have a program in python using some numpy (a python math library) functions which
can use multiple cpus. If you don't parallelize, the multi-threading functions from numpy will use all 4 cores (if they can). Now imagine,
that you use multiprocessing (a python library to parallelize code) to run 4 computations in parallel. If you don't take care, all
4 computations will try to run multi-threaded computations which could interfere with each other, leading to a significant overhead in
the multiprocessing library and the runtime actually getting worse ( an example can be found [here](https://superfastpython.com/numpy-blas-multiprocessing/))
The following figures also show this issue.
First, you have a function which runs some code 10 times in parallel, making use of all the cores on your system.
![Parallel execution](img/parallel_execution.svg)
If you would parallelize this code on the same machine, i.e. you don't have more CPU, you just run all parallel computations in parallel,
you end up with a situation as follows:
![Dual parallel execution](img/dual_parallel_execution.svg)
This obviously puts a burden on the operating system to schedule all the concurrent calls, which will slow down the overall computation.
Only if you can simultaneously add more cores to the computation, that are exclusively reserved for to each step in the for loop
will your code actually run faster, otherwise it will run slower.

## Moving the parallelization to the scheduler level

By moving the parallelization of the code to the scheduler level of your cluster you can get around a lot of the problems
you would otherwise encounter in making your code parallel.

- Each process can make use of all the resources you assign to it,
  and doesn't have to worry about scheduling issues, as there are no other threads that can interfere with it.
- You don't have to worry about language specific parallelization mechanisms
- Your code stays cleaner, as all the extras needed for in language parallelization can be left out, making it easier to read and debug

What you will be doing is submitting multiple processes, one for each entry (or a set of entries) of your input data.

