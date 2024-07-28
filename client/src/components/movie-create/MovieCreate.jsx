import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import moviesAPI from '../../api/movies-api';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import useCreateMovie from '../../hooks/movies/useCreateMovie';

export default function MovieCreate() {
    const initialValues = {
        title: '',
        genre: '',
        length: '',
        description: '',
        imageUrl: '',
    };

    const createMovie = useCreateMovie();
    const navigate = useNavigate();

    const [formValues, changeHandler, submitHandler] = useForm(initialValues, submitCallback);

    async function submitCallback(values) {
        try {
            const { _id: movieId } = await createMovie(values);

            navigate(`/movies/${movieId}/details`);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Container style={{ maxWidth: '600px' }}>
            <h1 className="mb-4">Create movie</h1>

            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Movie title</Form.Label>
                    <Form.Control type="text" name="title" value={formValues.title} onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" name="genre" value={formValues.genre} onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Length</Form.Label>
                    <Form.Control type="text" name="length" value={formValues.length} onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={formValues.description} onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name="imageUrl" value={formValues.imageUrl} onChange={changeHandler} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </Container>
    );
}