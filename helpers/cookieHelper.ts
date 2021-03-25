import Cookies from 'js-cookie';

const getCookie = (key: string) => {
    return Cookies.get(key) ?? null;
}

export {
    getCookie
}