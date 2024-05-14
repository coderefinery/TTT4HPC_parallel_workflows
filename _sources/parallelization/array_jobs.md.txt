# Parallelize using Slurm Array jobs

Slurm array jobs are jobs, that are run multiple times, with the same settings.
a slurm batch script with an array job looks something like:

```slurm
#!/bin/bash
#SBATCH --job-name=my_array_job
#SBATCH --array=2-100:2
#SBATCH --output=output_%A_%a.txt
#SBATCH --error=error_%A_%a.txt

# Your job commands go here
# You can use the environment variable SLURM_ARRAY_TASK_ID to get the current task ID
# load whatever modules or environments you need before running your actual command

# Example command: replace with your actual command
your_command --parameter $SLURM_ARRAY_TASK_ID
```

where `--array=2-100:2` creates 50 jobs numbered from 2 to 100 with a step size of 2
(the step size defaults to 1 if omitted). `%A` and `%a` in output and error indicate
the jobID and arrayID of the job respectively. The only difference in these jobs is the
environment variable `SLURM_ARRAY_TASK_ID` which is set to the array id of the job
and can be used to select what to calculate in this job.

We can use this variable to tell our program which element to use in this job, done in the above example
by passing the `$SLURM_ARRAY_TASK_ID` as the parameter argument for the program we run.

Compared to submitting data via a custom submission script, this approach is more convenient, if your
input parameters are positive integer numbers, as it combines all jobs into a single submission.

## Exercise 1

```{exercise} Parallel-2: Create a slurm script and run it.
Let's assume, that we want to build the same job, that we had with the script submission but we want to use an
array job instead of a submission script.

To do this, we need to update the slurm script to use an array instead of an input argument.

Create this submission script and run it on your cluster
```

````{solution} Solution: Parallel-2
Here is a script that should be able to run on your cluster:

   ```{literalinclude} /code/slurm/exercises/exercise_parallel_2_solution.sh
      :language: slurm
      :linenos:
      :emphasize-lines: 3-5,7
   ```

````

## More complex submission scripts

In many instances it is necessary to use parameters that are not simple integers, as
provided by `$SLURM_ARRAY_TASK_ID` or use multiple input parameters. To do this, you can
either adapt your code or generate more complex logic within the batch submission script
using bash commands. We will not go into the details of bash programming here, but if you
are familiar this can be a convenient way to achieve more complex input parameters.
