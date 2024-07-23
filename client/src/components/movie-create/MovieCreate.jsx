import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import * as moviesAPI from '../../api/movies-api';
import { useNavigate } from 'react-router-dom';

export default function MovieCreate() {
    const [formValues, setFormValues] = useState({
        title: '',
        genre: '',
        length: '',
        description: '',
        imageUrl: '',
    })

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setFormValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));
    };

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        await moviesAPI.create(formValues);

        setFormValues({
            title: '',
            genre: '',
            length: '',
            description: '',
            imageUrl: '',
        });

        navigate('/movies');
    }

    return (
        <Container style={{ maxWidth: '600px' }}>
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
                    Create
                </Button>
            </Form>
        </Container>
    );
}