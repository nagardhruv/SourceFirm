import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import verifyMail from 'assets/img/icons/verifymail.png';
import { toast } from 'react-toastify';
import { LoaderContext } from "utils/LoaderContext";
import * as Actions from "../../../store/actions/index";
import history from "utils/history";
import { Typography } from "@mui/material";
import { store } from '../../../store';

function EmailVerification() {
    const state = store.getState();
    const token = state.authReducer.user?.token ?? state.authReducer.tempUser?.token ?? null;
    const location = useLocation();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.authReducer?.user || state.authReducer?.tempUser);
    const userDetails = useSelector((state) => state.authReducer?.userDetails || state.authReducer?.tempUserDetails);
    const { toggalLoader } = useContext(LoaderContext);


    const resendVerifyEmail = () => {
        toggalLoader(true);
        dispatch(Actions.resendVerifyEmailWithToken(token))
            .then((response) => {
                if (response.status === 200) {
                    toast.success(response.data[0]);
                } else {
                    toast.error(response.data.non_field_errors[0]);
                }
                toggalLoader(false);
            })
            .catch(() => {
                toggalLoader(false);
            });
    }

    const selectAnotherEmail = () => {
        if (user) {
            dispatch(Actions.deleteUserWithToken(user.id, token))
                .then((response) => {
                    history.push('/signup')
                    if (response.status === 204) {
                        dispatch({ type: 'USER_TEMP_DETAILS', payload: {} });
                        dispatch({ type: 'LOGIN_TEMP_USER', payload: {} }); // for token clear
                    } else {
                        dispatch({ type: 'USER_TEMP_DETAILS', payload: {} });
                        dispatch({ type: 'LOGIN_TEMP_USER', payload: {} }); // for token clear
                        Object.keys(response.data).forEach((error) => {
                            toast.error(response.data[error][0]);
                        })
                    }
                }).catch(() => {
                    dispatch({ type: 'USER_TEMP_DETAILS', payload: {} });
                    dispatch({ type: 'LOGIN_TEMP_USER', payload: {} });
                })
        }
        else {
            history.push('/signup')
        }
    }

    const getUserDetails = (authtoken) => {
        dispatch(Actions.getUserDetailsWithToken(authtoken)).then(res => {
            if (res.status === 200) {
                if (res.data.is_email_verified) {
                    dispatch({ type: 'GET_USER_DETAILS', payload: res.data });
                    dispatch({ type: 'USER_TEMP_DETAILS', payload: {} });
                    dispatch({ type: 'LOGIN_TEMP_USER', payload: {} });
                    history.push('/login');
                } else {
                    dispatch({ type: 'USER_TEMP_DETAILS', payload: res.data });
                }
            } else {
                dispatch({ type: 'USER_TEMP_DETAILS', payload: {} });
            }
        }).catch(() => {
            dispatch({ type: 'USER_TEMP_DETAILS', payload: {} });
        })
    }

    useEffect(() => {
        getUserDetails(token);
    }, [location]);

    return (

        <Grid className='form-container'>
            <Grid item className='loginForm verifyMailBox'>
                <Typography variant="h1" className='title'>
                    Email Verification
                </Typography>
                <Grid className='formControl subtext'>
                    <img src={verifyMail} alt='img' />
                </Grid>
                <Grid className='formControl subtext'>
                    <p>An Email has been sent to your  email address. <b>{location.state?.email || (user?.token ? userDetails.email : '')}</b>
                        <br />
                        Check your email inbox for a verification email. Didn&lsquo;t receive an email?
                        Resend email. </p>
                </Grid>

                <Grid className='action-div'>
                    {
                        location.state?.isNotShowTryAnotherEmail
                            ?
                            null
                            :
                            <Link onClick={() => selectAnotherEmail()} underline="none" className='previousBtn cursor-pointer'>
                                Try another Email Address
                            </Link>

                    }

                    <Button onClick={() => { resendVerifyEmail() }} variant="contained" className='primaryButton nextBtn'>Resend Email</Button >
                </Grid>
            </Grid>
        </Grid>

    );
}

export default EmailVerification;
