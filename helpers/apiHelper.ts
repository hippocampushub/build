import axios from 'axios';
import {IFilterSearchParams, ISearchParams} from "../interfaces";

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:5000';

const endpoints = {
    search: {
        filters: (indexName: string) => `/filters/${indexName}`,
        types: (indexName: string) => `/types/${indexName}`,
        datasets: () => '/search/dataset',
        models: () => '/search/model'
    },
    download: {
        datasets: () => '/download/dataset',
        models: () => '/download/model'
    }
}

const _parseSuccessfullResponse = (response) => {
    try {
        if (!!response && response.status === 200) {
            return response.data;
        }
        return null;
    } catch (error) {
        throw error;
    }
}

const searchDatasets = async ({
    data_type = null,
    query,
    filters,
    page = 0,
    hitsPerPage = 20
}: ISearchParams) => {
    const url = `${BACKEND_URL}${endpoints.search.datasets()}/${page}/${hitsPerPage}`;
    try {
        const response = await axios.post(url, {
            data_type,
            query,
            filters
        });
        return _parseSuccessfullResponse(response);
    } catch (error) {
        console.error('@@@@error retrieving datasets');
        console.error(error);
    }

}

const searchModels = async ({
    query,
    filters,
    page = 0,
    hitsPerPage = 20
}: ISearchParams) => {
    const url = `${BACKEND_URL}${endpoints.search.models()}/${page}/${hitsPerPage}`;
    try {
        const response = await axios.post(url, {
            query,
            filters
        });
        return _parseSuccessfullResponse(response);
    } catch (error) {
        console.error('@@@@error retrieving datasets');
        console.error(error);
    }
}

const getFilters = async({indexName, type}: IFilterSearchParams) => {
    let url = `${BACKEND_URL}${endpoints.search.filters(indexName)}`;
    if (!!type) {
        url = `${url}/${type}`;
    }
    try {
        const response = await axios.get(url);
        return _parseSuccessfullResponse(response);
    } catch (error) {
        console.error('@@@@error retrieving data filters');
        console.error(error);
    }
}

const getTypes = async(indexName: string) => {
    const url = `${BACKEND_URL}${endpoints.search.types(indexName)}`;
    try {
        const response = await axios.get(url);
        return _parseSuccessfullResponse(response);
    } catch (error) {
        console.error('@@@@@error retrieving data types');
        console.error(error)
    }
}

const downloadAllDatasets = (type) => {
    let url = `${BACKEND_URL}${endpoints.download.datasets()}/all`;
    if (!!type && type.trim().length > 0) {
        url += `?data_type=${type}`;
    }
    return url;
}

const downloadDatasets = (ids=[]) => {
    const url = `${BACKEND_URL}${endpoints.download.datasets()}?ids=${ids.join(',')}`;
    return url;
}

const downloadAllModels = () => {
    const url = `${BACKEND_URL}${endpoints.download.datasets()}/all`;
    return url;
}

const downloadModels = (ids=[]) => {
    const url = `${BACKEND_URL}${endpoints.download.datasets()}?ids=${ids.join(',')}`;
    return url;
}

export {
    searchDatasets,
    searchModels,
    getFilters,
    getTypes,
    downloadAllDatasets,
    downloadDatasets,
    downloadAllModels,
    downloadModels
}
