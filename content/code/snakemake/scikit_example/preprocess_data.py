"""
Load Iris flower data set from file.

Extract two features ("SepalLengthCm", "SepalWidthCm") out of the available four 
("SepalLengthCm", "SepalWidthCm", "PetalLengthCm", "PetalWidthCm").

Map the class labels ("Iris-setosa", "Iris-versicolor", "Iris-virginica") to 
numbers (0, 1, 2).

Divide the data randomly to train and test sets.

Save to disk.
"""
from pathlib import Path
import pickle 

import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

# Load data from disk
iris = pd.read_csv("data/Iris.csv")

# Extract two features
features = ["SepalLengthCm", "SepalWidthCm"]
X = iris[features]

# Map the class labels
label_encoder = LabelEncoder()
label_encoder.fit(iris["Species"])
y = label_encoder.transform(iris["Species"])

# Divide randomly to train and test set
X_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y, random_state=0)

# Save to disk
Path("data/preprocessed").mkdir(exist_ok=True)
pickle.dump([X, X_train, X_test, y, y_train, y_test, features, label_encoder], open("data/preprocessed/Iris.pkl", "wb"))