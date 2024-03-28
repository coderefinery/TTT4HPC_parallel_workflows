#!/bin/bash
#SBATCH --job-name=long_job
#SBATCH --array=1-10

# We assume, that python3 runs out of the box on your cluster, if not, you will have to
# add a command here that makes the python3 command available on your cluster

# Define a Result directory, since this should not ollide with others we use the slurm job ID
# To distinguish between different runs
RESULTDIR="results_$SLURM_JOB_ID"

# create the result dir if it does not exist
mkdir -p $RESULTDIR

# Example command: replace with your actual command
python3 your_example.py $SLURM_ARRAY_TASK_ID $RESULTDIR