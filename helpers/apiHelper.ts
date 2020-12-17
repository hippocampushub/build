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
        console.log('@@@@@error');
        console.log(error);
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
        console.log('@@@@@error');
        console.log(error);
    }
    return {};
}

export {
    getConfig,
    getMenuItems,
    getHomePage,
    getPost
}
