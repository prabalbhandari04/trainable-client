
import React,{useState} from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'



const initialState = {
  name: '',
  password: '',
  cf_password: '',
  err: '',
  success: ''
}

function UserProfile() {
  const auth = useSelector(state => state.auth)
  const token = useSelector(state => state.token)


  const {user} = auth

  const [data, setData] = useState(initialState)
  const {name, password, cf_password, err, success} = data


  const handleChange = e => {
      const {name, value} = e.target
      setData({...data, [name]:value, err:'', success: ''})
  }


  const updateInfo = () => {
    
      try {
          axios.patch('/user/update', {
              name: name ? name : user.name,
          },{
              headers: {Authorization: token}
          })

          setData({...data, err: '' , success: "Updated Success!"})
          alert('Update info')
      } catch (err) {
          setData({...data, err: err.response.data.msg , success: ''})
      }
  }

  const handlePassword = () => {
    
      try {
          axios.post('/user/reset', {password},{
              headers: {Authorization: token}
          })
          alert('Please Check Your Mail for Reset Password.')
          setData({...data, err: '' , success: "Updated Success!"})
      } catch (err) {
          setData({...data, err: err.response.data.msg , success: ''})
      }
  }

  const handleUpdate = () => {
      alert('Update')
      if(name) updateInfo()
  }

  

  return (
    <>
      <div className="content">
        <Row>

        <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={user.avatar}
                    />
                    <h3 className="title">{user.name}</h3>
                    <h5 className="title">{user.email}</h5>
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        
        <Row>

          {/* edit profile */}
        <Col md="5">
            <Card>
              <CardHeader>
                <h3 className="title">Edit Profile</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  
                  <Row>
                    <Col  md="11">
                      <FormGroup className="ml-4 mt-4 mb-4">
                        <label >
                          Full Name
                        </label>
                        <Input placeholder={user.name} onChange={handleChange} type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="11">
                      <FormGroup className="ml-4 mb-4">
                        <label >
                          Email
                        </label>
                        <Input placeholder={user.email} onChange={handleChange} type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <button className="btn btn-success" onClick={handleUpdate}> Update </button>
              </CardFooter>
            </Card>
        </Col>

        {/* change password */}
        <Col md="7">
            <Card>
              <CardHeader>
                <h3 className="title">Change Password</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  
                  <Row>
                    <Col  md="8">
                      <FormGroup className="ml-4 mt-4 mb-4">
                      <label>Password</label>
                        <Input
                          placeholder="Enter Your Password Here"
                          type="password"
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="8">
                      <FormGroup className="ml-4 mb-4">
                      <label>Confirm Password</label>
                        <Input
                          placeholder="Enter Your Password Here"
                          type="password"
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <button className="btn btn-success" onClick={handlePassword}>Change Password</button>
              </CardFooter>
            </Card>
        </Col>

        </Row>

      </div>
    </>
  );
}

export default UserProfile;
