import * as requester from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/movies'

export const getAll = async () => {
    const moviesResponse = await requester.get(BASE_URL);
    const moviesResult = Object.values(moviesResponse);

    return moviesResult;
};

export const getOne = async (movieId) => {
    const movieResult = await requester.get(`${BASE_URL}/${movieId}`);

    return movieResult;
};

export const create = async (data) => {
    return await requester.post(BASE_URL, data);
}

export const deleteOne = async (movieId) => {
    return await requester.del(`${BASE_URL}/${movieId}`);
};

export const edit = async (gameId, data) => {
    return await requester.put(`${BASE_URL}/${gameId}`, data);
}