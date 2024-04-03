#!/usr/bin/env python
# coding: utf-8

# # Apply K nearest neighbors classification to the Iris flower data set
#
# **Input**
#
# Iris flower data set.
#
# [https://www.kaggle.com/datasets/vikrishnan/iris-dataset](https://www.kaggle.com/datasets/vikrishnan/iris-dataset)
#
# LICENSE: Public domain (CC0)
#
# **Output**
#
# Decision boundary plots of a K nearest neighbor classifier on the Iris data set using different number of neighbors (`n_neighbors`) and a fixed distance metric (`metric`).
#
# The resulting file structure:
#
# ```
# results/n_neighbors=1___metric=euclidean.png
# results/n_neighbors=2___metric=euclidean.png
# results/n_neighbors=4___metric=euclidean.png
# results/n_neighbors=8___metric=euclidean.png
# results/n_neighbors=16___metric=euclidean.png
# results/n_neighbors=32___metric=euclidean.png
# results/n_neighbors=64___metric=euclidean.png
# ```
#
#

# ## Import
#
# Import dependencies

# In[ ]:


from pathlib import Path
import pickle

import matplotlib.pyplot as plt
import pandas as pd

from sklearn.inspection import DecisionBoundaryDisplay
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import StandardScaler


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

# In[ ]:


# Load preprocessed data from disk
iris = pd.read_csv("data/Iris.csv")
display(iris.head())
display(iris.tail())

# Extract two features
features = ["SepalLengthCm", "SepalWidthCm"]
X = iris[features]

# Map the class labels
label_encoder = LabelEncoder()
label_encoder.fit(iris["Species"])
y = label_encoder.transform(iris["Species"])

# Divide randomly to train and test set
X_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y)

# Save to disk
pickle.dumps(
    [X, X_train, X_test, y, y_train, y_test], open("data/preprocessed/Iris.pkl", "wb")
)


# ## Fit pipelines and plot decision boundaries
#
# Loop over the `n_neighbors` parameter
#
# - Fit a standard scaler + knn classifier pipeline
# - Plot decision boundaries and save the image to disk

# In[ ]:


# Load preprocessed data from disk FIXME
iris = pd.read_csv("data/Iris.csv")
display(iris.head())
display(iris.tail())


# Parameters
# Metrics: https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics
n_neighbors_list = [1, 2, 4, 8, 16, 32, 64]
metrics = ["euclidean"]

# Loop over n_neighbors
for n_neighbors in n_neighbors_list:

    # Fit
    clf = Pipeline(
        steps=[
            ("scaler", StandardScaler()),
            ("knn", KNeighborsClassifier(n_neighbors=n_neighbors, metric=metric)),
        ]
    )
    clf.fit(X_train, y_train)

    # Plot
    disp = DecisionBoundaryDisplay.from_estimator(
        clf,
        X_test,
        response_method="predict",
        plot_method="pcolormesh",
        xlabel=features[0],
        ylabel=features[1],
        shading="auto",
        alpha=0.5,
    )
    scatter = disp.ax_.scatter(X.iloc[:, 0], X.iloc[:, 1], c=y, edgecolors="k")
    disp.ax_.legend(
        scatter.legend_elements()[0],
        label_encoder.classes_,
        loc="lower left",
        title="Classes",
    )
    _ = disp.ax_.set_title(
        f"3-Class classification\n(k={n_neighbors!r}, metric={metric!r})"
    )
    plt.show()

    # Save image to disk
    Path("results/").mkdir(parents=True, exist_ok=True)
    plt.savefig(f"results/n_neighbors={n_neighbors}___metric={metric}.png")
