import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MovieCard({
    title,
    description,
    imageUrl,
}) {
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}