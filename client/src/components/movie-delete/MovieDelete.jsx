import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import moviesAPI from '../../api/movies-api';
import { useNavigate, useParams } from 'react-router-dom';

export default function MovieDelete({
    showModal,
    setShowModal,
}) {
    const { movieId } = useParams();
    const navigate = useNavigate();

    const closeModal = () => setShowModal(false);

    const deleteMovieHandler = async () => {
        await moviesAPI.deleteOne(movieId);

        navigate('/movies');
    }

    return (
        <>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this movie?</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={deleteMovieHandler}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
