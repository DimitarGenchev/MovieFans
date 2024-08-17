import { useState } from "react";
import useGetAllMovies from "../../hooks/movies/useGetAllMovies";
import MovieCard from "../movie-card/MovieCard";
import Search from "../search/Search";
import Pagination from "../pagination/Pagination";

export default function MoviesList() {
    const [query, setQuery] = useState({
        search: '',
        criteria: '',
        sort: '',
        pageSize: 5,
        offset: 0,
    });
    const [movies, totalMoviesCount] = useGetAllMovies(query);
    const [currentPage, setCurrentPage] = useState(1);
    
    return (
        <>
            <Search setQuery={setQuery} setCurrentPage={setCurrentPage} />

            <div className="row g-4 mx-5 d-flex align-items-stretch">
                {movies.length > 0
                    ? movies.map(movie => (
                        <div key={movie._id} className="col-lg-2 col-md-4 col-sm-5 d-flex">
                            <MovieCard {...movie} className="flex-grow-1" />
                        </div>
                    ))
                    : <h1>There are no movies yet!</h1>
                }
            </div>

            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageSize={query.pageSize}
                setQuery={setQuery}
                totalPages={Math.ceil(totalMoviesCount / query.pageSize)}
            />
        </>
    );
}