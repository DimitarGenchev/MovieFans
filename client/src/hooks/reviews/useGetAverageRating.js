import { useEffect, useState } from "react";
import reviewsAPI from "../../api/reviews-api";
import getAverageRating from "../../utils/getAverageRating";

export default function useGetAverageRating(movieId) {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        (async () => {
            const ratingsResult = await reviewsAPI.getAllRatings(movieId);

            setRatings(ratingsResult);
        })();
    }, []);

    return getAverageRating(ratings);
}