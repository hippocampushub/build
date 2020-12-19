import constants from "../constants";

function getImageUrl(image: any) {
    if (!image || !image.url) return null;
    if (image.url.startsWith('http')) return image.url;
    const imagePath = image.url;
    return imagePath;
}

export {
    getImageUrl
}
