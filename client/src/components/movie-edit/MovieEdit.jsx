import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import moviesAPI from '../../api/movies-api';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

export default function MovieEdit() {
    const [formValues, setFormValues] = useState({
        title: '',
        genre: '',
        length: '',
        description: '',
        imageUrl: '',
    });

    const { movieId } = useParams();
    const { userId } = useAuthContext();

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const movieResult = await moviesAPI.getOne(movieId);

            if (userId !== movieResult._ownerId) {
                navigate(`/movies/${movieId}/details`);
            }

            setFormValues({
                title: movieResult.title,
                genre: movieResult.genre,
                length: movieResult.length,
                description: movieResult.description,
                imageUrl: movieResult.imageUrl,
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

        await moviesAPI.edit(movieId, { ...formValues, _id: movieId });

        navigate(`/movies/${movieId}/details`);
    }

    return (
        <Container style={{ maxWidth: '600px' }}>
            <h1 className="mb-4">Edit movie</h1>

            <Form onSubmit={formSubmitHandler}>
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
                    Edit
                </Button>
            </Form>
        </Container>
    );
}