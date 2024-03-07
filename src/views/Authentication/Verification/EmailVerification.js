import React, { useContext } from "react";
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import verifyMail from 'assets/img/icons/verifymail.png';
import { toast } from 'react-toastify';
import { LoaderContext } from "utils/LoaderContext";
import * as Actions from "../../../store/actions/index";
import { Typography } from "@mui/material";

function EmailVerification() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { toggalLoader } = useContext(LoaderContext);

    const resendVerifyEmail = () => {

        toggalLoader(true);
        dispatch(Actions.resendVerifyEmail())
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
                    <p>An Email has been sent to your  email address <b>{location.state?.email}</b>
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
                            <Link href="/signup" underline="none" className='previousBtn'>
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
