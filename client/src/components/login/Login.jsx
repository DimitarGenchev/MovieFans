import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import useForm from '../../hooks/useForm';
import useLogin from '../../hooks/auth/useLogin';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const initialValues = {
        email: '',
        password: '',
    };

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/movies');
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = useLogin();
    const navigate = useNavigate();
    const [formValues, changeHandler, submitHandler] = useForm(initialValues, loginHandler);

    return (
        <Container style={{ maxWidth: '600px' }}>
            <h1 className="mb-4">Login</h1>

            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formValues.email} onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formValues.password} onChange={changeHandler} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
}