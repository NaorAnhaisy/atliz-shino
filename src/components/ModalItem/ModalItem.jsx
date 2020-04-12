import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ModalItem.css';

function ModalItem(props) {
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        props.cancelSelected()
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{props.item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span className="property-header">כשרות: </span>{props.item.kosher}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        סגור
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        הוסף לסל
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalItem;