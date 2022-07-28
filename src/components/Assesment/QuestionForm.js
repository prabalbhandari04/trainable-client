import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';


export function QuestionForm() {
  const history = useHistory();


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
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

      <Form.Label className="mb-3 " >Answer Type</Form.Label>
      <Form.Select  aria-label="Default select example">
      <option value="1">Text</option>
      <option value="2">Multiple Choice</option>
      <option value="3">Video</option>
      <option value="3">Audio</option>
    </Form.Select>

    <Form.Label className="mb-3 " >Required</Form.Label>
      <Form.Select  aria-label="Default select example">
      <option value="1">Yes</option>
      <option value="2">No</option>
    </Form.Select>

    <div className='mb-3 mt-3'>
        <Button onClick={handleChange} variant="info" size="sm">
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