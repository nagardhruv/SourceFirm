import React from 'react'
import SocialLogin from '../../components/SocialLogin'; // Auth components

import clientIcon from 'assets/img/icons/user-grey.svg';
import agencyIcon from 'assets/img/icons/agency.svg';
import freelancerIcon from 'assets/img/icons/freelancer.svg';

import clientActiveIcon from 'assets/img/icons/client.svg';
import agencyActiveIcon from 'assets/img/icons/agency-blue.svg';
import freelancerActiveIcon from 'assets/img/icons/freelancer-blue.svg';

import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import history from "utils/history";


export default function (props) {
    const { changeStep, userType, activeUser } = props
    const userTypeDataList =
        [
            { id: 3, title: 'Client', icon: clientIcon, activeIcon: clientActiveIcon, subTitle: '(I want to hire)' },
            { id: 4, title: 'Agency', icon: agencyIcon, activeIcon: agencyActiveIcon, subTitle: '(I want to provide resources)' },
            { id: 5, title: 'Freelancer', icon: freelancerIcon, activeIcon: freelancerActiveIcon, subTitle: '(I am looking for work)' }
        ];

    const userTypeList = () => {
        return userTypeDataList.map(({ title, icon, activeIcon, id, subTitle }) => (
            <Link to={null} key={id} onClick={() => { userType(id) }} >
                <div className={`role-div cursor-pointer ${activeUser == id ? 'active' : ''}`}>
                    <img src={activeUser === id ? activeIcon : icon} alt='img' />
                    <p>{title}</p>
                    <span>{subTitle}</span>
                </div>
            </Link>
        ))
    }

    return (
        <Grid className='form-container'>
            <Grid item className='loginForm'>
                <Typography variant='h1' className='title'>
                    Welcome to SourceFirms
                    <span>
                        Agile software development teams are at your fingertips.
                    </span>
                </Typography>
                <Grid className='select-role'>
                    <h6>
                        Join SourceFirms as*
                    </h6>
                    <div className='role-container'>
                        {userTypeList()}
                    </div>
                </Grid>
                <Grid className='action-div'>
                    <Button onClick={() => changeStep('signUpForm')} variant="contained" className='primaryButton nextBtn'>Proceed</Button >
                </Grid>
                <Divider>or</Divider>
                <SocialLogin activeUser={activeUser} />
                <Grid className="link-container">
                    <Typography variant="p" component="p" gutterBottom>
                        Already have an account?{" "}
                        <Link onClick={() => { history.push('/login') }} underline="none" className="signUp-link cursor-pointer">
                            Sign In
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
