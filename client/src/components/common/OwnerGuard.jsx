import { useAuthContext } from "../../contexts/AuthContext";
import useGetOneMovie from "../../hooks/movies/useGetOneMovie";
import { Navigate, Outlet, useParams } from "react-router-dom";

export default function OwnerGuard() {
    const { userId } = useAuthContext();
    const { movieId } = useParams();
    const [movie] = useGetOneMovie(movieId);
    const isOwner = userId === movie._ownerId;

    return isOwner ? <Outlet /> : <Navigate to={`/movies/${movieId}/details`} />;
}