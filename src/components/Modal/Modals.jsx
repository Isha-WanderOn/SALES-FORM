import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { Form } from "../../context/FormContext";

const Modals = () => {
  const { show, setShow } = useContext(Form);
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <h1 style={{ color: "green" }}>Insert Form</h1>
      </Modal.Header>
      <Modal.Body>{/* <AddForm /> */}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modals;
