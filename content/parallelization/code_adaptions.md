# Example Walkthrough

Even in an embarassingly parallel situation we will have to make a couple of adaptions to the code
in order to be able to run parallel executions of our code. For this walkthrough we will be starting with
a jupyter notebook that is based on the
[Nearest Neighbor Classification example of the scikit-learn toolkit](https://scikit-learn.org/stable/auto_examples/neighbors/plot_classification.html). The notbook can be found [here](/code/jupyter/knn_iris.ipynb)

## Convert the notebook to a python script

The first step is to convert the notebook into a python script. This is rther simple and can be done in jupyter by going to:

```
"File" -> "Save and Export Notebook as..." -> "Executable Script"
```

The result of this conversion can be found [here](/code/python/scikit_example/knn_iris.py).

### Split into a pre-processing and a execution script

Our code has two distinct parts, a pre-processing part and a model generation and plotting part.
The former part needs to be run exactly once and actually shouldn't be run separately each time if we
want to compare the results, as the training/test split should be the same for all methods.
Thus, we split our code into two files, `preprocess.py` and `train_and_plot.py`.

````{toggle} preprocess.py
   :class: dropdown
   ```{literalinclude} /code/python/scikit_example/preprocess.py
      :language: python
      :linenos:
      :emphasize-lines: 1-7, 53
    ```
````

We only include those imports necessary and make sure, that the data/preprocessed folder exists when we run the code.
This allows us to run the pre-processing once and in further steps always use the already pre-processed
data avoiding unnecessary compute time if we e.g. want to change the metrics.

````{toggle} train_and_plot.py
   :class: dropdown
    ```{literalinclude} /code/python/scikit_example/train_and_plot.py
        :language: python
        :emphasize-lines: 1-9
    ```
````

For the training and plotting we again clean up the imports, and otherwise leave the code unchanged.

## Update code to run on a cluster

To run the code on a cluster we will need two steps, first, we will need to create an environment in
which the code can run. How you go about this depends on the cluster. Most clusters allow
the use of containers, which is why we will be using a container for this example.
In the second step, we need to execute our code on the cluster using the scheduler.

### Build a container for dependencies

We assume, that your cluster does have support for singularity. We provide both a [singularity](/code/container/singularity.def) and [docker definition file](/code/container/Dockerfile)

```bash
# You might need to activate singularity depending on your cluster
singularity build python3_10 docker://harbor.cs.aalto.fi/aaltorse-public/coderefinery/parallel-workflow:latest
```

This commands builds the singularity container based on the docker image we provide. Containers are discussed in more details in our [Container Lecture](https://coderefinery.github.io/ttt4hpc_containers/)

### Create a slurm script to run the code

We will need a slurm script to submit our job to the cluster queue. The script we will be using is the
following:

```{literalinclude} /code/slurm/scikit_example/submit_job.sh
    :language: slurm
```

When this is done, we now have some code that runs on the cluster. This code will run all the different
metrics and neighbourhood sizes one after another.

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
an arrayjob runs the same code multiple times with the only difference between the jobs being the `$SLURM_ARRAY_JOB_ID`
variable. The values for the variable are defined in the submission script using the `--array` parameter, which can take
either ranges (`--array=[0-3]`, four jobs with array id 0,1,2 and 3) or individual numbers (`--array=1,3,6` three jobs with id 1,3 and 6). However you can only use integer values for this, so if you need any other input, you will either need to
convert the numbers in your code, or keep hard coded variable lists in your code, which makes it less flexible.

Using a custom submission script has the disadvantage, that you need to code it. In addition, since it submits individual
jobs, you also cannot make use of notifications for the whole set of jobs. However, it has the advantage that you
are more flexible in what kind of variables you want to post to your job.

For this walkthrough, we will use a custom submission script, but we also give an example of how to do it with a
slurm array job [here](array_jobs)

### Update the slurm scripts

First, we need to separate the execution of the pre-processing from the actual calculations.
This is to avoid having multiple jobs writing to the preprocessed data file at once and thus corrupting that file.
The submission script for this is:

```{literalinclude} /code/snakemake/scikit_example/submit_preprocess.sh
    :language: slurm
```

Which is just the first part of our previous submission script.
Once this script has completed successfully we want to run all the different neighbor options, and thus need a submission script, which allows setting those:

```{literalinclude} /code/snakemake/scikit_example/submission.sh
    :language: slurm
    :emphasize-lines: 7
```

This script takes in one argument and passes it on to the `train_and_plot` script.

### Build a submission script

Finally, we need to submit our job. This can be done using whatever language you prefer. Here, we give some examples:

`````{tabs}

   ````{group-tab} Python
    ```{literalinclude} /code/snakemake/scikit_example/submission.py
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
