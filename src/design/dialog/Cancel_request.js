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



function Cancel_request() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid>
                <Button className='primaryButton' onClick={handleClickOpen} >Your request has been rejected</Button>
            </Grid>
            {/* modal start */}
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                className='approval_modal cancle-request-model'
            >
                <BootstrapDialogTitle id="customized-dialog-title" className='modal-title' onClose={handleClose}>
                    <Typography gutterBottom variant="h4">
                        Your request has been rejected
                    </Typography>
                </BootstrapDialogTitle>
                <DialogContent className='content'>
                    <div className='inner-content'>
                        <Typography gutterBottom variant="h5">
                            Reason of rejection
                        </Typography>
                        <Typography gutterBottom variant="subTitle">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text.
                        </Typography>
                    </div>
                </DialogContent>
                <DialogActions className='bottom'>
                    {/* <a href='#' className='cancelBtn'>Cancel</a> */}
                    <Link href="#" underline="none" autoFocus onClick={handleClose} className='cancelBtn'>
                        Cancel
                    </Link>
                    <Button autoFocus onClick={handleClose} variant="contained" className='modalBtn primaryButton'>
                        Resubmit
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </>
    );
}

export default Cancel_request;
