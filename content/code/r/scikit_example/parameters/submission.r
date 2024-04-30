# Define the inputs arrays
neighbors <- c(1,2,4,8,16,32,64)

# Define a function to run the system command "echo World"
run_echo_world <- function() {
  for (i in seq_along(neighbors)) {
    # Extract elements at the current index from each array
    element1 <- as.character(neighbors[i])        
    # Build the command line
    command <- paste("echo", "submission.sh", element1, collapse = " ")    
    system(command)
  }
  
}

# Call the function
run_echo_world()
