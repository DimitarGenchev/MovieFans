import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import useCreateMovie from '../../hooks/movies/useCreateMovie';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import { useState } from 'react';

const initialValues = {
    title: '',
    genre: '',
    length: '',
    description: '',
    imageUrl: '',
};

export default function MovieCreate() {
    const createMovie = useCreateMovie();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const createMovieHandler = async (values) => {
        for (const key in values) {
            if (!values[key]) {
                return setError(`${key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty!`);
            }
        }

        try {
            const { _id: movieId } = await createMovie(values);

            navigate(`/movies/${movieId}/details`);
        } catch (error) {
            setError(error.message);
        }
    };

    const [formValues, changeHandler, submitHandler] = useForm(initialValues, createMovieHandler);

    return (
        <Container style={{ maxWidth: '600px' }}>
            <h1 className="mb-4">Create movie</h1>

            <Form onSubmit={submitHandler}>
                <FloatingLabel className="mb-3" label="Title">
                    <Form.Control type="text" placeholder="" name="title" value={formValues.title} onChange={changeHandler} />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Genre">
                    <Form.Control type="text" placeholder="" name="genre" value={formValues.genre} onChange={changeHandler} />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Length">
                    <Form.Control type="text" placeholder="" name="length" value={formValues.length} onChange={changeHandler} />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Description">
                    <Form.Control type="text" placeholder="" name="description" value={formValues.description} onChange={changeHandler} />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Image URL">
                    <Form.Control type="text" placeholder="" name="imageUrl" value={formValues.imageUrl} onChange={changeHandler} />
                </FloatingLabel>

                <Button variant="primary" type="submit">
                    Create
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