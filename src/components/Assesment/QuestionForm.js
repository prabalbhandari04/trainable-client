import { useHistory } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect } from 'react';
import QuestionCard from './QuestionCard';
import {
  Button,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  ListGroup,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  ListGroupItem
} from "reactstrap";

export function QuestionForm() {
  const history = useHistory();
  const [question, setQuestion] = React.useState("");
  const [type, setType] = React.useState("");
  const [ required, setrequired] = React.useState("");
  const [assessment, setAssessment] = React.useState([]);
  const [showQuestion , setShowQuestion] = React.useState([]);

  useEffect(() => {
		fetch('https://trainable-backend.onrender.com/assessment/')
		.then( res => {
				return res.json();
		})
		.then(res => {
				setAssessment(res[0]);
		})
	}, [assessment._id]);

  useEffect(() => {
		fetch(`https://trainable-backend.onrender.com/assessment/question/62f0f42410f91d004d862485`)
		.then( res => {
				return res.json();
		})
		.then(res => {
      setShowQuestion(res);
      console.log(res);
        
		})
	}, [showQuestion,assessment._id]);


  const handleQuestion = () => {
    axios.post(`https://trainable-backend.onrender.com/assessment/question/${assessment._id}`, {
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

  const handleDelete = (id) => {
    fetch(`https://trainable-backend.onrender.com/assessment/question/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      alert('Question Deleted');
      setShowQuestion(showQuestion.filter(question => question.id !== id));
    }
    )
    .catch(err => {
      console.log(err);
    }
    )
  }

  const handleChange = () => {
    history.push('/dash/assessment');
  }


  return (

    
    <div>
            <div className="float-left">
              <Card>
                <CardHeader>
                  <CardTitle>Create Question</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Input type="text" name="question" id="question" placeholder="Question" onChange={(e) => setQuestion(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                      <Input type="select" name="type" id="type" onChange={(e) => setType(e.target.value)}>
                        <option value="Text">Text</option>
                        <option value="Radio">Radio</option>
                        <option value="Checkbox">Checkbox</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Input type="select" name="required" id="required" onChange={(e) => setrequired(e.target.value)}>
                        <option value="false">False</option>
                        <option value="true">True</option>
                      </Input>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button onClick={handleQuestion}>Create Question</Button>
                  <Button onClick={handleChange}>Cancel</Button>
                </CardFooter>
              </Card>
            </div>
            
            
            <div>
                  {showQuestion.map(question => {
                    return (
                      <Card key={question._id}>
                        <CardHeader>
                          <CardTitle>Question : {question.question}</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <CardText>Question Type : {question.type}</CardText>
                          <CardText>Question Type : {question.required}</CardText>
                        </CardBody>
                        <CardFooter>
                          <Button onClick={handleChange}>Edit</Button>
                          <Button onClick={() => handleDelete(question._id)}>Delete</Button>
                        </CardFooter>
                      </Card>
                    )
                  })}
            </div>
    </div>

  );
}

export default QuestionForm;