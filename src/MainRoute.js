import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import ActivationEmail from './pages/ActivationMail';
import ForgotPass from './pages/ForgotPassword';
import ResetPass from './pages/ResetPassword';
import NotFound from './utils/NotFound/NotFound'
import Authorization from './utils/Authorization/Authorization'
import AccountBox  from './components/Authentication/AccountBox';
import {useSelector} from 'react-redux'
import AdminLayout from "./layouts/Admin/Admin.js";
import AccountBoxRecruiter from './components/AuthenticationRecruiter/AccountBox';
import admin from './pages/admin';

function MainRoute() {
    const auth = useSelector(state => state.auth)
    const {isLogged} = auth
    return (
        <section>
            <Switch>
                 <Route path="/" component={Home} exact />
                 <Route path="/dash" render={(props) => <AdminLayout {...props} />} />
                <Route path="/login" component={isLogged ? NotFound : AccountBox} exact />
                <Route path="/recruiter/login" component={AccountBoxRecruiter} exact />
                <Route path="/admin" component={admin} exact />
                <Route path="/forgot" component={isLogged ? NotFound : ForgotPass} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />
                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />
                <Route path="*" component={NotFound} />
            </Switch>
        </section>
    )
}

export default MainRoute