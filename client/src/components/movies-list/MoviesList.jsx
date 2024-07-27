import useGetAllMovies from "../../hooks/movies/useGetAllMovies";
import MovieCard from "./movie-card/MovieCard";

export default function MoviesList() {
    const [movies] = useGetAllMovies();

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