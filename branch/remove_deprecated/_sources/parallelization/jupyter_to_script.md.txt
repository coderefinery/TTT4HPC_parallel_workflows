# Convert a Jupyter Notebook to a Python script

For this walk-through we will be starting with
a jupyter notebook that is based on the
[Nearest Neighbor Classification example of the scikit-learn toolkit](https://scikit-learn.org/stable/auto_examples/neighbors/plot_classification.html). The notebook can be found [here](/code/jupyter/knn_iris.ipynb). This example tries to cluster points in the [Iris dataset](https://en.wikipedia.org/wiki/Iris_flower_data_set).


The first step is to convert the notebook into a python script. This is rather simple and can be done in jupyter by going to:

```
"File" -> "Save and Export Notebook as..." -> "Executable Script"
```

The result of this conversion can be found [here](/code/python/scikit_example/knn_iris.py).

### Split into a pre-processing and a execution script

Our code has two distinct parts, a pre-processing part and a model generation and plotting part.
The former part needs to be run exactly once and actually shouldn't be run separately each time if we
want to compare the results, as the training/test split should be the same for all methods.
Thus, we split our code into two files, `preprocess.py` and `train_and_plot.py`.

````{toggle} train_and_plot.py
   ```{literalinclude} /code/snakemake/scikit_example/preprocess.py
      :language: python
      :linenos:
      :emphasize-lines: 1-7, 53
   ```
````

We only include those imports necessary and make sure, that the data/preprocessed folder exists when we run the code.
This allows us to run the pre-processing once and in further steps always use the already pre-processed
data avoiding unnecessary compute time if we e.g. want to change the metrics.

````{toggle} train_and_plot.py
   ```{literalinclude} /code/python/scikit_example/train_and_plot.py
      :language: python
      :linenos:
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