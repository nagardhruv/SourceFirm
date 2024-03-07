import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import InputAdornment from '@mui/material/InputAdornment';
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
import ProjectCard from 'components/Cards/ProjectCard';
import 'assets/css/profile.css';
import 'assets/css/allModals.css';
import 'assets/css/developer-profile.css';
import 'assets/css/projectCard.css';

import freelancerIcon from 'assets/img/icons/freelancer.svg';
import editIcon from 'assets/img/icons/edit-icon.svg';
import deleteIcon from 'assets/img/icons/delete-icon.svg';
import suitcaseIcon from 'assets/img/icons/suitcase-icon.svg';
import paperIcon from 'assets/img/icons/paper-icon.svg';
import clockIcon from 'assets/img/icons/clock-icon.svg';
import graduateCapIcon from 'assets/img/icons/graduate-cap-icon.svg';
import deleteUser from 'assets/img/icons/deleteUser-icon.svg';


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

function DeveloperProfile() {
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
        <Typography key="4" color="text.primary">
            Developer Profile
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

    return (
        <>
            <Grid className='developer_profile-section'>
                <Container>
                    <Grid container className='profile-top-inner'>
                        <Grid item lg={12} md={12} sm={12}>
                            <Stack spacing={2} className='breadcrumb-div-light'>
                                <Breadcrumbs
                                    className='breadcrumb-nav'
                                    separator={<NavigateNextIcon fontSize="small" />}
                                    aria-label="breadcrumb"
                                >
                                    {breadcrumbs}
                                </Breadcrumbs>
                            </Stack>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12}>
                            <Grid className='developerprofile-detail-section'>
                                <Grid className='developerProfile-inner'>
                                    <Grid className='developerImage'>
                                        <div className='developer'>
                                            <img src={freelancerIcon} alt='img' />
                                        </div>
                                    </Grid>
                                    <Grid className='developerDetail'>
                                        <Grid className='developerInfo'>
                                            <div>
                                                <h4>Isabelle Eileen</h4>
                                                <p className='designation'>Software Developer<span>Senior</span></p>
                                            </div>
                                            <div>
                                                <FormControlLabel
                                                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                                />
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
                                                            width: '14ch',
                                                        },
                                                    }}
                                                >
                                                    <MenuItem onClick={handleMenuClose} className='more_actionList'>
                                                        <Link><img src={editIcon} style={{ width: '12px' }} alt='img' />Edit</Link>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleMenuClose} className='more_actionList delete'>
                                                        <Link onClick={handleClickOpen}><img src={deleteIcon} style={{ width: '12px' }} alt='img' />Delete</Link>
                                                    </MenuItem>
                                                </Menu>
                                            </div>
                                        </Grid>
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
                                                    primary="Node"
                                                />
                                            </ListItem>
                                            <ListItem className='skillList-item'>
                                                <ListItemText
                                                    primary="Java"
                                                />
                                            </ListItem>
                                        </List>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Container>
                <Grid container>
                    <Grid item lg={8} md={8} sm={12}>
                        <Grid className='developerExpDetails'>
                            <Grid className="expDetail">
                                <div className="icon-container green-bg">
                                    <img src={suitcaseIcon} className="featured-icon" />
                                </div>
                                <div className="featured-content">
                                    <p className="featured-title">7+ Years</p>
                                    <p className="featured-subtitle">Experience</p>
                                </div>
                            </Grid>
                            <Grid className="expDetail">
                                <div className="icon-container yellow-bg">
                                    <img src={paperIcon} className="featured-icon" />
                                </div>
                                <div className="featured-content">
                                    <p className="featured-title">12+</p>
                                    <p className="featured-subtitle">Projects Done</p>
                                </div>
                            </Grid>
                            <Grid className="expDetail">
                                <div className="icon-container blue-bg">
                                    <img src={clockIcon} className="featured-icon" />
                                </div>
                                <div className="featured-content">
                                    <p className="featured-title">160</p>
                                    <p className="featured-subtitle">Hours in Month</p>
                                </div>
                            </Grid>
                            <Grid className="expDetail">
                                <div className="icon-container voilet-bg">
                                    <img src={graduateCapIcon} className="featured-icon" />
                                </div>
                                <div className="featured-content">
                                    <p className="featured-title">Msc</p>
                                    <p className="featured-subtitle">Education</p>
                                </div>
                            </Grid>
                        </Grid>
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
                                        primary="Node"
                                    />
                                </ListItem>
                                <ListItem className='skillList-item'>
                                    <ListItemText
                                        primary="Java"
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid className='aboutContent'>
                            <p className='developer-profile-subtitle'>About</p>
                            <p className='content'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text.
                                <a href='#'>Read More</a>
                            </p>

                            <p className='developer-profile-subtitle'>Specialties</p>
                            <p className='content'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text.
                                <a href='#'>Read More</a>
                            </p>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                        <Grid className='moreDetails'>
                            <List className='moreDetails-list'>
                                <ListItem>
                                    <p>
                                        Agency ID
                                    </p>
                                    <h6>
                                        DR58168798
                                    </h6>
                                </ListItem>
                                <ListItem>
                                    <p>
                                        Developer ID
                                    </p>
                                    <h6>
                                        IE65482369
                                    </h6>
                                </ListItem>
                                <ListItem>
                                    <p>
                                        Email
                                    </p>
                                    <h6>
                                        goalgretters123@test.com
                                    </h6>
                                </ListItem>
                                <ListItem>
                                    <p>
                                        Contact Number
                                    </p>
                                    <h6>
                                        +918424575478
                                    </h6>
                                </ListItem>
                                <ListItem>
                                    <p>
                                        Location
                                    </p>
                                    <h6>
                                        New York, America
                                    </h6>
                                </ListItem>
                                <ListItem>
                                    <p>
                                        Language
                                    </p>
                                    <h6>
                                        English, Hindi
                                    </h6>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                    <Grid className='projects-container'>
                        <h3>Manage Developers</h3>
                        <Grid container className='projectsList'>
                            <Grid item lg={4}>
                                <ProjectCard />
                            </Grid>
                            <Grid item lg={4}>
                                <ProjectCard />
                            </Grid>
                            <Grid item lg={4}>
                                <ProjectCard />
                            </Grid>
                            <Grid item lg={4}>
                                <ProjectCard />
                            </Grid>
                            <Grid item lg={4}>
                                <ProjectCard />
                            </Grid>
                        </Grid>
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
                        <img src={deleteUser} alt='img' />
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

export default DeveloperProfile;
