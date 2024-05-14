# Concepts

## Embarrassingly parallel code

Embarrassingly parallel code is code that essentially runs the same functionality
for a large variety of input parameters, where each step does not depend on anything
other than the input data.
Here are two types of situations in pseudo-code that show embarrassinlgy parallel execution:

```python
data = load_and_preprocess_data

for i in range(len(data)) do:
   res[i] = calculate(data[i])

```

or

```python
parameters1 = [ 1, 2, 3, 4, 5, 6 ]
parameters2 = [ "a", "b", "c", "d" ]
res = []

for p1 in parameters1:
   for p2 in parameters2:
     res.append(calculate(p1, p2))
```

The first being a pipeline applied to every datapoint in some input data, the second a classical
(hyper-)parameter sweep for a model. Essentially you are running the same type of computation
for each entry of a set of data. This is the type of code that can easily be parallelized on a
scheduler level.

## Size of jobs

In general, jobs should not be too short on a cluster. There is always an overhead in scheduling
tasks, and if jobs of an array job are too short, this overhead can result in a waste of resources.
If you have code that runs in a second but needs to be run millions of times, try to batch executions
into batches, such that each individual job takes 10-60 minutes. This way, the overhead of starting
and scheduling the jobs is reduced significantly.
