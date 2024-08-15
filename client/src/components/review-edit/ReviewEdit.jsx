import { useEffect, useState } from "react";
import reviewsAPI from "../../api/reviews-api";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Button from "react-bootstrap/esm/Button";

export default function ReviewEdit() {
    const [formValues, setFormValues] = useState({
        rating: '',
        comment: '',
    });

    const { reviewId } = useParams();
    const [movieId, setMovieId] = useState('');
    const { userId } = useAuthContext();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const reviewResult = await reviewsAPI.getOne(reviewId);

            setMovieId(reviewResult.movieId);

            if (userId !== reviewResult._ownerId) {
                navigate(-1);
            }

            setFormValues({
                rating: reviewResult.rating,
                comment: reviewResult.comment,
            });
        })();
    }, []);

    const changeHandler = (e) => {
        setFormValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));
    };

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        if (!formValues.rating) {
            return setError('Rating cannot be empty!');
        }

        if (parseFloat(formValues.rating) < 1 || parseFloat(formValues.rating) > 5) {
            return setError('Rating should be between 1 and 5!');
        }

        try {
            await reviewsAPI.edit(
                reviewId,
                {
                    movieId,
                    rating: parseFloat(formValues.rating),
                    comment: formValues.comment,
                    _id: reviewId,
                }
            );

            navigate(`/movies/${movieId}/details`);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <Container style={{ maxWidth: '600px' }}>
            <h1 className="mb-4">Edit review</h1>

            <Form onSubmit={formSubmitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="number" name="rating" value={formValues.rating} onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows="5" name="comment" value={formValues.comment} onChange={changeHandler} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Edit
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