import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import 'assets/css/allModals.css';
import Typography from '@mui/material/Typography';
import * as Actions from '../../store/actions/index';
import * as DeveloperActions from '../../store/actions/manageDevelopers/manageDevelopers.actions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

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

function RejectedRequestDialog(props) {

    const { open, close, message, userId, developer } = props;
    const dispatch = useDispatch();

    const getUserDetails = () => {
        dispatch(Actions.getUserDetails()).then(res => {
            if (res.status === 200) {
                dispatch({ type: 'GET_USER_DETAILS', payload: res.data });
            }
            else {
                dispatch({ type: 'GET_USER_DETAILS', payload: {} });
            }
        }).catch(() => {
            dispatch({ type: 'GET_USER_DETAILS', payload: {} });
        })
    }
    const getAgencyDeveloperById = (developerId) => {
        dispatch(DeveloperActions.getAgencyDeveloperById(developerId));
    };
    const handleGetUpdatedData = () => {
        dispatch(Actions.rejectionStatusChange(userId)).then((res) => {
            if (res.status === 200) {
                if (developer) { getAgencyDeveloperById(userId); } else { getUserDetails(); }
                close();
            } else {
                toast.error("Something went wrong");
            }
        })
    }
    const handleClose = (__, reason) => {
        if (reason == "backdropClick" || reason == "escapeKeyDown") return false;
        handleGetUpdatedData();
    }

    return (
        <>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                className='approval_modal cancle-request-model'
                disableEscapeKeyDown={true}
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
                            {message}
                        </Typography>
                    </div>
                </DialogContent>
            </BootstrapDialog>
        </>
    );
}

export default RejectedRequestDialog;
