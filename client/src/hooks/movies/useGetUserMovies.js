import moviesAPI from '../../api/movies-api';
import { useEffect, useState } from "react";
import { useAuthContext } from '../../contexts/AuthContext';

export default function useGetUserMovies() {
    const { userId } = useAuthContext();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            const moviesResult = await moviesAPI.getPerUser(userId);

            setMovies(moviesResult);
        })();
    }, []);

    return [movies, setMovies];
}