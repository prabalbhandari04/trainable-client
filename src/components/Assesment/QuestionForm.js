import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect } from 'react';

export function QuestionForm() {
  const history = useHistory();
  const [question, setQuestion] = React.useState("");
  const [type, setType] = React.useState("");
  const [ required, setrequired] = React.useState("");
  const [assessment, setAssessment] = React.useState([]);


  useEffect(() => {
		fetch('https://trainable-backend.onrender.com/assessment/')
		.then( res => {
				return res.json();
		})
		.then(res => {
				setAssessment(res[0]);
        console.log(res[0]);
        
		})
	}, [assessment]);

  


  const handleQuestion = () => {
    axios.post('https://trainable-backend.onrender.com/assessment/question/62f0f42410f91d004d862485', {
      question : question,
      type : "Text",
      required : false,
    }
    ).then(res => {
      alert("Question Created")
      history.push('/dash/question');
    }
    ).catch(err => {
      console.log(err)
    } )
  }


  const handleChange = () => {
    history.push('/dash/assessment');
  }


  return (

    
    

    <Form>
      <Form.Group
              className="mb-3 mt-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write Your Question Here</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setQuestion(e.target.value)} />
            </Form.Group>

      <Form.Label className="mb-3 " >Answer Type</Form.Label>
      <Form.Select  aria-label="Default select example" onChange={(e) => setType(e.target.value)} >
      <option value="1">Text</option>
      <option value="2">Multiple Choice</option>
      <option value="3">Video</option>
      <option value="3">Audio</option>
    </Form.Select>

    <Form.Label className="mb-3 " >Required</Form.Label>
      <Form.Select  aria-label="Default select example" onChange={(e) => setrequired(e.target.value)} >
      <option value="1">Yes</option>
      <option value="2">No</option>
    </Form.Select>

    <div className='mb-3 mt-3'>
        <Button onClick={handleQuestion} variant="info" size="sm">
          Save
        </Button>{' '}
        <Button variant="info" size="sm">
          Add More
        </Button>
        <Button variant="secondary" size="sm">
          Update
        </Button>{' '}
        <Button onClick={handleChange} variant="danger" size="sm">
          Cancel
        </Button>
      </div>
      

    </Form>
  );
}

export default QuestionForm;