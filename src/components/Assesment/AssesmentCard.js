import { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CardTitle } from 'reactstrap';
import AssessmentDetail from './AssessmentDetail';

export function AssesmentCard() {

  const [assessments,setAssessment] = useState(null);

  useEffect(() => {
		fetch('https://trainable-backend.onrender.com/assessment/')
		.then( res => {
				return res.json();
		})
		.then(res => {
				setAssessment(res);
        console.log(res);
        
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
         <Card  key={assessment.id} style={{ width: '20rem', marginTop : '20px' }}>
      <Card.Body>
      <ListGroup className="list-group-flush">
        <button onClick={()=>handleDelete(assessment._id)}>Delete</button>
        <ListGroup.Item><strong>{assessment.name}</strong><Card.Link style={{ marginLeft : '140px' }} href="#"></Card.Link> </ListGroup.Item>
        <ListGroup.Item><CardTitle>Card Summary</CardTitle>{assessment.summary}</ListGroup.Item>
        <ListGroup.Item><CardTitle>Card Question</CardTitle>Question</ListGroup.Item>
      </ListGroup>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <Card.Body>
      <Card.Text>
          {assessment.createdAt}
        </Card.Text>
      </Card.Body>
      </ListGroup>
    </Card>
      );
    }
    )
    
     
    // <Card  key={assessment.id} style={{ width: '20rem', marginTop : '20px' }}>
    //   <Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroup.Item><strong>{assessment.name}</strong><Card.Link style={{ marginLeft : '140px' }} href="#">Delete</Card.Link> </ListGroup.Item>
    //     <ListGroup.Item><CardTitle>Card Summary</CardTitle>{assessment.summary}</ListGroup.Item>
    //     <ListGroup.Item><CardTitle>Card Question</CardTitle>Question</ListGroup.Item>
    //   </ListGroup>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //   <Card.Body>
    //   <Card.Text>
    //       Created at 27 Jul,22
    //     </Card.Text>
    //   </Card.Body>
    //   </ListGroup>
    // </Card>
    
  );
}

export default AssesmentCard;