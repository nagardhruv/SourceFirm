import React, { useState, useContext, useEffect } from "react";
import Form from './component/Form';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../store/actions/index';
import UserTypeForm from './component/UserTypeForm';
import { toast } from 'react-toastify';
import { LoaderContext } from "utils/LoaderContext";
import history from "utils/history";
import { getUserStatus } from "utils/Common";
import { isLogIn } from 'utils/Auth';
import { USER_TYPES } from "utils/constant";
import { Helmet } from "react-helmet";


function Login() {
    const dispatch = useDispatch();
    const [isUserTypeShow, setIsUserTypeShow] = useState(true);
    const [activeUser, setActiveUser] = useState(3);
    const { toggalLoader } = useContext(LoaderContext);
    const userDetails = useSelector((state) => state.authReducer?.userDetails);

    const getUserDetails = (values, message) => {
        dispatch(Actions.getUserDetails()).then(res => {
            if (res.status === 200) {
                dispatch({ type: 'GET_USER_DETAILS', payload: res.data });
                toast.success(message);
                let route = getUserStatus(res.data, values?.username);
                toggalLoader(false);
                history.push(route);
            }
            else {
                dispatch({ type: 'GET_USER_DETAILS', payload: {} });
                toast.error(res.data.non_field_errors[0]);
                toggalLoader(false);
            }
        }).catch(() => {
            toggalLoader(false);
        });
    }

    const login = (values) => {
        toggalLoader(true);
        const formData = new FormData();
        formData.append('username', values.username);
        formData.append('password', values.password);
        dispatch(Actions.loginUser(values))
            .then(response => {
                if (response.status === 200) {
                    dispatch({ type: 'LOGIN_USER', payload: response.data });
                    getUserDetails(values, 'Login Successfully');
                } else {
                    dispatch({ type: 'LOGIN_USER', payload: null });
                    toast.error(response.data.non_field_errors[0]);
                    toggalLoader(false);
                }
                // toggalLoader(false);
            }).catch(() => {
                toggalLoader(false);
            });
    }
    const handleSignInWithGoogle = (response) => {
        toggalLoader(true);
        const formData = new FormData();
        formData.append('access_token', response.access_token);
        dispatch(Actions.signWithGoogle(formData)).then(res => {
            if (res.status === 200) {
                dispatch({ type: 'LOGIN_USER', payload: res.data });
                if (res.data.user_type === USER_TYPES.TEMPORARY_LOGIN_USER) {
                    toggalLoader(false);
                    setIsUserTypeShow(false);
                } else {
                    // toggalLoader(false);
                    getUserDetails(res.data.username, "Login Successfully");
                }
            } else {
                dispatch({ type: 'LOGIN_USER', payload: null });
                toggalLoader(false);
                toast.error(res.data.non_field_errors[0]);
            }
        }).catch(() => {
            toggalLoader(false);
        });
    }
    const updateUserType = () => {
        toggalLoader(true);
        const formData = new FormData();
        formData.append('user_type', activeUser);
        dispatch(Actions.updateUserType(formData)).then(res => {
            if (res.status === 200) {
                getUserDetails(res.data, "Signup Successfully");
            } else {
                toggalLoader(false);
                toast.error(res.data.non_field_errors[0]);
            }
        }).catch(() => {
            toggalLoader(false);
        });
    }

    useEffect(() => {
        if (isLogIn()) {
            let route = getUserStatus(userDetails, userDetails.username);
            history.push(route);
        }
    }, [])

    return (
        <>
            <Helmet>
                <title>SourceFirms: Hire remote software developers or get hired</title>
            </Helmet>
            <div>
                {isUserTypeShow &&
                    <Form signInWithGoogle={handleSignInWithGoogle} onSubmit={(values) => {
                        login(values)
                    }} />
                }
                {!isUserTypeShow &&
                    <UserTypeForm
                        userType={(user) => {
                            setActiveUser(user);
                        }}
                        activeUser={activeUser}
                        changeStep={updateUserType}
                    />
                }
            </div>
        </>
    );
}

export default Login;
