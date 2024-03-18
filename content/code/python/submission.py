import subprocess

outfiles = ["File1", "File2", "File3"]
names = ["Joe", "Jane", "Doe"]
numbers = [1.23, 23.5, 11.5]

for i in range(3):
    result = subprocess.run(
        ["sbatch", "submission.sh", f"{outfiles[i]}", f"{names[i]}", f"{numbers[i]}"]
    )
