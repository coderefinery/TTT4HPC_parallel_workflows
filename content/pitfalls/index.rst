Pitfalls when parallelising code
================================

.. warning::

   This is under construction.  The schedule is not final, please see
   the planning HackMD (not linked here, check on CodeRefinery chat)
   for the current planning. 

.. admonition:: Course instance in April 2024

   You can follow the dates this course is given on the `course page
   <https://scicomp.aalto.fi/training/scip/workflows-2023/>`__.
   Dates are not yet known and registration is not yet open, though.

By running several computations in parallel we place a few more constraints on what we can
or cannot do, resulting in concurrency issues. In a non parallel situation we commonly
do not need to pay attention to what the resources are accessed by the code. This is different
when the code runs in parallel. There are also additional considerations as to overheads
which need to be taken into consideration.


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


.. csv-table::
   :widths: auto
   :delim: ;

   5 min ; :doc:`concurrency_issues`
   5 min ; :doc:`os_side`
   

.. toctree::
   :maxdepth: 1
   :caption: The lesson

   common_issues

