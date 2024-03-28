args <- commandArgs(trailingOnly = TRUE)
folder_path <- args[1]

data_array <- list()
files <- list.files(folder_path)

for (filename in files) {
if (grepl("^result_[0-9]+\\.rds$", filename)) {
    index <- as.numeric(sub("^result_([0-9]+)\\.rds$", "\\1", filename))
    file_path <- file.path(folder_path, filename)
    data_array[[index]] <- readRDS(file_path)
}
}

# Write the data array to a result file
result_file_path <- file.path(folder_path, "result.rds")
saveRDS(data_array, result_file_path)
