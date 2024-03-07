import React, { useCallback } from "react";
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import 'assets/css/profile.css';
import 'assets/css/allModals.css';
import { Link } from "@mui/material";
import { LoadingButton } from "@mui/lab";

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


function DynamicDialog(props) {
    const { open, close, title, message, icon, cancelButton, cancelButtonText, buttonText, buttonCallback, dialogClass, contentAlign, loading } = props;

    const handleClose = useCallback((__, reason) => {
        if (reason == "backdropClick" || reason == "escapeKeyDown") return false;
        close();
    }, []);

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                className={`dynamic-dialog ${dialogClass}`}
            >
                {icon &&
                    <BootstrapDialogTitle id="customized-dialog-title" className='modal-title' onClose={handleClose}>
                        <div className='title-img'>
                            <img src={icon} alt='img' />
                        </div>
                    </BootstrapDialogTitle>
                }
                <DialogContent className={`content ${contentAlign}`}>
                    <Typography gutterBottom variant="h4">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="subTitle">
                        {message}
                    </Typography>
                </DialogContent>
                <DialogActions className={`bottom ${!cancelButton ? 'single' : ''}`}>
                    {cancelButton && <Link underline="none" onClick={handleClose} className='cancelBtn'>{cancelButtonText}</Link>}
                    <LoadingButton loading={loading} onClick={buttonCallback || handleClose} variant="contained" className='primaryButton modalBtn'>
                        {buttonText}
                    </LoadingButton>
                </DialogActions>
            </BootstrapDialog>
        </div >
    );
}

export default DynamicDialog;
