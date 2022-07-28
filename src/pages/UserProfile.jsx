
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


  const {user, isAdmin} = auth
  console.log(user)
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

  const updatePassword = () => {
    alert('Update pass')
      try {
          axios.post('/user/reset', {password},{
              headers: {Authorization: token}
          })

          setData({...data, err: '' , success: "Updated Success!"})
      } catch (err) {
          setData({...data, err: err.response.data.msg , success: ''})
      }
  }

  const handleUpdate = () => {
      alert('Update')
      if(name ) updateInfo()
      if(password) updatePassword()
  }

  

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col  md="6">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email
                        </label>
                        <Input placeholder={user.email} onChange={handleChange} type="email" />
                      </FormGroup>
                    </Col>
                    <div>
                      <label>Name</label>
                      <input input type="text" name="name" id="name" defaultValue={user.name}
                          placeholder="Your name" onChange={handleChange} className='w-full border-[1px] border-gray_light focus:border-gray_light px-4 py-2'/>
                  </div>
                  </Row>
                  <Row>
                    <Col  md="6">
                      <FormGroup>
                        <label>Password</label>
                        <Input
                          placeholder="Enter Your Password Here"
                          type="password"
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col  md="6">
                      <FormGroup>
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
                <button className="btn btn-secondary" onClick={handleUpdate}> Update </button>
                <Button className="btn-fill" color="blue" type="submit" onClick={handleUpdate}>
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
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
                    <h5 className="title">{user.name}</h5>
                  </a>
                </div>
                <div className="card-description">
                {user.description} Do not be scared of the truth because we need to restart the
                  human foundation in truth.
                </div>
              </CardBody>
              {/* <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter> */}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
