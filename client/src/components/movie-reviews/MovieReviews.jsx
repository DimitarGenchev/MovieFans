import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../contexts/AuthContext";

export default function MovieReviews({
    reviews,
}) {
    const { userId } = useAuthContext();

    return (
        <Container style={{ maxWidth: '800px' }}>
            <h1 className="mb-4">Movie reviews</h1>

            {reviews.length > 0
                ? (reviews.map(review => (
                    <Card key={review._id} className="mb-4">
                        <Card.Header className="d-flex align-items-center">
                            <span>
                                {review.author.username} - {review.author.email}
                            </span>
                            {userId === review._ownerId && (
                                <Dropdown className="ms-auto">
                                    <Dropdown.Toggle>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href={`/reviews/${review._id}/edit`}>Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            )}
                        </Card.Header>
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