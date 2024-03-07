import React from "react";
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import 'assets/css/profile.css';
import 'assets/css/allModals.css';
import sendIcon from 'assets/img/icons/agency-request-send.svg'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func,
};


function NotificationDialogue(props) {
    const { open, close, title, message, buttonText, buttonCallback } = props;

    const handleClose = (__, reason) => {
        if (reason == "backdropClick" || reason == "escapeKeyDown") return false;
        close();
    }

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                className='approval_modal request_notification-modal'
            >
                <BootstrapDialogTitle id="customized-dialog-title" className='modal-title' onClose={handleClose}>
                    <div className='title-img'>
                        <img src={sendIcon} alt='img' />
                    </div>
                </BootstrapDialogTitle>
                <DialogContent className='content'>
                    <Typography gutterBottom variant="h4">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="subTitle">
                        {message}
                    </Typography>
                </DialogContent>
                <DialogActions className='bottom'>
                    <Button onClick={buttonCallback || handleClose} variant="contained" className='primaryButton modalBtn'>
                        {buttonText}
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}

export default NotificationDialogue;
