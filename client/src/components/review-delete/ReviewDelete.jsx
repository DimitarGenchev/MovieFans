import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import reviewsAPI from '../../api/reviews-api';

export default function ReviewDelete({
    showModal,
    closeModal,
    reviewId,
    triggerRefetch,
}) {
    const deleteReviewHandler = async () => {
        await reviewsAPI.deleteOne(reviewId);
        triggerRefetch();
        closeModal();
    }

    return (
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Delete review</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this review?</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={closeModal}>
                    Close
                </Button>
                <Button variant="danger" onClick={deleteReviewHandler}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
