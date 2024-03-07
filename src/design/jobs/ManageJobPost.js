import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "assets/css/manageJob.css";
import Button from '@mui/material/Button';
import DotIcon from 'assets/img/icons/dot-icon.svg';
import Link from "@mui/material/Link";
import Developmentprofile from 'assets/img/develop-profile1.png';
import Developmentprofile1 from 'assets/img/develop-profile2.png';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ManageList1 from "assets/img/icons/manage-list1.svg";
import ManageList2 from "assets/img/icons/manage-list2.svg";
import ManageList3 from "assets/img/icons/manage-list3.svg";
import ManageList4 from "assets/img/icons/manage-list4.svg";
import ManageList5 from "assets/img/icons/manage-list5.svg";
import ManageList6 from "assets/img/icons/manage-list-blue1.svg";
import ManageList7 from "assets/img/icons/manage-list-blue2.svg";
import ManageList8 from "assets/img/icons/manage-list-blue3.svg";
import ManageList9 from "assets/img/icons/manage-list-blue4.svg";
import ManageList10 from "assets/img/icons/manage-list-blue5.svg";





function ManageJobPost() {


    return (
        <>
            <div>
                <div className="manage_job">
                    <Container>
                        <div className="manage-job-heading">
                            <Typography variant="h4">Manage Job Posts</Typography>
                            <Button className="btn primaryButton">+ Create Job Post</Button>
                        </div>

                        <div className="manage-job-list">
                            <Grid container>
                                <Grid item lg={3} md={3} sm={12} xs={12}>
                                    <div className="left-job-list">
                                        <List>
                                            <ListItem className="active">

                                                <div className="list-img">
                                                    <img src={ManageList1} alt="" className="grey-img" />
                                                    <img src={ManageList6} alt="" className="blue-img" />
                                                </div>
                                                <div className="list-content">
                                                    <Typography variant="h5">All</Typography>
                                                </div>
                                                <div className="count-list">
                                                    <Typography variant="body1">15</Typography>
                                                </div>
                                            </ListItem>
                                            <ListItem>

                                                <div className="list-img">
                                                    <img src={ManageList2} alt="" className="grey-img" />
                                                    <img src={ManageList7} alt="" className="blue-img" />
                                                </div>
                                                <div className="list-content">
                                                    <Typography variant="h5">Active</Typography>
                                                </div>
                                                <div className="count-list">
                                                    <Typography variant="body1">03</Typography>
                                                </div>
                                            </ListItem>
                                            <ListItem>

                                                <div className="list-img">
                                                    <img src={ManageList3} alt="" className="grey-img" />
                                                    <img src={ManageList8} alt="" className="blue-img" />
                                                </div>
                                                <div className="list-content">
                                                    <Typography variant="h5">Draft</Typography>
                                                </div>
                                                <div className="count-list">
                                                    <Typography variant="body1">07</Typography>
                                                </div>
                                            </ListItem>
                                            <ListItem>

                                                <div className="list-img">
                                                    <img src={ManageList4} alt="" className="grey-img" />
                                                    <img src={ManageList9} alt="" className="blue-img" />
                                                </div>
                                                <div className="list-content">
                                                    <Typography variant="h5">Completed</Typography>
                                                </div>
                                                <div className="count-list">
                                                    <Typography variant="body1">12</Typography>
                                                </div>
                                            </ListItem>
                                            <ListItem>

                                                <div className="list-img">
                                                    <img src={ManageList5} alt="" className="grey-img" />
                                                    <img src={ManageList10} alt="" className="blue-img" />
                                                </div>
                                                <div className="list-content">
                                                    <Typography variant="h5">Expired</Typography>
                                                </div>
                                                <div className="count-list">
                                                    <Typography variant="body1">03</Typography>
                                                </div>
                                            </ListItem>
                                        </List>
                                    </div>
                                </Grid>
                                <Grid item lg={9} md={9} sm={12} xs={12}>
                                    <div className="job-list-content">
                                        <div className="job-list-card">
                                            <div className="job-card-header">
                                                <div className="heading-text">
                                                    <Typography variant="h5">Software Developer</Typography>
                                                    <Typography variant="body1">Job post ID : JP58974563</Typography>
                                                </div>
                                                <div className="active-inactive-list">
                                                    <div className="active-btn all-tag-btn">
                                                        <Typography variant="body2">Active</Typography>
                                                    </div>
                                                    <div className="heading-dot-icon">
                                                        <Link href="#"> <img src={DotIcon} alt="img" /> </Link>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="job-card-body">
                                                <div className="card-body-text">
                                                    <Typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry&#39;s standard dummy text. Lorem Ipsum is simply</Typography>
                                                </div>

                                                <div className="position-content">
                                                    <List>
                                                        <ListItem>
                                                            <span>Experience</span>
                                                            <Typography variant="h3">3 to 5 years</Typography>
                                                        </ListItem>
                                                        <ListItem>
                                                            <span>Availability</span>
                                                            <Typography variant="h3">Full Time</Typography>
                                                        </ListItem>
                                                        <ListItem>
                                                            <span>Position</span>
                                                            <Typography variant="h3">2</Typography>
                                                        </ListItem>
                                                    </List>
                                                    <div className="amount-year">
                                                        <Typography variant="h2">$5600-6000<span>/Month</span></Typography>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="job-card-footer">
                                                <div className="card-post">
                                                    <Typography variant="body1">Posted <span> 5 days ago </span></Typography>
                                                </div>
                                                <List>
                                                    <ListItem><img src={Developmentprofile} alt='Developmentprofile' /></ListItem>
                                                    <ListItem><img src={Developmentprofile1} alt='Developmentprofile1' /></ListItem>
                                                    <ListItem>
                                                        <Typography variant="body1">58+</Typography>
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-list-content">
                                        <div className="job-list-card">
                                            <div className="job-card-header">
                                                <div className="heading-text">
                                                    <Typography variant="h5">Software Developer</Typography>
                                                    <Typography variant="body1">Job post ID : JP58974563</Typography>
                                                </div>
                                                <div className="active-inactive-list">
                                                    <div className="active-btn all-tag-btn">
                                                        <Typography variant="body2">Active</Typography>
                                                    </div>
                                                    <div className="heading-dot-icon">
                                                        <Link href="#"> <img src={DotIcon} alt="img" /> </Link>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="job-card-body">
                                                <div className="card-body-text">
                                                    <Typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry&#39;s standard dummy text. Lorem Ipsum is simply</Typography>
                                                </div>

                                                <div className="position-content">
                                                    <List>
                                                        <ListItem>
                                                            <span>Experience</span>
                                                            <Typography variant="h3">3 to 5 years</Typography>
                                                        </ListItem>
                                                        <ListItem>
                                                            <span>Availability</span>
                                                            <Typography variant="h3">Full Time</Typography>
                                                        </ListItem>
                                                        <ListItem>
                                                            <span>Position</span>
                                                            <Typography variant="h3">2</Typography>
                                                        </ListItem>
                                                    </List>
                                                    <div className="amount-year">
                                                        <Typography variant="h2">$10-20<span>/Day</span></Typography>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="job-card-footer">
                                                <div className="card-post">
                                                    <Typography variant="body1">Posted <span> 5 days ago </span></Typography>
                                                </div>
                                                <List>
                                                    <ListItem><img src={Developmentprofile} alt='Developmentprofile' /></ListItem>
                                                    <ListItem><img src={Developmentprofile1} alt='Developmentprofile1' /></ListItem>
                                                    <ListItem>
                                                        <Typography variant="body1">58+</Typography>
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-list-content">
                                        <div className="job-list-card">
                                            <div className="job-card-header">
                                                <div className="heading-text">
                                                    <Typography variant="h5">Software Developer</Typography>
                                                    <Typography variant="body1">Job post ID : JP58974563</Typography>
                                                </div>
                                                <div className="active-inactive-list">
                                                    <div className="active-btn all-tag-btn">
                                                        <Typography variant="body2">Active</Typography>
                                                    </div>
                                                    <div className="heading-dot-icon">
                                                        <Link href="#"> <img src={DotIcon} alt="img" /> </Link>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="job-card-body">
                                                <div className="card-body-text">
                                                    <Typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry&#39;s standard dummy text. Lorem Ipsum is simply</Typography>
                                                </div>

                                                <div className="position-content">
                                                    <List>
                                                        <ListItem>
                                                            <span>Experience</span>
                                                            <Typography variant="h3">3 to 5 years</Typography>
                                                        </ListItem>
                                                        <ListItem>
                                                            <span>Availability</span>
                                                            <Typography variant="h3">Full Time</Typography>
                                                        </ListItem>
                                                        <ListItem>
                                                            <span>Position</span>
                                                            <Typography variant="h3">2</Typography>
                                                        </ListItem>
                                                    </List>
                                                    <div className="amount-year">
                                                        <Typography variant="h2">$5600-6000<span>/Month</span></Typography>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="job-card-footer">
                                                <div className="card-post">
                                                    <Typography variant="body1">Posted <span> 5 days ago </span></Typography>
                                                </div>
                                                <List>
                                                    <ListItem><img src={Developmentprofile} alt='Developmentprofile' /></ListItem>
                                                    <ListItem><img src={Developmentprofile1} alt='Developmentprofile1' /></ListItem>
                                                    <ListItem>
                                                        <Typography variant="body1">58+</Typography>
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-list-content">
                                        <div className="job-list-card">
                                            <div className="job-card-header">
                                                <div className="heading-text">
                                                    <Typography variant="h5">Software Developer</Typography>
                                                    <Typography variant="body1">Job post ID : JP58974563</Typography>
                                                </div>
                                                <div className="active-inactive-list">
                                                    <div className="draft-btn all-tag-btn">
                                                        <Typography variant="body2">Draft</Typography>
                                                    </div>
                                                <div className="heading-dot-icon">
                                                    <Link href="#"> <img src={DotIcon} alt="img" /> </Link>
                                                </div>
                                                </div>

                                            </div>

                                            <div className="job-card-body">
                                                <div className="card-body-text">
                                                    <Typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry&#39;s standard dummy text. Lorem Ipsum is simply</Typography>
                                                </div>

                                                <div className="position-content">
                                                    <List>
                                                        <ListItem>
                                                            <span>Experience</span>
                                                            <Typography variant="h3">3 to 5 years</Typography>
                                                        </ListItem>
                                                        <ListItem>
                                                            <span>Availability</span>
                                                            <Typography variant="h3">Full Time</Typography>
                                                        </ListItem>
                                                        <ListItem>
                                                            <span>Position</span>
                                                            <Typography variant="h3">2</Typography>
                                                        </ListItem>
                                                    </List>
                                                    <div className="amount-year">
                                                        <Typography variant="h2">$5600-6000<span>/Month</span></Typography>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="job-card-footer">
                                                <div className="card-post">
                                                    <Typography variant="body1">Posted <span> 5 days ago </span></Typography>
                                                </div>
                                                <List>
                                                    <ListItem><img src={Developmentprofile} alt='Developmentprofile' /></ListItem>
                                                    <ListItem><img src={Developmentprofile1} alt='Developmentprofile1' /></ListItem>
                                                    <ListItem>
                                                        <Typography variant="body1">58+</Typography>
                                                    </ListItem>
                                                </List>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="job-list-content">
                                        <div className="job-list-card">
                                            <div className="job-card-header">
                                                <div className="heading-text">
                                                    <Typography variant="h5">Software Developer</Typography>
                                                    <Typography variant="body1">Job post ID : JP58974563</Typography>
                                                </div>
                                                <div className="active-inactive-list">
                                                    <div className="expired-btn all-tag-btn">
                                                        <Typography variant="body2">Expired</Typography>
                                                    </div>
                                                <div className="heading-dot-icon">
                                                    <Link href="#"> <img src={DotIcon} alt="img" /> </Link>
                                                </div>
                                                </div>

                                            </div>

                                            <div className="job-card-body">
                                                <div className="card-body-text">
                                                    <Typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry&#39;s standard dummy text. Lorem Ipsum is simply</Typography>
                                                </div>

                                                <div className="position-content">
                                                    <List>
                                                        <ListItem>
                                                            <span>Experience</span>
                                                            <Typography variant="h3">3 to 5 years</Typography>
                                                        </ListItem>
                                                        <ListItem>
                                                            <span>Availability</span>
                                                            <Typography variant="h3">Full Time</Typography>
                                                        </ListItem>
                                                        <ListItem>
                                                            <span>Position</span>
                                                            <Typography variant="h3">2</Typography>
                                                        </ListItem>
                                                    </List>
                                                    <div className="amount-year">
                                                        <Typography variant="h2">$5600-6000<span>/Month</span></Typography>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="job-card-footer">
                                                <div className="card-post">
                                                    <Typography variant="body1">Posted <span> 5 days ago </span></Typography>
                                                </div>
                                                <List>
                                                    <ListItem><img src={Developmentprofile} alt='Developmentprofile' /></ListItem>
                                                    <ListItem><img src={Developmentprofile1} alt='Developmentprofile1' /></ListItem>
                                                    <ListItem>
                                                        <Typography variant="body1">58+</Typography>
                                                    </ListItem>
                                                </List>
                                            </div> */}
                                        </div>
                                    </div>


                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}
export default ManageJobPost;
