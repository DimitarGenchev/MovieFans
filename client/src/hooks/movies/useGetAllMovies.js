import moviesAPI from '../../api/movies-api';
import { useEffect, useState } from "react";

export default function useGetAllMovies(query) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            let moviesResult;

            if (query.criteria) {
                moviesResult = await moviesAPI.getSearch(query);
            } else {
                moviesResult = await moviesAPI.getAll();
            }

            setMovies(moviesResult);
        })();
    }, [query]);

    return [movies, setMovies];
}