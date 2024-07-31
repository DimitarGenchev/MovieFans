import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import useGetAllReviews from "../../hooks/reviews/useGetAllReviews";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews] = useGetAllReviews(movieId);

    return (
        <Container style={{ maxWidth: '800px' }}>
            <h1 className="mb-4">Movie reviews</h1>

            {reviews.length > 0
                ? (reviews.map(review =>(
                    <Card key={review._id} className="mb-4">
                        <Card.Header>{review.author.email}</Card.Header>
                        <Card.Body>
                            <Card.Title>{review.rating}/5</Card.Title>
                            <Card.Text>{review.comment}</Card.Text>
                        </Card.Body>
                    </Card>
                )))
                : <h2 className="mb-4">There are no reviews yet!</h2>
            }
        </Container>
    );
}