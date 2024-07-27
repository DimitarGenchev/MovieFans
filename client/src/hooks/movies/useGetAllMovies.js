import moviesAPI from '../../api/movies-api';
import { useEffect, useState } from "react";

export default function useGetAllMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            const moviesResult = await moviesAPI.getAll();

            setMovies(moviesResult);
        })();
    }, []);

    return [movies, setMovies];
}