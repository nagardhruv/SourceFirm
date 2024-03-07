import React from 'react'
import { DialogActions, DialogContent } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import deleteUser from 'assets/img/icons/deleteUser-icon.svg';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
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
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

export default function DeleteDeveloperDialog(props) {

    const { open, handleClose, confirmDelete } = props;

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                className='approval_modal'
            >
                <BootstrapDialogTitle id="customized-dialog-title" className='modal-title' onClose={handleClose}>
                    <div className='title-img'>
                        <img src={deleteUser} alt='img' />
                    </div>
                </BootstrapDialogTitle>
                <DialogContent className='content'>
                    <Typography gutterBottom>
                        <h4>Are you Sure you want to Delete this User?</h4>
                        <p>
                            This Action Can’t be Undo, When you delete all data of this user it will be Eresed our System.
                        </p>
                    </Typography>
                </DialogContent>
                <DialogActions className='bottom'>
                    <Button autoFocus onClick={confirmDelete} variant="contained" className='modalBtn logoutBtn'>
                        Yes, Delete
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    )
}
