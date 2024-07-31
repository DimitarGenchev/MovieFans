import * as requester from './requester';

const BASE_URL = 'http://localhost:3030/data/reviews';

const getAll = async (movieId) => {
    const params = new URLSearchParams({
        where: `movieId="${movieId}"`
    });

    const reviewsResult = await requester.get(`${BASE_URL}?${params.toString()}`);

    return reviewsResult;
};

const getOne = async (reviewId) => {
    const reviewResult = await requester.get(`${BASE_URL}/${reviewId}`);

    return reviewResult;
};

const create = async (data) => {
    return await requester.post(BASE_URL, data);
};

const deleteOne = async (reviewId) => {
    return await requester.del(`${BASE_URL}/${reviewId}`);
};

const edit = async (reviewId, data) => {
    return await requester.put(`${BASE_URL}/${reviewId}`, data);
};

const reviewsAPI = {
    getAll,
    getOne,
    create,
    deleteOne,
    edit,
};

export default reviewsAPI;