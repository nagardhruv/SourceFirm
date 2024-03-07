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
import DotIcon from 'assets/img/icons/dot-icon.svg';
import ListItemText from "@mui/material/ListItemText";
import Card from '@mui/material/Card';
import TimeIcon1 from 'assets/img/icons/time-icon-blue.svg';
import ExperianceIcon1 from 'assets/img/icons/exeperiance-icon-blue.svg';
import TimeIcon from 'assets/img/icons/time-icon-grey.svg';
import ExperianceIcon from 'assets/img/icons/exeperiance-icon-grey.svg';
import Button from '@mui/material/Button';
import CheckIcon from 'assets/img/icons/check-icon.svg';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

function JobPostDetail() {

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
            Manage Job Posts
        </Link>,
        <Link
            key="3"
            color="#6A8CAA"
            href="/getting-started/installation/"
            onClick={handleClick}
        >
            Job Posts Details
        </Link>,

    ];

    return (
        <Grid className="top-job-post">
            <Container>
                <div className='job-post-main-content-detail'>

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
                                    <div className="active-inactive-list">

                                        <div className="heading-dot-icon">
                                            <Link href="#"> <img src={DotIcon} alt="img" /> </Link>
                                        </div>
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
                                        <div className="amount-year">
                                            <Typography variant="h2">$5600-6000<span>/Month</span></Typography>
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
                        <Grid item sm={12}>
                            <div className='post-day'>
                                <Typography variant='body1'>
                                    Posted <span>5 days ago</span>
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid>
                        <div className='candidate-header'>
                            <Typography variant='h3'>
                                Candidates
                            </Typography>
                            <Typography variant='body1'>
                                <span>6</span> Best Match
                            </Typography>
                        </div>
                    </Grid>

                    <div className='create-postion-card'>
                        <div className='position-content'>
                            <Typography variant='h4'>Position 1</Typography>
                        </div>
                        <Grid container spacing={3}>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                                <div className='jobdetail-card'>
                                    <Card className='candidate-card'>
                                        <div className='card-heading'>
                                            <Typography variant='h3'>CA4654563214</Typography>
                                            <Typography variant='body1'>Software Developer</Typography>
                                        </div>

                                        {/* <div className='exeperiace-content'>
                                            <List>
                                                <ListItem>
                                                    <img src={ExperianceIcon} alt="" className='grey-img' />
                                                    <img src={ExperianceIcon1} alt="" className='blue-img' />
                                                    <Typography variant='body1'>5+ Years</Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <img src={TimeIcon} alt="" className='grey-img' />
                                                    <img src={TimeIcon1} alt="" className='blue-img' />
                                                    <Typography variant='body1'>Full Time</Typography>
                                                </ListItem>
                                            </List>
                                        </div> */}

                                        <Grid>
                                            <List className="categoryList">
                                                <ListItem className="subcategoryList-item">
                                                    <ListItemText primary="IOS Developmaent" />
                                                </ListItem>
                                                <ListItem className="subcategoryList-item">
                                                    <ListItemText primary="Web App" />
                                                </ListItem>
                                                <ListItem className="subcategoryList-item more-subcategory">
                                                    <ListItemText primary="+6" />
                                                </ListItem>

                                            </List>
                                        </Grid>

                                        <div className='candidate-text'>
                                            <Typography variant='body1'>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys...
                                            </Typography>
                                        </div>

                                        <div className='jobpost-position-listing'>
                                            <List>
                                                <ListItem className='job-list-heading'>
                                                    <div>
                                                        <img src={ExperianceIcon} alt='year-icon' />
                                                        <h5>6+ Years</h5>
                                                    </div>
                                                </ListItem>
                                                <ListItem>
                                                    <div>
                                                        <img src={TimeIcon} alt='year-icon' />
                                                        <h5>6+ Years</h5>
                                                    </div>
                                                </ListItem>
                                                <ListItem className='job-list-heading'>
                                                    <div>

                                                        <h3>$1500 <span>/M</span></h3>
                                                    </div>
                                                </ListItem>
                                            </List>
                                        </div>

                                        <div className='reject-btn'>
                                            <Button className='btn-prymary btn' variant="contained" color="primary">
                                                Primary
                                            </Button>
                                            <Button className='btn-secondary btn' variant="contained" color="secondary">
                                                Secondary
                                            </Button>
                                        </div>
                                    </Card>
                                </div>
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                                <div className='jobdetail-card'>
                                    <Card className='candidate-card'>
                                        <div className='card-heading'>
                                            <Typography variant='h3'>CA4654563214</Typography>
                                            <Typography variant='body1'>Software Developer</Typography>
                                        </div>

                                        <div className='exeperiace-content'>
                                            <List>
                                                <ListItem>
                                                    <img src={ExperianceIcon} alt="" className='grey-img' />
                                                    <img src={ExperianceIcon1} alt="" className='blue-img' />
                                                    <Typography variant='body1'>5+ Years</Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <img src={TimeIcon} alt="" className='grey-img' />
                                                    <img src={TimeIcon1} alt="" className='blue-img' />
                                                    <Typography variant='body1'>Full Time</Typography>
                                                </ListItem>
                                            </List>
                                        </div>

                                        <Grid>
                                            <List className="categoryList">
                                                <ListItem className="subcategoryList-item">
                                                    <ListItemText primary="IOS Developmaent" />
                                                </ListItem>
                                                <ListItem className="subcategoryList-item">
                                                    <ListItemText primary="Web App" />
                                                </ListItem>
                                                <ListItem className="subcategoryList-item more-subcategory">
                                                    <ListItemText primary="+6" />
                                                </ListItem>

                                            </List>
                                        </Grid>

                                        <div className='candidate-text'>
                                            <Typography variant='body1'>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys...
                                            </Typography>
                                        </div>

                                        <div className='reject-btn'>
                                            <Button className='btn-prymary btn' variant="contained" color="primary">
                                                Primary
                                            </Button>
                                            <Button className='btn-secondary btn' variant="contained" color="secondary">
                                                Secondary
                                            </Button>
                                        </div>
                                    </Card>
                                </div>
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                                <div className='jobdetail-card'>
                                    <Card className='candidate-card'>
                                        <div className='request-btn'>
                                            <img src={CheckIcon} alt='' />
                                            <Typography variant='body1'>Requested</Typography>
                                        </div>
                                        <div className='card-heading'>
                                            <Typography variant='h3'>CA4654563214</Typography>
                                            <Typography variant='body1'>Software Developer</Typography>
                                        </div>

                                        <div className='exeperiace-content'>
                                            <List>
                                                <ListItem>
                                                    <img src={ExperianceIcon} alt="" className='grey-img' />
                                                    <img src={ExperianceIcon1} alt="" className='blue-img' />
                                                    <Typography variant='body1'>5+ Years</Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <img src={TimeIcon} alt="" className='grey-img' />
                                                    <img src={TimeIcon1} alt="" className='blue-img' />
                                                    <Typography variant='body1'>Full Time</Typography>
                                                </ListItem>
                                            </List>
                                        </div>

                                        <Grid>
                                            <List className="categoryList">
                                                <ListItem className="subcategoryList-item">
                                                    <ListItemText primary="IOS Developmaent" />
                                                </ListItem>
                                                <ListItem className="subcategoryList-item">
                                                    <ListItemText primary="Web App" />
                                                </ListItem>
                                                <ListItem className="subcategoryList-item more-subcategory">
                                                    <ListItemText primary="+6" />
                                                </ListItem>

                                            </List>
                                        </Grid>

                                        <div className='candidate-text'>
                                            <Typography variant='body1'>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys...
                                            </Typography>
                                        </div>

                                        <div className='reject-btn'>

                                            <Button className='btn-default btn' variant="contained" color="secondary">
                                                Cancel Request
                                            </Button>
                                        </div>
                                    </Card>
                                </div>
                            </Grid>

                        </Grid>
                    </div>
                    <div className='create-postion-card'>
                        <div className='position-content'>
                            <Typography variant='h4'>Position 2</Typography>
                        </div>
                        <Grid container spacing={3}>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                                <div className='jobdetail-card'>
                                    <Card className='candidate-card'>
                                        <div className='request-btn'>
                                            <img src={CheckIcon} alt='' />
                                            <Typography variant='body1'>Requested</Typography>
                                        </div>
                                        <div className='card-heading'>
                                            <Typography variant='h3'>CA4654563214</Typography>
                                            <Typography variant='body1'>Software Developer</Typography>
                                        </div>

                                        <div className='exeperiace-content'>
                                            <List>
                                                <ListItem>
                                                    <img src={ExperianceIcon} alt="" className='grey-img' />
                                                    <img src={ExperianceIcon1} alt="" className='blue-img' />
                                                    <Typography variant='body1'>5+ Years</Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <img src={TimeIcon} alt="" className='grey-img' />
                                                    <img src={TimeIcon1} alt="" className='blue-img' />
                                                    <Typography variant='body1'>Full Time</Typography>
                                                </ListItem>
                                            </List>
                                        </div>

                                        <Grid>
                                            <List className="categoryList">
                                                <ListItem className="subcategoryList-item">
                                                    <ListItemText primary="IOS Developmaent" />
                                                </ListItem>
                                                <ListItem className="subcategoryList-item">
                                                    <ListItemText primary="Web App" />
                                                </ListItem>
                                                <ListItem className="subcategoryList-item more-subcategory">
                                                    <ListItemText primary="+6" />
                                                </ListItem>

                                            </List>
                                        </Grid>

                                        <div className='candidate-text'>
                                            <Typography variant='body1'>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys...
                                            </Typography>
                                        </div>

                                        <div className='reject-btn'>

                                            <Button className='btn-default btn' variant="contained" color="secondary">
                                                Cancel Request
                                            </Button>
                                        </div>
                                    </Card>
                                </div>
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                                <div className='jobdetail-card'>
                                    <Card className='candidate-card'>
                                        <div className='card-heading'>
                                            <Typography variant='h3'>CA4654563214</Typography>
                                            <Typography variant='body1'>Software Developer</Typography>
                                        </div>

                                        <div className='exeperiace-content'>
                                            <List>
                                                <ListItem>
                                                    <img src={ExperianceIcon} alt="" className='grey-img' />
                                                    <img src={ExperianceIcon1} alt="" className='blue-img' />
                                                    <Typography variant='body1'>5+ Years</Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <img src={TimeIcon} alt="" className='grey-img' />
                                                    <img src={TimeIcon1} alt="" className='blue-img' />
                                                    <Typography variant='body1'>Full Time</Typography>
                                                </ListItem>
                                            </List>
                                        </div>

                                        <Grid>
                                            <List className="categoryList">
                                                <ListItem className="subcategoryList-item">
                                                    <ListItemText primary="IOS Developmaent" />
                                                </ListItem>
                                                <ListItem className="subcategoryList-item">
                                                    <ListItemText primary="Web App" />
                                                </ListItem>
                                                <ListItem className="subcategoryList-item more-subcategory">
                                                    <ListItemText primary="+6" />
                                                </ListItem>

                                            </List>
                                        </Grid>

                                        <div className='candidate-text'>
                                            <Typography variant='body1'>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys...
                                            </Typography>
                                        </div>

                                        <div className='reject-btn'>
                                            <Button className='btn-prymary btn' variant="contained" color="primary">
                                                Primary
                                            </Button>
                                            <Button className='btn-secondary btn' variant="contained" color="secondary">
                                                Secondary
                                            </Button>
                                        </div>
                                    </Card>
                                </div>
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                                <div className='jobdetail-card'>
                                    <Card className='candidate-card'>
                                        <div className='card-heading'>
                                            <Typography variant='h3'>CA4654563214</Typography>
                                            <Typography variant='body1'>Software Developer</Typography>
                                        </div>

                                        <div className='exeperiace-content'>
                                            <List>
                                                <ListItem>
                                                    <img src={ExperianceIcon} alt="" className='grey-img' />
                                                    <img src={ExperianceIcon1} alt="" className='blue-img' />
                                                    <Typography variant='body1'>5+ Years</Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <img src={TimeIcon} alt="" className='grey-img' />
                                                    <img src={TimeIcon1} alt="" className='blue-img' />
                                                    <Typography variant='body1'>Full Time</Typography>
                                                </ListItem>
                                            </List>
                                        </div>

                                        <Grid>
                                            <List className="categoryList">
                                                <ListItem className="subcategoryList-item">
                                                    <ListItemText primary="IOS Developmaent" />
                                                </ListItem>
                                                <ListItem className="subcategoryList-item">
                                                    <ListItemText primary="Web App" />
                                                </ListItem>
                                                <ListItem className="subcategoryList-item more-subcategory">
                                                    <ListItemText primary="+6" />
                                                </ListItem>

                                            </List>
                                        </Grid>

                                        <div className='candidate-text'>
                                            <Typography variant='body1'>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys...
                                            </Typography>
                                        </div>

                                        <div className='reject-btn'>
                                            <Button className='btn-prymary btn' variant="contained" color="primary">
                                                Primary
                                            </Button>
                                            <Button className='btn-secondary btn' variant="contained" color="secondary">
                                                Secondary
                                            </Button>
                                        </div>
                                    </Card>
                                </div>
                            </Grid>


                        </Grid>
                    </div>
                </div>
            </Container>
        </Grid>
    );
}
export default JobPostDetail;
