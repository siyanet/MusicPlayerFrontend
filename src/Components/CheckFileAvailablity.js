

export const checkFileAvailability = (fileUrl, onSuccess, onError) => {
    // Fetch the file and check its status
    fetch(fileUrl)
        .then(response => {
            if (response.ok) {
                onSuccess(fileUrl); // Invoke onSuccess callback with the valid file URL
            } else {
                onError(`Failed to load file at ${fileUrl}. Status: ${response.status}`);
            }
        })
        .catch(error => {
            onError(`Failed to fetch file: ${error}`);
        });
};
