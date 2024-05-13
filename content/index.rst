Tuesdays tools and techniques for HPC - Parallelization
=======================================================

In this lesson we will introduce the concept of embarassingly parallel
code, and how we can use this property to easily distribute heavy
computation to multiple processes without the necessity of falling back
on mechanisms within the language.


.. prereq::

   * Basic HPC usage course (if you don't have, many of the things we
     talk about won't make sense, but you might pick up something
     anyway).
   * A bit of experience using a HPC cluster (technically optional,
     but will allow you to engage with the material at a deeper
     level).
   * Access to some HPC computer cluster to do most exercises.
     (Slurm-based, but most are these days).  (If you don't have, you
     can't do all exercises - but still might learn something!)

Parallelization
---------------
This part of the lesson will introduce the concept of embarassingly parallel
code, and how we can use this property to easily distribute heavy
computation to multiple processes without the necessity of falling back
on mechanisms within the language.

.. csv-table::
   :widths: auto
   :delim: ;

   5 min ; :doc:`motivation`
   10 min ; :doc:`parallelization/concepts`
   5 min ; :doc:`parallelization/jupyter_to_script`
   30 min ; :doc:`parallelization/parallelize_using_script`
   10 min ; :doc:`parallelization/array_jobs`
   20 min ; :doc:`parallelization/parallelize_using_workflow_manager`

Pitfalls
--------
By running several computations in parallel we place a few more constraints on what we can
or cannot do, resulting in concurrency issues. In a non parallel situation we commonly
do not need to pay attention to what the resources are accessed by the code. This is different
when the code runs in parallel. There are also additional considerations as to overheads
which need to be taken into consideration.

.. csv-table::
   :widths: auto
   :delim: ;

   5 min ; :doc:`pitfalls/concurrency_issues`
   5 min ; :doc:`pitfalls/os_side`
   5 min ; :doc:`conclusions`

.. toctree::
   :maxdepth: 1
   :caption: Introduction
   :hidden:

   motivation

.. toctree::
   :maxdepth: 1
   :caption: Parallelization
   :hidden:

   parallelization/concepts
   parallelization/jupyter_to_script
   parallelization/parallelize_using_script
   parallelization/array_jobs
   parallelization/parallelize_using_workflow_manager

.. toctree::
   :maxdepth: 1
   :caption: Pitfalls
   :hidden:

   pitfalls/concurrency_issues
   pitfalls/os_side

.. toctree::
   :maxdepth: 1
   :caption: Conclusions
   :hidden:

   conclusions


.. toctree::
   :maxdepth: 1
   :caption: Reference
   :hidden:

   quick-reference
   instructor-guide
   exercises


.. _learner-personas:

Who is the course for?
----------------------

This course is for people using clusters or other larger computing
resources.  It's not a basic course, but also not extremely advanced.
It lets you see some examples and know what people actually do, and
then you can follow up with more reading, courses, or direct help
later on.

Some learner personas:

- You've just taken a basic HPC course, and while you mostly
  understand how the basic pices work, you are left wondering *"How
  does this all fit together?  How do people combine all of these
  tools into an actual whole workflow?"*.

  You care about some real examples and things you can use right now,
  but wouldn't mind seeing some advanced or out-of-scope stuff as long
  as you don't have to spend too much mental effort on it.

  You'll probably do the more basic exercises and watch the rest as a
  demo until you come back to it later (if needed).

- You've been using the cluster for a while and doing your work just
  fine - or so you think.  It works well, but you know there must be
  some other tricks out there that can make your life (if not work)
  even better.

  You'll probably attend and do the more advanced exercises, while
  passively watching some of the more basic demos.


About the course
----------------







See also
--------





Credits
-------

This course is a collaboration between ~10 different instructors.
