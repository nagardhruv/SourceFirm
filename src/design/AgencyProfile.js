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
import Avatar from '@mui/material/Avatar';
import 'assets/css/profile.css';
import 'assets/css/allModals.css';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import agencyIcon from 'assets/img/icons/agency-icon-white.svg';
import userIcon from 'assets/img/icons/user-dark.svg';
import editIcon from 'assets/img/icons/edit-icon.svg';
import visibilityIcon from 'assets/img/icons/visibility-icon.svg';
import visibilityOffIcon from 'assets/img/icons/visibilityOff-icon.svg';

const ariaLabel = { 'aria-label': 'description' };
const options = [
    'Edit Profile',
    'Change Password',
];

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

function AgencyProfile() {
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
          Settings
        </Link>,
        <Typography key="4" color="text.primary">
            My Profile
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

    const handleChangePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

  return (
    <>
    <Grid className='profile-top-section agency_profile-top-section'>
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
                    <p className='clientId'>Client ID : <span>GG58168798</span></p>
                </Grid>
            </Grid>
        </Container>
    </Grid>
    <Container className='profile-container my_profile-container'>
        <Grid className='userprofile-detail-section'>
            <Grid className='userDetails'>
                <Grid className='userImage'>
                    <div className='user'>
                        <img src={agencyIcon} alt='img'/>
                    </div>
                </Grid>
                <Grid className='userInfo'>
                    <div>
                        <h4>Digital Rocketship</h4>
                        <p className='clientId'>Agency ID : <span>DR58168798</span></p>
                    </div>
                    {/* <img className='more_action' src={moreActionIcon} alt='img' /> */}
                    <div>
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
                            {options.map((option) => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleMenuClose} className='more_actionList'>
                                <Link onClick={handleClickOpen}><img src={editIcon} style={{ width: '12px' }} alt='img'/>{option}</Link>
                            </MenuItem>
                            ))}
                        </Menu>
                    </div>
                </Grid>
            </Grid>
            <Grid className='companyDetails'>
                <Grid className='formGrid'>
                    <label>
                        Company Registration Number
                    </label>
                    <p>5485498456418</p>
                </Grid>
                <Grid className='formGrid'>
                    <label>
                        Head Office Location
                    </label>
                    <p>New York, America</p>
                </Grid>
                <Grid className='formGrid'>
                    <label>
                        Company Size
                    </label>
                    <p>23</p>
                </Grid>
                <Grid className='formGrid'>
                    <label>
                        Number of Branch
                    </label>
                    <p>2</p>
                </Grid>
            </Grid>
        </Grid>

        {/* <h4>My Profile Details</h4> */}
        <Grid className='profile-inner my_profile-inner'>
            <Grid className='add_profile-form'>

                <p className='CategoryTitle'>Category</p>
                <Grid>
                    <List className='categoryList'>
                        <ListItem className='categoryList-item'>
                            <ListItemText
                                primary="Software Development"
                            />
                        </ListItem>
                        <ListItem className='categoryList-item'>
                            <ListItemText
                                primary="Web Development"
                            />
                        </ListItem>
                    </List>
                </Grid>

                <p className='CategoryTitle'>Sub-category</p>
                <Grid>
                    <List className='categoryList'>
                        <ListItem className='subcategoryList-item'>
                            <ListItemText
                                primary="Node"
                            />
                        </ListItem>
                        <ListItem className='subcategoryList-item'>
                            <ListItemText
                                primary="Java"
                            />
                        </ListItem>
                        <ListItem className='subcategoryList-item'>
                            <ListItemText
                                primary="HTML"
                            />
                        </ListItem>
                        <ListItem className='subcategoryList-item'>
                            <ListItemText
                                primary="Flutter"
                            />
                        </ListItem>
                        <ListItem className='subcategoryList-item'>
                            <ListItemText
                                primary="Node"
                            />
                        </ListItem>
                        <ListItem className='subcategoryList-item'>
                            <ListItemText
                                primary="Java"
                            />
                        </ListItem>
                        <ListItem className='subcategoryList-item more-subcategory'>
                            <ListItemText
                                primary="+6"
                            />
                        </ListItem>
                    </List>
                </Grid>

                <h5 className='title'>
                    Personal Details
                </h5>
                <Grid container className='formGrid'>
                    <Grid className='formGrid-inner'>
                        <FormControl variant="standard" className='formControl'>
                            <Avatar className='profile_avatar'>
                                <img src={userIcon} alt='img'/>
                            </Avatar>
                            <Grid>
                                <label>Full Name</label>
                                <p className='value'>
                                    Thomas Madigan
                                </p>
                            </Grid>
                        </FormControl>
                    </Grid>
                    <Grid className='formGrid-inner'>
                        <FormControl variant="standard" className='formControl'>
                            <Avatar className='profile_avatar'>
                                <img src={userIcon} alt='img'/>
                            </Avatar>
                            <Grid>
                                <label>Email</label>
                                <p className='value'>
                                    goalgretters123@test.com
                                </p>
                            </Grid>
                        </FormControl>
                    </Grid>
                    <Grid className='formGrid-inner'>
                        <FormControl variant="standard" className='formControl'>
                            <Avatar className='profile_avatar'>
                                <img src={userIcon} alt='img'/>
                            </Avatar>
                            <Grid>
                                <label>Contact Number</label>
                                <p className='value'>
                                    +918424575478
                                </p>
                            </Grid>
                        </FormControl>
                    </Grid>
                    <Grid className='formGrid-inner'>
                        <FormControl variant="standard" className='formControl'>
                            <Avatar className='profile_avatar'>
                                <img src={userIcon} alt='img'/>
                            </Avatar>
                            <Grid>
                                <label>Location</label>
                                <p className='value'>
                                    New York, America
                                </p>
                            </Grid>
                        </FormControl>
                    </Grid>
                </Grid>


                <h5 className='title'>
                    Branches Details
                </h5>
                <Grid container className='formGrid'>
                    <Grid className='formGrid-inner'>
                        <FormControl variant="standard" className='formControl'>
                            <Grid>
                                <label>Branch 1</label>
                                <p className='value'>
                                    New York, America
                                </p>
                            </Grid>
                        </FormControl>
                    </Grid>
                    <Grid className='formGrid-inner'>
                        <FormControl variant="standard" className='formControl'>
                            <Grid>
                                <label>Branch 2</label>
                                <p className='value'>
                                    New York, America
                                </p>
                            </Grid>
                        </FormControl>
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
        className='changePassword_modal'
      >
        <BootstrapDialogTitle id="customized-dialog-title" className='modal-title' onClose={handleClose}>
            Change Password
        </BootstrapDialogTitle>
        <DialogContent className='content'>
            <Grid>
                <FormControl variant="standard" className='formControl'>
                    <InputLabel shrink htmlFor="bootstrap-input">
                        Current Password*
                    </InputLabel>
                    <Input
                        id="standard-adornment-password"
                        className='inputField'
                        placeholder="Enter Password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChangePassword('password')}
                        endAdornment={
                        <InputAdornment position="end" className='adornment-icon'>
                            <img  onClick={handleClickShowPassword('oldPassword')} src={(values.oldPassword ) ? visibilityIcon : visibilityOffIcon} alt='img' />
                        </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl variant="standard" className='formControl'>
                    <InputLabel shrink htmlFor="bootstrap-input">
                        New Password*
                    </InputLabel>
                    <Input
                        id="standard-adornment-password"
                        className='inputField'
                        placeholder="Enter Password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChangePassword('password')}
                        endAdornment={
                        <InputAdornment position="end" className='adornment-icon'>
                            <img  onClick={handleClickShowPassword('oldPassword')} src={(values.oldPassword ) ? visibilityIcon : visibilityOffIcon} alt='img' />
                        </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl variant="standard" className='formControl'>
                    <InputLabel shrink htmlFor="bootstrap-input">
                        Confirm Password*
                    </InputLabel>
                    <Input
                        id="standard-adornment-password"
                        className='inputField'
                        placeholder="Enter Password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChangePassword('password')}
                        endAdornment={
                        <InputAdornment position="end" className='adornment-icon'>
                            <img  onClick={handleClickShowPassword('oldPassword')} src={(values.oldPassword ) ? visibilityIcon : visibilityOffIcon} alt='img' />
                        </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl variant="standard" className='formControl text-right'>
                    <Link href="#" underline="none" className='forget-link'>Forgot Password?</Link>
                </FormControl>
            </Grid>
        </DialogContent>
        <DialogActions className='bottom'>
            <Link href="#" underline="none" autoFocus onClick={handleClose} className='cancelBtn'>
                Cancel
            </Link>
            <Button  variant="contained" className='modalBtn'>Change</Button >
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}

export default AgencyProfile;
