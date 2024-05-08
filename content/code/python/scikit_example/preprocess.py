from pathlib import Path
import pickle


from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris


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


# Load data from sklearn datasets
iris = load_iris(as_frame=True)

# Extract two features
features = ["sepal length (cm)", "sepal width (cm)"]
X = iris.data[features]

# Class labels
classes = iris.target_names
y = iris.target

# Divide randomly to train and test set
X_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y, random_state=0)

# Save to disk
Path("data/preprocessed").mkdir(exist_ok=True)
pickle.dump(
    [X, X_train, X_test, y, y_train, y_test, features, classes],
    open("data/preprocessed/Iris.pkl", "wb"),
)
