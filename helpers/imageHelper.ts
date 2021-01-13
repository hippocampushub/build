import constants from "../constants";

function getImageUrlByPath(path: any) {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    const imagePath = `${constants.BASE_URL}${path}`;
    return imagePath;
}

function getImageUrl(image: any) {
    if (!image || !image.url) return null;
    if (image.url.startsWith('http')) return image.url;
    const imagePath = `${constants.BASE_URL}${image.url}`;
    return imagePath;
}

export {
    getImageUrlByPath,
    getImageUrl
}
