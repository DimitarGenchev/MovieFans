import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function MovieReviews({
    reviews,
}) {
    return (
        <Container style={{ maxWidth: '800px' }}>
            <h1 className="mb-4">Movie reviews</h1>

            {reviews.length > 0
                ? (reviews.map(review => (
                    <Card key={review._id} className="mb-4">
                        <Card.Header>{review.author.username} - {review.author.email}</Card.Header>
                        <Card.Body>
                            <Card.Title>{review.rating}/5 <FontAwesomeIcon icon={faStar} color="#cccc00" /></Card.Title>
                            <Card.Text>{review.comment}</Card.Text>
                        </Card.Body>
                    </Card>
                )))
                : <h2 className="mb-4">There are no reviews yet!</h2>
            }
        </Container>
    );
}