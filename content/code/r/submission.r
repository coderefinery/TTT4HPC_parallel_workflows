# Define the inputs arrays
outfiles <- c("File1", "File2", "File3")
names <- c("Joe", "Jane", "Doe")
numbers <- c(1.23, 23.5, 11.5)

# Define a function to run the system command "echo World"
run_echo_world <- function() {
  for (i in seq_along(outfiles)) {
    # Extract elements at the current index from each array
    element1 <- outfiles[i]
    element2 <- names[i]
    element3 <- as.character(numbers[i])
    # Build the command line
    command <- paste("echo", "submission.sh", element1, element2, element3, collapse = " ")    
    system(command)
  }
  
}

# Call the function
run_echo_world()
