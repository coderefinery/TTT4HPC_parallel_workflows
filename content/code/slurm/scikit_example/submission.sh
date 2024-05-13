#!/bin/bash
#SBATCH --job-name=long_job

# We assume, that singularity runs out of the box on your cluster, if not, you will have to
# add a command here that makes the singularity command available on your cluster

singularity exec python_container python train_and_plot.py --n_neighbors $1