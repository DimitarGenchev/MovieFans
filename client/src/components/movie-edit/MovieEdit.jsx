import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import moviesAPI from '../../api/movies-api';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import styles from './MovieEdit.module.css';

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
    const [error, setError] = useState('');
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

        for (const key in formValues) {
            if (!formValues[key]) {
                return setError(`${key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty!`);
            }
        }

        try {
            await moviesAPI.edit(movieId, { ...formValues, _id: movieId });

            navigate(`/movies/${movieId}/details`);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <Container style={{ maxWidth: '600px' }}>
            <h1 className="mb-4">Edit movie</h1>

            <Form onSubmit={formSubmitHandler}>
                <FloatingLabel className="mb-3" label="Title">
                    <Form.Control type="text" name="title" value={formValues.title} onChange={changeHandler} />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Genre">
                    <Form.Control type="text" name="genre" value={formValues.genre} onChange={changeHandler} />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Length">
                    <Form.Control type="text" name="length" value={formValues.length} onChange={changeHandler} />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Description">
                    <Form.Control type="text" name="description" value={formValues.description} onChange={changeHandler} />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Image URL">
                    <Form.Control type="text" name="imageUrl" value={formValues.imageUrl} onChange={changeHandler} />
                </FloatingLabel>

                <Button variant="primary" type="submit">
                    Edit
                </Button>

                {error && (
                    <Form.Group className="mt-3">
                        <p className={styles.error}>{error}</p>
                    </Form.Group>
                )}
            </Form>
        </Container>
    );
}