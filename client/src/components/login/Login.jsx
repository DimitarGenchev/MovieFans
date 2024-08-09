import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import useForm from '../../hooks/useForm';
import useLogin from '../../hooks/auth/useLogin';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './Login.module.css';

const initialValues = {
    email: '',
    password: '',
};

export default function Login() {
    const [error, setError] = useState('');
    const login = useLogin();
    const navigate = useNavigate();
    const loginHandler = async ({ email, password }) => {
        if (!email) {
            return setError('Email cannot be empty!');
        }

        if (!password) {
            return setError('Password cannot be empty!');
        }
        
        try {
            await login(email, password);
            navigate('/movies');
        } catch (error) {
            setError(error.message);
        }
    };

    const [formValues, changeHandler, submitHandler] = useForm(initialValues, loginHandler);

    return (
        <Container style={{ maxWidth: '600px' }}>
            <h1 className="mb-4">Login</h1>

            <Form onSubmit={submitHandler}>
                <FloatingLabel className="mb-3" label="Email">
                    <Form.Control type="email" placeholder="" name="email" value={formValues.email} onChange={changeHandler} />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Password">
                    <Form.Control type="password" placeholder="" name="password" value={formValues.password} onChange={changeHandler} />
                </FloatingLabel>

                <Button variant="primary" type="submit">
                    Login
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