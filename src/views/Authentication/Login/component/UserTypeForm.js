import React from 'react';
import clientIcon from 'assets/img/icons/client.svg';
import agencyIcon from 'assets/img/icons/agency.svg';
import freelancerIcon from 'assets/img/icons/freelancer.svg';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import logo from 'assets/img/logo-white.png';
import halfOval_shape2 from 'assets/img/half_oval-shape2.png';
import { Typography } from '@mui/material';

export default function UserTypeForm(props) {
    const { changeStep, userType, activeUser } = props
    const userTypeDataList = [
        { id: 3, title: 'Client', icon: clientIcon },
        { id: 4, title: 'Agency', icon: agencyIcon },
        { id: 5, title: 'Freelancer', icon: freelancerIcon }
    ]

    const userTypeList = () => {
        return userTypeDataList.map(({ title, icon, id }) => (
            <Link to={null} key={id} onClick={() => { userType(id) }} >
                <div className={`role-div ${activeUser == id ? 'active' : ''}`}>
                    <img src={icon} alt='img' />
                    <p>{title}</p>
                </div>
            </Link>
        ))
    }

    return (
        <Grid container className='loginpage'>
            <Grid className='left-container'>
                <div className='bg-element'>
                    <img src={halfOval_shape2} alt="shape"></img>
                </div>
                <div className='logo'>
                    <img src={logo} alt='logo' />
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
            <Grid className='right-container signUp-container'>
                <Grid className='form-container'>
                    <Grid item className='loginForm'>
                        <Grid className='select-role'>
                            <h6>
                                Join SourceFirms as*
                            </h6>
                            <div className='role-container'>
                                {userTypeList()}
                            </div>
                        </Grid>
                        <Grid className='action-div'>
                            <Button onClick={() => changeStep('signUpForm')} variant="contained" className='primaryButton nextBtn'>Submit</Button >
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
