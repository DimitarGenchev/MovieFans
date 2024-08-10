import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGetUserReviews from "../../hooks/reviews/useGetUserReviews";
import Card from 'react-bootstrap/Card';
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function MyReviews() {
    const [reviews] = useGetUserReviews();

    return (
        <div className="row g-4 mx-5">
            <h1>My reviews</h1>

            {reviews.length > 0
                ? reviews.map(review => (
                    <div key={review._id} className="col-lg-2 col-md-4 col-sm-6">
                        <Card key={review._id} className="mb-4">
                            <Card.Header>{review.movie.title}</Card.Header>
                            <Card.Body>
                                <Card.Title>{review.rating}/5 <FontAwesomeIcon icon={faStar} color="#cccc00" /></Card.Title>
                                <Card.Text>{review.comment}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))
                : <p className="fs-2">You haven't reviewed any movies yet!</p>
            }
        </div>
    );
}