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

A Snakefile producing the same output files as the submission script:

```{literalinclude} /code/snakemake/scikit_example/Snakefile
    :language: python
```

The above Snakefile



