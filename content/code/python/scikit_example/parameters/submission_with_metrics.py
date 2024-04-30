import subprocess

neighbors = [1, 2, 4, 8, 16, 32, 64]

for i in range(3):
    result = subprocess.run(
        ["sbatch", "submission.sh", "--n_neighbrs", f"{neighbors[i]}"]
    )
