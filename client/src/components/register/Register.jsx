import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useRegister } from '../../hooks/auth/useRegister';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useState } from 'react';
import styles from './Register.module.css';

const initialValues = {
    email: '',
    username: '',
    password: '',
    'confirm-password': '',
};

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        for (const key in values) {
            if (!values[key]) {
                return setError(`${key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty!`);
            }
        }

        if (values.password !== values['confirm-password']) {
            return setError('Passwords missmatch');
        }

        try {
            await register(values.email, values.username, values.password);
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
                <FloatingLabel className="mb-3" label="Email">
                    <Form.Control type="email" placeholder="" name="email" value={formValues.email} onChange={changeHandler} />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Username">
                    <Form.Control type="text" placeholder="" name="username" value={formValues.username} onChange={changeHandler} />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Password">
                    <Form.Control type="password" placeholder="" name="password" value={formValues.password} onChange={changeHandler} />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Confirm password">
                    <Form.Control type="password" placeholder="" name="confirm-password" value={formValues['confirm-password']} onChange={changeHandler} />
                </FloatingLabel>

                <Button variant="primary" type="submit">
                    Register
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