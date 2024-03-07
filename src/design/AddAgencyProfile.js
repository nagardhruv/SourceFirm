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
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';

import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const icon = <RadioButtonUncheckedIcon fontSize="small" className='uncheckedCircle-icon' />;
const checkedIcon = <CheckCircleIcon fontSize="small" className='checkedCircle-icon' />;

import 'assets/css/profile.css';
import 'assets/css/allModals.css';

import closeIcon from 'assets/img/icons/close-icon.svg';
import plusIcon from 'assets/img/icons/plus-icon.svg';
import approvalIcon from 'assets/img/icons/approval-icon.svg';
import userIcon from 'assets/img/icons/user.svg';
import editIcon from 'assets/img/icons/edit-icon.svg';

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
];

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

const circle = (
    <Box component="span" className="profileEditBox">
        <img src={userIcon} className="default" alt='img' />
    </Box>
);
const editImage = (
    <IconButton aria-label="upload picture" component="span">
        <img src={editIcon} alt='img' />
    </IconButton>
);

function AddAgencyProfile() {
    const [country, setCountry] = React.useState('');
    const [city, setCity] = React.useState('');
    const [open, setOpen] = React.useState(false);

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
            Add Profile Details
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
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid className='profile-top-section add_profile-top-section'>
                <Container>
                    <Grid container className='profile-top-inner'>
                        <Grid item lg={6} md={6} sm={12}>
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
                        <Grid item lg={6} md={6} sm={12}>
                            <p className='clientId'>Agency ID : <span>GG58168798</span></p>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Container className='profile-container add_profile-container'>
                <h4>Add Profile Details</h4>
                <Grid className='profile-inner add_profile-inner'>
                    <Grid className='add_profile-form'>
                        <h5 className='title'>
                            Personal Details
                        </h5>
                        <Grid item lg={12} md={12} sm={12} className="text-center">
                            <Badge color="secondary" overlap="circular" className='profileBadge' badgeContent={editImage}>
                                {circle}
                            </Badge>
                        </Grid>
                        <Grid container className='formGrid'>
                            <Grid className='formGrid-inner'>
                                <FormControl variant="standard" className='formControl'>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        Full Name*
                                    </InputLabel>
                                    <Input className='inputField' placeholder="Enter full name" inputProps={ariaLabel} />
                                </FormControl>
                            </Grid>
                            <Grid className='formGrid-inner'>
                                <FormControl variant="standard" className='formControl'>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        Email (Uneditable)*
                                    </InputLabel>
                                    <Input className='inputField' placeholder="Enter Email" inputProps={ariaLabel} />
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
                                        Contact Number
                                    </InputLabel>
                                    <Input className='inputField' placeholder="Enter contact number" inputProps={ariaLabel} />
                                </FormControl>
                            </Grid>
                        </Grid>

                        <h5 className='title'>
                            Agency Details
                        </h5>
                        <Grid container className='formGrid'>
                            <Grid className='formGrid-inner'>
                                <FormControl variant="standard" className='formControl'>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        Agency Name*
                                    </InputLabel>
                                    <Input className='inputField' placeholder="Enter company name" inputProps={ariaLabel} />
                                </FormControl>
                            </Grid>
                            <Grid className='formGrid-inner'>
                                <FormControl variant="standard" className='formControl'>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        Your Agency is Registered?
                                    </InputLabel>
                                    <Input className='inputField' placeholder="Enter company registration number" inputProps={ariaLabel} />
                                </FormControl>

                            </Grid>
                        </Grid>
                        <Grid container className='formGrid'>
                            <Grid item lg={12} md={12} sm={12}>
                                <FormControl variant="standard" className='formControl'>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        Technologies*
                                    </InputLabel>
                                    <Autocomplete
                                        multiple
                                        id="checkboxes-tags-demo"
                                        options={top100Films}
                                        disableCloseOnSelect
                                        getOptionLabel={(option) => option.title}
                                        renderOption={(props, option, { selected }) => (
                                            <li {...props}>
                                                <Checkbox
                                                    icon={icon}
                                                    checkedIcon={checkedIcon}
                                                    style={{ marginRight: 8 }}
                                                    checked={selected}
                                                />
                                                {option.title}
                                            </li>
                                        )}
                                        renderInput={(params) => (
                                            <TextField {...params} className='multiSelect-Textfield' placeholder="Select technologies" />
                                        )}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container className='formGrid'>
                            <Grid className='formGrid-inner'>
                                <FormControl variant="standard" className='formControl'>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        Agency Size*
                                    </InputLabel>
                                    <Input className='inputField' placeholder="Enter number" inputProps={ariaLabel} />
                                </FormControl>
                            </Grid>
                            <Grid className='formGrid-inner'>
                                <FormControl variant="standard" className='formControl'>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        ID Proof
                                    </InputLabel>
                                    <Input className='inputField customFile-input' placeholder="Upload file" multiple type="file" />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container className='formGrid'>
                            <Grid item lg={12} md={12} sm={12}>
                                <FormControl variant="standard" className='formControl'>
                                    <InputLabel shrink htmlFor="bootstrap-input">
                                        Agency Website*
                                    </InputLabel>
                                    <Input className='inputField' placeholder="Enter website url" inputProps={ariaLabel} />
                                </FormControl>
                            </Grid>
                        </Grid>

                        <h5 className='title'>
                            Branches Details
                        </h5>
                        <Grid className='branch-container'>
                            <div className='branch-count'>
                                <p>Branch 1</p>
                            </div>
                            <div className='main-branch'>
                                <span>Main Office</span>
                            </div>
                            <a href='#' className='closebtn'>
                                <img src={closeIcon} alt='close' />
                            </a>
                            <Grid container className='formGrid'>

                                <Grid className='formGrid-inner'>
                                    <FormControl variant="standard" className='formControl'>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            Select Country & City*
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
                            <Grid item lg={12}>
                                {/* <Field
                                // name="is_terms_and_condition_accepted"
                                component={CustomCheckBox}
                                defaultChecked={true}
                                labelText="Terms & Conditions"
                                validate={required}
                            /> */}
                            </Grid>
                        </Grid>
                        <Link href="#" underline="none" className='addBranchBtn'><img src={plusIcon} alt='add' /> add New Branch</Link>

                        <Grid className='action-div'>
                            <Link underline="none" className='previousBtn cursor-pointer'>Cancel</Link>
                            <Button variant="contained" className='primaryButton nextBtn' onClick={handleClickOpen}>Submit</Button >
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            {/* modal start */}
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                className='approval_modal '
            >
                <BootstrapDialogTitle id="customized-dialog-title" className='modal-title' onClose={handleClose}>
                    <div className='title-img'>
                        <img src={approvalIcon} alt='img' />
                    </div>
                </BootstrapDialogTitle>
                <DialogContent className='content'>
                    <Typography gutterBottom variant="h4">
                        Your Profile is Under Approval
                    </Typography>
                    <Typography gutterBottom variant="subTitle">
                        Your profile is under approval. You will receive an email once your profile has been approved by the administrator
                    </Typography>
                </DialogContent>
                <DialogActions className='bottom'>
                    <Button autoFocus onClick={handleClose} variant="contained" className='modalBtn'>
                        Back to Home
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </>
    );
}

export default AddAgencyProfile;
