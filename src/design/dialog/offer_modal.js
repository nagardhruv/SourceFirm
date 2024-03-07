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
import  { createFilterOptions } from '@mui/material/Autocomplete';
import OfferModalImg from 'assets/img/offer-modal-img.png'






  
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



function Offer_Modal() {
    const [open, setOpen] = React.useState(false);
    // const [value, setValue] = React.useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
  
    
    // const [value, setValue] = React.useState(null);
    
   
    

    return (
        <>

        



        {/*Reschedule Interview modal  */}

        <div>
            <Grid>
                <Button className='primaryButton ' onClick={handleClickOpen} >Reschedule Interview</Button>
            </Grid>
           
            {/* modal start */}
               
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                className='approval_modal offer-accept-model'
            >
                <BootstrapDialogTitle id="customized-dialog-title" className='model-top-heading offer-modal-heading' onClose={handleClose}>
                    <div className='profile-coin'>
                        <img src={OfferModalImg} alt="" />
                    </div>
                    <Typography variant='h3'>Are you Sure you want to Accept this offer?</Typography>
                </BootstrapDialogTitle>
                <DialogContent className='interview-text'>

                     <div className='interview-data-text'>
                        <div className='interview-heading interview-open'>
                            
                            <Typography variant='body1'>If you are accept the offer request then you will be hired.</Typography>
                        </div>
                        
                     </div>

                   
                </DialogContent>
                
                <DialogActions className='bottom last-content-btn offer-btn-cancel'>
                    {/* <a href='#' className='cancelBtn'>Cancel</a> */}
                    <Button autoFocus onClick={handleClose} variant="contained" className='modalBtn primaryButton'>
                    Schedule 
                    </Button>
                    <Link href="#" underline="none" autoFocus onClick={handleClose} className='cancelBtn'>
                        Cancel
                    </Link>
                    
                </DialogActions>
            </BootstrapDialog>
        </div>
        </>
    );
}

export default Offer_Modal;
