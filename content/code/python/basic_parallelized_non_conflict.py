import pickle
import sys
from processing import load_and_preprocess_data, calculate

# Assuming load_and_preprocess_data and calculate are functions from processing library

# Load and preprocess data
data = load_and_preprocess_data()

# Get index from command line argument (assuming this Python script is called with the index as an argument)
index = int(sys.argv[1])
result_folder = sys.argv[2]

# Calculate result
res = calculate(data[index])

# Write the result
with open(f"({result_folder}/result_{index})", "wb") as f:
    pickle.dump(res, f)
