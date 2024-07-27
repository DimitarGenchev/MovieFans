import { useEffect, useState } from 'react';
import moviesAPI from '../../api/movies-api';

export default function useGetOneMovie(movieId) {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        (async () => {
            const movieResult = await moviesAPI.getOne(movieId);

            setMovie(movieResult);
        })();
    }, []);

    return [movie, setMovie];
}