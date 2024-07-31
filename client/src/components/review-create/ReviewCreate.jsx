import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import useForm from '../../hooks/useForm';

const initialValues = {
    rating: 1,
    comment: '',
};

export default function ReviewCreate() {
    const [formValues, changeHandler, submitHandler] = useForm(initialValues, (values) => console.log(values));
    
    return (
        <Container style={{ maxWidth: '800px' }} className='mb-5'>
            <h1 className="mb-4">Leave a review</h1>

            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="number" min="1" max="5" name="rating" value={formValues.rating} onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows="5" name="comment" value={formValues.comment} onChange={changeHandler} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add review
                </Button>
            </Form>
        </Container>
    );
}