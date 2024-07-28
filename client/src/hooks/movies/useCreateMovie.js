import moviesAPI from "../../api/movies-api"

export default function useCreateMovie() {
    const movieCreateHandler = (movieData) => moviesAPI.create(movieData);

    return movieCreateHandler;
}