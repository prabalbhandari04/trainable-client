import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CardTitle } from 'reactstrap';

export function AssesmentCard() {
  return (
    <Card  style={{ width: '20rem', marginTop : '20px' }}>
      <Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><strong>Card Title</strong><Card.Link style={{ marginLeft : '140px' }} href="#">Delete</Card.Link> </ListGroup.Item>
        <ListGroup.Item><CardTitle>Card Summary</CardTitle>Summary</ListGroup.Item>
        <ListGroup.Item><CardTitle>Card Question</CardTitle>Question</ListGroup.Item>
      </ListGroup>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <Card.Body>
      <Card.Text>
          Created at 27 Jul,22
        </Card.Text>
      </Card.Body>
      </ListGroup>
    </Card>
    
  );
}

export default AssesmentCard;