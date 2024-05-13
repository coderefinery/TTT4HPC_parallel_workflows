(parallelize_using_script)=

# Parallelize using Script

Even in an embarrassingly parallel situation we will have to make a couple of adaptions to the code
in order to be able to run parallel executions of our code. In the
{doc}`previous episode <jupyter_to_script>`, we converted a Jupyter
notebook into a basic Python script that could be submitted with
Slurm. This starting script can be found [on
github](https://github.com/coderefinery/TTT4HPC_parallel_workflows/blob/main/content/code/python/scikit_example/knn_iris.py).


## Updating the code for parallel execution (and flexibility)

Working on a cluster allows us to run code simultaneously on multiple machines. However, we need to find a way to split
our work into suitable pieces, in order to make use of this. If you look at lines 30-66 of our code,
you will notice, that it essentially runs the same code for all possible metricies and neighborhood numbers.
All of these runs are completely independent of each other, and could all be run at the same time.
We will start by running all metricies for each of the neighbor counts in parallel. To do so, we need to make the neighbor
count a parameter of the function, that we can then pass in.
Currently, our code has hard coded parameters, which makes this a difficult task, so it would be good
to convert it such, that it allows us to specify the parameters that we want to use as arguments.
There are many options to do so, but we will use `argparse` in our example
(some more details can be found [here](https://aaltoscicomp.github.io/python-for-scicomp/scripts/#parsing-command-line-arguments-with-argparse)).

```{literalinclude} /code/python/scikit_example/parameters/train_and_plot.py
    :language: python
    :emphasize-lines: 3, 18-26, 37
```

This file now receives one parameter called n_neighbors and uses this to determine the number of neighbors to run the different metrics for.
This also requires us to update the submission script, in order to allow passing in the neighbor count.
There are two ways how this can be done.

- Slurm Array jobs
- Custom Submission scripts

Slurm array jobs have the advantage of being an integral part of slurm, so you can use features like mail
notification once the whole job is done. The difference between a "normal" job and an array job is that
an array-job runs the same code multiple times with the only difference between the jobs being the `$SLURM_ARRAY_JOB_ID`
variable. The values for the variable are defined in the submission script using the `--array` parameter, which can take
either ranges (`--array=[0-3]`, four jobs with array id 0,1,2 and 3) or individual numbers (`--array=1,3,6` three jobs with id 1,3 and 6). However you can only use integer values for this, so if you need any other input, you will either need to
convert the numbers in your code, or keep hard coded variable lists in your code, which makes it less flexible.

Using a custom submission script has the disadvantage, that you need to code it. In addition, since it submits individual
jobs, you also cannot make use of notifications for the whole set of jobs. However, it has the advantage that you
are more flexible in what kind of variables you want to post to your job.

For this walk-through, we will use a custom submission script, but we also give an example of how to do it with a
slurm array job [here](array_jobs)

### Update the slurm scripts

First, we need to separate the execution of the pre-processing from the actual calculations.
This is to avoid having multiple jobs writing to the preprocessed data file at once and thus corrupting that file.
The submission script for this is:

```{literalinclude} /code/slurm/scikit_example/submit_preprocess.sh
    :language: slurm
```

Which is just the first part of our previous submission script.
Once this script has completed successfully we want to run all the different neighbor options, and thus need a submission script, which allows setting those:

```{literalinclude} /code/slurm/scikit_example/submission.sh
    :language: slurm
    :emphasize-lines: 7
```

This script takes in one argument and passes it on to the `train_and_plot` script.

### Build a submission script

Finally, we need to submit our job. This can be done using whatever language you prefer. Here, we give some examples:

`````{tabs}

   ````{group-tab} Python
    ```{literalinclude} /code/python/scikit_example/submission.py
        :language: python
    ```
    You can run this code by running `python3 submission.py` and it will submit the
    submission.sh file to the slurm scheduler for each of your options.
   ````

   ````{group-tab} R
    ```{literalinclude} /code/r/scikit_example/parameters/submission.r
        :language: R
    ```
    You can run this code by running `Rscript submission.r` and it will submit the
    submission.sh file to the slurm scheduler for each of your options.
   ````
`````

## Post processing steps

While not relevant to our example, in many cases, you will generate many output files, that you need to
combine again after the computation is done (e.g. to compute some general statistics).
In this situation, you need to think about how the result data from each run can be stored.
A simple example of this could be (in pseudo-code):

```python
data = load_preprocessed_data()
for i in 1..20:
    res[i] = compute(data[i])
calc_statistics(res)
```

If you parallelize this code you will end up with something along the lines of:

```python
i = index_from_arguments()
data = load_preprocessed_data()
res = compute(data[i])
with open(f'outputs/result_{i}') as f:
    pickle.dump(f, res)
```

which saves the data to a file in the results folder
You can then use the following code to collect these results into one large file, (or directly process
it instead of saving it again)

```{literalinclude} /code/python/collection.py
    :language: python

```

## Exercise 1

```{exercise} Parallel-1: Add the metrics as a parameter to the submission
Let's assume that we noticed, that running all metrics still took too long for our purpose, and we also
want to parallelize that part.
You will need to update the `train_and_plot.py` script, the submission script and the sbatch script.

```

````{solution} Solution: Parallel-1
We will need to remove the metrics loop from the `train_and_plot.py` script as follows and add a parser for it as follows:
```{literalinclude} /code/snakemake/exercise/train_and_plot_with_metrics.py
    :language: python
    :emphasize-lines: 25-29,32,45-78
```
Then, we need to update the submission slurm script, adding a further parameter to it:
```{literalinclude} /code/snakemake/exercise/submission_with_metrics.sh
    :language: slurm
    :emphasize-lines: 7
```
And finally, we need to update the submission python script to also use the metrics values:
```{literalinclude} /code/snakemake/exercise/submission_with_metrics.py
    :language: python
    :emphasize-lines: 4,6,7
```

````
