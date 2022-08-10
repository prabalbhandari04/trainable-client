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
import toast, { Toaster } from 'react-hot-toast';
import validator from 'validator'

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

  const [passwordShown, setPasswordShown] = useState(false);
  const [cfpasswordShown, setCfPasswordShown] = useState(false);

  const [errorMessage, setErrorMessage] = useState('')

    const validate = (value) => {
 
      if (validator.isStrongPassword(value, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
        setErrorMessage('')
      } else {
        setErrorMessage('Enter a strong password')
      }
    }


  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const togglePasswordCf = () => {
    setCfPasswordShown(!cfpasswordShown);
  }

  const notifySucess = () => toast.success('Registration Succesful.');
    const notifyError = () => toast.error('Error. Please Check your Credentials');

  const handleChangeInput = e => {
      validate(password)
      const {name, value} = e.target
      setUser({...user, [name]:value, err: '', success: ''})
  }


  const handleSubmit = async e => {
      e.preventDefault()
      if(!isMatch(password, cf_password))
      return setUser({...user, err: "Password did not match.", success: ''})
      try {
          const res = await axios.post('https://trainable-backend.onrender.com/user/register', {
              name, email, password
          })
          notifySucess()
          setUser({...user, err: '', success: res.data.msg})
      } catch (err) {
          err.response.data.msg && 
          notifyError()
          setUser({...user, err: err.response.data.msg, success: ''})
      }
  }

  return (
    <BoxContainer>
    

            <form onSubmit={handleSubmit}>
                    <input  class="RegisterName" type="text" placeholder="Enter your full name"
                    value={name} name="name" onChange={handleChangeInput} />

                    <input class="RegisterEmail"  type="text" placeholder="Enter email address" 
                    value={email} name="email" onChange={handleChangeInput} />

                    <input class="RegisterPassword"  type={passwordShown ? "text" : "password"} placeholder="Enter password" 
                    value={password} name="password" onChange={handleChangeInput} />
                    
                    <label class="RegisterShow" onClick={togglePassword}>Show</label>
                    {errorMessage === '' ? null :
                    <span style={{
                      color: 'red',
                    }}>{errorMessage}</span>} 


                    <input class="RegisterPasswordCf"  type={cfpasswordShown ? "text" : "password"} placeholder="Confirm password"
                    value={cf_password} name="cf_password" onChange={handleChangeInput} />
                    {err && showErrMsg(err)}


                    <label class="CfRegisterShow" onClick={togglePasswordCf}>Show</label>
                    <button className="LoginButton" type="submit">Register</button>
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
