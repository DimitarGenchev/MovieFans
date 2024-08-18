import useGetUserMovies from "../../hooks/movies/useGetUserMovies";
import MovieCard from "../movie-card/MovieCard";
import styles from './MyMovies.module.css';

export default function MyMovies() {
    const [movies] = useGetUserMovies();

    return (
        <>
            <h1 className={`text-center mb-5 ${styles.title}`}>My movies</h1>

            <div className="row g-4 mx-5 mb-5 align-items-stretch">
                {movies.length > 0
                    ? movies.map(movie => (
                        <div key={movie._id} className="col-lg-2 col-md-4 col-sm-6 d-flex">
                            <MovieCard {...movie} className="flex-grow-1" />
                        </div>
                    ))
                    : <p className="fs-2">You haven't added any movies yet!</p>
                }
            </div>
        </>
    );
}