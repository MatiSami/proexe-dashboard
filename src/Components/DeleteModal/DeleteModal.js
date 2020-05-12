import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteModal = ({ closeDeleteModal, removeElement }) => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Delete user</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to delete this user?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={closeDeleteModal} variant="secondary">
            No
          </Button>
          <Button variant="primary" onClick={removeElement}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default DeleteModal;
