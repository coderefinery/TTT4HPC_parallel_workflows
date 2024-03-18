# Function to print name and number to the output file
scan_data <- function(outputfile, name, number) {
  Sys.sleep(60)
  # Create the output string
  output_string <- paste(name, ":", number)

  # Open the output file for writing
  con <- file(outputfile, open = "w")

  # Write the output string to the file
  cat(output_string, file = con)

  # Close the file connection
  close(con)
}

# Command line arguments
args <- commandArgs(trailingOnly = TRUE)

# Check if there are enough command line arguments
# Extract the arguments
outputfile <- args[1]
name <- args[2]
number <- as.numeric(args[3])

# Call the function
scan_data(outputfile, name, number)
