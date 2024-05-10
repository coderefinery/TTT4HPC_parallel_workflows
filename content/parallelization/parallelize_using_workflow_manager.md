# Parallelize using Workflow Manager

We have now seen how to parallelize code using a script which loops over parameters and 
submits a job for each one correspondingly. This approach allows reusable code and generalizes 
well to different types and numbers of parameters (integers, floats, text, etc.)
and their combinations. However, if the parallelized jobs are a part of a bigger workflow 
with several steps, such as preprocessing and postprocessing scripts, one needs to make sure 
that all the steps are run in the correct order and are correctly scheduled. For example, 
training data needs to be preprocessed before starting the training script and only 
those jobs that can be run in parallel should be submitted at the same time. 

As an alternative to the submission script, we next look at running the preprocessing and the 
training/plotting scripts using Snakemake, a workflow manager tool. The main idea of Snakemake 
is that each computational step in a workflow is presented as a _rule_ which takes its input 
as a file and writes its output to a file. These rules are written in a _Snakefile_ using a Python-like scripting language.
Given a Snakefile, Snakemake then detects in which order the steps need to be run and which 
steps of the workflow can be run in parallel. Snakemake also checks if some of the expected 
result files already exist on the disk and only runs jobs needed to produce the missing results.

In practice, what we need to run convert [the script approach](parallelize_using_script) to a Snakemake workflow is

1. A snakefile which defines the computational steps (comparable to the Python/R script with loop)
2. A profile file which defines the computational resources to request from cluster (comparable to the slurm batch script)

A Snakefile producing the same output files as the Python/R submission scripts:

```{literalinclude} /code/snakemake/scikit_example/Snakefile
    :language: python
```

A profile file defining the same computational resources as the

```{literalinclude} /code/snakemake/scikit_example/profiles/slurm/config.yml
```

Run Snakemake with

```
snakemake --snakefile Snakefile --profile profiles/slurm/ --software-deployment-method apptainer conda

```

What happens:

1. Snakemake infers from `workflow/Snakefile` that the required input files specified in rule "All" can be created using the rule "plot_decision_boundaries" in an embarassingly parallel manner. (Note that input files of the rule "All" are our target output files.)

2. Snakemake looks for profile configuration file `config.yml` in the given path `profiles/slurm/`. The profile tells Snakemake to submit the jobs to Slurm and to request specific resources (cpus, memory, runtime, etc.). The resources can be specified for each rule individually.

3. The option `--software-deployment-method` tells Snakemake to create the environments in which the rules are run using apptainer and conda.

(4. The option `--use-conda` tells Snakemake to look for Conda/Mamba environments in `.snakemake/conda/` for the rule "plot_decision_boundaries". These environments will be created if they do not exist yet.)


## Summary

In summary, advantages and disadvantages of using a workflow manager to parallelize jobs:

+ Defining complete workflow using a workflow manager makes sure that scripts are submitted in correct order and in parallel if possible.
+ A workflow manager checks if some or all of the expected result files already exist and only runs jobs needed to produce the missing results.
  
- A workflow manager is yet another, relatively complex, tool to learn and will take time.
- Not all clusters support using the workflow manager(s) of your choice out of the box. In this case, contact the cluster admin and ask what is the recommended way to use them.

