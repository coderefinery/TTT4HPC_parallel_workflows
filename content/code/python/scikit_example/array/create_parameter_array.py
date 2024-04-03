"""
Save parameter grid to a pickle file.
"""

import pickle

parameter_list = []

# Loop over n_neighbors only
n_neighbors_list = [1, 2, 4, 8, 16]
for n_neighbors in n_neighbors_list:
    obj = {"n_neighbors": n_neighbors}
    parameter_list.append(obj)

with open("paramaters.pkl", "wb") as f:
    pickle.dump(parameter_list, f)
