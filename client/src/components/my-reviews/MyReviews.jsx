import useGetUserReviews from "../../hooks/reviews/useGetUserReviews";
import Card from 'react-bootstrap/Card';

export default function MyReviews() {
    const [reviews] = useGetUserReviews();

    return (
        <div className="row g-4 mx-5">
            {reviews.length > 0
                ? reviews.map(review => (
                    <div key={review._id} className="col-lg-2 col-md-4 col-sm-6">
                        <Card key={review._id} className="mb-4">
                            <Card.Header>{review.movie.title}</Card.Header>
                            <Card.Body>
                                <Card.Title>{review.rating}/5</Card.Title>
                                <Card.Text>{review.comment}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))
                : <h1>You haven't reviewed any movies yet!</h1>
            }
        </div>
    );
}