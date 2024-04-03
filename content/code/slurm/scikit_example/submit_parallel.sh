#!/bin/bash
#SBATCH --job-name=long_job
#SBATCH --array=0-6

# We assume, that singularity runs out of the box on your cluster, if not, you will have to
# add a command here that makes the singularity command available on your cluster

# Example command: replace with your actual command
singularity exec python_container python train_and_plot.py $SLURM_ARRAY_TASK_ID