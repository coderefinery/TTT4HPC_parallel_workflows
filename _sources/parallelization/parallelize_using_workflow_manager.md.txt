# Parallelize using Workflow Manager

In this section, we discuss running the Iris data set example using Snakemake, a workflow manager tool.

## Motivation

In the previous section {ref}`parallelize_using_script`, we examined a workflow consisting of two
scripts, `preprocess.py` and `train_and_plot.py`. 

- The `preprocess.py` script created a preprocessed Iris data set and saved it to the disk. 
- The `train_and_plot.py` script read (number of neighbors, distance metric) parameter values as command
line arguments, loaded the preprocessed data, trained an Iris subspecies classifier, and 
plotted the classifier's boundary decisions.

The workflow was then submitted to Slurm queue using two separate submission scripts with the following schedule

- `preprocess.py` was run first.
- Multiple jobs of `train_and_plot.py` using different (number of neighbors, distance metric) values were submitted in parallel. 

The submission scripts (and array jobs) work well for these kind of small workflows and 
are usually the go-to solution. However, if the workflow is larger and consists of 
several steps, such as multiple preprocessing and postprocessing scripts, we may instead
want to use a dedicated _workflow manager_ tool.

The general idea of a workflow manager is that each computational step in a workflow is 
presented as a _rule_ which takes its input as a file and writes its output to a file. 
The workflow manager then 

- Detects in which order the steps need to be run and which steps of the workflow can be run in parallel. 
- Checks if some of the expected result files already exist on the disk and only runs 
jobs needed to produce the missing results.
- Submits the jobs to the Slurm queue accordingly.

While there are multiple workflow managers out there (see an 
[example list](https://github.com/meirwah/awesome-workflow-engines)), here we will
use a particular tool named [Snakemake](https://snakemake.readthedocs.io/en/stable/).
In Snakemake, the workflow rules are written in a _Snakefile_ using a Python-like 
scripting language. Snakemake itself is also written in Python. However, the computational steps
in the workflow can use any language.


## Accessing Snakemake on an HPC cluster

Snakemake can be installed using [pip](https://pypi.org/project/snakemake/) 
along with its [Slurm plugin](https://snakemake.github.io/snakemake-plugin-catalog/plugins/executor/slurm.html).
However, since not all clusters allow users to install their own software, it is up to the cluster admins to
provide users with a recommended way to access to Snakemake. For example:

- CSC Puhti users can follow their [official Snakemake documentation](https://docs.csc.fi/support/tutorials/snakemake-puhti/).  
- Aalto Triton users can load the generic [scientific computing python environment module](https://scicomp.aalto.fi/triton/apps/python/#python-distributions): `module load scicomp-python-env` 

**Consult your cluster's documentation and/or contact your cluster's administration to find the recommended way of using Snakemake.**


## Create and Run Snakemake Workflow

In order to run the `preprocess.py` and `train_and_plot.py` as a Snakemake workflow, we do the following: 

1. We write a _Snakefile_ which defines the preprocessing and training/plotting steps as rules.
2. We write a _profile file_ which defines the same requested computational resources as the Slurm batch script in section {ref}`create_a_submission_script`.

The Snakefile:

```{literalinclude} /code/snakemake/scikit_example/Snakefile
    :language: python
```

A Snakemake profile file:

```{literalinclude} /code/snakemake/scikit_example/profiles/slurm/config.yaml
```

We run Snakemake with

```
snakemake --snakefile Snakefile --profile profiles/slurm/ --software-deployment-method apptainer
```

What the command does:

1. Snakemake infers from `workflow/Snakefile` that the required input files specified in rule "All" can be created using the rule "train_and_plot" in an embarrassingly parallel manner. (Note that input files of the rule "All" are our target image files.)

2. Snakemake looks for a profile configuration file `config.yml` in the given path `profiles/slurm/`. The profile tells Snakemake to submit the jobs to Slurm and to request specific resources (cpus, memory, runtime, etc.). The resources are specified for each rule individually.

3. The option `--software-deployment-method` tells Snakemake to create the environments in which the rules are run using apptainer and conda.


## Advantages and Disadvantages

Advantages of using a workflow manager to parallelize jobs:

- Defining complete workflow using a workflow manager makes sure that scripts are submitted in correct order and in parallel if possible.
- The workflow manager checks if some or all of the expected result files already exist and only runs jobs needed to produce the missing results.
- Workflow managers promote reproduciblity of experiments by fixing the computational pipeline and by encouraging the use of containers and environments.

Distadvantages:

- Not all clusters support using the workflow manager(s) of your choice out of the box. In this case, contact the cluster admin and ask what is the recommended way to use them.  
- Workflow managers are (relatively) complex tools with their own scripting syntaxes, practices, and ecosystems. Learning to use one will take time.
