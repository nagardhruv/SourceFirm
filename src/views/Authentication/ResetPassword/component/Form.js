import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import "assets/css/auth.css";

import logo from 'assets/img/logo-white.png';
import bgElement from 'assets/img/bg-element-path.png';
import halfOval_shape2 from 'assets/img/half_oval-shape2.png';
import lockIcon from 'assets/img/icons/lock.svg';
import visibilityIcon from 'assets/img/icons/visibility-icon.svg';
import visibilityOffIcon from 'assets/img/icons/visibilityOff-icon.svg';
import { reduxForm, Field } from 'redux-form';
import CustomInput from 'components/CustomInput/CustomInput';
import history from 'utils/history';
import { Typography } from '@mui/material';


const required = value => (value ? undefined : 'Required');
const passwordsMatch = (value, allValues) => {
    if (value !== allValues.new_password1) {
        return 'Passwords does not match';
    }
    return undefined;
};
const password = value => (
    value && !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(value)
        ? 'Passwords must contain eight characters: one lower case letter [a-z] numeric character [0-9] and special character: @$!%*#?&' /* eslint-disable-line */
        : undefined
);

function Form(props) {
    const { handleSubmit } = props;

    const [values, setValues] = React.useState({
        showPassword: false, showConfirmPassword: false,
    });

    return (
        <>
            <Grid container className='loginpage'>
                <Grid className='left-container'>
                    <div className='bg-element'>
                        <img src={halfOval_shape2} alt="shape"></img>
                    </div>
                    <div className='logo'>
                        <img src={logo} alt='logo' className="cursor-pointer" onClick={() => history.push("/")} />
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
                        <Grid item className='loginForm'>
                            <Typography variant='h1' className='title'>
                                Reset Password
                            </Typography>
                            <form onSubmit={handleSubmit} noValidate>
                                <Field
                                    name="new_password1"
                                    component={CustomInput}
                                    id="new_password1"
                                    labelText="New Password*"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    validate={[required, password, passwordsMatch]}
                                    inputProps={{
                                        type: (values.showPassword ? 'text' : 'password'),
                                        placeholder: "Enter Password",
                                        startAdornment: (
                                            < InputAdornment position="start" >
                                                <img src={lockIcon} height='30px' alt='img' />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end" className='adornment-icon'>
                                                <img onClick={() => { setValues({ ...values, showPassword: !values.showPassword }); }} src={(values.showPassword) ? visibilityIcon : visibilityOffIcon} alt='img' />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <Field
                                    name="new_password2"
                                    component={CustomInput}
                                    id="new_password2"
                                    labelText="Confirm Password*"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    validate={[required, passwordsMatch]}
                                    inputProps={{
                                        type: (values.showConfirmPassword ? 'text' : 'password'),
                                        placeholder: "Enter Password",
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <img src={lockIcon} height='30px' alt='img' />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end" className='adornment-icon'>
                                                <img onClick={() => { setValues({ ...values, showConfirmPassword: !values.showConfirmPassword }); }} src={(values.showConfirmPassword) ? visibilityIcon : visibilityOffIcon} alt='img' />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <Grid className='action-div resetAction-div'>
                                    <Link underline="none" className='previousBtn cursor-pointer' onClick={() => history.push('/login')}>
                                        Cancel
                                    </Link>
                                    <Button variant="contained" type='submit' className='primaryButton resetBtn'>Reset</Button >
                                </Grid>
                            </form>

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

const ReduxFormMapped = reduxForm({
    form: 'ResetPasswordForm', // a unique identifier for this form
    enableReinitialize: false
})(Form)
export default ReduxFormMapped;