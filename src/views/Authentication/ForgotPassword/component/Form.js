import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import logo from 'assets/img/logo-white.png';
import bgElement from 'assets/img/bg-element-path.png';
import halfOval_shape2 from 'assets/img/half_oval-shape2.png';
import envelopeIcon from 'assets/img/icons/envelope.svg';
import { reduxForm, Field } from 'redux-form';
import CustomInput from 'components/CustomInput/CustomInput.js';
import "assets/css/auth.css";
import history from 'utils/history';
import { Typography } from '@mui/material';
import { trimmed, required, email } from 'utils/Validation';

function Form(props) {

    const { handleSubmit } = props;
    return (
        <Grid container className='loginpage'>
            <Grid className='left-container'>
                <div className='bg-element'>
                    <img src={halfOval_shape2} alt="shape"></img>
                </div>
                <div className='logo'>
                    <img src={logo} alt='logo' className="cursor-pointer" onClick={() => history.push("/")} />
                </div>
                <Typography variant="p" component="p" gutterBottom>
                    SourceFirms is the global marketplace of one of the largest communities of
                    Clients, Agencies, and Independent Contractors for Software Development.
                    It connects talent 3x times better with more opportunities to transform
                    performance and growth for resilient people (clients), talents (developers),
                    and enterprises where it matters most – Technology Solution, IT Consulting,
                    Digital Transformation and more.
                </Typography>
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
                    <Grid item className='loginForm resetform'>
                        <Typography variant='h1' className='title'>
                            Reset Your Password
                        </Typography>
                        <Grid className='formControl subtext'>
                            <p>Enter your valid email address, and we&lsquo;ll email you instructions for resetting
                                your password. You may need to check your spam folder. </p>
                        </Grid>
                        <form onSubmit={handleSubmit} noValidate>
                            <Field
                                name="email"
                                component={CustomInput}
                                id="email"
                                labelText="Work Email Address *"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                validate={[required, email]}
                                inputProps={{
                                    placeholder: "your@email.com",
                                    type: "text",
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={envelopeIcon} height='16px' alt='img' />
                                        </InputAdornment>
                                    )
                                }}
                                normalize={trimmed()}
                            />
                            <Button variant="contained" type='submit' style={{ marginBottom: '20px' }} className='primaryButton w100'>Send Me Reset Password Link</Button >
                        </form>
                        <Grid className='link-container'>
                            {/* <Typography variant="p" component="p" gutterBottom>New to SourceFirms?  <Link onClick={() => { history.push('/signup') }} underline="none" className='signUp-link cursor-pointer'>Create an account</Link></Typography> */}
                            <Typography variant="p" component="p" gutterBottom>← Back to <Link onClick={() => { history.push('/login') }} underline="none" className='signUp-link cursor-pointer'>Login</Link></Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <div className='bg-element'>
                    <img src={bgElement} alt='img' />
                </div>
            </Grid>
        </Grid>
    );
}
const ReduxFormMapped = reduxForm({
    form: 'ForgotPasswordForm', // a unique identifier for this form
    enableReinitialize: false
})(Form)
export default ReduxFormMapped;