const getPageUrl = (url: string) => {
    if (!!url && url?.trim()?.length > 0 && url.startsWith('http')) {
        return url;
    } else {
        return `${process.env.BASE_URL}${url}`;
    }
}

export {
    getPageUrl
}