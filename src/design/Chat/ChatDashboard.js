import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import SearchBar from './SearchBar';
import "assets/css/chat.css";
import chatProfileImg from "assets/img/develop-profile2.png";
import defaultImg from "assets/img/default-avatar.png";
import attachmentIcon from 'assets/img/icons/pin-icon.svg';
import sendIcon from 'assets/img/icons/send-icon.svg';
import calendarIcon from 'assets/img/icons/calendar-icon.svg';
import dolarIcon from 'assets/img/icons/dolar-icon.svg';
import uploadedImage from "assets/img/certificate-3.png";
import InterviewCelender from 'assets/img/interview-celender.png';
import interviewCoin from 'assets/img/interview-coin.png';

const ariaLabel = { 'aria-label': 'description' };

function ChatDashboard() {

    return (
        <>
            <Container>
                <Grid container className='dashboard-container'>
                    <Grid item lg={3} md={3} sm={12} xs={12} >
                        <Grid className='chat-aside'>
                            <SearchBar />
                            <Grid className='chat-list'>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <img src={chatProfileImg} alt="profile-img" />
                                            </Avatar>
                                            <span className='statusDot'></span>
                                        </ListItemAvatar>
                                        <ListItemText>
                                            <div className='primary-section'>
                                                <Typography className='chat-id'>
                                                    CA46548542
                                                </Typography>
                                                <div className='time'>
                                                    <span>
                                                        2:36 PM
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='secondary-section'>
                                                <Typography className='chat-msg'>
                                                    Lorem Ipsum is simply...
                                                </Typography>
                                                <div className='msg-count'>
                                                    <span>
                                                        3
                                                    </span>
                                                </div>
                                            </div>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <img src={defaultImg} alt="profile-img" />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText>
                                            <div className='primary-section'>
                                                <Typography className='chat-id'>
                                                    CA46548542
                                                </Typography>
                                                <div className='time'>
                                                    <span>
                                                        2:36 PM
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='secondary-section'>
                                                <Typography className='chat-msg'>
                                                    Lorem Ipsum is simply dum...
                                                </Typography>
                                                {/* <div className='msg-count'>
                                                    <span>
                                                        3
                                                    </span>
                                                </div> */}
                                            </div>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={9} md={9} sm={12} xs={12}>
                        <Grid className='chat-main'>
                            <Grid className='chat-header'>
                                <Grid className="chat-profile">
                                    <div className="profile-img-container">
                                        <img src={chatProfileImg} alt="img" />
                                        <span className='statusDot'></span>
                                    </div>
                                    <div className="profile-title">
                                        <Typography className="id">CA46548542</Typography>
                                        <Typography className="position">Software Developer (Job Post Title)</Typography>
                                    </div>
                                </Grid>
                                <Grid>
                                    <IconButton aria-label="delete" className='attach-Btn'>
                                        <img src={calendarIcon} alt='img' />
                                    </IconButton>
                                    <IconButton aria-label="delete" className='attach-Btn'>
                                        <img src={dolarIcon} alt='img' />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid className="chat-msg-container">
                                <Divider>Today</Divider>
                                <Grid className="right-chat">
                                    <div className='chat-box'>
                                        <div className='chat-time'>
                                            <Typography>2:36 PM</Typography>
                                        </div>
                                        <div className='right-chat-block doc-block'>
                                            <div className='uploadchatImage'>
                                                <img src={uploadedImage} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='chat-user'>
                                        <img src={chatProfileImg} alt='img' />
                                    </div>
                                </Grid>
                                <Grid className="right-chat">
                                    <div className='chat-box'>
                                        <div className='chat-time'>
                                            <Typography>2:36 PM</Typography>
                                        </div>
                                        <div className='interview-wrapper'>
                                            <div className='interview-main-box'>
                                                <div className='interview-celender-img'>
                                                    <img src={InterviewCelender} alt="" />
                                                </div>
                                                <div className='interview-text-heading'>
                                                    <Typography variant='h6'>Interview Rescheduled </Typography>
                                                    <Typography variant='h3'>07/09/2022, 03:30 PM </Typography>
                                                    <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry...</Typography>
                                                    <div className='interview-client-id'>
                                                        <Typography variant='body1'>Job post id : JP85236985</Typography>
                                                        <Typography variant='body1'>Developer id : AD123654789</Typography>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='interview-btn-schedule'>
                                                <div className='interview-view-btn'>
                                                    <Button className='btn btn-secondary'>View Detail</Button>
                                                </div>
                                                <div className='interview-view-btn'>
                                                    <Button className='btn btn-primary'>Reschedule</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='chat-user'>
                                        <img src={chatProfileImg} alt='img' />
                                    </div>
                                </Grid>
                                <Grid className="right-chat">
                                    <div className='chat-box'>
                                        <div className='chat-time'>
                                            <Typography>2:36 PM</Typography>
                                        </div>
                                        <div className='interview-wrapper'>
                                            <div className='interview-main-box'>
                                                <div className='interview-celender-img'>
                                                    <img src={interviewCoin} alt="" />
                                                </div>
                                                <div className='interview-text-heading'>
                                                    <Typography variant='h6'>Your Offer </Typography>
                                                    <Typography variant='h4'>$35.00 <span>/Day</span></Typography>
                                                    <div className='interview-client-id'>
                                                        <Typography variant='body1'>Job post id : JP85236985</Typography>
                                                        <Typography variant='body1'>Developer id : AD123654789</Typography>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className='chat-user'>
                                        <img src={chatProfileImg} alt='img' />
                                    </div>
                                </Grid>
                                <Grid className='left-chat'>
                                    <div className='chat-user'>
                                        <img src={chatProfileImg} alt='img' />
                                    </div>
                                    <div className='chat-box'>
                                        <div className='left-chat-block'>
                                            <Typography>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text.
                                            </Typography>
                                        </div>
                                        <div className='chat-time'>
                                            <Typography>2:36 PM</Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid className="left-chat">
                                    <div className='chat-user'>
                                        <img src={chatProfileImg} alt='img' />
                                    </div>
                                    <div className='chat-box'>

                                        <div className='interview-wrapper interview-left-wrapper'>
                                            <div className='interview-main-box'>
                                                <div className='interview-celender-img'>
                                                    <img src={InterviewCelender} alt="" />
                                                </div>
                                                <div className='interview-text-heading'>
                                                    <Typography variant='h6'>Interview Rescheduled </Typography>
                                                    <Typography variant='h3'>07/09/2022, 03:30 PM </Typography>
                                                    <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry...</Typography>
                                                    <div className='interview-client-id'>
                                                        <Typography variant='body1'>Job post id : JP85236985</Typography>
                                                        <Typography variant='body1'>Developer id : AD123654789</Typography>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='interview-btn-schedule'>
                                                <div className='interview-view-btn'>
                                                    <Button className='btn btn-secondary'>View Detail</Button>
                                                </div>
                                                <div className='interview-view-btn'>
                                                    <Button className='btn btn-primary'>Reschedule</Button>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='chat-time'>
                                            <Typography>2:36 PM</Typography>
                                        </div>
                                    </div>

                                </Grid>
                                <Grid className="left-chat">
                                <div className='chat-user'>
                                        <img src={chatProfileImg} alt='img'/>
                                    </div>
                                    <div className='chat-box'>
                                    
                                        <div className='interview-wrapper interview-left-wrapper'>
                                           <div className='interview-main-box'>
                                            <div className='interview-celender-img'>
                                              <img src={interviewCoin} alt="" />
                                            </div>
                                            <div className='interview-text-heading'>
                                                <Typography variant='h6'>Your Offer </Typography>
                                                <Typography variant='h4'>$35.00 <span>/Day</span></Typography>
                                            <div className='interview-client-id'>
                                                <Typography variant='body1'>Job post id : JP85236985</Typography>
                                                <Typography variant='body1'>Developer id : AD123654789</Typography>
                                            </div> 
                                            </div>

                                           </div>
                                           <div className='interview-btn-schedule'>
                                            <div className='interview-view-btn'>
                                                <Button className='btn btn-secondary'>Accept</Button>
                                            </div>
                                            <div className='interview-view-btn'>
                                                <Button className='btn btn-secondary'>Counter offer</Button>
                                            </div>
                                            <div className='interview-view-btn'>
                                                <Button className='btn btn-primary'>Reject</Button>
                                            </div>
                                           </div>
                                        </div>
                                        <div className='chat-time'>
                                            <Typography>2:36 PM</Typography>
                                        </div>
                                    </div>
                                    
                                </Grid>
                            </Grid>
                            <Grid className='chat-footer'>
                                <Grid className='chat-text-box'>
                                    <FormControl variant="standard" className='formControl'>
                                        <Input placeholder="Enter your massage here" inputProps={ariaLabel} />
                                    </FormControl>
                                </Grid>
                                <Grid className='chat-action'>
                                    <IconButton aria-label="delete" className='attach-Btn'>
                                        <img src={attachmentIcon} alt='img' />
                                    </IconButton>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <Button className='send-Btn'>
                                        <img src={sendIcon} alt='img' />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default ChatDashboard