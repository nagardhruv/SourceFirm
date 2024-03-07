import React from "react";
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import 'assets/css/profile.css';
import 'assets/css/projectDetail.css';
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
                    style={{
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


function SingleImagePreview(props) {
    const { open, close, image } = props;

    return (
        <div>
            <BootstrapDialog scroll="paper" onClose={close} aria-labelledby="certi-detail-title"
                open={open} className='add_project-modal'>
                <BootstrapDialogTitle id="certi-detail-title" className='modal-title' onClose={close}>
                    Project Image
                </BootstrapDialogTitle>
                <DialogContent className='content'>
                    <div className="certificateCard certificateView">
                        <div className="certificateImg">
                            <img src={image?.url} alt="img" />
                        </div>
                    </div>
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}

export default SingleImagePreview;
