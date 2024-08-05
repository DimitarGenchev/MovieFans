import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

export default function Header() {
    const { isAuthenticated } = useAuthContext();

    return (
        <header className='mb-5'>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">MovieFans</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/movies">All movies</Nav.Link>
                        {isAuthenticated
                            ? (
                                <>
                                    <Nav.Link as={Link} to="/movies/create">Create movie</Nav.Link>
                                    <Nav.Link as={Link} to="/my-movies">My movies</Nav.Link>
                                    <Nav.Link as={Link} to="/my-reviews">My reviews</Nav.Link>
                                    <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                                </>
                            )
                            : (
                                <>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                </>
                            )
                        }
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}