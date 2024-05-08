import pickle
import os

import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn import datasets


# ## Preprocess data
#
# Load Iris flower data set from file.
#
# Extract two features
#
# - `SepalLengthCm`
# - `SepalWidthCm`
#
# out of the available four
#
# - `SepalLengthCm`
# - `SepalWidthCm`
# - `PetalLengthCm`
# - `PetalWidthCm`
#
# and map the class labels
#
# - `Iris-setosa`
# - `Iris-versicolor`
# - `Iris-virginica`)
#
# to integers 0, 1, and 2.
#
# Divide the data randomly to train and test sets.
#
# Save the preprocessed data to disk.

# Load preprocessed data from disk

iris = datasets.load_iris()

# Extract two features
features = ["SepalLengthCm", "SepalWidthCm"]
X = iris[features]

# Map the class labels
label_encoder = LabelEncoder()
label_encoder.fit(iris["Species"])
y = label_encoder.transform(iris["Species"])
classes = label_encoder.classes_
# Divide randomly to train and test set
X_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y)
# create the data/preprocessed folder, if it does not exist yet
os.makedirs("data/preprocessed", exist_ok=True)
# Save to disk
pickle.dump(
    [X, X_train, X_test, y, y_train, y_test, classes, features],
    open("data/preprocessed/Iris.pkl", "wb"),
)
