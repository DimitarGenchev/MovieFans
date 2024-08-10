import Container from "react-bootstrap/esm/Container";
import Image from 'react-bootstrap/Image';
import styles from './Home.module.css';

export default function Home() {
    return (
        <Container>
            <h1 className={`text-center mb-5 ${styles.title}`}>Welcome to MovieFans!</h1>

            <p className="text-center fs-3 mb-5">MovieFans is your go-to platform for discovering, sharing, and reviewing movies. Whether you're here to explore a wide range of films or contribute your own insights, MovieFans is designed for both casual viewers and dedicated movie enthusiasts. Join our community to rate, review, and manage your favorite movies!</p>

            <div className="d-flex justify-content-center">
                <Image src="logo.png" width="500" roundedCircle />
            </div>
        </Container>
    );
}