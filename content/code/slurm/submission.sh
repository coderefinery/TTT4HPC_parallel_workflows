#!/bin/bash
#SBATCH --job-name=long_job

# We assume, that python3 runs out of the box on your cluster, if not, you will have to
# add a command here that makes the python3 command available on your cluster

# Example command: replace with your actual command
python3 scan_code.py $1 $2 $3