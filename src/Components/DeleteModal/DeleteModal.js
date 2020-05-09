import React from "react";
import  { Modal, Button } from 'react-bootstrap'


const DeleteModal = ({closeDeleteModal, removeElement, }) => {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Usuwanie użytkownika</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Czy napewno chcesz usunąć tego użytkownika?</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={closeDeleteModal} variant="secondary">Nie</Button>
            <Button 
            variant="primary"
            onClick={removeElement}
            >Tak</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }

export default DeleteModal;
