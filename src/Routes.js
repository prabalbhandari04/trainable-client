import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ActivationEmail from './pages/ActivationMail';
import Dashboard from './pages/Dashboard';
import ForgotPass from './pages/ForgotPassword';
import ResetPass from './pages/ResetPassword';
import NotFound from './utils/NotFound/NotFound'
import {useSelector} from 'react-redux'

function Routes() {
    const auth = useSelector(state => state.auth)
    const {isLogged} = auth
    return (
        <section>
            <Switch>
            <Route path="/" component={Home} exact />
                <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />
                <Route path="/dashboard" component={isLogged ? Dashboard : NotFound} exact />
                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />
                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />
            </Switch>
        </section>
    )
}

export default Routes