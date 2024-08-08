import { useState } from "react";
import useGetAllMovies from "../../hooks/movies/useGetAllMovies";
import MovieCard from "../movie-card/MovieCard";
import Search from "../search/Search";
import Paginator from "../pagination/Pagination";

export default function MoviesList() {
    const [query, setQuery] = useState({});
    const [movies] = useGetAllMovies(query);

    return (
        <>
            <Search setQuery={setQuery} />

            <div className="row g-4 mx-5">
                {movies.length > 0
                    ? movies.map(movie => (
                        <div key={movie._id} className="col-lg-2 col-md-4 col-sm-6">
                            <MovieCard {...movie} />
                        </div>
                    ))
                    : <h1>There are no movies yet!</h1>
                }
            </div>

            <Paginator />
        </>
    );
}