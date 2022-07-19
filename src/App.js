import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {dispatchLogin, fetchUser, dispatchGetUser} from './redux/actions/authAction'
import axios from 'axios';

import Navbar from './components/Navbar/Navbar';
import routes from './routes';
import Footer from './components/Footer/Footer';
import MainRoute from './MainRoute';

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)
  const {isLogged} = auth

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('https://trainable-backend.onrender.com/user/refresh_token', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch])


  return (
    <Router>
      <div className="App">
          <MainRoute />
      </div>
    </Router>
  );
}

export default App;
