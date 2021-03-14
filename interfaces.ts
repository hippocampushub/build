export interface IFilterSearchParams {
    indexName?: string,
    type?: string
}

export interface ISearchParams {
    data_type?: string|null;
    query?: string;
    filters?: any|null;
    page?: number;
    hitsPerPage?: number;
}