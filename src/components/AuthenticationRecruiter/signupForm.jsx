import React, { useContext,useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "./Marginer";
import { AccountContext } from "./accountContext";
import { Link } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {isEmpty, isEmail, isLength, isMatch} from '../../utils/validation/Validation'
import './auth.css'

const initialState = {
  name: '',
  email: '',
  password: '',
  cf_password: '',
  err: '',
  success: ''
}


export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [user, setUser] = useState(initialState)

  const {name, email, password,cf_password, err, success} = user

  const handleChangeInput = e => {
      const {name, value} = e.target
      setUser({...user, [name]:value, err: '', success: ''})
  }


  const handleSubmit = async e => {
      e.preventDefault()
      if(isEmpty(name) || isEmpty(password))
              return setUser({...user, err: "Please fill in all fields.", success: ''})

      if(!isEmail(email))
          return setUser({...user, err: "Invalid emails.", success: ''})

      if(isLength(password))
          return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
      
      if(!isMatch(password, cf_password))
          return setUser({...user, err: "Password did not match.", success: ''})

      try {
          const res = await axios.post('https://trainable-backend.onrender.com/recruiter/register', {
              name, email, password
          })

          setUser({...user, err: '', success: res.data.msg})
      } catch (err) {
          err.response.data.msg && 
          setUser({...user, err: err.response.data.msg, success: ''})
      }
  }

  return (
    <BoxContainer>
      {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

            <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your name" id="name"
                    value={name} name="name" onChange={handleChangeInput} />
                    <input type="text" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
                    <input type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />
                    <input type="password" placeholder="Confirm password" id="cf_password"
                    value={cf_password} name="cf_password" onChange={handleChangeInput} />
                    <button className="loginButton" type="submit">Register</button>
            </form>

      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Login
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
