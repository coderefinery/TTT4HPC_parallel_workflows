# Conclusions and recommendations

- Adapt your code to allow it to use input parameters that can be read from the command line
- Use system calls from your language to submit jobs to avoid complex bash coding if you are not that familiar with bash
- Keep code and input variables separate, to allow reusability of code, avoid unintentional errors and keep better track of individual runs
- Be careful with concurrent things (e.g. concurrent I/O)
- Collection scripts running afterwards (it can be even scripted after the arrayjob, depends on jobid)
- Be aware on how clusters store data (parallel I/O can be a bottleneck, particularily repetetive reads of small files)
- Keeps individual jobs long enough especially if setup takes more time than computations
- Potentially build collection methods to re-combine the individual results of the parallel executions
