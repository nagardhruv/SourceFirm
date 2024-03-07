import React from "react";
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import 'assets/css/profile.css';
import 'assets/css/allModals.css';
import warningIcon from 'assets/img/icons/info-icon.svg';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';

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


function ConfirmationDialogue(props) {
    const { open, close, title, message, buttonText, buttonCallback, processing } = props;

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
                <BootstrapDialogTitle id="customized-dialog-title" className='modal-title' style={{ pointerEvents: processing ? "none" : "inherit" }} onClose={handleClose}>
                    <div className='title-img'>
                        <img src={warningIcon} alt='img' />
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
                    <LoadingButton
                        type="submit"
                        className={`primaryButton modalBtn ${processing && 'loading'}`}
                        loading={processing || false}
                        variant="contained"
                        loadingIndicator={<CircularProgress sx={{ color: '#ffffff' }} size={16} />}
                        onClick={buttonCallback || handleClose}
                    >
                        {buttonText}
                    </LoadingButton>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}

export default ConfirmationDialogue;
