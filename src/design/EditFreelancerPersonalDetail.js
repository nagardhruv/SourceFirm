import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import 'assets/css/profile.css';
import 'assets/css/allModals.css';

const ariaLabel = { 'aria-label': 'description' };

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }


function EditFreelancerPersonalDetail() {
    const [country, setCountry] = React.useState('');
    const [city, setCity] = React.useState('');

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          Settings
        </Link>,
        <Link
            underline="hover"
            key="3"
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
        >
            My Profile
        </Link>,
        <Typography key="4" color="text.primary">
            Personal Details
        </Typography>,
      ];

      const handleChangeCountry = (event) => {
          setCountry(event.target.value);
      };
      const handleChangeCity = (event) => {
        setCity(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
      };

  return (
    <>
    <Grid className='profile-top-section freelancer_profile-top-section'>
        <Container>
            <Grid container className='profile-top-inner'>
                <Grid item lg={6}>
                    <Stack spacing={2} className='breadcrumb-div'>
                        <Breadcrumbs
                            className='breadcrumb-nav'
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                </Grid>
                <Grid item lg={6}>
                    <p className='clientId'>Freelancer ID : <span>CB65854565</span></p>
                </Grid>
            </Grid>
        </Container>
    </Grid>
    <Container className='profile-container add_profile-container'>
        <h4>Edit Personal Details</h4>
        <Grid className='profile-inner add_profile-inner'>
            <Grid className='add_profile-form'>
                <Grid container className='formGrid'>
                    <Grid className='formGrid-inner'>
                        <FormControl variant="standard" className='formControl'>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                First Name*
                            </InputLabel>
                            <Input className='inputField' placeholder="Enter full name" inputProps={ariaLabel} />
                        </FormControl>
                    </Grid>
                    <Grid className='formGrid-inner'>
                        <FormControl variant="standard" className='formControl'>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                Last Name*
                            </InputLabel>
                            <Input className='inputField' placeholder="Enter full name" inputProps={ariaLabel} />
                        </FormControl>
                    </Grid>

                </Grid>
                <Grid container className='formGrid'>
                    <Grid className='formGrid-inner'>
                        <FormControl variant="standard" className='formControl'>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                Country*
                            </InputLabel>
                            <Select
                                value={country}
                                onChange={handleChangeCountry}
                                className='inputField'
                                placeholder="Select country"
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>New York, America</MenuItem>
                                <MenuItem value={20}>USA</MenuItem>
                                <MenuItem value={30}>Canada</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid className='formGrid-inner'>
                        <FormControl variant="standard" className='formControl'>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                City*
                            </InputLabel>
                            <Select
                                value={city}
                                onChange={handleChangeCity}
                                className='inputField'
                                placeholder="Select city"
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>New York, America</MenuItem>
                                <MenuItem value={20}>USA</MenuItem>
                                <MenuItem value={30}>Canada</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container className='formGrid'>
                    <Grid className='formGrid-inner'>
                        <FormControl variant="standard" className='formControl'>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                Email (Uneditable)*
                            </InputLabel>
                            <Input className='inputField' placeholder="Enter Email" inputProps={ariaLabel} />
                        </FormControl>
                    </Grid>
                    <Grid className='formGrid-inner'>
                        <FormControl variant="standard" className='formControl'>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                Contact Number
                            </InputLabel>
                            <Input className='inputField' placeholder="Enter contact number" inputProps={ariaLabel} />
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid className='action-div'>
                  <Link href="#" underline="none" className='previousBtn'>Cancel</Link>
                  <Button  variant="contained" className='primaryButton nextBtn'  onClick={handleClickOpen}>Submit</Button >
                </Grid>
            </Grid>
        </Grid>
    </Container>
    </>
  );
}

export default EditFreelancerPersonalDetail;
