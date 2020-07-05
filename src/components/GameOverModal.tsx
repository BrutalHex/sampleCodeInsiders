import React, { useState, FunctionComponent } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const GameOverModal: FunctionComponent<any> = (props) => {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    props.Reset();
  };

  return (
    <div>
      <Modal show={props.Show && show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>GameOver</Modal.Title>
        </Modal.Header>
        <Modal.Body>Maybe,Next time you can win.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Reset
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GameOverModal;
