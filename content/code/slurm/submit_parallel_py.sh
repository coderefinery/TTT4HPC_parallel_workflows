#!/bin/bash
#SBATCH --job-name=long_job
#SBATCH --array=1-10
#SBATCH --time=01:00:00
#SBATCH --mem=1G
#SBATCH --cpus-per-task=1

# We assume, that singularity runs out of the box on your cluster, if not, you will have to
# add a command here that makes the singularity command available on your cluster

# Define a Result directory, since this should not ollide with others we use the slurm job ID
# To distinguish between different runs
RESULTDIR="results_$SLURM_JOB_ID"

# create the result dir if it does not exist
mkdir -p $RESULTDIR

# Example command: replace with your actual command
singularity exec python_container python train_and_plot.py $SLURM_ARRAY_TASK_ID $RESULTDIR