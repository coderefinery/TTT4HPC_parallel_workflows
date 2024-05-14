#!/bin/bash
#SBATCH --job-name=long_job
#SBATCH --array=[1,2,4,8,16,32,64]
#SBATCH --output=output_%A_%a.txt
#SBATCH --error=error_%A_%a.txt

singularity exec python_container python train_and_plot.py --n_neighbors $SLURM_ARRAY_TASK_ID