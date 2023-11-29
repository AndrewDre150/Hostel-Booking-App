export const removeOneImagesPath = (url) => {
    if (url === null) return ''
    // Find the index of the first occurrence of '/images/'
    var index = url.indexOf('/images/');

    // If '/images/' is found, remove it; otherwise, return the original URL
    if (index !== -1) {
        var modifiedUrl = url.slice(0, index) + url.slice(index + '/images/'.length);
        
        // Ensure there's a "/" after "8000"
        if (modifiedUrl.indexOf("8000") !== -1) {
            modifiedUrl = modifiedUrl.replace("8000", "8000/");
        }

        console.log(modifiedUrl);
        return modifiedUrl;
    } else {
        console.log("'/images/' not found in the URL");
        return url;
    }
}