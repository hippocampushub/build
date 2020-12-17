import axios, {AxiosRequestConfig} from 'axios';
import constants from "../constants";

export const STATUS_CODES = {
    OK: 200
}

const parseResponse = (response) => {
    if (!!response && response.status === STATUS_CODES.OK && !!response.data) {
        return response.data;
    }
    return null;
}

const getConfig = async () => {
    const url = `${constants.BASE_URL}/${constants.ENDPOINTS.config}`;
    const axiosConfig: AxiosRequestConfig = {
        url,
        method: 'get'
    }
    try {
        const response = await axios(axiosConfig);
        const result = parseResponse(response);
        if (!!result) {
            return result;
        }
        return {};
    } catch (error) {
        console.log('@@@@error');
        console.log(error);
    }
    return {};
}

const getMenuItems = async () => {
    const url = `${constants.BASE_URL}/${constants.ENDPOINTS.menuItems}`;
    const axiosConfig: AxiosRequestConfig = {
        url,
        method: 'get'
    }
    try {
        const response = await axios(axiosConfig);
        const result = parseResponse(response);
        if (!!result) {
            return result;
        }
        return [];
    } catch (error) {

    }
    return [];
}

const getNewsList = async () => {
    const url = `${constants.BASE_URL}/${constants.ENDPOINTS.posts}?_sort=created_at:DESC`;
    const axiosConfig: AxiosRequestConfig = {
        url,
        method: 'get'
    };
    try {
        const response = await axios(axiosConfig);
        const result = parseResponse(response);
        if (!!result) {
            return result;
        }
        return [];
    } catch (error) {

    }
    return [];
}

const getHomePage = async () => {
    const url = `${constants.BASE_URL}/${constants.ENDPOINTS.homePage}`;
    const axiosConfig: AxiosRequestConfig = {
        url,
        method: 'get'
    };
    try {
        const response = await axios(axiosConfig);
        const result = parseResponse(response);
        if (!!result) {
            return result;
        }
        return {};
    } catch (error) {
        console.log('@@@@@error');
        console.log(error);
    }
    return {};
}

const getPage = async (slug: string) => {
    const url = `${constants.BASE_URL}/${constants.ENDPOINTS.pages}/slug/${slug}`;
    const axiosConfig: AxiosRequestConfig = {
        url,
        method: 'get'
    };
    try {
        const response = await axios(axiosConfig);
        const result = parseResponse(response);
        if (!!result) {
            return result;
        }
        return {};
    } catch (error) {

    }
    return {};
}

const getPost = async (slug: string) => {
    const url = `${constants.BASE_URL}/${constants.ENDPOINTS.posts}/slug/${slug}`;
    const axiosConfig: AxiosRequestConfig = {
        url,
        method: 'get'
    };
    try {
        const response = await axios(axiosConfig);
        const result = parseResponse(response);
        if (!!result) {
            return result;
        }
        return {};
    } catch (error) {

    }
    return {};
}

const sendMessage = async (name: string, email: string, message: string) => {
    const url = `${constants.BASE_URL}/${constants.ENDPOINTS.contacts}`;
    const axiosConfig: AxiosRequestConfig = {
        url,
        method: 'post',
        data: {
            name,
            email,
            message
        }
    };
    try {
        const response = await axios(axiosConfig);
        const result = parseResponse(response);
        if (!!result) {
            return result;
        }
        return {};
    } catch (error) {

    }
    return {};
}

export {
    getConfig,
    getMenuItems,
    getHomePage,
    getPage,
    getPost,
    getNewsList,
    sendMessage
}
