import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import useForm from '../../hooks/useForm';
import { useParams } from 'react-router-dom';
import useCreateReview from '../../hooks/reviews/useCreateReview';
import { useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';

const initialValues = {
    rating: '1',
    comment: '',
};

export default function ReviewCreate({
    triggerRefetch,
    reviews,
}) {
    const { movieId } = useParams();
    const { userId } = useAuthContext();
    const createReview = useCreateReview();
    const [error, setError] = useState('');

    const createReviewHandler = async ({ rating, comment }) => {
        for (const review of reviews) {
            if (review._ownerId === userId) {
                return setError('You have already reviewed this movie!');
            }
        }

        if (parseFloat(rating) < 1 || parseFloat(rating) > 5) {
            return setError('Rating should be between 1 and 5!');
        }

        try {
            await createReview({ movieId, rating: parseFloat(rating), comment });
            triggerRefetch();
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    const [formValues, changeHandler, submitHandler] = useForm(initialValues, createReviewHandler);

    return (
        <Container style={{ maxWidth: '800px' }} className="mb-5">
            <h1 className="mb-4">Leave a review</h1>

            <Form onSubmit={submitHandler} noValidate>
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="number" name="rating" value={formValues.rating} onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows="5" name="comment" value={formValues.comment} onChange={changeHandler} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add review
                </Button>

                {error && (
                    <Form.Group className="mt-3">
                        <p className="text-danger fw-bold fs-5">{error}</p>
                    </Form.Group>
                )}
            </Form>
        </Container>
    );
}