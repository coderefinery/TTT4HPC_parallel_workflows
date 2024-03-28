library(processing)

# Assuming load_and_preprocess_data and calculate are functions from processing library

# Load and preprocess data
data <- load_and_preprocess_data()

# Get index from command line argument (assuming this R script is called with the index as an argument)
args <- commandArgs(trailingOnly = TRUE)
index <- as.integer(args[1])
folder <- args[2]
# Calculate result
res <- calculate(data[[index]])

# Append result to the result file
writeRDS(res, file = sprintf("%s/result_%i", folder, index))
