import { useEffect,useState } from 'react';
import AssessmentDetail from './AssessmentDetail';
import {Link} from 'react-router-dom';
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


export function AssesmentCard() {

  const [assessments,setAssessment] = useState(null);

  useEffect(() => {
		fetch('https://trainable-backend.onrender.com/assessment/')
		.then( res => {
				return res.json();
		})
		.then(res => {
				setAssessment(res);
		})
	}, [assessments]);

  const handleDelete = (id) => {
    fetch(`https://trainable-backend.onrender.com/assessment/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      alert('Assessment Deleted');
      setAssessment(assessments.filter(assessment => assessment.id !== id));
    }
    )
    .catch(err => {
      console.log(err);
    }
    )
  }

  return (


    assessments && assessments.map(assessment => {
      return (

        <div className=".float-left">
        <Row className='mt-12'>
          {/* edit profile */}
        <Col md="10" className='ml-6 mr-6'>
            <Card key={assessment.id} style={{ width: '20rem', marginTop : '20px' }}>
              <CardHeader>
                <h3 className="title">Assessment Title</h3>
                <button className="btn btn-danger" onClick={() => handleDelete(assessment._id)}>Delete</button>
              </CardHeader>
              <CardBody>
              <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <strong>Assessment Title:</strong> {assessment.name}
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Assessment Description:</strong> {assessment.summary}
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Assessment createdAt:</strong>{assessment.createdAt}
                  </ListGroupItem>
                  <ListGroupItem>Question <Link to={`/dash/question/${assessment._id}`}>Add</Link></ListGroupItem>
        
                </ListGroup>
              </CardBody>
            </Card>
        </Col>
        </Row>
      </div>
    //      <Card  key={assessment.id} style={{ width: '20rem', marginTop : '20px' }}>
    //   <Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <button onClick={()=>handleDelete(assessment._id)}>Delete</button>
    //     <ListGroup.Item><strong>{assessment.name}</strong><Card.Link style={{ marginLeft : '140px' }} href="#"></Card.Link> </ListGroup.Item>
    //     <ListGroup.Item><CardTitle>Card Summary</CardTitle>{assessment.summary}</ListGroup.Item>
    //     <ListGroup.Item><CardTitle>Card Question</CardTitle>Question <Link to={`/dash/question/${assessment._id}`}>Add</Link></ListGroup.Item>
        
    //   </ListGroup>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //   <Card.Body>
    //   <Card.Text>
    //       {assessment.createdAt}
    //     </Card.Text>
    //   </Card.Body>
    //   </ListGroup>
    // </Card>
      );
    })
     
    
  );
}

export default AssesmentCard;



        
