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
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {dispatchLogin} from '../../redux/actions/authAction'
import {useDispatch} from 'react-redux'
import './auth.css'

const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [user, setUser] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()

    const {email, password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }

    const handleClick = () => {
      history.push('/register')
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('/recruiter/login', {email, password})
            setUser({...user, err: '', success: res.data.msg})
            localStorage.setItem('firstLogin', true)
            dispatch(dispatchLogin())
            alert(res.data.msg)
            history.push("/admin")

        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }
  return (
    <BoxContainer>
      

      {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

          <form onSubmit={handleSubmit} >
              <input  type='text' placeholder="Enter email address" id="email" value={email} name="email" onChange={handleChangeInput}/>
              <input type="password" placeholder="Enter password" id="password" value={password} name="password" onChange={handleChangeInput} />
              <button  className="loginButton" type="submit">LOGIN</button>
             
          </form>
            
          <MutedLink href="/forgot">Forget your password?</MutedLink>
              <MutedLink href="#">
                Don't have an account?{" "}
                <BoldLink href="#" onClick={switchToSignup}>
                  Register
                </BoldLink>
              </MutedLink>
          
          
    </BoxContainer>
  );
}
