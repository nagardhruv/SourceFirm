import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import "assets/css/client-dashboard.css";
import userIcon from 'assets/img/default-avatar.png';
import chatIcon from 'assets/img/icons/chat-icon.svg';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from "@mui/material/FormControl";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AgencyDeveloperCard from './AgencyDeveloperCard';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function ClientDashboard() {
    const [country, setCountry] = React.useState('');
    const [city, setCity] = React.useState('');

    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
    };
    const handleChangeCity = (event) => {
      setCity(event.target.value);
    };

    return (
        <>
            <Container>
                <Grid container className='dashboard-container'>
                    <Grid item lg={4} md={4} sm={12} xs={12} >
                        <Grid className='dashboard-profile'>
                            <Avatar className='profile-image'  src={userIcon} alt="image"/>
                            <Typography className='id'>
                                DR581687985412
                            </Typography>
                            <Typography className='email'>
                                digitalrocketship123@test.com
                            </Typography>
                            <Button className='chatBtn' startIcon={<img src={chatIcon} alt="img" />}>chat</Button>
                        </Grid>
                        <Grid className='dashboard-agencyDetails'>
                            <Grid className="title">
                                <Typography variant="h5">Agency Details</Typography>
                            </Grid>
                            <Divider className='profile-divider' />
                            <FormControl variant="standard" className="formControl">
                                <Grid>
                                    <label>Website</label>
                                    <Typography className="value">digitalrocketship.com</Typography>
                                </Grid>
                            </FormControl>
                            <FormControl variant="standard" className="formControl">
                                <Grid>
                                    <label>Agency Registration Number</label>
                                    <Typography className="value">5485498456418</Typography>
                                </Grid>
                            </FormControl>
                            <FormControl variant="standard" className="formControl">
                                <Grid>
                                    <label>Agency Size</label>
                                    <Typography className="value">23</Typography>
                                </Grid>
                            </FormControl>
                            <FormControl variant="standard" className="formControl">
                                <Grid>
                                    <label>Main Agency Office Location</label>
                                    <Typography className="value">New York, America</Typography>
                                </Grid>
                            </FormControl>

                            <Grid className="title">
                                <Typography variant="h5">Technologies</Typography>
                            </Grid>
                            <Divider className='profile-divider' />
                            <Grid className='skillset'>
                                <List className='skillList'>
                                    <ListItem className='skillList-item'>
                                        <ListItemText
                                            primary="Java"
                                        />
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Grid className="dashboard-wrapper">
                            <div className='filter-container'>
                                <h3>Filters</h3>
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
                            </div>
                            <h3>Agency Developers</h3>
                            <Divider />
                            <div>
                                <AgencyDeveloperCard />
                            </div>
                        </Grid>
                    
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default ClientDashboard