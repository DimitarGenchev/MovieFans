import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';

export default function Register() {
    return (
        <Container style={{ maxWidth: '600px' }}>
            <h1 className="mb-4">Register</h1>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" name="confirm-password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    );
}