import os
import pickle
import sys

folder_path = sys.argv[1]

data_array = []
for filename in os.listdir(folder_path):
    if filename.startswith("result_"):
        index = int(filename.split("_")[1].split(".")[0])
        file_path = os.path.join(folder_path, filename)
        with open(file_path, "rb") as f:
            data_array.insert(index, pickle.load(f))

with open(file_path, "wb") as f:
    pickle.dump(data_array, f)
