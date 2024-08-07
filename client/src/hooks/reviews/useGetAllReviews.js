import { useEffect, useRef, useState } from "react";
import reviewsAPI from "../../api/reviews-api";

export default function useGetAllReviews(movieId) {
    const [reviews, setReviews] = useState([]);
    const [updateFlag, setUpdateFlag] = useState(0);

    const triggerRefetch = () => {
        setUpdateFlag(value => value + 1);
    };

    useEffect(() => {
        (async () => {
            const reviewsResult = await reviewsAPI.getAll(movieId);

            setReviews(reviewsResult);
        })();
    }, [movieId, updateFlag]);

    return [reviews, triggerRefetch, setReviews];
}