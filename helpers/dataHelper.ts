import axios from "axios";
import constants from "../constants";

export const STATUS_CODES = {
    OK: 200
}

const parseResponse = (response) => {
    if (!!response && response.status === 200) {
        if (!!response.data) {
            return response.data;
        }
    }
    return null;
}

const getJSONData = async (url) => {
    try {
        const response = await axios.get(url);
        const data = parseResponse(response);
        return data ?? {};
    } catch (error) {
        return {};
    }
}

const getJSONArrayData = async (url) => {
    try {
        const response = await axios.get(url);
        const data = parseResponse(response);
        return data ?? [];
    } catch (error) {
        return [];
    }
}

const getConfig = async () => {
    const url = `${constants.BASE_DATA_URL}/${constants.ENDPOINTS.config}.json`;
    return getJSONData(url);
}

const getMenuItems = async () => {
    const url = `${constants.BASE_DATA_URL}/${constants.ENDPOINTS.menuItems}.json`;
    return getJSONArrayData(url);
}

const getNewsList = async () => {
    const url = `${constants.BASE_DATA_URL}/${constants.ENDPOINTS.news}.json`;
    return getJSONData(url);
}

const getHomePage = async () => {
    const url = `${constants.BASE_DATA_URL}/${constants.ENDPOINTS.homePage}.json`;
    return getJSONData(url);
}

const getPage = async (slug: string) => {
    const url = `${constants.BASE_DATA_URL}/${constants.ENDPOINTS.pages}/${slug}.json`;
    return getJSONData(url);
}

const getPost = async (slug: string) => {
    const url = `${constants.BASE_DATA_URL}/${constants.ENDPOINTS.posts}/${slug}.json`;
    return getJSONData(url);
}

const getDataSets = async () => {
    const url = `${constants.BASE_DATA_URL}/${constants.ENDPOINTS.datasets}.json`;
    return getJSONArrayData(url);
}

const getModels = async () => {
    const url = `${constants.BASE_DATA_URL}/${constants.ENDPOINTS.models}.json`;
    return getJSONArrayData(url);
}

const sendMessage = async (name: string, email: string, message: string) => {

}

export {
    getConfig,
    getMenuItems,
    getHomePage,
    getPage,
    getPost,
    getNewsList,
    getDataSets,
    getModels
}
