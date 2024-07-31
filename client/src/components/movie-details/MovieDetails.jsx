import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { Link, useParams } from 'react-router-dom';
import MovieDelete from '../movie-delete/MovieDelete';
import useGetOneMovie from '../../hooks/movies/useGetOneMovie';
import ReviewCreate from '../review-create/ReviewCreate';
import { useAuthContext } from '../../contexts/AuthContext';
import MovieReviews from '../movie-reviews/MovieReviews';

export default function MovieDetails() {
    const { movieId } = useParams();
    const [movie] = useGetOneMovie(movieId);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { userId, isAuthenticated } = useAuthContext();
    const isOwner = userId === movie._ownerId;

    return (
        <>
            <Container className="mb-5">
                <Card>
                    <Card.Img variant="top" src={movie.imageUrl} />
                    <Card.Header>{movie.length}</Card.Header>
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Subtitle>{movie.genre}</Card.Subtitle>
                        <Card.Text>{movie.description}</Card.Text>
                    </Card.Body>
                    {isOwner && (
                        <Card.Footer>
                            <Button as={Link} to={`/movies/${movieId}/edit`} variant="success">Edit</Button>
                            <Button variant="danger" onClick={() => setShowDeleteModal(true)}>Delete</Button>
                        </Card.Footer>
                    )}
                </Card>

                <MovieDelete
                    showModal={showDeleteModal}
                    setShowModal={setShowDeleteModal}
                />
            </Container>

            {isAuthenticated && <ReviewCreate />}

            <MovieReviews />
        </>
    );
}