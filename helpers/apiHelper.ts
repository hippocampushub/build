import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:5000';

const endpoints = {
    search: {
        datasets: () => '/search/datasets',
        models: () => '/search/models'
    }
}

interface ISearchParams {
    query?: string,
    region?: string
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
    region
}: ISearchParams) => {
    const url = `${BACKEND_URL}${endpoints.search.datasets()}`;
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

export {
    searchDatasets,
    searchModels,
}
