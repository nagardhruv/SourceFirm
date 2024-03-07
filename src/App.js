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