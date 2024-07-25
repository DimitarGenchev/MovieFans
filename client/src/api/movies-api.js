import * as requester from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/movies'

const getAll = async () => {
    const moviesResponse = await requester.get(BASE_URL);
    const moviesResult = Object.values(moviesResponse);

    return moviesResult;
};

const getOne = async (movieId) => {
    const movieResult = await requester.get(`${BASE_URL}/${movieId}`);

    return movieResult;
};

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
    create,
    deleteOne,
    edit,
};

export default moviesAPI;