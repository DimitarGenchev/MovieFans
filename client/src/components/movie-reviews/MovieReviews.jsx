import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../contexts/AuthContext";
import ReviewDelete from "../review-delete/ReviewDelete";
import { useState } from "react";

export default function MovieReviews({
    reviews,
    triggerRefetch,
}) {
    const { userId } = useAuthContext();
    const [deleteReviewId, setDeleteReviewId] = useState(null);

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
                                <>
                                    <Dropdown className="ms-auto">
                                        <Dropdown.Toggle variant="secondary"/>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href={`/reviews/${review._id}/edit`}>Edit</Dropdown.Item>
                                            <Dropdown.Item onClick={() => setDeleteReviewId(review._id)}>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <ReviewDelete
                                        showModal={deleteReviewId === review._id}
                                        closeModal={() => setDeleteReviewId(null)}
                                        reviewId={review._id}
                                        triggerRefetch={triggerRefetch}
                                    />
                                </>
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