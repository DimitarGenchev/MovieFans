import { useEffect, useState } from "react";
import reviewsAPI from "../../api/reviews-api";

export default function useGetAverageRating(movieId) {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        (async () => {
            const ratingsResult = await reviewsAPI.getAllRatings(movieId);

            setRatings(ratingsResult);
        })();
    }, []);

    const ratingValues = ratings.map(item => item.rating);
    const sum = ratingValues.reduce((accumulator, current) => accumulator + current, 0);
    const average = sum / ratingValues.length;

    return average ? average.toFixed(1) : '';
}