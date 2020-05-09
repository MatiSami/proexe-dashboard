import React from "react";
import { Form, Col, Button, Row, Modal } from "react-bootstrap";


const EditModal = ({
  getName,
  closeModal,
  getUserName,
  getCity,
  getEmail,
  elementToEdit,
  editElement,
  validationName,
  validationUserName,
  validationCity,
  validationEmail,
  isValidate,
}) => {
  console.log(elementToEdit.childNodes[1]);
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Edit user</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="name" placeholder="Name" onChange={getName} />
              {!validationName && isValidate && (
                <Form.Text className="text-muted text-warning">
                  Please complete this required field.
                </Form.Text>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontal">
            <Form.Label column sm={2}>
              Username
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={getUserName}
              />
              {!validationUserName && isValidate && (
                <Form.Text className="text-muted text-warning">
                  Please complete this required field.
                </Form.Text>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalText">
            <Form.Label column sm={2}>
              City
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="City" onChange={getCity} />
              {!validationCity && isValidate && (
                <Form.Text className="text-muted text-warning">
                  Please complete this required field.
                </Form.Text>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={getEmail}
              />
              {!validationEmail && isValidate && (
                <Form.Text className="text-muted text-warning">
                  Please complete this required field.
                </Form.Text>
              )}
            </Col>
          </Form.Group>
        </Form>

        <Modal.Footer>
          <Button
            //   onClick={closeModal}
            variant="secondary"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button type="submit" variant="primary" onClick={editElement}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default EditModal;
