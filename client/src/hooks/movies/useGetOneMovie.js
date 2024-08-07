import { useEffect, useState } from 'react';
import moviesAPI from '../../api/movies-api';

export default function useGetOneMovie(movieId) {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const movieResult = await moviesAPI.getOne(movieId);

            setMovie(movieResult);
            setIsLoading(false);
        })();
    }, []);

    return [movie, isLoading, setMovie];
}