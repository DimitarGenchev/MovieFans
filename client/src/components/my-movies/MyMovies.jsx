import useGetUserMovies from "../../hooks/movies/useGetUserMovies";
import MovieCard from "../movie-card/MovieCard";

export default function MyMovies() {
    const [movies] = useGetUserMovies();

    return (
        <div className="row g-4 mx-5">
            <h1>My movies</h1>

            {movies.length > 0
                ? movies.map(movie => (
                    <div key={movie._id} className="col-lg-2 col-md-4 col-sm-6">
                        <MovieCard {...movie} />
                    </div>
                ))
                : <p className="fs-2">You haven't added any movies yet!</p>
            }
        </div>
    );
}