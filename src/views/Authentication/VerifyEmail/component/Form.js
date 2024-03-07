import React from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import verifyMail from 'assets/img/icons/verifymail.png';
import history from "utils/history";
import { Typography } from "@mui/material";

function Form(props) {

    const { isExpire } = props;
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
                    <p>{isExpire ? 'Token has been expired.' : 'Processing...'} </p>
                </Grid>
                <Grid className='action-div'>
                    <Button onClick={() => history.push('/login')} variant="contained" className='primaryButton nextBtn'>Back to Login</Button >
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Form;
