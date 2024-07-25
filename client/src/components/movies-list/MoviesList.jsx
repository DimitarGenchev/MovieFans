import MovieCard from "./movie-card/MovieCard";
import moviesAPI from '../../api/movies-api';
import { useEffect, useState } from "react";

export default function MoviesList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            const moviesResult = await moviesAPI.getAll();

            setMovies(moviesResult);
        })();
    }, []);

    return (
        <div className="row g-4 mx-5">
            {movies.map(movie => (
                <div key={movie._id} className="col-lg-2 col-md-4 col-sm-6">
                    <MovieCard {...movie} />
                </div>
            ))}
        </div>
    );
}