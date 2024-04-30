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
singularity build python3_10 docker://harbor.cs.aalto.fi/aaltorse-public/parallel-workflow:latest
```

This commands builds the singularity container based on the docker image we provide. Containers are discussed in more details in our [Container Lecture](TODO)

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

```{literalinclude} /code/python/scikit_example/array/train_and_plot.py
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

For this walkthrough, we will use a custom submission script, but we also give an example of how to do it with a slurm array
job [here](array_jobs)

### Using Array jobs

```{literalinclude} /code/python/scikit_example/array/create_parameter_array.py
    :language: python
    :emphasize-lines: 2, 24-38, 43

```

This parameter creation script is computationally very undemanding and can likely be run on any login node, but you can also wrap it into a slurm job.

### Update the slurm script

We now have a two-step process, so we need to first do the pre-processing of our data in one job, which can be submitted using the following job:

```{literalinclude} /code/slurm/scikit_example/submit_preprocess.sh
    :language: slurm

```

and then run the array job for our actual computation

```{literalinclude} /code/slurm/scikit_example/submit_parallel.sh
    :language: slurm
    :emphasize-lines: 3, 9

```

Note, that we use a sbatch array from 0 to 6, since we have 7 values in our neighbours array and python starts indexing from 0.
There are two ways how you can submit these jobs and ensure, that they work properly:

- You can first submit the preprocess job, and wait till it finishes before submitting the computation
  jobs
- You can submit the preprocess jobs and directly submit the computing jobs giving the pre-processing job
  as a dependency: `sbatch submit_parallel.sh --dependency=afterok:<job_id_of_the_preprocessing_task>`
  Make sure, that you replace the job_id by your actual pre-processing job id, which you will be told,
  when submitting the pre-processing job

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

````{exercise} Parallel-1: Make the script accept an input index
Our example is a very simple code which extracts cities for a country from a list of
cities with their countries and writes a list of these cities.
The data for the cities for this example are provided in the {download}`cities.csv </code/cities.csv>` file.
The code itself is provided {download}`here </code/python/long_code.py>`:
```{literalinclude} /code/python/long_code.py
    :language: python
```

Adapt the code, such that it takes an integer input and generates one country list
for each integer input. In this instance, the order of execution is not important
as one list per country will be produced.

````

````{solution} Solution: Parallel-1
The simplest solution is to use `sys.argv` taking in the first argument and converting
it to an integer. You can also use more elaborate input parsers (see for example
[this lecture about argument parsing](https://aaltoscicomp.github.io/python-for-scicomp/scripts/#parsing-command-line-arguments-with-argparse))

```{literalinclude} /code/python/long_code_for_index.py
    :language: python
    :emphasize-lines: 1, 30-37
```

````
