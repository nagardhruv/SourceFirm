import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import 'assets/css/jobpostdetail.css';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import DotIcon from 'assets/img/icons/dot-icon.svg';
import ListItemText from "@mui/material/ListItemText";
import Button from '@mui/material/Button';
// 
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

function requestdetail() {

    const breadcrumbs = [
        <Link key="1" color="#6A8CAA" href="/" onClick={handleClick}>
            Home
        </Link>,
        <Link
            key="2"
            color="#6A8CAA"
            href="/getting-started/installation/"
            onClick={handleClick}
        >
            My Requests
        </Link>,
        <Link
            key="3"
            color="#6A8CAA"
            href="/getting-started/installation/"
            onClick={handleClick}
        >
            Request Details
        </Link>,

    ];

    return (
        <Grid className="top-job-post request-detail">
            <Container>
                <Grid container className='job-post-inner'>
                    <Grid item lg={12}>
                        <Stack spacing={2} className='breadcrumb-div'>
                            <Breadcrumbs
                                className='breadcrumb-nav'
                                separator={<NavigateNextIcon fontSize="small" />}
                                aria-label="breadcrumb"
                                color="#6A8CAA"
                            >
                                {breadcrumbs}
                            </Breadcrumbs>
                        </Stack>
                    </Grid>
                </Grid>


                <Grid >
                    <div className="job-list-content">
                        <div className="job-list-card">
                            <div className="job-card-header">
                                <div className="heading-text">
                                    <Typography variant="h5">Software Developer</Typography>
                                    <Typography variant="body1">Job post ID : JP58974563</Typography>
                                </div>
                                <div className="amount-year">
                                    <Typography variant="h2">$5600-6000<span>/Month</span></Typography>
                                </div>
                            </div>
                            <div className="job-card-body">


                                <div className="position-content">
                                    <List>
                                        <ListItem>
                                            <Typography variant="h3">3 to 5 years</Typography>
                                            <span>Experience</span>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant="h3">Full Time</Typography>
                                            <span>Availability</span>
                                        </ListItem>
                                        <ListItem>
                                            <Typography variant="h3">2</Typography>
                                            <span>Position</span>
                                        </ListItem>
                                    </List>

                                    <div className='reject-btn'>
                                        <Button className='btn-prymary btn' variant="contained" color="primary">
                                            Reject
                                        </Button>
                                        <Button className='btn-secondary btn' variant="contained" color="secondary">
                                            Secondary
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>


                <Grid container>
                    <Grid item lg={12} sm={12}>
                        <div className='job-post-description'>
                            <Typography variant="h4">Job Description</Typography>
                            <Typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry Lorem Ipsum has been the industrys standard dummy text.
                                Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy
                                text of the printing and typesetting industry Lorem Ipsum has been the
                                industrys standard dummy text. Lorem Ipsum is simply dummy text.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                Lorem Ipsum has been the industrys standard dummy text. Lorem Ipsum is simply dummy text.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has
                                been the industrys standard dummy text. Lorem Ipsum is simply dummy text.
                            </Typography>

                        </div>
                    </Grid>
                </Grid>

                <Grid container className='job-technology' spacing={3}>
                    <Grid item lg={6} md={6} sm={12}>
                        <div className='job-post-skill'>
                            <Typography variant="h4">Skills</Typography>
                            <Grid>
                                <List className="categoryList">
                                    <ListItem className="subcategoryList-item">
                                        <ListItemText primary="IOS Developmaent" />
                                    </ListItem>
                                    <ListItem className="subcategoryList-item">
                                        <ListItemText primary="Mobile App" />
                                    </ListItem>
                                    <ListItem className="subcategoryList-item">
                                        <ListItemText primary="Web App" />
                                    </ListItem>
                                    <ListItem className="subcategoryList-item">
                                        <ListItemText primary="Skill 04" />
                                    </ListItem>

                                </List>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12}>
                        <div className='job-post-skill'>
                            <Typography variant="h4">Technologies</Typography>
                            <Grid>
                                <List className="categoryList">
                                    <ListItem className="subcategoryList-item">
                                        <ListItemText primary="Java" />
                                    </ListItem>
                                    <ListItem className="subcategoryList-item">
                                        <ListItemText primary="Node" />
                                    </ListItem>
                                    <ListItem className="subcategoryList-item">
                                        <ListItemText primary="Flutter" />
                                    </ListItem>
                                    <ListItem className="subcategoryList-item">
                                        <ListItemText primary="PHP" />
                                    </ListItem>

                                </List>
                            </Grid>
                        </div>
                    </Grid>

                </Grid>

                <Grid className='location-content'>
                    <div className='location-text'>
                        <Typography variant='h5'>New York, America</Typography>
                    </div>
                    <div className='location-time'>
                        <Typography variant='h5'>New York, America</Typography>
                    </div>
                </Grid>







            </Container>
        </Grid>
    );
}
export default requestdetail;
