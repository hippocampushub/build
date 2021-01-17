import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:5000';

const endpoints = {
    search: {
        filters: (indexName: string) => `/filters/${indexName}`,
        datasets: () => '/search/dataset',
        models: () => '/search/model'
    },
    download: {
        datasets: () => '/download/dataset'
    }
}

interface ISearchParams {
    query?: string;
    region?: string;
    cell_type?: string;
    species?: string;
    page?: number;
    hitsPerPage?: number;
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
    query,
    region,
    cell_type,
    species,
    page = 0,
    hitsPerPage = 20
}: ISearchParams) => {
    const url = `${BACKEND_URL}${endpoints.search.datasets()}/${page}/${hitsPerPage}`;
    try {
        const response = await axios.post(url, {
            query,
            region,
            cell_type,
            species
        });
        return _parseSuccessfullResponse(response);
    } catch (error) {
        console.error('@@@@error retrieving datasets');
        console.error(error);
    }

}

const searchModels = async ({
    query,
    region
}: ISearchParams) => {
    const url = `${BACKEND_URL}${endpoints.search.models()}`;
    try {
        const response = await axios.post(url, {
            query,
            region
        });
        return _parseSuccessfullResponse(response);
    } catch (error) {
        console.error('@@@@error retrieving datasets');
        console.error(error);
    }
}

const getFilters = async(indexName: string) => {
    const url = `${BACKEND_URL}${endpoints.search.filters(indexName)}`;
    try {
        const response = await axios.get(url);
        return _parseSuccessfullResponse(response);
    } catch (error) {
        console.error('@@@@error retrieving datasets');
        console.error(error);
    }
}

const downloadAllDatasets = () => {
    const url = `${BACKEND_URL}${endpoints.download.datasets()}/all`;
    return url;
}

const downloadDatasets = (ids=[]) => {
    const url = `${BACKEND_URL}${endpoints.download.datasets()}?ids=${ids.join(',')}`;
    return url;
}

export {
    searchDatasets,
    searchModels,
    getFilters,
    downloadAllDatasets,
    downloadDatasets
}
