import pickle
from processing import load_and_preprocess_data, calculate

data = load_and_preprocess_data()
res = []
for i in range(len(data)):
    res.append(calculate(data[i]))

with open("results", "wb") as f:
    pickle.dumps(res, "results")
