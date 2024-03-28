library(processing)

append_result <- function(result, index) {
  result_file <- "results.rds"
  if (file.exists(result_file)) {
    allres <- readRDS(result_file)
  } else {
    allres <- list()
  }
  allres[[as.character(index)]] <- result
  writeRDS(allres, file = result_file)
}

# Assuming load_and_preprocess_data and calculate are functions from processing library

# Load and preprocess data
data <- load_and_preprocess_data()

# Get index from command line argument (assuming this R script is called with the index as an argument)
args <- commandArgs(trailingOnly = TRUE)
index <- as.integer(args[1])

# Calculate result
res <- calculate(data[[index]])

# Append result to the result file
append_result(res, index)