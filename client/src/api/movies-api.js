import * as requester from './requester';

const BASE_URL = 'http://localhost:3030/data/movies';

const getAll = async () => {
    const moviesResult = await requester.get(BASE_URL);

    return moviesResult;
};

const getOne = async (movieId) => {
    const params = new URLSearchParams({
        load: 'owner=_ownerId:users',
    });

    const moviesResult = await requester.get(`${BASE_URL}/${movieId}?${params.toString()}`);

    return moviesResult;
};

const getPerUser = async (userId) => {
    const params = new URLSearchParams({
        where: `_ownerId="${userId}"`,
    });

    const moviesResult = await requester.get(`${BASE_URL}?${params.toString()}`);

    return moviesResult;
}

const getSearch = async (query) => {
    let params = '';

    if (query.criteria) {
        params += `where=${query.criteria} LIKE "${query.search}"`;
    }

    if (query.sort) {
        if (params) {
            params += '&';
        }

        params += `sortBy=${query.sort}`;
    }

    if (query.pageSize) {
        if (params) {
            params += '&';
        }

        if (query.offset) {
            params += `offset=${query.offset}&`;
        }

        params += `pageSize=${query.pageSize}`;
    }
    
    const moviesResult = await requester.get(`${BASE_URL}?${params}`);

    return moviesResult;
}

const getCount = async (query) => {
    let params = '';

    if (query.criteria) {
        params += `where=${query.criteria} LIKE "${query.search}"&`;
    }

    params += 'count';

    const moviesCount = await requester.get(`${BASE_URL}?${params}`);

    return moviesCount;
}

const create = async (data) => {
    return await requester.post(BASE_URL, data);
};

const deleteOne = async (movieId) => {
    return await requester.del(`${BASE_URL}/${movieId}`);
};

const edit = async (movieId, data) => {
    return await requester.put(`${BASE_URL}/${movieId}`, data);
};

const moviesAPI = {
    getAll,
    getOne,
    getPerUser,
    getSearch,
    getCount,
    create,
    deleteOne,
    edit,
};

export default moviesAPI;