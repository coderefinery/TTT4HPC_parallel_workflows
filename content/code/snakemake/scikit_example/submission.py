import subprocess

neighbors = [1, 2, 4, 8, 16, 32, 64]

for i in neighbors:
    result = subprocess.run(["sbatch", "submission.sh", f"{i}"])
