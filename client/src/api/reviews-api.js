import * as requester from './requester';

const BASE_URL = 'http://localhost:3030/data/reviews';

const getAll = async (movieId) => {
    const params = new URLSearchParams({
        where: `movieId="${movieId}"`,
        load: 'author=_ownerId:users',
    });

    const reviewsResult = await requester.get(`${BASE_URL}?${params.toString()}`);

    return reviewsResult;
};

const getOne = async (reviewId) => {
    const reviewResult = await requester.get(`${BASE_URL}/${reviewId}`);

    return reviewResult;
};

const getPerUser = async (userId) => {
    const params = new URLSearchParams({
        where: `_ownerId="${userId}"`,
        load: 'movie=movieId:movies',
    });

    const reviewsResult = await requester.get(`${BASE_URL}?${params.toString()}`);

    return reviewsResult;
}

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
    getPerUser,
    create,
    deleteOne,
    edit,
};

export default reviewsAPI;