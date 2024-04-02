# Code Adaptions

Even in an embarassingly parallel situation we will have to make a couple of adaptions to the code
in order to be able to run parallel executions of our code. For this lecture we will be starting with
a jupyter notebook that is based on the
[Nearest Neighbor Classification example of the scikit-learn toolkit](https://scikit-learn.org/stable/auto_examples/neighbors/plot_classification.html).

## Convert the notebook to a python script

The first step is to convert the notebook into a python script. This is rther simple and can be done in jupyter by going to:

```
"File" -> "Save and Export Notebook as..." -> "Executable Script"
```

The result of this conversion can be found [here](/code/python/scikit_example/knn_iris.py).

### Split into a pre-processing and a execution script

Our code has two distinct parts, a pre-processing part and a model generation and plotting part.
The former part needs to be run exactly once (and actually shouldn't be run separately each time if we
want) to compare the results, as the training/test split should be the same for all methods.
Thus, we split our code into two files, `preprocess.py` and `train_and_plot.py`.
This allows us to run the pre-processing once and in further steps always use the already pre-processed
data avoiding unnecessary time.

## Update code to run on a cluster

To run the code on a cluster we will need two steps, first, we will need to create an environment in
which the code can run. How you go about this depends on the cluster, but most clusters allow
the use of containers, which is why we will be using a container for this example.

### Build a container for dependencies

We assume, that your cluster does have support for singularity. We provide both a singularity and
docker definition file. The finished container can be found [here](TODO). Download the container on
your cluser using:

```bash
# You might need to activate singularity depending on your cluster
singularity build python3_10 docker://harbor.cs.aalto.fi/aaltorse-public/parallel-workflow:latest
```

This build the singularity container based on the docker image we provide.

### Create a slurm script to run the code

We will need a slurm script to submit our job to the cluster queue. The script we will be using is the
following:

````
```{literalinclude} /code/slurm/submit_job.sh
    :language: slurm
```
````

When this is done, we now have some code that runs on the cluster. This code will run all the different
metrics neighbourhood sizes one after another.

## Updating the code to obtain input parameters

Now, we need to update our code such, that it can run
First off, we will need to allow the programm to receive input parameters that define which element(s)
of the data have to be computed by this instance.

So from this:

```
data = load_and_preprocess_data

for i in 1,2,3,...,n do:
   res[i] = calculate(data[i])

save(res)

```

We need to create something like:

```
i = input_arg

data = load_and_preprocess_data(i)
res = calculate(data)

save res as res_i
```

## Collection script

Since we are now producing multiple individual results, we will have to collect them and put them together
into our actual result. This highly depends on your result data, but in general it will take the form of

```
res = [] of length n
for i in 1,2,3...n do:
   res[i] = load(res_i)

save(res)
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
