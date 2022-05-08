import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Confirmation = ({show, handleClose, deleteItem,_id}) => {
    return (
        <div>
           <Modal show={show} onHide={handleClose} size="md">
                    <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='d-flex align-items-center justify-content-center flex-column'>
                        <h3>Do You Really Want to delete the item?</h3>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>deleteItem(_id)}>
                        Confirm
                    </Button>
        </Modal.Footer>
      </Modal> 
        </div>
    );
};

export default Confirmation;