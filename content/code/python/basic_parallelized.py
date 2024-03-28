import pickle
import sys
from processing import load_and_preprocess_data, calculate


def append_result(result, index):
    """
    Add a result to the result file
    """
    result_file = "results.pkl"
    try:
        with open(result_file, "rb") as f:
            allres = pickle.load(f)
    except FileNotFoundError:
        # The file does not yet exist
        allres = {}
    allres[index] = result
    with open(result_file, "wb") as f:
        pickle.dump(allres, f)


# Assuming load_and_preprocess_data and calculate are functions from processing library

# Load and preprocess data
data = load_and_preprocess_data()

# Get index from command line argument (assuming this Python script is called with the index as an argument)
index = int(sys.argv[1])

# Calculate result
res = calculate(data[index])

# Append result to the result file
append_result(res, index)
