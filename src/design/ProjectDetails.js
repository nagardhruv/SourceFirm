import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'assets/css/profile.css';
import 'assets/css/allModals.css';
import 'assets/css/developer-profile.css';
import 'assets/css/projectCard.css';
import 'assets/css/projectDetail.css';

import editIcon from 'assets/img/icons/edit-icon.svg';
import deleteIcon from 'assets/img/icons/delete-icon.svg';
import deleteUser from 'assets/img/icons/deleteUser-icon.svg';
import Image1 from 'assets/img/projectimage-1.png';
import Image2 from 'assets/img/projectimage-2.png';
import Image3 from 'assets/img/projectimage-3.png';
import copyIcon from 'assets/img/icons/filecopy-icon.svg'
import locationIcon from 'assets/img/icons/location-grey-icon.svg';
import clockIcon from 'assets/img/icons/clock-grey-icon.svg';
import suitcaseIcon from 'assets/img/icons/suitcase-grey-icon.svg';
import paperIcon from 'assets/img/icons/paper-grey-icon.svg';

const ariaLabel = { 'aria-label': 'description' };

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 28,
              top: 26,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#548ca8',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#CECECE' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
      }));

function ProjectDetails() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

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
          Manage Developers
        </Link>,
        <Link
        underline="hover"
        key="2"
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
      >
            Developer Profile
      </Link>,
        <Typography key="4" color="text.primary">
            Project Details
        </Typography>,
      ];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const settings = {
        dots: false,
        margin: 10,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 5000,
        cssEase: "linear",
        reponsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      };

  return (
    <>
        <Container className='project-detail-page'>
            <Grid container className='profile-top-inner'>
                <Grid item lg={12}>
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
                <Grid item lg={12}>
                    <Grid className='pagetitle-container'>
                        <h3>Project Details</h3>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={8}>
                    <Card className="projectDetail-card">
                        <CardContent>
                            <Grid className="project-top">
                                <div className="icon-container">
                                    {/* <img src={brackets} className="project-icon" /> */}
                                    <p>PN</p>
                                </div>
                                <div className="project-title">
                                    <p className="name">Project Name</p>
                                    <p className="category">Category</p>
                                </div>
                                <div style={{ marginLeft : 'auto' }}>
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={openMenu ? 'long-menu' : undefined}
                                        aria-expanded={openMenu ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleMenuClick}
                                        className='more_action'
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={openMenu}
                                        onClose={handleMenuClose}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        PaperProps={{
                                        style: {
                                            width: '8ch',
                                        },
                                        }}
                                    >
                                        <MenuItem onClick={handleMenuClose} className='more_actionList'>
                                            <Link><img src={editIcon} style={{ width: '12px' }} alt='img'/>Edit</Link>
                                        </MenuItem>
                                        <MenuItem onClick={handleMenuClose} className='more_actionList delete'>
                                            <Link><img src={deleteIcon} style={{ width: '12px' }} alt='img'/>Delete</Link>
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </Grid>
                            <Grid className='aboutContent'>
                                <p className='developer-profile-subtitle'>About</p>
                                <p className='content'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text.

                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text.
                                </p>
                            </Grid>
                            <Grid className='skillset'>
                                <p className='developer-profile-subtitle'>Used Technologies</p>
                                <List className='skillList'>
                                    <ListItem className='skillList-item'>
                                        <ListItemText
                                            primary="Node"
                                        />
                                    </ListItem>
                                    <ListItem className='skillList-item'>
                                        <ListItemText
                                            primary="Java"
                                        />
                                    </ListItem>
                                    <ListItem className='skillList-item'>
                                        <ListItemText
                                            primary="HTML"
                                        />
                                    </ListItem>
                                    <ListItem className='skillList-item'>
                                        <ListItemText
                                            primary="Flutter"
                                        />
                                    </ListItem>
                                    <ListItem className='skillList-item'>
                                        <ListItemText
                                            primary="CSS"
                                        />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid>
                                <p className='developer-profile-subtitle'>Images</p>
                                <Slider {...settings} className="projectImage_slider">
                                    <div className="item">
                                        <img src={Image1} alt="img"/>
                                    </div>
                                    <div className="item">
                                        <img src={Image2} alt="img"/>
                                    </div>
                                    <div className="item">
                                        <img src={Image3} alt="img"/>
                                    </div>
                                    <div className="item">
                                        <img src={Image1} alt="img"/>
                                    </div>
                                    <div className="item">
                                        <img src={Image2} alt="img"/>
                                    </div>
                                </Slider>
                            </Grid>
                            <Grid>
                                <p className='developer-profile-subtitle'>Link</p>
                                <a href='#' className='project-link'>
                                    https://www.trootech.com
                                    <img src={copyIcon} height='16px' alt="img"/>
                                </a>
                            </Grid>
                            <Grid>
                                <p className='developer-profile-subtitle'>Project Duration</p>
                                <p className='project-duration'>02 March 2021  to  18 May 2021</p>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4}>
                    <div className='right-container'>
                        <Grid className='developerInfo'>
                            <h4>JU65482369</h4>
                            <p className='designation'>Software Developer<span>Senior</span></p>
                        </Grid>
                        <List className='expDetailList'>
                            <ListItem>
                                <img src={locationIcon} alt='img'/>
                                <p>New York, America</p>
                            </ListItem>
                            <ListItem>
                                <img src={clockIcon} alt='img'/>
                                <p><b>160</b> Hours in Month</p>
                            </ListItem>
                            <ListItem>
                                <img src={suitcaseIcon} alt='img'/>
                                <p><b>7+</b> Years of Experience</p>
                            </ListItem>
                            <ListItem>
                                <img src={paperIcon} alt='img'/>
                                <p><b>12+</b> Projects Done</p>
                            </ListItem>
                        </List>
                        <p className='developer-profile-subtitle'>Technologies</p>
                        <List className='skillList'>
                            <ListItem className='skillList-item'>
                                <ListItemText
                                    primary="Node"
                                />
                            </ListItem>
                            <ListItem className='skillList-item'>
                                <ListItemText
                                    primary="Java"
                                />
                            </ListItem>
                            <ListItem className='skillList-item'>
                                <ListItemText
                                    primary="HTML"
                                />
                            </ListItem>
                            <ListItem className='skillList-item'>
                                <ListItemText
                                    primary="Flutter"
                                />
                            </ListItem>
                            <ListItem className='skillList-item'>
                                <ListItemText
                                    primary="CSS"
                                />
                            </ListItem>
                        </List>
                        <Grid className='skillset'>
                            <p className='developer-profile-subtitle'>Skills</p>
                            <List className='skillList'>
                                <ListItem className='skillList-item'>
                                    <ListItemText
                                        primary="Node"
                                    />
                                </ListItem>
                                <ListItem className='skillList-item'>
                                    <ListItemText
                                        primary="Java"
                                    />
                                </ListItem>
                                <ListItem className='skillList-item'>
                                    <ListItemText
                                        primary="HTML"
                                    />
                                </ListItem>
                                <ListItem className='skillList-item'>
                                    <ListItemText
                                        primary="Flutter"
                                    />
                                </ListItem>
                                <ListItem className='skillList-item'>
                                    <ListItemText
                                        primary="CSS"
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid className='aboutContent'>
                            <p className='developer-profile-subtitle'>About</p>
                            <p className='content'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.
                            Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text. 
                            <a href='#'>Read More</a>
                            </p>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </Container>

      {/* modal start */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className='approval_modal'
      >
        <BootstrapDialogTitle id="customized-dialog-title" className='modal-title' onClose={handleClose}>
          <div className='title-img'>
            <img src={deleteUser} alt='img'/>
          </div>
        </BootstrapDialogTitle>
        <DialogContent className='content'>
            <Typography gutterBottom variant="h4">
                Are you Sure you want to Delete this User?
            </Typography>
            <Typography gutterBottom variant="subTitle">
                This Action Can’t be Undo, When you delete all data of this user it will be Eresed our System.
            </Typography>
        </DialogContent>
        <DialogActions className='bottom'>
          <Button autoFocus onClick={handleClose} variant="contained" className='modalBtn logoutBtn'>
            Yes, Delete
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}

export default ProjectDetails;
