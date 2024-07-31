import { useEffect, useState } from "react";
import reviewsAPI from "../../api/reviews-api";

export default function useGetAllReviews(movieId) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        (async () => {
            const reviewsResult = await reviewsAPI.getAll(movieId);

            setReviews(reviewsResult);
        })();
    }, [movieId]);

    return [reviews, setReviews];
}