import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { useRegister } from '../../hooks/auth/useRegister';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useState } from 'react';

export default function Register() {
    const initialValues = {
        email: '',
        password: '',
        'confirm-password': '',
    };

    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        if (values.password !== values['confirm-password']) {
            return setError('Passwords missmatch');
        }

        try {
            await register(values.email, values.password);
            navigate('/movies');
        } catch (error) {
            setError(error.message);
        }
    };

    const [formValues, changeHandler, submitHandler] = useForm(initialValues, registerHandler);

    return (
        <Container style={{ maxWidth: '600px' }}>
            <h1 className="mb-4">Register</h1>

            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formValues.email} onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formValues.password} onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" name="confirm-password" value={formValues['confirm-password']} onChange={changeHandler} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>

                {error && (
                    <Form.Group className='mt-3'>
                        <p>{error}</p>
                    </Form.Group>
                )}
            </Form>
        </Container>
    );
}