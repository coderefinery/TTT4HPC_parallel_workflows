# Parallelize using Workflow Manager

In a previous [section](parallelize_using_script), we parallelized code using a Python/R script which loops over a parameter
(or multiple parameters) and submits a job for each value (or combination) correspondingly. This approach 
allows reusable code and generalizes well to different types and numbers of parameters (integers, floats, text, etc.)
and their combinations. However, if the parallelized jobs are a part of a bigger workflow 
with several steps, such as preprocessing and postprocessing scripts, we need to make sure 
that all the steps are run in the correct order and are correctly scheduled. 

In the previous section example, the scheduling consisted of the following

- training data had to be preprocessed before starting the training/plotting
- the training/plotting jobs were run in parallel and thus submitted at the same time  

and was implemented by submitting preprocessing and training/plotting using two separate submission scripts.
However, as an alternative to writing two submissions script, we next look at running the preprocessing and the 
training/plotting scripts using a _workflow manager_ tool. 

The general idea of a workflow manager 
is that each computational step in a workflow is presented as a _rule_ which takes its input 
as a file and writes its output to a file. The workflow manager then detects in which order 
the steps need to be run and which steps of the workflow can be run in parallel. The manager
also checks if some of the expected result files already exist on the disk and only runs jobs 
needed to produce the missing results.

While there are multiple workflow managers out there (see an 
[example list](https://github.com/meirwah/awesome-workflow-engines)), here we will
use a particular tool named [Snakemake](https://snakemake.readthedocs.io/en/stable/).
In Snakemake, the workflow rules are written in a _Snakefile_ using a Python-like 
scripting language. Snakemake itself is also written in Python.

## Accessing Snakemake on HPC

Snakemake can be installed using [pip](https://pypi.org/project/snakemake/) 
along with its [Slurm plugin](https://snakemake.github.io/snakemake-plugin-catalog/plugins/executor/slurm.html).
However, since not all clusters allow users to install their own software, it is up to the cluster admins to
provide users with a recommended way to access to Snakemake. As an example:

- CSC Puhti users can follow their official Snakemake documentation [here](https://docs.csc.fi/support/tutorials/snakemake-puhti/).  

- Aalto Triton users can load the generic [scientific computing python environment module](https://scicomp.aalto.fi/triton/apps/python/#python-distributions): `module load scicomp-python-env` 

**Consult your cluster's documentation and/or contact your cluster's administration to find the recommended way of using Snakemake.**


## Create and Run Snakemake Workflow

In order to convert [two submission script approach](parallelize_using_script) to a Snakemake workflow, we do the following.

1. We write a _Snakefile_ which defines the preprocessing and training/plotting steps as rules.
2. We write a _profile file_ which defines the same requested computational resources as the Slurm batch script.

A Snakefile which defines the preprocessing and training/plotting steps and produces the same target images:

```{literalinclude} /code/snakemake/scikit_example/Snakefile
    :language: python
```

A Snakemake profile file which defines the same computational resources as the Slurm batch script:

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

A summary of the advantages and disadvantages of using a workflow manager to parallelize jobs:

+ Defining complete workflow using a workflow manager makes sure that scripts are submitted in correct order and in parallel if possible.
+ The workflow manager checks if some or all of the expected result files already exist and only runs jobs needed to produce the missing results.
+ Workflow managers promote reproduciblity of experiments by fixing the computational pipeline and by encouraging the use of containers and environments.

- Not all clusters support using the workflow manager(s) of your choice out of the box. In this case, contact the cluster admin and ask what is the recommended way to use them.  
- Workflow managers are (relatively) complex tools with their own scripting syntaxes, practices, and ecosystems. Learning to use one will take time.
