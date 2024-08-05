import { useAuthContext } from '../contexts/AuthContext';
import * as requester from './requester';

const BASE_URL = 'http://localhost:3030/data/movies';

const getAll = async () => {
    const moviesResult = await requester.get(BASE_URL);

    return moviesResult;
};

const getOne = async (movieId) => {
    const moviesResult = await requester.get(`${BASE_URL}/${movieId}`);

    return moviesResult;
};

const getPerUser = async (userId) => {
    const params = new URLSearchParams({
        where: `_ownerId="${userId}"`,
    });

    const moviesResult = await requester.get(`${BASE_URL}?${params.toString()}`);

    return moviesResult;
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
    create,
    deleteOne,
    edit,
};

export default moviesAPI;