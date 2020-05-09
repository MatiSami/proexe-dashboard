import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./modal.css";

const ModalWindow = ({
  getName,
  closeModal,
  getUserName,
  getCity,
  getEmail,
  submitFn,
  validationName,
  validationUserName,
  validationCity,
  validationEmail,
  isValidate,
}) => {
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Form</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={getName}
            />
            {!validationName && isValidate && (
              <Form.Text className="text-muted text-warning">
                Please complete this required field.
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>UserName</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Enter your username"
              onChange={getUserName}
            />
            {!validationUserName && isValidate && (
              <Form.Text className="text-muted text-warning">
                Please complete this required field.
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city"
              type="text"
              placeholder="Enter your city"
              onChange={getCity}
            />
            {!validationCity && isValidate && (
              <Form.Text className="text-muted text-warning">
                Please complete this required field.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={getEmail}
            />
            {!validationEmail && isValidate && (
              <Form.Text className="text-muted text-warning">
                Please complete this required field.
              </Form.Text>
            )}
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal} variant="secondary">
          Close
        </Button>
        <Button type="submit" variant="primary" onClick={submitFn}>
          Add user
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};
// }

export default ModalWindow;
