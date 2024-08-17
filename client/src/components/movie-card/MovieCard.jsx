import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function MovieCard({
    title,
    genre,
    imageUrl,
    _id,
}) {
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} height="440px" />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{genre}</Card.Text>
                <Button as={Link} to={`/movies/${_id}/details`} variant="primary" className="mt-auto align-self-start">Details</Button>
            </Card.Body>
        </Card>
    );
}