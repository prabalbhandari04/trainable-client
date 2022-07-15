import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Register from './pages/Register';
import Home from './pages/Home';
import ActivationEmail from './pages/ActivationMail';
import Dashboard from './pages/Dashboard';
import ForgotPass from './pages/ForgotPassword';
import ResetPass from './pages/ResetPassword';
import NotFound from './utils/NotFound/NotFound'
import Authorization from './utils/Authorization/Authorization'
import { AccountBox } from './components/accountBox';
import {useSelector} from 'react-redux'

function Routes() {
    const auth = useSelector(state => state.auth)
    const {isLogged} = auth
    return (
        <section>
            <Switch>
                
            <Route path="/" component={Home} exact />
                <Route path="/login" component={isLogged ? NotFound : AccountBox} exact />
                <Route path="/dashboard" component={isLogged ? Dashboard : Authorization} exact />
                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />
                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />
                <Route path="*" component={NotFound} />
            </Switch>
        </section>
    )
}

export default Routes