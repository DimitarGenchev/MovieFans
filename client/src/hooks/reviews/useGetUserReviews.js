import { useEffect, useState } from "react";
import reviewsAPI from "../../api/reviews-api";
import { useAuthContext } from "../../contexts/AuthContext";

export default function useGetUserReviews() {
    const { userId } = useAuthContext();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        (async () => {
            const reviewsResult = await reviewsAPI.getPerUser(userId);

            setReviews(reviewsResult);
        })();
    }, []);

    return [reviews, setReviews];
}