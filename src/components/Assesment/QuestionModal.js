import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Question from '../../pages/Question';

function QuestionModal() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [assessmentName, setAssessmentName] = React.useState("");
  const [summary, setSummary] = React.useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleAssessment = () => {
    axios.post('https://trainable-backend.onrender.com/assessment/create', {
      name : assessmentName,
      summary : summary,
    }).then(res => {
      alert("Assessment Created")
      handleClose();
    }
    ).catch(err => {
      console.log(err)
    } )
  }

  const handleChange = () => {
    history.push('/dash/question');
  }
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Add Assessment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Assessment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Assessment Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Assessment Name"
                autoFocus
                onChange={(e) => setAssessmentName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Assessment Summary</Form.Label>
              <Form.Control as="textarea" onChange={(e) => setSummary(e.target.value)} rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleAssessment}>
            Create Assessment 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default QuestionModal;