#!/bin/bash
#SBATCH --job-name=collection_job
#SBATCH --dependency=afterok:your_array_job_id

RESULTDIR="results_your_array_job_id"
# run your collection script
Rscript collection.r $RESULTDIR