import sys
import time

outputfile = sys.argv[1]
parameter1 = sys.argv[2]
parameter2 = float(sys.argv[3])


# Simple function to combine the string and float parameter
def long_function(string_parameter, float_parameter):
    time.sleep(60)
    return f"{string_parameter} : {float_parameter} "


# calculate the result from the input parameters
result = long_function(parameter1, parameter2)

# print the result file
with open(outputfile, "w") as f:
    f.write(result)
