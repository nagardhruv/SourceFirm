import React from "react";
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import 'assets/css/profile.css';
import 'assets/css/allModals.css';

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
    onClose: PropTypes.func,
};


function UpdateProjectDialog(props) {
    const { open, close, message, description, handleUpdate } = props;

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
                className='approval_modal update_modal'
            >
                <BootstrapDialogTitle id="customized-dialog-title" className='modal-title' onClose={handleClose}>
                    {message}
                </BootstrapDialogTitle>
                <DialogContent className='content'>
                    <Typography gutterBottom variant="subTitle">
                        {description}
                    </Typography>
                </DialogContent>
                <DialogActions className='bottom'>
                    <Button variant="contained" type='submit' className='primaryButton modalBtn continueBtn' onClick={handleClose}>Continue</Button >
                    <Button variant="contained" type='submit' className='primaryButton modalBtn' onClick={handleUpdate}>Update</Button >
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}

export default UpdateProjectDialog;
