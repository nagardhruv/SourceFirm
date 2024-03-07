import React from 'react';
import LeftContainer from '../components/LeftContainer'
import RightContainer from '../components/RightContainer'
import "assets/css/auth.css";
import "assets/css/profile.css";
import Grid from '@mui/material/Grid';

import EmailVerification from './EmailVerification'

const index = () => {

    return (
        <Grid container className='loginpage'>
            <LeftContainer />
            <Grid className="right-container signUp-container">
                <RightContainer>
                    <EmailVerification />
                </RightContainer>
            </Grid>
        </Grid>
    )
}

export default index