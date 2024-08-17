import { useEffect, useState } from "react";
import reviewsAPI from "../../api/reviews-api";
import { useAuthContext } from "../../contexts/AuthContext";

export default function useGetUserReviews() {
    const { userId } = useAuthContext();
    const [reviews, setReviews] = useState([]);
    const [updateFlag, setUpdateFlag] = useState(0);

    const triggerRefetch = () => {
        setUpdateFlag(value => value + 1);
    };

    useEffect(() => {
        (async () => {
            const reviewsResult = await reviewsAPI.getPerUser(userId);

            setReviews(reviewsResult);
        })();
    }, [updateFlag]);

    return [reviews, triggerRefetch, setReviews];
}