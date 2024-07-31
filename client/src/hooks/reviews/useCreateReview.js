import reviewsAPI from "../../api/reviews-api";

export default function useCreateReview() {
    const reviewCreateHandler = (reviewData) => reviewsAPI.create(reviewData);

    return reviewCreateHandler;
}