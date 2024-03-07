import React from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import logo from 'assets/img/logo-white.png';
import googleIcon from 'assets/img/icons/Google-icon.svg';
// import linkedinIcon from 'assets/img/icons/linkedin.svg';
import bgElement from 'assets/img/bg-element-path.png';
import halfOval_shape2 from 'assets/img/half_oval-shape2.png';
import envelopeIcon from 'assets/img/icons/envelope.svg';
import lockIcon from 'assets/img/icons/lock.svg';
import visibilityIcon from 'assets/img/icons/visibility-icon.svg';
import visibilityOffIcon from 'assets/img/icons/visibilityOff-icon.svg';
import { reduxForm, Field } from 'redux-form';
import CustomInput from 'components/CustomInput/CustomInput.js';
import history from 'utils/history';
import { useGoogleLogin } from '@react-oauth/google';
import "assets/css/auth.css";
import { Typography } from '@mui/material';
import { required, email, trimmed } from 'utils/Validation';

const password = value => (
    value && !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(value)
        ? 'Passwords must contain eight characters: one lower case letter [a-z] numeric character [0-9] and special character: @$!%*#?&' /* eslint-disable-line */
        : undefined
);

function Form(props) {
    const { handleSubmit, signInWithGoogle } = props;
    const [values, setValues] = React.useState({ showPassword: false });

    const login = useGoogleLogin({
        onSuccess: tokenResponse => signInWithGoogle(tokenResponse),
    })

    return (
        <Grid container className='loginpage'>
            <Grid className='left-container'>
                <div className='bg-element'>
                    <img src={halfOval_shape2} alt="shape"></img>
                </div>
                <div className='logo'>
                    <img src={logo} alt='logo' className="cursor-pointer" onClick={() => history.push("/")} />
                </div>
                <Typography variant="body1" component="" gutterBottom>
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
                        Back to [Home]
                    </Link>
                </Grid>
                <Grid className='form-container'>
                    <Grid item className='loginForm'>
                        <Typography variant='h1' className='title'>
                            Welcome to SourceFirms <span>Agile software development teams are at your fingertips.</span>
                        </Typography>
                        <Typography variant='h6' className='formControl subtext'>
                            Sign-in with your credentials to explore opportunities and know how
                            SourceFirms can put the power of technology to work for you. [It’s
                            Transparent and Eventually, FREE]
                        </Typography>
                        <form onSubmit={handleSubmit} noValidate className='form-content'>
                            <Field
                                name="username"
                                component={CustomInput}
                                id="username"
                                labelText="Work Email Address *"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                validate={[required, email]}
                                inputProps={{
                                    placeholder: "your@email.com ",
                                    type: "text",
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={envelopeIcon} height='16px' alt='img' />
                                        </InputAdornment>
                                    )
                                }}
                                normalize={trimmed()}
                            />
                            <Field
                                name="password"
                                component={CustomInput}
                                id="password"
                                labelText="Password *"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                validate={[required, password]}
                                inputProps={{
                                    placeholder: "Enter Password",
                                    type: (values.showPassword ? 'text' : 'password'),
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={lockIcon} alt='img' />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end" className='adornment-icon'>
                                            <img onClick={() => { setValues({ ...values, showPassword: !values.showPassword }); }} src={(values.showPassword) ? visibilityIcon : visibilityOffIcon} alt='img' />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <FormControl variant="standard" className='formControl text-right'>
                                <Link underline="none" className='forget-link cursor-pointer' onClick={() => history.push('/forgetpassword')}>Forgot your password or cannot log in? </Link>
                            </FormControl>
                            {/* <Grid item lg={12}>
                                <Field
                                    name="is_terms_and_condition_accepted"
                                    component={CustomCheckBox}
                                    labelText="I agree to the Terms of Use and Privacy Policy."
                                    validate={required}
                                />
                            </Grid> */}
                            <Button variant="contained" classes={{
                                root: 'primaryButton'
                            }} type="submit" className='w100' style={{ marginBottom: '20px' }}>Login</Button >
                            <Divider>or</Divider>
                            <Grid className="socialLogin" gap={1.8}>
                                <Button size='large' className='media-btn'
                                    onClick={e => {
                                        e.preventDefault();
                                        document.querySelector('.google_login_btn').click()
                                    }}>
                                    <span><img src={googleIcon} alt='img' /></span>
                                    Continue with Google
                                </Button>
                                {/* <Button size='large' className='media-btn'>
                                        <span><img src={linkedinIcon} alt='img' /></span>
                                        Continue with linkedin
                                    </Button> */}
                                <div style={{ display: 'none' }}>
                                    <Button className='media-btn google_login_btn' onClick={() => login()}>
                                        <span><img src={googleIcon} alt='img' /></span>
                                    </Button>
                                </div>
                            </Grid>
                            <Grid className='link-container'>
                                <Typography variant="p" component="p" gutterBottom>New to SourceFirms? <Link onClick={() => { history.push('/signup') }} underline="none" className='signUp-link cursor-pointer'>Create an account</Link></Typography>
                            </Grid>
                        </form>
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
    form: 'LoginForm', // a unique identifier for this form
    enableReinitialize: false
})(Form)
export default ReduxFormMapped;
