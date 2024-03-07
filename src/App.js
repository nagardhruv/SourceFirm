import React from "react";
import { Route, Switch, Router, Redirect } from "react-router-dom";
// core components
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import history from "utils/history";
import AdminLayout from "layouts/Admin.js";
import Login from "views/Authentication/Login/Login";
import ForgetPassword from "views/Authentication/ForgotPassword/ForgetPassword";
import SignUp from "views/Authentication/SignUp/SignUp";

import { PersistGate } from 'redux-persist/integration/react';
import "./assets/css/custom.css";
import { isLogIn } from 'utils/Auth';
import Home from "views/Home";
import PageNotFound from "views/PageNotFound";

import ScrollToTop from "ScrollToTop";
import EmailVerification from "views/Authentication/EmailVerification/EmailVerification";
import CheckMail from "views/Authentication/CheckMail";
import ResetPassword from "views/Authentication/ResetPassword/ResetPassword";
import VerifyEmail from "views/Authentication/VerifyEmail/VerifyEmail";

function App() {
    const getRoute = (name) => {
        if (!isLogIn()) {
            return name;
        } else {
            return () => <Redirect to='/' />
        }
    };

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <ScrollToTop />
                    <Switch>
                        <Route exact path="/login" component={getRoute(Login)} />
                        <Route exact path="/forgetpassword" component={getRoute(ForgetPassword)} />
                        <Route exact path="/signup" component={getRoute(SignUp)} />
                        <Route exact path="/email-verify" component={EmailVerification} />
                        <Route exact path="/resendmail" component={getRoute(CheckMail)} />
                        <Route exact path="/password-reset/:uid/:token" component={ResetPassword} />
                        <Route exact path="/verify-email/:uid/:token" component={VerifyEmail} />
                        <Route exact path="/" component={Home} />
                        <Route exact path='/' render={() => <Redirect to='/home' />} />
                        <AdminLayout></AdminLayout>
                        <Route path='*' component={PageNotFound} />
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;