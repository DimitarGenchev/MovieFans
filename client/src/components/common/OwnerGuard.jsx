import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import useGetOneMovie from "../../hooks/movies/useGetOneMovie";
import { Navigate, Outlet, useParams } from "react-router-dom";
import moviesAPI from "../../api/movies-api";

export default function OwnerGuard() {
    const { userId } = useAuthContext();
    const { movieId } = useParams();
    const [movie] = useGetOneMovie();
    const isOwner = userId === movie._ownerId;

    return isOwner ? <Outlet /> : <Navigate to={`/movies/${movieId}/details`} />;
}