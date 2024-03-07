import * as React from 'react';
import { useContext } from "react";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import logo from 'assets/img/logo-white.png';
import bgElement from 'assets/img/bg-element-path.png';
import halfOval_shape2 from 'assets/img/half_oval-shape2.png';
import mailBox from 'assets/img/icons/mail-box.png';
import { useDispatch } from 'react-redux';
import * as Actions from '../../store/actions/index';
import { toast } from 'react-toastify';
import history from 'utils/history';
import { LoaderContext } from "utils/LoaderContext";
import { Typography } from '@mui/material';

function CheckMail() {

    const dispatch = useDispatch();
    const email = history.location.state;
    const { toggalLoader } = useContext(LoaderContext);

    const handleClick = () => {
        toggalLoader(true);
        dispatch(Actions.forgotPassword(email))
            .then(response => {
                if (response.status === 200) {
                    toggalLoader(false);
                    toast.success(response.data.detail);
                    dispatch({ type: 'FORGOT_PASSWORD', payload: response.data });
                } else {
                    dispatch({ type: 'FORGOT_PASSWORD', payload: null });
                    toast.error('Error Occurred');
                    toggalLoader(false);
                }
            }).catch(() => {
                dispatch({ type: 'FORGOT_PASSWORD', payload: null });
                toast.error('Error Occurred');
                toggalLoader(false);
            });
    }

    return (
        <>
            <Grid container className='loginpage'>
                <Grid className='left-container'>
                    <div className='bg-element'>
                        <img src={halfOval_shape2} alt="shape"></img>
                    </div>
                    <div className='logo'>
                        <img src={logo} alt='logo' />
                    </div>
                    <p>
                        SourceFirms is the global marketplace of one of the largest communities of
                        Clients, Agencies, and Independent Contractors for Software Development.
                        It connects talent 3x times better with more opportunities to transform
                        performance and growth for resilient people (clients), talents (developers),
                        and enterprises where it matters most – Technology Solution, IT Consulting,
                        Digital Transformation and more.
                    </p>
                </Grid>
                <Grid className='right-container'>
                    <Grid item className='login-nav'>
                        <Link onClick={() => { history.push('/') }} underline="none" className='nav-link'>
                            Home
                        </Link>
                        {/* <Link onClick={() => { history.push('/') }} underline="none" className='nav-link'>
                            Plans
                        </Link> */}
                    </Grid>
                    <Grid className='form-container'>
                        <Grid item className='loginForm verifyMailBox'>
                            <Typography variant="h1" className='title'>
                                Check your Email
                            </Typography>
                            <Grid className='formControl subtext'>
                                <img src={mailBox} alt='img' />
                            </Grid>
                            <Grid className='formControl subtext'>
                                <p>We have sent a Password Reset instruction to your email address. <b>{email?.email}</b></p>
                            </Grid>
                            {/* <Grid className='formControl subtext'>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text
                                </p>
                            </Grid> */}
                            <Grid className='action-div'>
                                <Link onClick={() => { history.push('/forgetpassword') }} underline="none" className='previousBtn cursor-pointer'>
                                    Try another Email Address
                                </Link>
                                <Button variant="contained" className='primaryButton nextBtn' onClick={handleClick}>Resend Email</Button >
                            </Grid>
                        </Grid>
                    </Grid>
                    <div className='bg-element'>
                        <img src={bgElement} alt='img' />
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default CheckMail;
