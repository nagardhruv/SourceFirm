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
import  { createFilterOptions } from '@mui/material/Autocomplete';
import CelenderImg from 'assets/img/interview-calender.png';
import CopyImg from 'assets/img/copy-img.png';
import FilecopyIcon from 'assets/img/file-copy-img.png'





  
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



function Client_Offer() {
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
                <BootstrapDialogTitle id="customized-dialog-title" className='model-top-heading' onClose={handleClose}>
                    <Typography variant='h3'>Schedule Interview</Typography>
                </BootstrapDialogTitle>
                <DialogContent className='interview-text'>
                    <div className='offer-content open-job_post'>
                    <div className='inner-content'>
                        <div className='offer-profile-img'>
                            <img src={OfferProfile} alt='' />
                        </div>
                        <div className='offer-profile-text'>
                            <Typography variant='h5'>Digital Rocketship</Typography>
                            <Typography variant='body1'>New York, America</Typography>
                        </div>
                    </div>
                   
                    </div>
                    <div className='job-post-id'>
                        <Typography variant='body1'>
                        Job post id : <span>JP85236985</span>
                        </Typography>
                        <Typography variant='body1'>
                        Job post id : <span>JP85236985</span>
                        </Typography>
                    </div>

                     <div className='interview-data-text'>
                        <div className='interview-heading'>
                            <Typography variant='h4'><img src={CelenderImg} alt="" />Mon, 06 March 2022</Typography>
                            <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry&apos;s standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                        </div>
                        <div className='interview-body-box'>
                            <div className="interview-copy-icon">
                                <img src={CopyImg} alt="" />
                            </div>
                            <Link href="#">https://www.googlemeet.com <img src={FilecopyIcon} alt="" /> </Link>
                        </div>
                     </div>

                   
                </DialogContent>
                
                <DialogActions className='bottom last-content-btn interview-last-content'>
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

export default Client_Offer;
