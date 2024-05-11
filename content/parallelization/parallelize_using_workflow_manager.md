# Parallelize using Workflow Manager

In a previous [section](parallelize_using_script), we parallelized code using a Python/R script which loops over a parameter
(or multiple parameters) and submits a job for each value (or combination) correspondingly. This approach 
allows reusable code and generalizes well to different types and numbers of parameters (integers, floats, text, etc.)
and their combinations.

However, if the parallelized jobs are a part of a bigger workflow 
with several steps, such as preprocessing and postprocessing scripts, one needs to make sure 
that all the steps are run in the correct order and are correctly scheduled. For example,
training data needs to be preprocessed before starting the training script and only 
those jobs that can be run in parallel should be submitted at the same time

As an alternative to the submission script, we next look at running the preprocessing and the 
training/plotting scripts using a _workflow manager_ tool. The general idea of a workflow manager
is that each computational step in a workflow is presented as a _rule_ which takes its input 
as a file and writes its output to a file. The workflow manager then detects in which order 
the steps need to be run and which steps of the workflow can be run in parallel. The manager
also checks if some of the expected result files already exist on the disk and only runs jobs 
needed to produce the missing results.

While there are multiple workflow managers out there
(see an [example list](https://github.com/meirwah/awesome-workflow-engines)), here we will
use a particular tool named [Snakemake](https://snakemake.readthedocs.io/en/stable/).
In Snakemake, the workflow rules are written in a _Snakefile_ using a Python-like scripting language.
Snakemake itself is written in Python and can be installed using [pip](https://pypi.org/project/snakemake/) 
along with its [Slurm plugin](https://snakemake.github.io/snakemake-plugin-catalog/plugins/executor/slurm.html).

In order to convert [the Python/R script approach](parallelize_using_script) to a Snakemake workflow, we do the following.

1. We write a _Snakefile_ which defines the computational steps (compare to the Python/R script with the loop)
2. We write a _profile file_ which defines the computational resources to request from cluster (compare to the Slurm batch script)

A Snakefile which produces the same target output files (the images) as the Python/R submission scripts:

```{literalinclude} /code/snakemake/scikit_example/Snakefile
    :language: python
```

A Snakemake profile file which defines the same computational resources as the sbatch script:

```{literalinclude} /code/snakemake/scikit_example/profiles/slurm/config.yaml
```

>*_NOTE:_* There may be cluster-specific restrictions on how to access Snakemake. If your
> cluster does not support Snakemake e.g. via the module system or user-specific
> environments (conda, venv, etc.), contact your cluster admin and ask what is
> their recommended way of using Snakemake.

We can run Snakemake with

```
snakemake --snakefile Snakefile --profile profiles/slurm/ --software-deployment-method apptainer

```

Breakdown of the command:

1. Snakemake infers from `workflow/Snakefile` that the required input files specified in rule "All" can be created using the rule "plot_decision_boundaries" in an embarassingly parallel manner. (Note that input files of the rule "All" are our target output files.)

2. Snakemake looks for profile configuration file `config.yml` in the given path `profiles/slurm/`. The profile tells Snakemake to submit the jobs to Slurm and to request specific resources (cpus, memory, runtime, etc.). The resources can be specified for each rule individually.

3. The option `--software-deployment-method` tells Snakemake to create the environments in which the rules are run using apptainer and conda.




## Summary

In summary, advantages and disadvantages of using a workflow manager to parallelize jobs:

+ Defining complete workflow using a workflow manager makes sure that scripts are submitted in correct order and in parallel if possible.
+ A workflow manager checks if some or all of the expected result files already exist and only runs jobs needed to produce the missing results.
  
- A workflow manager is yet another, relatively complex, tool to learn and will take time.
- Not all clusters support using the workflow manager(s) of your choice out of the box. In this case, contact the cluster admin and ask what is the recommended way to use them.

