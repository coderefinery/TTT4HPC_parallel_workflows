import subprocess

neighbors = [1, 2, 4, 8, 16, 32, 64]
metrics = ["euclidean", "manhattan", "l1", "haversine", "cosine"]
for i in neighbors:
    for metric in metrics:
        result = subprocess.run(["sbatch", "submission.sh", f"{i}", f"{metric}"])
