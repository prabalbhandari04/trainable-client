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
import toast, { Toaster } from 'react-hot-toast';
import {Eye} from '../../assets/eye.png'
import validator from 'validator'


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
    const [passwordShown, setPasswordShown] = useState(false);
    const {email, password, err, success} = user

    const notifySucess = () => toast.success('Login Succesful.');
    const notifyError = () => toast.error('Error. Please Check your Credentials');


    const [errorMessage, setErrorMessage] = useState('')

    const validate = (value) => {
 
      if (validator.isStrongPassword(value, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
        setErrorMessage('')
      } else {
        setErrorMessage('Password should have 8 characters, 1 uppercase, 1 number and 1 symbol')
      }
    }


    const handleChangeInput = e => {
      validate(e.target.value)
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }

    // Password toggle handler
      const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('/user/login', {email, password})
            setUser({...user, err: '', success: res.data.msg})
            localStorage.setItem('firstLogin', true)
            notifySucess()
            dispatch(dispatchLogin())
            history.push('/dash/dashboard')

        } catch (err) {
            err.response.data.msg && 
            notifyError()
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }



    const handleLogin = async e => {
      
      handleSubmit(e)

    }


  return (
    <BoxContainer>
      

        
          <form onSubmit={handleLogin} >
              <input class="LoginInput"  type='text' placeholder="Enter email address" id="email" value={email} name="email" onChange={handleChangeInput}/><br></br>
              <input  class="LoginPassword"  type={passwordShown ? "text" : "password"} placeholder="Enter password" id="password" value={password} name="password" onChange={handleChangeInput} />
              <label class="Show" onClick={togglePassword}><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg></p></label>
              {errorMessage === '' ? null :
              <span style={{
                fontSize: '11px',
                color: 'red',
              }}>{errorMessage}</span>}
              
              <input class="Remember"  type='checkbox'/><label class="RemLabel">Remember Me</label><br></br>
              
              
              <button class="LoginButton" type="submit">LOGIN</button>
             
          </form>
            
          <MutedLink href="/forgot">Forget your password?</MutedLink>
              <MutedLink class="BottomLink" href="#">
                Don't have an account?{" "}
                <BoldLink href="#" onClick={switchToSignup}>
                  Register
                </BoldLink>
              </MutedLink>
          
    </BoxContainer>
  );
}
