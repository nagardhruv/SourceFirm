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
import approvalIcon from 'assets/img/icons/approval-icon.svg'

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
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func,
};


function AddProjectDialog(props) {
    const { open, close, backToHome } = props;

    return (
        <div>
            <BootstrapDialog
                onClose={close}
                aria-labelledby="customized-dialog-title"
                open={open}
                className='approval_modal'
            >
                <BootstrapDialogTitle id="customized-dialog-title" className='modal-title' onClose={close}>
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
                    <Button onClick={backToHome} variant="contained" className='primaryButton modalBtn'>
                        Back to Home
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}

export default AddProjectDialog;
