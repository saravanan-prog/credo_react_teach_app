import { Button, Modal } from "react-bootstrap";
import { useState } from "react";



export default function BlogPage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>

        <div className="container">
            <Button variant="primary">click me </Button>
        </div>

        <div>
            <Button variant="primary" onClick={handleShow}>
                Open Modal
            </Button>

            <Modal show={show} onHide={handleClose} style={{}}>
                <Modal.Header closeButton>
                    <Modal.Title>My Modal</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    This is the modal content.
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button variant="success">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>


    </div>
}