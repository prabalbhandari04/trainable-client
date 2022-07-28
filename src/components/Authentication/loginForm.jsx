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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

    const showToastMessage = () => {
      toast.success('Login Succesfull !', {
          position: toast.POSITION.TOP_RIGHT
      });
  };

  const showToastError = () => {
    toast.error('Login Error! Please Try again', {
        position: toast.POSITION.TOP_RIGHT
    });
};

    const handleSubmit = async e => {
        e.preventDefault()
        try {
          showToastMessage()
            const res = await axios.post('/user/login', {email, password})
            setUser({...user, err: '', success: res.data.msg})
            localStorage.setItem('firstLogin', true)
            dispatch(dispatchLogin())
            history.push('/')

        } catch (err) {
            err.response.data.msg && 
            showToastError()
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }


    const handleLogin = async e => {
      handleSubmit(e)
    }
    



  return (
    <BoxContainer>
      

      
          <form onSubmit={handleLogin} >
              <input  type='text' placeholder="Enter email address" id="email" value={email} name="email" onChange={handleChangeInput}/>
              <input type="password" placeholder="Enter password" id="password" value={password} name="password" onChange={handleChangeInput} />
              <button  className="loginButton"  type="submit">LOGIN</button>
             
          </form>
            
          <MutedLink href="/forgot">Forget your password?</MutedLink>
              <MutedLink href="#">
                Don't have an account?{" "}
                <BoldLink href="#" onClick={switchToSignup}>
                  Register
                </BoldLink>
              </MutedLink>
              <ToastContainer />
          
    </BoxContainer>
  );
}
