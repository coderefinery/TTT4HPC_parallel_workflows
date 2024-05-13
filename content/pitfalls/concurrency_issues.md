# Concurrency issues

```{admonition} Summary
 - **Concurrency Issues**: 
    - Common in parallel computations when multiple threads modify the same source or element.
 - **Concurrent File Access**:
	- Issues arise when multiple processes try to write to or read from the same file simultaneously.
	- Failed jobs due to simultaneous writes.
	- Missing or corrupt data from conflicting writes.
	- Solution: Ensure parallelized code operates independently.
	- Use index-specific output files and a collection script.
	- Example Slurm script for job dependency and collection provided.
  - **Concurrent Database Access**:
	- Databases handled by a server generally manage multiple requests and avoid concurrency issues.
	- However, server bottlenecks can occur, leading to decreased performance.
```


Probably the most common issues when running embarrassingly, or in general parallel computations, arises due to concurrency issues, where multiple threads try to modify the same source or the same element.
Here, we will give some examples of issues that can arise



## Concurrent File Access

Let's take the following piece of code:

`````{tabs}

   ````{group-tab} Python
    ```{literalinclude} /code/python/basic_example.py
        :language: python
    ```

   ````

   ````{group-tab} R
    ```{literalinclude} /code/r/basic_example.r
        :language: R
    ```

   ````

`````

which we have identified as embarrassingly parallel code and converted to the following:

`````{tabs}

   ````{group-tab} Python
    ```{literalinclude} /code/python/basic_parallelized.py
        :language: python
    ```

   ````

   ````{group-tab} R
    ```{literalinclude} /code/r/basic_parallelized.r
        :language: R
    ```

   ````

`````

Our `append_result` function either creates the results file, if it does not exist yet, or, if
it does, it reads in the result array. We run this function several times via an `sarray` job.
This can work fine. However, it can also lead to errors, and worst case invalid results.
The problem arises because we don't know the point in time at which the result file is opened
and written to. Likely some jobs will fail with an error thrown, when two processes try to
simultaneously write to the same file, or that some try to read from the file while it is
written to. More inconvenient could be suspiciously missing results in the results file, due to
two reads of the file, which leads to conflicting writes, where one result is simply lost.
Or, we could end up with an entirely corrupt file, when two jobs write simultaneously and the
file system doesn't complain about it...

So, an important thing to keep in mind is to have the parallelized code really be independent
of other instances. In most cases this means, using index specific output files and having a
"collection script" that combines the data after the jobs are complete. This can even be done with slurm internal methods if you use an array job:

```slurm
#!/bin/bash
#SBATCH --job-name=collection_job
#SBATCH --dependency=afterok:your_array_job_id

# run your collection script
python collection.py
```

If you use a submission script you would need to list all jobs in the dependency part, at which point it likely is easier to just wait for completion and then manually do the collection.
The above case would then become something like:

Calculation script:

`````{tabs}

   ````{group-tab} Python
    ```{literalinclude} /code/python/basic_parallelized_non_conflict.py
       :language: python
    ```

   ````

   ````{group-tab} R
    ```{literalinclude} /code/r/basic_parallelized_non_conflict.r
        :language: R
    ```

   ````

`````

Submission:

`````{tabs}

   ````{group-tab} Python
    ```{literalinclude} /code/slurm/submit_parallel_py.sh
        :language: slurm
    ```

   ````

   ````{group-tab} R
    ```{literalinclude} /code/slurm/submit_parallel_r.sh
        :language: slurm
    ```

   ````

`````

Collection script:

`````{tabs}

   ````{group-tab} Python
    ```{literalinclude} /code/python/collection.py
        :language: python
    ```

   ````

   ````{group-tab} R
    ```{literalinclude} /code/r/collection.r
        :language: R
    ```

   ````

`````

Submission for collection:

`````{tabs}

   ````{group-tab} Python
    ```{literalinclude} /code/slurm/collection_py.sh
        :language: slurm
    ```

   ````

   ````{group-tab} R
    ```{literalinclude} /code/slurm/collection_r.sh
        :language: slurm
    ```

   ````

`````

While the above example might be a bit artificial, we once had a user, who had a more complex
workflow, which needed to call scripts from several languages, and used files to communicate
between the different runs. However, these temporary files were the same for all runs, which
lead to results that were completely unreliable. The user was lucky that some of the runs
actually failed with a very strange error and they had to re-run all of their runs as
none were reliable. And these things can even be hidden within some libraries, which expect to
only be used in one process at a time and e.g. write some temporary files to home folders.

## Concurrent database access

Often using a database handled by a server protects against the problems described above, since the database
server is developed to processes multiple different requests simultaneously and avoid concurrent modifications
of entries in the database. However, this only applies to databases which are handled by an explicit server running
in its own process.
However, using such a server can also lead to a bottleneck, where jobs block execution because they are waiting for
the server to handle their request. While commonly less problematic, this can potentially lead to an unexpected  
decrease in performance.
