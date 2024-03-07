import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Link from "@mui/material/Link";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import 'assets/css/allModals.css';
import Typography from '@mui/material/Typography';
import OfferProfile from 'assets/img/offer-profile.png';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {  TextareaAutosize } from '@mui/material';



  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'Amadeus', year: 1984 },
    
  ];
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

    createFilterOptions({
        matchFrom: 'start',
        stringify: (option) => option.title,
      });
     
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



function offer_accept() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
  
    
    // const [value, setValue] = React.useState(null);
    
   
    

    return (
        <>

        {/*Schedule Interview modal  */}
        <div>
            <Grid>
                <Button className='primaryButton' onClick={handleClickOpen} >Schedule Interview</Button>
            </Grid>
            {/* modal start */}
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                className='approval_modal offer-accept-model'
            >
                <BootstrapDialogTitle id="customized-dialog-title" className='model-top-heading' onClose={handleClose}>
                    <Typography variant='h3'>Schedule Interview</Typography>
                </BootstrapDialogTitle>
                <DialogContent className='interview-text'>
                    <div className='offer-content'>
                    <div className='inner-content'>
                        <div className='offer-profile-img'>
                            <img src={OfferProfile} alt='' />
                        </div>
                        <div className='offer-profile-text'>
                            <Typography variant='h5'>CA4654857896</Typography>
                            <Typography variant='body1'>New York, America</Typography>
                        </div>
                    </div>
                    <div className='view-profile-link'>
                    <Link href="#" underline="none" autoFocus onClick={handleClose} className='profile-update-link'>
                    View Profile
                    </Link>
                    </div>
                    </div>


                    <div className='center-content'>
                        <div className='interview-data'>
                                    <div className='select-option-data'>
                                        <FormControl variant="standard" className="formControl">
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                        Job post*
                                        </InputLabel>
                                        <Autocomplete
                                            id="filter-demo"
                                            className='multiSelect-Textfield'
                                            options={top100Films}
                                            getOptionLabel={(option) => option.title}
                                            renderInput={(params) => <TextField {...params} InputLabelProps={{ shrink: false }}  placeholder="Select job post id" />}/>
                                        </FormControl>
                                    </div>
                                    <div className='select-option-data'>
                                        <FormControl variant="standard" className="formControl">
                                        <div className='select-option-data'>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                        Developer*
                                        </InputLabel>
                                        <Autocomplete
                                            id="filter-demo"
                                            className='multiSelect-Textfield'
                                            options={top100Films}
                                            getOptionLabel={(option) => option.title}
                                            renderInput={(params) => <TextField {...params} InputLabelProps={{ shrink: false }}  placeholder="Select developer id" />}/>
                                        </div>
                                        </FormControl>
                                    </div>
                                    <div className='date-time-content'>
                                        <FormControl variant="standard" className="formControl form-date">
                                        <div className='select-option-data'>
                                            <InputLabel shrink htmlFor="bootstrap-input">
                                            Interview Date*
                                            </InputLabel>
                                            <div className='date-wrapper'>
                                                <LocalizationProvider dateAdapter={AdapterDateFns} >
                                                <DatePicker
                                                    value={value}
                                                    onChange={(newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} helperText={null} />}
                                                    />
                                                </LocalizationProvider>
                                            </div>
                                        </div>
                                        </FormControl>
                                        <FormControl variant="standard" className="formControl form-time">
                                        <div className='select-option-data'>
                                            <InputLabel shrink htmlFor="bootstrap-input">
                                            Interview Time*
                                            </InputLabel>
                                            
                                            <div className='date-wrapper'>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <TimePicker
                                                    value={value}
                                                    onChange={(newValue) => {
                                                    setValue(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>
                                            </div>
                                        </div>
                                        </FormControl>
                                    </div>
                                    <div className='select-option-data'>
                                        <FormControl variant="standard" className="formControl">
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                        Description
                                        </InputLabel>
                                        <TextareaAutosize
                                            className='multiSelect-Textfield text-area-content'
                                            minRows={6}
                                            placeholder="Enter description"
                                            />
                                    </FormControl>
                                    </div>
                                    <div className='select-option-data'>
                                        <FormControl variant="standard" className="formControl">
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                        Meeting link *
                                        </InputLabel>
                                        <TextField
                                            id="filter-demo"
                                            className='multiSelect-Textfield input-content'
                                            placeholder='Enter meeting link'
                                            InputLabelProps={{ shrink: false }}
                                            />
                                            
                                    </FormControl>
                                    </div>
                                    
                        </div>
                        
                    </div>
                </DialogContent>
                
                <DialogActions className='bottom last-content-btn'>
                    {/* <a href='#' className='cancelBtn'>Cancel</a> */}
                    <Link href="#" underline="none" autoFocus onClick={handleClose} className='cancelBtn'>
                        Cancel
                    </Link>
                    <Button autoFocus onClick={handleClose} variant="contained" className='modalBtn primaryButton'>
                    Schedule
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>



      
        </>
    );
}

export default offer_accept;
