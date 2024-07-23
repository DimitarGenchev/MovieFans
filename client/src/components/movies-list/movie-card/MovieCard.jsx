import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard() {
  return (
    <Card>
      <Card.Img variant="top" src="https://pyxis.nymag.com/v1/imgs/83e/7da/cf93b5c5acea63a59c52189b6544f00b62-BTTF-Hugo-Glendinning.2x.rsocial.w600.jpg" />
      <Card.Body>
        <Card.Title>Back to the Future</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;