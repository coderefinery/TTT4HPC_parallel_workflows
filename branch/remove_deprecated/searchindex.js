Search.setIndex({"alltitles": {"About the course": [[3, "about-the-course"]], "Accessing Snakemake on HPC": [[10, "accessing-snakemake-on-hpc"]], "Advantages and Disadvantages": [[10, "advantages-and-disadvantages"]], "Advantages and pitfalls of parallelization": [[5, "advantages-and-pitfalls-of-parallelization"]], "Apply K nearest neighbors classification to the Iris flower data set": [[0, "apply-k-nearest-neighbors-classification-to-the-iris-flower-data-set"]], "Build a container for dependencies": [[8, "build-a-container-for-dependencies"]], "Build a submission script": [[9, "build-a-submission-script"]], "Concepts": [[7, "concepts"]], "Conclusions": [[3, null]], "Conclusions and recommendations": [[1, "conclusions-and-recommendations"]], "Concurrency issues": [[11, "concurrency-issues"]], "Concurrent File Access": [[11, "concurrent-file-access"]], "Concurrent database access": [[11, "concurrent-database-access"]], "Convert a Jupyter Notebook to a Python script": [[8, "convert-a-jupyter-notebook-to-a-python-script"]], "Course instance in April 2024": [[3, null]], "Create a slurm script to run the code": [[8, "create-a-slurm-script-to-run-the-code"]], "Create and Run Snakemake Workflow": [[10, "create-and-run-snakemake-workflow"]], "Credits": [[3, "credits"]], "Embarrassingly parallel code": [[7, "embarrassingly-parallel-code"]], "Exercise 1": [[6, "exercise-1"], [9, "exercise-1"]], "File access limitations": [[12, "file-access-limitations"]], "Fit pipelines and plot decision boundaries": [[0, "fit-pipelines-and-plot-decision-boundaries"]], "Full list": [[2, "full-list"]], "Hardware/Server limitations": [[12, "hardware-server-limitations"]], "Import": [[0, "import"]], "Instructor\u2019s guide": [[4, "instructor-s-guide"]], "Intended learning outcomes": [[4, "intended-learning-outcomes"]], "Interesting questions you might get": [[4, "interesting-questions-you-might-get"]], "Introduction": [[3, null]], "List of exercises": [[2, "list-of-exercises"]], "More complex submission scripts": [[6, "more-complex-submission-scripts"]], "Motivation": [[5, "motivation"]], "Moving the parallelization to the scheduler level": [[5, "moving-the-parallelization-to-the-scheduler-level"]], "Objectives": [[5, "objectives-0"]], "Other practical aspects": [[4, "other-practical-aspects"]], "Parallel-1: Add the metrics as a parameter to the submission": [[2, "exercise-0"], [9, "exercise-0"]], "Parallel-2: Create a slurm script and run it.": [[2, "exercise-0"], [6, "exercise-0"]], "Parallelization": [[3, "parallelization"], [3, null]], "Parallelize using Script": [[2, "parallelize-using-script"], [9, "parallelize-using-script"]], "Parallelize using Slurm Array jobs": [[2, "parallelize-using-slurm-array-jobs"], [6, "parallelize-using-slurm-array-jobs"]], "Parallelize using Workflow Manager": [[10, "parallelize-using-workflow-manager"]], "Pitfalls": [[3, "pitfalls"], [3, null]], "Post processing steps": [[9, "post-processing-steps"]], "Preparing exercises": [[4, "preparing-exercises"]], "Preprocess data": [[0, "preprocess-data"]], "Prerequisites": [[3, "prerequisites-0"]], "Quick Reference": [[13, "quick-reference"]], "Reference": [[3, null]], "Scheduling limitations": [[12, "scheduling-limitations"]], "See also": [[3, "see-also"]], "Size of jobs": [[7, "size-of-jobs"]], "Solution: Parallel-1": [[2, "solution-0"], [9, "solution-0"]], "Solution: Parallel-2": [[2, "solution-0"], [6, "solution-0"]], "Split into a pre-processing and a execution script": [[8, "split-into-a-pre-processing-and-a-execution-script"]], "Timing": [[4, "timing"]], "Tuesdays tools and techniques for HPC - Parallelization": [[3, "tuesdays-tools-and-techniques-for-hpc-parallelization"]], "Typical pitfalls": [[4, "typical-pitfalls"]], "Update code to run on a cluster": [[8, "update-code-to-run-on-a-cluster"]], "Update the slurm scripts": [[9, "update-the-slurm-scripts"]], "Updating the code for parallel execution (and flexibility)": [[9, "updating-the-code-for-parallel-execution-and-flexibility"]], "Who is the course for?": [[3, "who-is-the-course-for"]], "Why parallelize at all": [[5, "why-parallelize-at-all"]], "Why we teach this lesson": [[4, "why-we-teach-this-lesson"]]}, "docnames": ["code/jupyter/knn_iris", "conclusions", "exercises", "index", "instructor-guide", "motivation", "parallelization/array_jobs", "parallelization/concepts", "parallelization/jupyter_to_script", "parallelization/parallelize_using_script", "parallelization/parallelize_using_workflow_manager", "pitfalls/concurrency_issues", "pitfalls/os_side", "quick-reference"], "envversion": {"sphinx": 61, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2}, "filenames": ["code/jupyter/knn_iris.ipynb", "conclusions.md", "exercises.rst", "index.rst", "instructor-guide.rst", "motivation.md", "parallelization/array_jobs.md", "parallelization/concepts.md", "parallelization/jupyter_to_script.md", "parallelization/parallelize_using_script.md", "parallelization/parallelize_using_workflow_manager.md", "pitfalls/concurrency_issues.md", "pitfalls/os_side.md", "quick-reference.rst"], "indexentries": {}, "objects": {}, "objnames": {}, "objtypes": {}, "terms": {"": [2, 3, 5, 9, 10, 11], "0": [0, 2, 6, 8, 9, 11], "1": [0, 5, 7, 8, 10, 11], "10": [3, 5, 7, 10, 11], "100": 6, "10000": 12, "15m": 10, "16": [0, 2, 8, 9, 10], "16___metric": 0, "1___metric": 0, "1gb": 10, "1h": 10, "2": [0, 5, 7, 8, 9, 10, 11, 12], "20": [3, 9], "20002": 12, "2010": 5, "2020": 5, "20500": 12, "2___metric": 0, "3": [0, 2, 5, 6, 7, 8, 9], "30": [3, 9], "32": [0, 2, 8, 9, 10], "32___metric": 0, "333": 12, "334": 12, "35000": 12, "4": [0, 2, 5, 6, 7, 8, 9, 10], "4___metric": 0, "5": [0, 2, 3, 7, 8, 9], "50": 6, "500mb": 10, "6": [5, 7, 9], "60": [7, 12], "64": [0, 2, 5, 8, 9, 10], "64___metric": 0, "66": 9, "8": [0, 2, 8, 9, 10], "8___metric": 0, "9": 11, "A": [3, 6, 9, 10], "And": [2, 5, 9, 11], "As": 10, "At": 12, "Be": 1, "By": [3, 5, 12], "For": [2, 6, 8, 9, 12], "If": [3, 5, 7, 9, 11, 12], "In": [2, 3, 5, 6, 7, 8, 9, 10, 11, 12], "It": [3, 12], "Not": 10, "Or": 11, "The": [0, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12], "Then": [2, 9], "There": [3, 5, 7, 9], "To": [6, 8, 9, 11, 12], "_": [0, 2, 8, 9, 11], "___metric": [0, 2, 8, 9, 10], "a_": [2, 6], "aalto": [8, 10], "aaltors": [8, 10], "abl": [2, 6, 9], "about": [5, 8, 9, 11, 12], "abov": [2, 6, 11, 12], "access": 3, "achiev": [5, 6], "activ": 8, "actual": [2, 3, 5, 6, 8, 9, 11], "ad": [2, 9], "adapt": [1, 2, 6, 9], "add": [5, 6, 8, 11, 12], "add_argu": [2, 9], "addit": [3, 5, 9, 12], "address": 12, "admin": 10, "administr": 10, "advanc": 3, "advantag": [9, 12], "after": [1, 8, 9, 11], "afterok": 11, "afterward": 1, "again": [8, 9], "against": 11, "all": [2, 3, 8, 9, 10, 11, 12], "allow": [1, 3, 8, 9, 10, 12], "allr": 11, "along": [9, 10], "alpha": [0, 2, 8, 9], "alreadi": [5, 8, 10], "also": [2, 5, 9, 10, 11], "altern": [6, 10], "alwai": [7, 8], "amount": [5, 12], "an": [3, 5, 6, 7, 8, 9, 10, 11, 12], "ani": [2, 5, 6, 9], "anoth": [5, 8, 12], "anyth": 7, "anywai": 3, "append": [7, 11], "append_result": 11, "appli": [7, 11, 12], "applic": [5, 12], "approach": 10, "apptain": 10, "ar": [1, 3, 5, 6, 7, 8, 9, 10, 11, 12], "arg": [2, 9, 11], "argpars": [2, 9], "argument": [2, 6, 9, 11], "argumentpars": [2, 9], "argv": [9, 11], "aris": 11, "around": 5, "arrai": [3, 7, 9, 11], "array_job": 2, "arrayid": 6, "arrayjob": 1, "artifici": 11, "as_fram": [0, 8], "ask": 10, "assign": [5, 12], "associ": 5, "assum": [2, 6, 8, 9, 11], "attend": 3, "attent": 3, "auto": [0, 2, 8, 9], "automat": 2, "avail": [0, 2, 5, 6, 8, 9, 11, 12], "avoid": [1, 5, 8, 9, 11, 12], "awar": 1, "ax_": [0, 2, 8, 9], "b": 7, "back": 3, "base": [2, 3, 6, 8], "bash": [1, 2, 6, 8, 9, 11], "basic": [3, 9], "batch": [6, 7, 10], "becaus": [11, 12], "becom": 11, "been": 3, "befor": [4, 6, 10, 12], "being": [7, 9], "benefit": 12, "better": [1, 3, 12], "between": [3, 9, 11], "bigger": 10, "bin": [2, 6, 8, 9, 11], "bit": [2, 3, 6, 11], "block": [11, 12], "both": 8, "bottleneck": [1, 11, 12], "boundari": [2, 8, 9], "box": [2, 6, 8, 9, 10, 11], "buffer": 12, "build": [1, 2, 6], "bunch": 12, "burden": [5, 12], "c": [0, 2, 7, 8, 9, 10], "cach": 12, "calc_statist": 9, "calcul": [2, 5, 6, 7, 9, 11], "call": [1, 5, 9, 11], "can": [1, 3, 5, 6, 7, 8, 9, 10, 11, 12], "cannot": [3, 9], "capabl": 12, "care": [1, 3, 5], "case": [9, 10, 11, 12], "caus": 12, "cc0": 0, "chang": [2, 6, 8], "charact": [9, 11], "chat": 3, "check": [3, 10], "choic": 10, "choos": 12, "clariti": 5, "class": [0, 2, 8, 9], "classic": 7, "classif": [2, 8, 9], "classifi": [0, 2, 8, 9], "clean": 8, "cleaner": 5, "clf": [0, 2, 8, 9], "close": [8, 9], "cluster": [1, 2, 3, 5, 6, 7, 9, 10, 11, 12], "cm": [0, 8], "code": [1, 2, 3, 5, 6, 10, 11, 12], "coderefineri": [3, 8, 10], "collabor": 3, "collaps": 9, "collect": [1, 5, 9, 11], "collection_job": 11, "com": 0, "combin": [1, 3, 9, 10, 11], "come": 3, "command": [1, 2, 6, 8, 9, 10, 11], "commandarg": 11, "common": [4, 11], "commonli": [3, 6, 11, 12], "commun": 11, "compar": 8, "complain": 11, "complet": [9, 10, 11], "complex": [1, 10, 11], "comput": [1, 3, 5, 7, 8, 9, 10, 11, 12], "concept": 3, "concurr": [1, 3, 5], "conda": 10, "config": 10, "configur": 10, "conflict": 11, "consider": 3, "consist": 10, "constraint": 3, "construct": 3, "consult": 10, "contact": 10, "contain": [10, 12], "conveni": 6, "convers": 8, "convert": [3, 9, 10, 11], "copi": [5, 12], "core": 5, "correct": 10, "correctli": 10, "correspondingli": 10, "corrupt": [9, 11], "cosin": [0, 2, 8, 9, 10], "cost": [5, 12], "could": [5, 9, 11], "count": 9, "countri": [2, 6], "coupl": 9, "cover": [2, 5], "cpu": [5, 10, 12], "creat": [11, 12], "csc": 10, "current": [3, 6, 9], "curv": 5, "custom": 9, "d": 7, "dai": [3, 4], "data": [1, 2, 5, 7, 8, 9, 10, 11, 12], "data_arrai": [9, 11], "datapoint": 7, "dataset": [0, 8, 12], "date": 3, "debug": 5, "decad": 5, "decis": [2, 8, 9], "decisionboundarydisplai": [0, 2, 8, 9], "decreas": 11, "deeper": 3, "def": 11, "default": 6, "defin": [9, 10, 11], "definit": 8, "demo": 3, "depend": [0, 1, 2, 5, 7, 11, 12], "deploy": 10, "describ": [10, 11, 12], "detail": [6, 8, 9], "detect": 10, "determin": 9, "develop": 11, "differ": [0, 2, 3, 6, 8, 9, 10, 11], "difficult": 9, "dir": 11, "direct": 3, "directli": [2, 6, 9], "directori": 11, "disadvantag": [9, 12], "discuss": 8, "disk": [0, 2, 8, 9, 10, 12], "disp": [0, 2, 8, 9], "displai": 0, "distanc": 0, "distance_metr": [0, 2, 8, 9], "distinct": 8, "distinguish": 11, "distribut": 3, "divid": [0, 8], "do": [3, 4, 5, 6, 7, 9, 10, 11, 12], "docker": [8, 10], "document": 10, "doe": [3, 5, 7, 8, 10, 11, 12], "doesn": [5, 11], "domain": 0, "don": [2, 3, 5, 6, 11], "done": [6, 8, 9, 11], "down": 5, "drastic": 12, "drive": 12, "due": 11, "dump": [0, 8, 9, 11], "e": [1, 4, 5, 8, 9, 11, 12], "each": [5, 7, 8, 9, 10, 11, 12], "earlier": 12, "easier": [5, 11], "easili": [3, 7, 12], "echo": 9, "ecosystem": 10, "edgecolor": [0, 2, 8, 9], "effect": 5, "effici": 12, "effort": 3, "either": [6, 9, 11], "element": [6, 9, 11, 12], "element1": 9, "els": 11, "embarassingli": 3, "embarrassingli": [9, 10, 11], "embarrassinlgi": 7, "empti": 11, "en": 10, "encount": 5, "encourag": 10, "end": [5, 9, 11, 12], "engag": 3, "enough": [1, 12], "entir": 11, "entri": [5, 7, 11], "env": 10, "environ": [6, 8, 10, 12], "episod": 9, "equal": 10, "error": [1, 2, 6, 11], "error_": [2, 6], "especi": 1, "essenti": [7, 9, 12], "etc": [10, 12], "euclidean": [0, 2, 8, 9, 10], "even": [1, 3, 9, 11, 12], "event": 2, "everi": 7, "everyth": 12, "exactli": 8, "exampl": [2, 3, 5, 6, 8, 9, 10, 11], "except": 11, "exclus": 5, "exec": [2, 8, 9, 11], "execut": [1, 5, 7, 11, 12], "executor": 10, "exercis": 3, "exist": [8, 10, 11], "exist_ok": [0, 2, 8, 9], "expand": 10, "expect": [10, 11], "experi": [3, 10, 12], "explicit": 11, "export": 8, "extra": 5, "extract": [0, 8, 9], "extrem": 3, "f": [0, 2, 8, 9, 11], "fail": 11, "fall": 3, "familiar": [1, 6], "fast": 12, "faster": 5, "featur": [0, 2, 8, 9], "few": [3, 12], "fi": [8, 10], "figur": 5, "file": [0, 1, 8, 9, 10], "file_path": [9, 11], "filenam": [9, 11], "filenotfounderror": 11, "final": [2, 3, 5, 6, 9, 10], "find": [9, 10], "fine": [3, 11], "finish": 12, "first": [2, 5, 6, 7, 8, 9], "fit": [2, 3, 8, 9], "fix": [0, 10], "float": 10, "flower": 8, "folder": [8, 9, 11], "folder_path": [9, 11], "follow": [2, 3, 5, 8, 9, 10, 11], "format": [10, 12], "former": 8, "found": [5, 8, 9], "four": [0, 2, 6, 8, 9], "from": [0, 1, 2, 5, 6, 8, 9, 10, 11, 12], "from_estim": [0, 2, 8, 9], "function": [5, 7, 9, 11], "further": [2, 8, 9], "g": [1, 4, 5, 8, 9, 11, 12], "gener": [0, 2, 5, 6, 7, 8, 9, 10, 11], "get": [5, 6, 11, 12], "ghz": 5, "give": [9, 11, 12], "given": [3, 10], "go": [6, 8], "goal": 6, "good": [9, 12], "grepl": 11, "group": 12, "guid": 3, "ha": [5, 8, 9, 12], "hackmd": 3, "had": [10, 11, 12], "handl": [11, 12], "har": 5, "harbor": [8, 10], "hard": 9, "hardwar": 3, "hasn": 5, "have": [2, 3, 5, 6, 7, 8, 9, 11, 12], "haversin": [0, 2, 8, 9, 10], "head": 0, "heavi": 3, "help": [2, 3, 9], "helper": 2, "here": [2, 3, 5, 6, 7, 8, 9, 10, 11], "hidden": [5, 11], "home": 11, "hour": 12, "how": [1, 3, 5, 8, 9], "howev": [5, 9, 10, 11, 12], "html": [0, 2, 8, 9, 10], "http": [0, 2, 8, 9, 10], "huge": 12, "hyper": 7, "i": [1, 2, 5, 6, 7, 8, 9, 10, 11, 12], "id": [6, 9, 11], "idea": [10, 12], "identifi": 11, "iloc": [0, 2, 8, 9], "imag": [0, 2, 8, 9, 10], "imagin": [5, 12], "implement": 10, "import": [2, 8, 9, 11, 12], "improv": 5, "includ": 8, "inconveni": 11, "increas": [5, 12], "independ": [9, 11], "index": [2, 6, 9, 11], "index_from_argu": 9, "indic": 6, "individu": [1, 7, 9, 10, 12], "infer": 10, "inher": [5, 12], "initi": [5, 11], "input": [0, 1, 2, 5, 6, 7, 9, 10], "insert": [9, 11], "inspect": [0, 2, 8, 9], "instal": 10, "instanc": [6, 11], "instead": 9, "instructor": [2, 3], "int": [2, 9, 11], "integ": [0, 6, 8, 9, 10, 11], "integr": 9, "interest": 2, "interfer": 5, "intern": [5, 11], "introduc": 3, "invalid": 11, "io": 10, "iri": [2, 8, 9, 10], "irrelev": 12, "issu": [3, 5, 12], "iter": 12, "its": [10, 11], "itself": 10, "job": [1, 3, 8, 9, 10, 11, 12], "jobid": [1, 6], "join": [9, 11], "jupyt": [3, 9], "just": [3, 5, 9, 11, 12], "k": [2, 8, 9], "kaggl": 0, "keep": [1, 9, 11, 12], "kind": [9, 12], "kneighborsclassifi": [0, 2, 8, 9], "knn": [0, 2, 8, 9], "know": [3, 11], "known": 3, "l1": [0, 2, 8, 9, 10], "label": [0, 8], "languag": [1, 3, 5, 6, 9, 10, 11], "larg": [5, 7, 9, 12], "larger": [3, 12], "last": 5, "later": 3, "latest": [8, 10], "lead": [5, 11, 12], "learn": [0, 2, 3, 5, 8, 9, 10], "learner": 3, "leav": [8, 12], "lectur": 8, "left": [0, 2, 3, 5, 8, 9], "legend": [0, 2, 8, 9], "legend_el": [0, 2, 8, 9], "len": [7, 11], "length": [0, 8], "less": [9, 11], "lesson": [2, 3], "let": [2, 3, 9, 11], "level": [3, 7], "librari": [5, 11], "licens": 0, "life": 3, "like": [6, 9, 10, 11, 12], "limit": 3, "line": [1, 5, 9, 11], "link": 3, "list": [3, 9, 10, 11], "listdir": [9, 11], "ll": 3, "load": [0, 2, 6, 8, 9, 10, 11, 12], "load_and_preprocess_data": [7, 11], "load_iri": [0, 8], "load_preprocessed_data": 9, "loc": [0, 2, 8, 9], "local": 12, "log": 10, "logic": 6, "long": [1, 2, 3, 9], "long_cod": [2, 6], "long_job": [2, 6, 8, 9, 11], "longer": 12, "look": [5, 6, 9, 10], "loop": [0, 2, 5, 8, 9, 10, 11, 12], "lost": 11, "lot": [5, 12], "lower": [0, 2, 8, 9], "lucki": 11, "machin": [5, 9, 12], "mail": 9, "main": 5, "mainli": 2, "make": [2, 3, 5, 6, 8, 9, 10, 11, 12], "manag": 3, "manhattan": [0, 2, 8, 9, 10], "mani": [3, 5, 6, 9, 12], "manner": 10, "manual": 11, "map": [0, 8], "materi": 3, "math": 5, "mathemat": 5, "matplotlib": [0, 2, 8, 9], "max": 5, "maximum": [5, 10], "md": 2, "mean": [11, 12], "mechan": [3, 5], "mem": 10, "memori": [5, 10], "mental": 3, "method": [1, 8, 10, 11], "metric": [0, 8, 10], "metrici": 9, "might": [3, 5, 6, 8, 11, 12], "million": 7, "min": 3, "mind": [3, 11], "minimum": 12, "minut": [7, 12], "miss": [10, 11, 12], "mkdir": [0, 2, 8, 9, 11], "model": [7, 8, 12], "model_select": [0, 8], "modif": 11, "modifi": 11, "modul": [0, 2, 6, 8, 9, 10], "more": [1, 3, 5, 8, 9, 11, 12], "most": [3, 5, 8, 11, 12], "mostli": 3, "motiv": 3, "much": [3, 5], "multi": 5, "multipl": [3, 5, 6, 9, 10, 11, 12], "multiprocess": 5, "must": 3, "my_array_job": 6, "n": [0, 2, 5, 8, 9], "n_neighbor": [0, 2, 8, 9, 10], "n_neighbors_list": [0, 8, 10], "name": [2, 6, 8, 9, 10, 11], "nearest": 8, "necess": 3, "necessari": [6, 8, 12], "need": [2, 3, 5, 6, 7, 8, 9, 10, 11, 12], "neighbor": [2, 8, 9], "neighborhood": 9, "neighbourhood": 8, "network": 12, "next": [6, 10], "node": 12, "non": 3, "none": 11, "normal": 9, "note": 10, "notebook": [3, 9], "notic": [2, 9], "notif": 9, "now": [3, 5, 8, 9, 12], "nowadai": 5, "number": [0, 2, 5, 6, 9, 10], "numer": 11, "numpi": 5, "o": [1, 9, 11, 12], "obvious": 5, "occur": 5, "offici": 10, "often": [5, 11, 12], "ollid": 11, "omit": 6, "onc": [8, 9, 11, 12], "one": [5, 8, 9, 10, 11, 12], "onli": [2, 5, 6, 8, 9, 10, 11, 12], "open": [0, 2, 3, 8, 9, 11], "oper": [5, 12], "option": [3, 5, 9, 10], "order": [9, 10, 12], "org": [0, 2, 8, 9], "other": [2, 3, 5, 7, 9, 10, 11], "otherwis": [5, 8], "our": [2, 6, 8, 9, 10, 11, 12], "out": [0, 2, 3, 5, 6, 8, 9, 10, 11, 12], "output": [0, 2, 6, 9, 10, 11], "output_": [2, 6], "over": [0, 2, 5, 8, 9, 10, 12], "overal": [5, 12], "overhead": [3, 5, 7, 12], "own": [10, 11, 12], "p": 11, "p1": 7, "p2": 7, "packag": 12, "page": [2, 3], "pai": [3, 12], "pairwis": [0, 2, 8, 9], "parallel": [1, 8, 11, 12], "parallelize_using_script": 2, "paramet": [0, 1, 6, 7, 8, 10], "parameters1": 7, "parameters2": 7, "parent": [0, 2, 8, 9], "pars": [2, 6, 9], "parse_arg": [2, 9], "parser": [2, 9], "part": [2, 3, 8, 9, 10, 11, 12], "particular": 10, "particularili": 1, "particularli": 5, "pass": [6, 9], "passiv": 3, "past": 9, "path": [0, 2, 8, 9, 10, 11], "pathlib": [2, 8, 9], "pcolormesh": [0, 2, 8, 9], "peopl": 3, "per": 10, "perform": [5, 11], "persona": 3, "petallengthcm": [0, 8], "petalwidthcm": [0, 8], "pice": 3, "pick": 3, "pickl": [0, 2, 8, 9, 11], "piec": [9, 11], "pip": 10, "pipelin": [2, 7, 8, 9, 10], "pkl": [0, 2, 8, 9, 10, 11], "place": 3, "plan": 3, "pleas": 3, "plot": [2, 8, 9, 10], "plot_method": [0, 2, 8, 9], "plt": [0, 2, 8, 9], "plugin": 10, "png": [0, 2, 8, 9, 10], "point": [5, 8, 11], "pool": 5, "pose": 12, "possibl": [9, 10, 12], "postprocess": 10, "potenti": [1, 11], "practic": 10, "pre": [5, 9, 12], "predict": [0, 2, 8, 9], "prefer": 9, "preprocess": [2, 8, 9, 10, 11], "preprocess_data": 10, "present": 10, "previou": [9, 10], "probabl": [2, 3, 11], "problem": [5, 11, 12], "problemat": 11, "process": [3, 5, 11, 12], "processor": 5, "produc": 10, "profil": 10, "program": [5, 6], "promot": 10, "properti": 3, "protect": 11, "provid": [2, 6, 8, 10, 12], "pseudo": [7, 9], "public": [0, 8, 10], "puhti": 10, "purpos": [2, 9], "put": [5, 12], "py": [2, 6, 8, 9, 10, 11], "pyplot": [0, 2, 8, 9], "python": [2, 3, 5, 6, 9, 10, 11, 12], "python3": [2, 6, 9, 11], "python3_10": 8, "python_contain": [2, 8, 9, 11], "pytorch": 12, "quantiti": 12, "queue": 8, "quick": 3, "r": [0, 2, 8, 9, 10, 11], "random": 12, "random_st": [0, 8], "randomli": [0, 8, 12], "rang": [7, 9, 11], "rare": 5, "rather": 8, "rb": [0, 2, 8, 9, 11], "rd": 11, "re": [1, 5, 7, 9, 11, 12], "reach": 5, "read": [1, 3, 5, 11, 12], "readrd": 11, "readthedoc": 10, "real": 3, "realli": [11, 12], "receiv": 9, "recommend": [3, 10], "reduc": [7, 12], "refer": 2, "registr": 3, "rel": 10, "relev": 9, "reliabl": 11, "remov": [2, 9], "repeat": 5, "repetet": 1, "repetit": 12, "replac": [2, 6, 8, 9, 11], "repositori": 4, "reproducibl": 10, "request": [10, 11, 12], "requir": [5, 9, 10], "reserv": 5, "resourc": [3, 5, 7, 10, 12], "respect": 6, "response_method": [0, 2, 8, 9], "rest": 3, "result": [0, 1, 2, 3, 5, 7, 8, 9, 10, 11, 12], "result_": [9, 11], "result_fil": 11, "result_file_path": 11, "result_fold": 11, "resultdir": 11, "results_": 11, "results_your_array_job_id": 11, "reusabl": [1, 10], "right": 3, "risen": 5, "rscript": [9, 11], "rule": 10, "run": [1, 3, 5, 7, 9, 11, 12], "run_echo_world": 9, "runtim": [5, 10, 12], "same": [5, 6, 7, 8, 9, 10, 11, 12], "sarrai": 11, "save": [0, 2, 8, 9, 11], "savefig": [0, 2, 8, 9], "saverd": 11, "sbatch": [2, 6, 8, 9, 11], "scaler": [0, 2, 8, 9], "scatter": [0, 2, 8, 9], "scenario": 12, "schedul": [3, 7, 8, 9, 10], "scicomp": 10, "scientif": 10, "scikit": [0, 2, 8, 9], "scope": 3, "script": [1, 3, 10, 11], "second": [2, 6, 7, 8, 12], "section": [6, 10], "see": 10, "select": 6, "sens": 3, "sepal": [0, 8], "sepallengthcm": [0, 8], "sepalwidthcm": [0, 8], "separ": [1, 8, 9, 10], "seq_along": [9, 11], "sequenti": 12, "serial": 11, "server": [3, 11], "set": [4, 5, 6, 7, 8, 9, 10], "set_titl": [0, 2, 8, 9], "setosa": [0, 8], "setup": 1, "sever": [3, 5, 10, 11], "sh": [2, 9], "shade": [0, 2, 8, 9], "shard": 12, "sheer": 12, "shell": 10, "short": [7, 12], "should": [2, 6, 7, 8, 11], "shouldn": 8, "show": [0, 2, 5, 6, 7, 8, 9], "side": [5, 12], "signific": [5, 12], "significantli": [5, 7], "similar": 12, "simpl": [6, 8, 9], "simpli": 11, "simultan": [5, 9, 11], "sinc": [2, 6, 9, 10, 11, 12], "singl": [2, 5], "singular": [2, 8, 9, 11], "situat": [3, 5, 7, 9, 12], "size": [6, 8, 12], "sklearn": [0, 2, 8, 9], "slow": 5, "slower": [5, 12], "slurm": [3, 10, 11], "slurm_array_job_id": 9, "slurm_array_task_id": [2, 6, 11], "slurm_job_id": 11, "small": [1, 12], "smaller": 12, "snakefil": 10, "so": [3, 9, 11, 12], "softwar": 10, "some": [3, 5, 7, 8, 9, 10, 11, 12], "someth": [3, 6, 9, 11], "somewhat": 12, "sourc": 11, "specif": [5, 10, 11], "specifi": [9, 10], "speed": [5, 12], "speedup": 5, "spend": 3, "spin": 12, "split": [9, 11, 12], "spread": 12, "sprintf": 11, "ssd": 12, "stabl": [0, 2, 8, 9, 10], "stai": 5, "standard": [0, 2, 8, 9, 10], "standardscal": [0, 2, 8, 9], "start": [2, 6, 7, 8, 9, 10, 12], "startswith": [9, 11], "startup": 12, "statist": 9, "step": [0, 2, 5, 6, 7, 8, 10], "still": [2, 3, 9, 12], "store": [1, 9, 11, 12], "str": [2, 9], "strang": 11, "stratifi": [0, 8], "stripe": 12, "structur": [0, 5], "stuff": 3, "sub": 11, "submiss": [10, 11], "submit": [1, 5, 8, 9, 10], "subprocess": [2, 9], "subset": 2, "successfulli": 9, "suitabl": 9, "summari": 10, "support": [8, 10], "sure": [8, 10, 12], "suspici": 11, "sweep": 7, "sy": [9, 11], "syntax": 10, "system": [1, 5, 9, 11, 12], "t": [2, 3, 5, 6, 8, 11, 12], "tail": 0, "take": [1, 5, 7, 9, 10, 11, 12], "taken": 3, "talk": 3, "tar": 12, "target": [0, 8, 10, 12], "target_nam": [0, 8], "task": [6, 7, 9, 10], "teach": 2, "technic": 3, "techniqu": 5, "tell": [6, 10], "temporari": 11, "ten": 12, "test": [0, 8], "text": 10, "than": [1, 7], "thei": [5, 11, 12], "them": 10, "themselv": 12, "theoret": 5, "theori": 5, "thi": [2, 3, 5, 6, 7, 8, 9, 10, 11, 12], "thing": [1, 3, 11], "think": [3, 9], "those": [8, 9, 12], "though": 3, "thousand": 12, "thread": [5, 10, 11], "three": 9, "through": [8, 9, 11, 12], "thrown": 11, "thu": [5, 8, 9, 10, 12], "time": [1, 5, 6, 7, 8, 9, 10, 11, 12], "titl": [0, 2, 8, 9], "togeth": 3, "too": [2, 3, 7, 9], "took": [2, 9], "tool": 10, "toolkit": 8, "total": 12, "track": 1, "trailingonli": 11, "train": [0, 8, 10, 12], "train_and_plot": [2, 8, 9, 10, 11], "train_test_split": [0, 8], "tri": 8, "trick": 3, "triton": 10, "true": [0, 2, 5, 8, 9, 11], "try": [5, 7, 11, 12], "two": [0, 7, 8, 9, 10, 11], "txt": [2, 6], "type": [2, 5, 7, 9, 10], "typic": 12, "u": [5, 8, 9, 12], "unchang": 8, "under": 3, "understand": 3, "unexpect": 11, "unintent": 1, "unit": 12, "unless": 5, "unnecessari": [5, 8], "unparallel": 5, "unreli": 11, "until": 3, "up": [3, 4, 5, 8, 9, 10, 11, 12], "updat": 2, "us": [0, 1, 3, 5, 8, 11, 12], "usag": [3, 12], "user": [10, 11], "v": 5, "valu": [2, 5, 6, 9, 10], "variabl": [1, 6, 9], "varieti": 7, "ve": 3, "veri": [11, 12], "versicolor": [0, 8], "via": 11, "vikrishnan": 0, "virginica": [0, 8], "wa": [10, 11], "wai": [6, 7, 9, 10, 12], "wait": 11, "walk": [8, 9], "want": [2, 8, 9], "wast": 7, "watch": 3, "wb": [0, 8, 9, 11], "we": [2, 3, 5, 6, 8, 9, 10, 11, 12], "webdataset": 12, "well": [3, 10], "were": [10, 11], "what": [3, 4, 5, 6, 9, 10], "whatev": [6, 9], "when": [3, 8, 11], "where": [5, 6, 7, 11, 12], "whether": 12, "which": [3, 5, 6, 8, 9, 10, 11, 12], "while": [3, 5, 9, 10, 11, 12], "who": 11, "whole": [3, 9], "why": 8, "width": [0, 8], "wildcard": 10, "within": [3, 6, 11], "without": 3, "won": [3, 12], "wonder": 3, "work": [3, 9, 11], "worker": 5, "workflow": [3, 5, 8, 11, 12], "world": 9, "worri": 5, "wors": 5, "worst": 11, "would": [5, 9, 11, 12], "wouldn": 3, "write": [9, 10, 11], "writerd": 11, "written": [10, 11], "www": 0, "x": [0, 2, 8, 9], "x_test": [0, 2, 8, 9], "x_train": [0, 2, 8, 9], "xlabel": [0, 2, 8, 9], "y": [0, 2, 8, 9], "y_test": [0, 2, 8, 9], "y_train": [0, 2, 8, 9], "yet": [3, 11], "ylabel": [0, 2, 8, 9], "yml": 10, "you": [1, 2, 3, 5, 6, 7, 8, 9, 11, 12], "your": [1, 2, 3, 5, 6, 8, 9, 10, 11, 12], "your_array_job_id": 11, "your_command": 6, "your_exampl": 11, "zero": [2, 6]}, "titles": ["Apply K nearest neighbors classification to the Iris flower data set", "Conclusions and recommendations", "List of exercises", "Tuesdays tools and techniques for HPC - Parallelization", "Instructor\u2019s guide", "Motivation", "Parallelize using Slurm Array jobs", "Concepts", "Convert a Jupyter Notebook to a Python script", "Parallelize using Script", "Parallelize using Workflow Manager", "Concurrency issues", "Hardware/Server limitations", "Quick Reference"], "titleterms": {"": 4, "1": [2, 6, 9], "2": [2, 6], "2024": 3, "about": 3, "access": [10, 11, 12], "add": [2, 9], "advantag": [5, 10], "all": 5, "also": 3, "appli": 0, "april": 3, "arrai": [2, 6], "aspect": 4, "boundari": 0, "build": [8, 9], "classif": 0, "cluster": 8, "code": [7, 8, 9], "complex": 6, "concept": 7, "conclus": [1, 3], "concurr": 11, "contain": 8, "convert": 8, "cours": 3, "creat": [2, 6, 8, 10], "credit": 3, "data": 0, "databas": 11, "decis": 0, "depend": 8, "disadvantag": 10, "embarrassingli": 7, "execut": [8, 9], "exercis": [2, 4, 6, 9], "file": [11, 12], "fit": 0, "flexibl": 9, "flower": 0, "full": 2, "get": 4, "guid": 4, "hardwar": 12, "hpc": [3, 10], "i": 3, "import": 0, "instanc": 3, "instructor": 4, "intend": 4, "interest": 4, "introduct": 3, "iri": 0, "issu": 11, "job": [2, 6, 7], "jupyt": 8, "k": 0, "learn": 4, "lesson": 4, "level": 5, "limit": 12, "list": 2, "manag": 10, "metric": [2, 9], "might": 4, "more": 6, "motiv": 5, "move": 5, "nearest": 0, "neighbor": 0, "notebook": 8, "object": 5, "other": 4, "outcom": 4, "parallel": [2, 3, 5, 6, 7, 9, 10], "paramet": [2, 9], "pipelin": 0, "pitfal": [3, 4, 5], "plot": 0, "post": 9, "practic": 4, "pre": 8, "prepar": 4, "preprocess": 0, "prerequisit": 3, "process": [8, 9], "python": 8, "question": 4, "quick": 13, "recommend": 1, "refer": [3, 13], "run": [2, 6, 8, 10], "schedul": [5, 12], "script": [2, 6, 8, 9], "see": 3, "server": 12, "set": 0, "size": 7, "slurm": [2, 6, 8, 9], "snakemak": 10, "solut": [2, 6, 9], "split": 8, "step": 9, "submiss": [2, 6, 9], "teach": 4, "techniqu": 3, "thi": 4, "time": 4, "tool": 3, "tuesdai": 3, "typic": 4, "updat": [8, 9], "us": [2, 6, 9, 10], "we": 4, "who": 3, "why": [4, 5], "workflow": 10, "you": 4}})