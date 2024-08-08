import moviesAPI from '../../api/movies-api';
import { useEffect, useState } from "react";

export default function useGetAllMovies(query) {
    const [movies, setMovies] = useState([]);
    const [totalMoviesCount, setTotalMoviesCount] = useState(0);

    useEffect(() => {
        (async () => {
            const moviesResult = await moviesAPI.getSearch(query);
            const countResult = await moviesAPI.getCount({ search: query.search, criteria: query.criteria });

            setMovies(moviesResult);
            setTotalMoviesCount(countResult);
        })();
    }, [query]);

    return [movies, totalMoviesCount, setMovies];
}