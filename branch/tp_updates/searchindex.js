Search.setIndex({"docnames": ["code/jupyter/knn_iris", "conclusions", "exercises", "index", "instructor-guide", "motivation", "parallelization/array_jobs", "parallelization/code_adaptions", "parallelization/concepts", "parallelization/conclusions", "parallelization/index", "parallelization/motivation", "parallelization/submission_by_script", "pitfalls/concurrency_issues", "pitfalls/index", "pitfalls/os_side", "quick-reference"], "filenames": ["code/jupyter/knn_iris.ipynb", "conclusions.md", "exercises.rst", "index.rst", "instructor-guide.rst", "motivation.md", "parallelization/array_jobs.md", "parallelization/code_adaptions.md", "parallelization/concepts.md", "parallelization/conclusions.md", "parallelization/index.rst", "parallelization/motivation.md", "parallelization/submission_by_script.md", "pitfalls/concurrency_issues.md", "pitfalls/index.rst", "pitfalls/os_side.md", "quick-reference.rst"], "titles": ["Apply K nearest neighbors classification to the Iris flower data set", "Conclusions and recommendations", "List of exercises", "Tuesdays tools and techniques for HPC - Parallelization", "Instructor\u2019s guide", "Motivation", "Parallelize using Slurm Array jobs", "Example Walkthrough", "Concepts", "Conclusions and recommendations", "Embarassingly Parallel Problems", "Motivation", "Parallelize via a script", "Concurrency issues", "Pitfalls when parallelising code", "Hardware/Server limitations", "Quick Reference"], "terms": {"input": [0, 1, 2, 6, 7, 8, 9, 11, 12], "http": [0, 2, 7], "www": 0, "kaggl": 0, "com": 0, "dataset": [0, 15], "vikrishnan": 0, "licens": 0, "public": [0, 7], "domain": 0, "cc0": 0, "output": [0, 2, 6, 7, 12, 13], "classifi": [0, 2, 7], "us": [0, 1, 3, 5, 7, 9, 10, 11, 12, 13, 14, 15], "differ": [0, 2, 3, 6, 7, 12, 13, 14], "number": [0, 2, 5, 6, 7, 11, 12], "n_neighbor": [0, 2, 7], "fix": 0, "distanc": 0, "metric": 0, "The": [0, 2, 6, 7, 8, 11, 12, 13, 15], "result": [0, 1, 2, 7, 8, 9, 11, 12, 13, 14, 15], "file": [0, 7, 12], "structur": [0, 5], "1___metric": 0, "euclidean": [0, 2, 7], "png": [0, 2, 7], "2___metric": 0, "4___metric": 0, "8___metric": 0, "16___metric": 0, "32___metric": 0, "64___metric": 0, "depend": [0, 2, 3, 8, 11, 12, 13, 15], "path": [0, 2, 7, 13], "pickl": [0, 2, 7, 13], "from": [0, 1, 2, 5, 6, 7, 9, 11, 12, 13, 15], "sklearn": [0, 2, 7], "load_iri": 0, "model_select": 0, "train_test_split": 0, "kneighborsclassifi": [0, 2, 7], "standardscal": [0, 2, 7], "inspect": [0, 2, 7], "decisionboundarydisplai": [0, 2, 7], "matplotlib": [0, 2, 7], "pyplot": [0, 2, 7], "plt": [0, 2, 7], "modulenotfounderror": 0, "traceback": 0, "most": [0, 3, 5, 7, 10, 11, 13, 14, 15], "recent": 0, "call": [0, 1, 7, 9, 11, 12, 13], "last": [0, 5, 11], "cell": 0, "In": [0, 2, 3, 5, 6, 7, 8, 11, 13, 14, 15], "1": [0, 5, 8, 11, 12, 13], "line": [0, 1, 7, 9, 11, 12, 13], "2": [0, 5, 7, 8, 11, 12, 13, 15], "4": [0, 2, 5, 6, 7, 8, 11], "No": 0, "modul": [0, 2, 6, 7], "name": [0, 2, 6, 7, 12, 13], "load": [0, 2, 6, 7, 13, 15], "extract": [0, 7, 12], "two": [0, 7, 8, 12, 13], "featur": [0, 2, 7], "sepallengthcm": 0, "sepalwidthcm": 0, "out": [0, 2, 3, 6, 7, 11, 12, 13, 15], "avail": [0, 2, 5, 6, 7, 11, 12, 13, 15], "four": [0, 2, 6, 7], "petallengthcm": 0, "petalwidthcm": 0, "map": 0, "class": [0, 2, 7], "label": 0, "setosa": 0, "versicolor": 0, "virginica": 0, "integ": [0, 6, 7, 12, 13], "0": [0, 2, 6, 7, 13], "divid": 0, "randomli": [0, 15], "train": [0, 7, 15], "test": [0, 7], "save": [0, 2, 7, 13], "disk": [0, 2, 7, 15], "as_fram": 0, "true": [0, 2, 5, 7, 11, 12, 13], "sepal": 0, "length": 0, "cm": 0, "width": 0, "x": [0, 2, 7], "target_nam": 0, "y": [0, 2, 7], "target": [0, 15], "x_train": [0, 2, 7], "x_test": [0, 2, 7], "y_train": [0, 2, 7], "y_test": [0, 2, 7], "stratifi": 0, "random_st": 0, "mkdir": [0, 2, 7, 13], "exist_ok": [0, 2, 7], "dump": [0, 7, 13], "open": [0, 2, 3, 7, 10, 12, 13, 14], "pkl": [0, 2, 7, 13], "wb": [0, 7, 13], "loop": [0, 2, 7, 11, 12, 13, 15], "over": [0, 2, 5, 7, 11, 12, 15], "paramet": [0, 1, 6, 8, 9, 12], "standard": [0, 2, 7], "scaler": [0, 2, 7], "knn": [0, 2, 7], "imag": [0, 2, 7], "rb": [0, 2, 7, 13], "f": [0, 2, 7, 12, 13], "displai": 0, "head": 0, "tail": 0, "scikit": [0, 2, 7], "learn": [0, 2, 3, 7, 10, 11, 14], "org": [0, 2, 7], "stabl": [0, 2, 7], "gener": [0, 2, 6, 7, 8, 11, 12, 13], "pairwis": [0, 2, 7], "distance_metr": [0, 2, 7], "html": [0, 2, 7], "n_neighbors_list": 0, "8": [0, 2, 7], "16": [0, 2, 7], "32": [0, 2, 7], "64": [0, 2, 5, 7, 11], "manhattan": [0, 2, 7], "l1": [0, 2, 7], "haversin": [0, 2, 7], "cosin": [0, 2, 7], "clf": [0, 2, 7], "step": [0, 2, 5, 6, 8, 11], "disp": [0, 2, 7], "from_estim": [0, 2, 7], "response_method": [0, 2, 7], "predict": [0, 2, 7], "plot_method": [0, 2, 7], "pcolormesh": [0, 2, 7], "xlabel": [0, 2, 7], "ylabel": [0, 2, 7], "shade": [0, 2, 7], "auto": [0, 2, 7], "alpha": [0, 2, 7], "5": [0, 2, 3, 7, 8, 10, 12, 14], "scatter": [0, 2, 7], "ax_": [0, 2, 7], "iloc": [0, 2, 7], "c": [0, 2, 7, 8, 12], "edgecolor": [0, 2, 7], "legend": [0, 2, 7], "legend_el": [0, 2, 7], "loc": [0, 2, 7], "lower": [0, 2, 7], "left": [0, 2, 3, 7, 11], "titl": [0, 2, 7], "_": [0, 2, 7, 13], "set_titl": [0, 2, 7], "3": [0, 2, 5, 6, 7, 8, 11, 12], "n": [0, 2, 7, 11], "r": [0, 2, 7, 12, 13], "show": [0, 2, 3, 6, 7, 8, 11], "parent": [0, 2, 7], "savefig": [0, 2, 7], "___metric": [0, 2, 7], "schedul": [1, 3, 7, 8, 9, 10, 12, 14], "base": [1, 2, 3, 6, 7, 9, 10, 12, 14], "parallelis": [1, 3, 9], "embarassingli": [1, 3, 7, 9, 13], "parallel": [1, 9, 13, 14, 15], "problem": [1, 3, 5, 9, 11, 12, 13, 15], "adapt": [1, 2, 6, 7, 9], "your": [1, 2, 3, 6, 7, 9, 11, 12, 13, 15], "code": [1, 2, 3, 6, 9, 10, 11, 12, 13, 15], "allow": [1, 3, 7, 9, 10, 14, 15], "can": [1, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "read": [1, 3, 9, 11, 13, 15], "command": [1, 2, 6, 7, 9, 12, 13], "potenti": [1, 9, 13], "build": [1, 2, 6, 9, 12], "collect": [1, 7, 9, 11, 13], "method": [1, 7, 9, 13], "re": [1, 5, 7, 8, 9, 11, 12, 13, 15], "combin": [1, 3, 7, 9, 12, 13], "individu": [1, 7, 8, 9, 15], "execut": [1, 5, 8, 9, 13, 15], "system": [1, 7, 9, 11, 12, 15], "languag": [1, 3, 5, 6, 7, 9, 10, 11, 12, 13], "submit": [1, 7, 9, 11, 12], "job": [1, 7, 9, 10, 12, 13, 15], "avoid": [1, 5, 7, 9, 11, 13, 15], "complex": [1, 9, 12, 13], "bash": [1, 2, 6, 7, 9, 12, 13], "you": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "ar": [1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "familiar": [1, 6, 9], "keep": [1, 7, 9, 13, 15], "variabl": [1, 6, 7, 9], "separ": [1, 7, 9, 12], "reusabl": [1, 9], "unintent": [1, 9], "error": [1, 2, 6, 9, 12, 13], "better": [1, 3, 9, 15], "track": [1, 9], "run": [1, 5, 8, 9, 11, 12, 13, 14, 15], "thi": [2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15], "i": [2, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15], "all": [2, 3, 7, 10, 12, 13, 14, 15], "lesson": 2, "mainli": 2, "refer": [2, 12], "helper": 2, "instructor": [2, 3], "automat": 2, "other": [2, 3, 7, 8, 11, 12, 13], "page": [2, 3, 10, 14], "ani": [2, 6, 7, 11], "singl": [2, 5, 11], "teach": 2, "event": 2, "probabl": [2, 3, 13], "cover": [2, 3, 5, 11], "onli": [2, 6, 7, 11, 13, 15], "subset": 2, "interest": [2, 3], "code_adapt": 2, "md": 2, "let": [2, 3, 7, 12, 13], "": [2, 3, 7, 11, 13], "assum": [2, 6, 7, 12, 13], "we": [2, 3, 5, 6, 7, 10, 11, 12, 13, 14, 15], "notic": [2, 7], "still": [2, 3, 7, 10, 14, 15], "took": [2, 7], "too": [2, 3, 7, 8], "long": [2, 3, 7], "our": [2, 6, 7, 12, 13, 15], "purpos": [2, 7, 12], "also": [2, 7, 11, 12, 13, 14], "want": [2, 7, 12], "part": [2, 7, 10, 13, 15], "need": [2, 3, 6, 7, 8, 11, 12, 13, 14, 15], "updat": 2, "train_and_plot": [2, 7, 13], "py": [2, 6, 7, 12, 13], "sbatch": [2, 6, 7, 12, 13], "remov": [2, 7], "follow": [2, 3, 7, 10, 11, 12, 13, 14], "parser": [2, 7], "pathlib": [2, 7], "import": [2, 7, 12, 13, 15], "argpars": [2, 7], "neighbor": [2, 7], "pipelin": [2, 7, 8], "preprocess": [2, 7, 13], "fit": [2, 3, 7], "plot": [2, 7], "decis": [2, 7], "boundari": [2, 7], "pars": [2, 6, 7, 12], "argument": [2, 6, 7, 12, 13], "argumentpars": [2, 7], "add_argu": [2, 7], "type": [2, 3, 5, 7, 8, 11], "int": [2, 7, 13], "help": [2, 3, 7], "calcul": [2, 6, 7, 8, 11, 12, 13], "str": [2, 7], "arg": [2, 7, 12, 13], "parse_arg": [2, 7], "data": [2, 5, 7, 8, 11, 13, 15], "iri": [2, 7], "k": [2, 7], "classif": [2, 7], "Then": [2, 7], "ad": [2, 7, 12], "further": [2, 7], "bin": [2, 6, 7, 12, 13], "long_job": [2, 6, 7, 12, 13], "singular": [2, 7, 13], "box": [2, 6, 7, 12, 13], "cluster": [2, 3, 5, 6, 8, 10, 11, 12, 13, 14, 15], "have": [2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15], "here": [2, 3, 6, 7, 8, 10, 11, 12, 13, 14], "make": [2, 3, 6, 7, 10, 11, 12, 13, 14, 15], "exec": [2, 7, 13], "python_contain": [2, 7, 13], "python": [2, 6, 11, 12, 13, 15], "And": [2, 5, 7, 11, 13], "final": [2, 3, 6, 7, 10, 11, 14], "valu": [2, 6, 7, 11, 12], "subprocess": [2, 7, 12], "sh": [2, 7, 12], "array_job": 2, "For": [2, 6, 7, 15], "abov": [2, 6, 13, 15], "bit": [2, 3, 6, 10, 13, 14], "first": [2, 6, 7, 8, 11], "countri": [2, 6], "second": [2, 6, 7, 8, 15], "start": [2, 6, 7, 8, 15], "sinc": [2, 6, 7, 12, 13, 15], "zero": [2, 6], "index": [2, 3, 6, 7, 12, 13], "chang": [2, 6, 7], "don": [2, 3, 6, 10, 11, 12, 13, 14], "t": [2, 3, 5, 6, 7, 10, 11, 12, 13, 14, 15], "provid": [2, 6, 7, 12, 15], "directli": [2, 6, 7], "long_cod": [2, 6], "should": [2, 6, 7, 8, 12, 13], "abl": [2, 6, 7], "output_": [2, 6], "a_": [2, 6], "txt": [2, 6], "error_": [2, 6], "python3": [2, 6, 7, 12, 13], "replac": [2, 6, 7, 12, 13], "actual": [2, 3, 5, 6, 7, 11, 12, 13], "slurm_array_task_id": [2, 6, 13], "under": [3, 10, 14], "construct": [3, 10, 14], "pleas": [3, 10, 14], "plan": [3, 10, 14], "hackmd": [3, 10, 14], "link": [3, 10, 14], "check": [3, 10, 12, 14], "coderefineri": [3, 7, 10, 14], "chat": [3, 10, 14], "current": [3, 6, 7, 10, 12, 14], "date": [3, 10, 14], "given": [3, 10, 12, 14], "yet": [3, 10, 13, 14], "known": [3, 10, 14], "registr": [3, 10, 14], "though": [3, 10, 14], "improv": [3, 5, 11], "workflow": [3, 5, 7, 13, 15], "ve": 3, "had": [3, 13, 15], "basic": [3, 10, 14], "work": [3, 7, 12, 13], "what": [3, 4, 6, 7, 11, 14], "do": [3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15], "peopl": 3, "practic": 3, "exampl": [3, 6, 10, 11, 12, 13], "tip": 3, "which": [3, 6, 7, 11, 13, 14, 15], "mai": 3, "aren": 3, "usual": 3, "either": [3, 6, 7, 13], "advanc": 3, "won": [3, 10, 14, 15], "go": [3, 6, 7], "so": [3, 7, 12, 13, 15], "deep": 3, "each": [3, 5, 7, 8, 11, 12, 13, 15], "topic": 3, "know": [3, 13], "everyth": [3, 15], "possibl": [3, 7, 12, 15], "some": [3, 7, 8, 10, 11, 12, 13, 14, 15], "where": [3, 5, 6, 8, 11, 12, 13, 15], "up": [3, 4, 5, 7, 10, 11, 13, 14, 15], "right": 3, "format": [3, 15], "design": 3, "firesid": 3, "expert": 3, "demo": 3, "along": [3, 7], "independ": [3, 7, 13], "exercis": [3, 10, 14], "engag": [3, 10, 14], "level": [3, 8, 10, 14], "introduc": [3, 10, 12], "concept": [3, 10], "how": [3, 5, 7, 10, 12], "properti": [3, 10], "easili": [3, 8, 10, 15], "distribut": [3, 10], "heavi": [3, 10], "comput": [3, 7, 8, 10, 11, 13, 14, 15], "multipl": [3, 5, 6, 7, 10, 11, 12, 13, 15], "process": [3, 5, 10, 11, 13, 15], "without": [3, 10], "necess": [3, 10], "fall": [3, 10], "back": [3, 10], "mechan": [3, 5, 10, 11], "within": [3, 6, 10, 12, 13], "usag": [3, 10, 14, 15], "mani": [3, 5, 6, 7, 10, 11, 14, 15], "thing": [3, 10, 12, 13, 14], "talk": [3, 10, 14], "sens": [3, 10, 14], "might": [3, 6, 7, 10, 11, 13, 14, 15], "pick": [3, 10, 14], "someth": [3, 6, 7, 10, 13, 14], "anywai": [3, 10, 14], "A": [3, 6, 7, 10, 14], "experi": [3, 10, 14, 15], "technic": [3, 10, 14], "option": [3, 7, 10, 12, 14], "materi": [3, 10, 14], "deeper": [3, 10, 14], "access": [3, 10, 14], "slurm": [3, 10, 12, 13, 14], "dai": [3, 4, 10, 14], "If": [3, 7, 8, 10, 11, 13, 14, 15], "60": [3, 8, 12, 15], "min": [3, 10, 14], "30": [3, 7, 10], "workflowtool": 3, "pitfal": [3, 5], "when": [3, 7, 12, 13], "conclus": [3, 10], "recommend": [3, 10], "quick": 3, "guid": 3, "list": [3, 7, 13], "larger": [3, 15], "resourc": [3, 8, 11, 14, 15], "It": [3, 15], "extrem": 3, "more": [3, 7, 11, 12, 13, 14, 15], "direct": 3, "later": 3, "learner": 3, "persona": 3, "just": [3, 7, 11, 12, 13, 15], "taken": [3, 14], "while": [3, 5, 7, 11, 13, 15], "mostli": 3, "understand": 3, "pice": 3, "wonder": 3, "doe": [3, 5, 7, 8, 11, 12, 13, 15], "togeth": 3, "an": [3, 6, 7, 8, 11, 12, 13, 15], "whole": [3, 7], "care": [3, 11, 12], "real": 3, "now": [3, 7, 11, 12, 15], "wouldn": 3, "mind": [3, 13], "scope": 3, "stuff": 3, "spend": 3, "much": [3, 5, 11], "mental": 3, "effort": 3, "ll": 3, "watch": 3, "rest": 3, "until": 3, "come": 3, "been": 3, "fine": [3, 13], "think": [3, 7], "well": 3, "must": 3, "trick": 3, "life": 3, "even": [3, 7, 13, 15], "attend": 3, "passiv": 3, "collabor": 3, "between": [3, 7, 13], "10": [3, 8, 10, 11, 13], "e": [4, 5, 7, 11, 12, 13, 15], "g": [4, 5, 7, 11, 12, 13, 15], "befor": [4, 6, 15], "set": [4, 6, 7, 8, 11, 12], "common": [4, 13], "repositori": 4, "get": [5, 6, 11, 13, 15], "poption": 5, "repeat": [5, 11], "alreadi": [5, 7], "occur": 5, "speed": [5, 11, 15], "processor": [5, 11], "hasn": [5, 11], "increas": [5, 11, 15], "decad": [5, 11], "6": [5, 7, 8, 11], "ghz": [5, 11], "2010": [5, 11], "v": [5, 11], "2020": [5, 11], "core": [5, 11], "ha": [5, 7, 11, 15], "ot": [5, 11], "max": [5, 11], "machin": [5, 7, 11, 15], "particularili": [5, 11, 12], "look": [5, 6, 7, 11], "thu": [5, 7, 11, 15], "risen": [5, 11], "lot": [5, 11, 15], "addit": [5, 7, 11, 14, 15], "amount": [5, 11, 15], "nowadai": [5, 11], "often": [5, 11, 12, 13, 15], "requir": [5, 7, 11], "u": [5, 7, 11, 12, 15], "same": [5, 6, 7, 8, 11, 12, 13, 15], "pocess": [5, 11], "time": [5, 6, 7, 8, 11, 12, 13, 15], "point": [5, 11, 13], "pre": [5, 11, 15], "librari": [5, 11, 13], "inher": [5, 11, 15], "sever": [5, 11, 13, 14], "mathemat": [5, 11], "applic": [5, 11, 15], "unless": [5, 11], "techniqu": [5, 11], "batch": [6, 8], "like": [6, 7, 12, 13, 15], "my_array_job": 6, "100": 6, "environ": [6, 7, 15], "task": [6, 7, 8], "id": [6, 7, 13], "whatev": [6, 7], "your_command": 6, "50": 6, "size": [6, 7, 15], "default": 6, "omit": 6, "indic": [6, 12], "jobid": 6, "arrayid": 6, "respect": 6, "select": 6, "tell": 6, "program": [6, 11], "element": [6, 7, 12, 13, 15], "done": [6, 7, 13], "pass": [6, 7], "add": [6, 11, 12, 13, 15], "instanc": [6, 13], "necessari": [6, 7, 15], "simpl": [6, 7, 12], "To": [6, 7, 13, 15], "logic": 6, "detail": [6, 7], "conveni": [6, 12], "wai": [6, 7, 8, 12, 15], "achiev": [6, 11, 12], "next": 6, "section": 6, "altern": [6, 12], "commonli": [6, 13, 14, 15], "goal": 6, "situat": [7, 8, 11, 12, 14, 15], "coupl": 7, "order": [7, 15], "jupyt": 7, "nearest": 7, "toolkit": 7, "notbook": 7, "found": [7, 11], "rther": 7, "export": 7, "convers": 7, "distinct": 7, "model": [7, 8, 15], "former": 7, "exactli": 7, "onc": [7, 13, 15], "shouldn": 7, "compar": 7, "includ": 7, "those": [7, 15], "sure": [7, 12, 15], "folder": [7, 13], "exist": [7, 13], "alwai": [7, 8, 12], "unnecessari": [7, 11], "again": [7, 12], "clean": 7, "otherwis": [7, 11], "leav": [7, 15], "unchang": 7, "about": [7, 10, 11, 13, 14, 15], "why": 7, "support": 7, "both": 7, "docker": 7, "definit": 7, "activ": 7, "python3_10": 7, "harbor": 7, "aalto": 7, "fi": 7, "aaltors": 7, "latest": 7, "discuss": 7, "lectur": 7, "queue": 7, "neighbourhood": 7, "one": [7, 11, 13, 15], "after": [7, 13], "anoth": [7, 11, 15], "simultan": [7, 11, 13], "howev": [7, 11, 12, 13, 15], "find": 7, "suitabl": 7, "piec": [7, 12, 13], "66": 7, "essenti": [7, 8, 15], "metrici": 7, "neighborhood": 7, "complet": [7, 13], "could": [7, 11, 12, 13], "count": 7, "function": [7, 8, 11, 12, 13], "hard": 7, "difficult": 7, "would": [7, 11, 12, 13, 15], "good": [7, 15], "specifi": 7, "There": [7, 8, 11, 14], "close": [7, 12], "receiv": 7, "determin": [7, 12], "arrai": [7, 8, 10, 12, 13], "custom": 7, "advantag": [7, 15], "being": [7, 8], "integr": 7, "mail": 7, "notif": 7, "normal": 7, "arrayjob": 7, "slurm_array_job_id": 7, "defin": [7, 12, 13], "take": [7, 8, 11, 12, 13, 15], "rang": [7, 8, 12, 13], "three": [7, 12], "less": [7, 13], "disadvantag": [7, 15], "cannot": [7, 14], "kind": [7, 15], "give": [7, 13, 15], "write": [7, 12, 13], "corrupt": [7, 13], "previou": 7, "successfulli": 7, "prefer": 7, "echo": [7, 12], "world": [7, 12], "run_echo_world": [7, 12], "seq_along": [7, 12, 13], "element1": [7, 12], "charact": [7, 12, 13], "past": [7, 12], "collaps": [7, 12], "rscript": [7, 12, 13], "relev": 7, "case": [7, 13, 15], "statist": 7, "store": [7, 13, 15], "pseudo": [7, 8], "load_preprocessed_data": 7, "20": 7, "calc_statist": 7, "end": [7, 11, 13, 15], "index_from_argu": 7, "result_": [7, 13], "larg": [7, 8, 11, 15], "instead": 7, "o": [7, 13, 15], "sy": [7, 12, 13], "folder_path": [7, 13], "argv": [7, 12, 13], "data_arrai": [7, 13], "filenam": [7, 13], "listdir": [7, 13], "startswith": [7, 13], "file_path": [7, 13], "join": [7, 13], "insert": [7, 13], "varieti": 8, "anyth": 8, "than": [8, 12], "embarassinlgi": 8, "load_and_preprocess_data": [8, 13], "len": [8, 13], "parameters1": 8, "parameters2": 8, "b": 8, "d": 8, "p1": 8, "p2": 8, "append": [8, 13], "appli": [8, 13, 15], "everi": 8, "datapoint": 8, "cassic": 8, "hyper": 8, "sweep": 8, "entri": [8, 11, 13], "short": [8, 15], "overhead": [8, 11, 14, 15], "wast": 8, "million": 8, "try": [8, 11, 13, 15], "minut": [8, 15], "reduc": [8, 15], "significantli": 8, "see": [10, 14], "hpc": [10, 14], "motiv": 10, "walkthrough": 10, "curv": 11, "intern": [11, 13], "har": 11, "main": [11, 12], "speedup": 11, "theori": 11, "lead": [11, 13, 15], "unparallel": 11, "theoret": 11, "maximum": 11, "rare": 11, "reach": 11, "cost": [11, 15], "associ": 11, "clariti": 11, "initi": [11, 13], "worker": 11, "pool": 11, "memori": 11, "copi": [11, 15], "perform": [11, 13], "hidden": [11, 13], "side": [11, 15], "effect": 11, "slow": 11, "down": 11, "imagin": [11, 15], "numpi": 11, "math": 11, "cpu": [11, 15], "paralel": 11, "multi": 11, "thread": [11, 13], "thei": [11, 13, 15], "multiprocess": 11, "copmut": 11, "interfer": 11, "signific": 11, "runtim": [11, 15], "wors": 11, "figur": 11, "issu": [11, 14, 15], "patrallel": 11, "obvious": 11, "put": [11, 12, 15], "burdon": 11, "oper": [11, 15], "concurr": [11, 14], "overal": [11, 15], "exclusivelu": 11, "reserv": 11, "faster": 11, "slower": [11, 15], "By": [11, 14, 15], "around": 11, "encount": 11, "assign": [11, 15], "doesn": [11, 13], "worri": 11, "specif": [11, 13], "stai": 11, "cleaner": 11, "extra": 11, "easier": [11, 12, 13], "debug": 11, "seen": 12, "walk": 12, "scan": 12, "non": [12, 14], "space": 12, "textual": 12, "them": 12, "usabl": 12, "forc": 12, "edit": 12, "project": 12, "itself": 12, "approach": 12, "touch": 12, "creat": [12, 13, 15], "packag": [12, 15], "numb": 12, "rand": 12, "outputfil": 12, "parameter1": 12, "parameter2": 12, "float": 12, "string": 12, "def": [12, 13], "long_funct": 12, "string_paramet": 12, "float_paramet": 12, "sleep": 12, "return": 12, "print": 12, "w": 12, "scan_data": 12, "output_str": 12, "con": 12, "cat": 12, "connect": 12, "commandarg": [12, 13], "trailingonli": [12, 13], "enough": [12, 15], "numer": [12, 13], "sai": 12, "file1": 12, "joe": 12, "23": 12, "file2": 12, "jane": 12, "file3": 12, "11": 12, "submiss": [12, 13], "scan_cod": 12, "small": [12, 15], "star": 12, "outfil": 12, "element2": 12, "element3": 12, "explicit": [12, 13], "Be": 12, "suppli": 12, "due": [12, 13], "round": 12, "represent": 12, "intend": 12, "veri": [12, 13, 15], "huge": [12, 15], "impact": 12, "cours": 12, "nest": 12, "aris": 13, "issue": 13, "modifi": 13, "sourc": 13, "sthat": 13, "empti": 13, "through": [13, 15], "serial": 13, "identifi": 13, "convert": 13, "append_result": 13, "result_fil": 13, "allr": 13, "except": 13, "filenotfounderror": 13, "script": 13, "rd": 13, "readrd": 13, "els": 13, "writerd": 13, "via": 13, "sarrai": 13, "worst": 13, "invalid": 13, "becaus": [13, 15], "written": 13, "fail": 13, "thrown": 13, "inconveni": 13, "suspici": 13, "miss": [13, 15], "conflict": 13, "simpli": 13, "lost": 13, "Or": 13, "entir": 13, "filesystem": 13, "complain": 13, "realli": [13, 15], "mean": [13, 15], "collection_job": 13, "afterok": 13, "your_array_job_id": 13, "ned": 13, "wait": 13, "manual": 13, "becom": 13, "result_fold": 13, "sprintf": 13, "directori": 13, "ollid": 13, "distinguish": 13, "resultdir": 13, "results_": 13, "slurm_job_id": 13, "dir": 13, "p": 13, "your_exampl": 13, "collectionscript": 13, "split": [13, 15], "grepl": 13, "9": 13, "sub": 13, "result_file_path": 13, "saverd": 13, "results_your_array_job_id": 13, "artifici": 13, "user": 13, "who": 13, "commun": 13, "temporari": 13, "were": 13, "unreli": 13, "wa": 13, "lucki": 13, "strang": 13, "none": 13, "reliabl": 13, "expect": 13, "home": 13, "handl": [13, 15], "server": [13, 14], "protect": 13, "against": 13, "describ": [13, 15], "develop": 13, "request": [13, 15], "modif": 13, "its": 13, "own": [13, 15], "bottleneck": [13, 15], "block": [13, 15], "problemat": 13, "unexpect": 13, "decreas": 13, "place": 14, "few": [14, 15], "constraint": 14, "pai": [14, 15], "attent": 14, "consider": 14, "hardwar": 14, "limit": 14, "quantiti": 15, "fast": 15, "ssd": 15, "drive": 15, "spin": 15, "address": 15, "spread": 15, "similar": 15, "stripe": 15, "benefit": 15, "irelev": 15, "At": 15, "themselv": 15, "cach": 15, "smaller": 15, "repetet": 15, "typic": 15, "thousand": 15, "random": 15, "contain": 15, "drastic": 15, "local": 15, "node": 15, "shard": 15, "idea": 15, "bunch": 15, "capabl": 15, "longer": 15, "network": 15, "sequenti": 15, "finish": 15, "tar": 15, "pytorch": 15, "webdataset": 15, "buffer": 15, "choos": 15, "somewhat": 15, "unit": 15, "pose": 15, "burden": 15, "startup": 15, "etc": 15, "ten": 15, "iter": 15, "total": 15, "333": 15, "hour": 15, "discrib": 15, "10000": 15, "20002": 15, "35000": 15, "whether": 15, "caus": 15, "siginific": 15, "sheer": 15, "scenario": 15, "effici": 15, "group": 15, "minimum": 15, "334": 15, "20500": 15, "earlier": 15}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"appli": 0, "k": 0, "nearest": 0, "neighbor": 0, "classif": 0, "iri": 0, "flower": 0, "data": 0, "set": 0, "import": 0, "preprocess": 0, "fit": 0, "pipelin": 0, "plot": 0, "decis": 0, "boundari": 0, "conclus": [1, 9], "recommend": [1, 9], "list": 2, "exercis": [2, 4, 6, 7], "full": 2, "exampl": [2, 7], "walkthrough": [2, 7], "parallel": [2, 3, 5, 6, 7, 8, 10, 11, 12], "1": [2, 6, 7], "add": [2, 7], "metric": [2, 7], "paramet": [2, 7], "submiss": [2, 6, 7], "solut": [2, 6, 7], "us": [2, 6], "slurm": [2, 6, 7], "arrai": [2, 6], "job": [2, 6, 8], "2": [2, 6], "creat": [2, 6, 7], "script": [2, 6, 7, 12], "run": [2, 6, 7], "tuesdai": 3, "tool": 3, "techniqu": 3, "hpc": 3, "cours": [3, 10, 14], "instanc": [3, 10, 14], "april": [3, 10, 14], "2024": [3, 10, 14], "prerequisit": [3, 10, 14], "The": [3, 10, 14], "lesson": [3, 4, 10, 14], "refer": [3, 16], "who": 3, "i": 3, "about": 3, "see": 3, "also": 3, "credit": 3, "instructor": 4, "": 4, "guid": 4, "why": [4, 5, 11], "we": 4, "teach": 4, "thi": 4, "intend": 4, "learn": 4, "outcom": 4, "time": 4, "prepar": 4, "other": 4, "practic": 4, "aspect": 4, "interest": 4, "question": 4, "you": 4, "might": 4, "get": 4, "typic": 4, "pitfal": [4, 11, 14], "motiv": [5, 11], "object": [5, 11], "all": [5, 11], "more": 6, "complex": 6, "convert": 7, "notebook": 7, "python": 7, "split": 7, "pre": 7, "process": 7, "execut": 7, "updat": 7, "code": [7, 8, 14], "cluster": 7, "build": 7, "contain": 7, "depend": 7, "flexibl": 7, "post": 7, "step": 7, "concept": 8, "embarassingli": [8, 10], "size": 8, "problem": 10, "advantag": 11, "move": 11, "schedul": [11, 15], "level": 11, "via": 12, "concurr": 13, "issu": 13, "file": [13, 15], "access": [13, 15], "databas": 13, "when": 14, "parallelis": 14, "hardwar": 15, "server": 15, "limit": 15, "limitaton": 15, "quick": 16}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Apply K nearest neighbors classification to the Iris flower data set": [[0, "apply-k-nearest-neighbors-classification-to-the-iris-flower-data-set"]], "Import": [[0, "import"]], "Preprocess data": [[0, "preprocess-data"]], "Fit pipelines and plot decision boundaries": [[0, "fit-pipelines-and-plot-decision-boundaries"]], "Conclusions and recommendations": [[1, "conclusions-and-recommendations"], [9, "conclusions-and-recommendations"]], "List of exercises": [[2, "list-of-exercises"]], "Full list": [[2, "full-list"]], "Example Walkthrough": [[2, "example-walkthrough"], [7, "example-walkthrough"]], "Parallel-1: Add the metrics as a parameter to the submission": [[2, "exercise-0"], [7, "exercise-0"]], "Solution: Parallel-1": [[2, "solution-0"], [7, "solution-0"]], "Parallelize using Slurm Array jobs": [[2, "parallelize-using-slurm-array-jobs"], [6, "parallelize-using-slurm-array-jobs"]], "Parallel-2: Create a slurm script and run it.": [[2, "exercise-0"], [6, "exercise-0"]], "Solution: Parallel-2": [[2, "solution-0"], [6, "solution-0"]], "Tuesdays tools and techniques for HPC - Parallelization": [[3, "tuesdays-tools-and-techniques-for-hpc-parallelization"]], "Course instance in April 2024": [[3, null], [10, null], [14, null]], "Prerequisites": [[3, "prerequisites-0"], [10, "prerequisites-0"], [14, "prerequisites-0"]], "The lesson": [[3, null], [10, null], [14, null]], "Reference": [[3, null]], "Who is the course for?": [[3, "who-is-the-course-for"]], "About the course": [[3, "about-the-course"]], "See also": [[3, "see-also"]], "Credits": [[3, "credits"]], "Instructor\u2019s guide": [[4, "instructor-s-guide"]], "Why we teach this lesson": [[4, "why-we-teach-this-lesson"]], "Intended learning outcomes": [[4, "intended-learning-outcomes"]], "Timing": [[4, "timing"]], "Preparing exercises": [[4, "preparing-exercises"]], "Other practical aspects": [[4, "other-practical-aspects"]], "Interesting questions you might get": [[4, "interesting-questions-you-might-get"]], "Typical pitfalls": [[4, "typical-pitfalls"]], "Motivation": [[5, "motivation"], [11, "motivation"]], "Objectives": [[5, "objectives-0"], [11, "objectives-0"]], "Why parallelize at all": [[5, "why-parallelize-at-all"], [11, "why-parallelize-at-all"]], "Exercise 1": [[6, "exercise-1"], [7, "exercise-1"]], "More complex submission scripts": [[6, "more-complex-submission-scripts"]], "Convert the notebook to a python script": [[7, "convert-the-notebook-to-a-python-script"]], "Split into a pre-processing and a execution script": [[7, "split-into-a-pre-processing-and-a-execution-script"]], "Update code to run on a cluster": [[7, "update-code-to-run-on-a-cluster"]], "Build a container for dependencies": [[7, "build-a-container-for-dependencies"]], "Create a slurm script to run the code": [[7, "create-a-slurm-script-to-run-the-code"]], "Updating the code for parallel execution (and flexibility)": [[7, "updating-the-code-for-parallel-execution-and-flexibility"]], "Update the slurm scripts": [[7, "update-the-slurm-scripts"]], "Build a submission script": [[7, "build-a-submission-script"]], "Post processing steps": [[7, "post-processing-steps"]], "Concepts": [[8, "concepts"]], "Embarassingly parallel code": [[8, "embarassingly-parallel-code"]], "Size of jobs": [[8, "size-of-jobs"]], "Embarassingly Parallel Problems": [[10, "embarassingly-parallel-problems"]], "Advantages and pitfalls of parallelization": [[11, "advantages-and-pitfalls-of-parallelization"]], "Moving the parallelization to the scheduler level": [[11, "moving-the-parallelization-to-the-scheduler-level"]], "Parallelize via a script": [[12, "parallelize-via-a-script"]], "Concurrency issues": [[13, "concurrency-issues"]], "Concurrent File Access": [[13, "concurrent-file-access"]], "Concurrent database access": [[13, "concurrent-database-access"]], "Pitfalls when parallelising code": [[14, "pitfalls-when-parallelising-code"]], "Hardware/Server limitations": [[15, "hardware-server-limitations"]], "File access limitatons": [[15, "file-access-limitatons"]], "Scheduling limitations": [[15, "scheduling-limitations"]], "Quick Reference": [[16, "quick-reference"]]}, "indexentries": {}})