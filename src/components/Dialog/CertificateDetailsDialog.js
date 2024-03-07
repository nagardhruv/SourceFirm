import React, { useState } from "react";
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import copyIcon from 'assets/img/icons/filecopy-icon.svg';
import checkIcon from 'assets/img/icons/manage-list-blue4.svg';
import 'assets/css/profile.css';
import 'assets/css/projectDetail.css';
import 'assets/css/allModals.css';
import moment from "moment";
import { IMAGES } from "utils/constant";
import { getFileExtention, getFileIcon } from "utils/Common";

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


function CertificateDetailsDialog(props) {
    const { open, close, data } = props;
    const extension = getFileExtention(data?.certificate_file);
    const icon = getFileIcon(extension);
    const [copied, setCopied] = useState(copyIcon);

    const handleClose = (__, reason) => {
        if (reason == "backdropClick" || reason == "escapeKeyDown") return false;
        close();
    }

    const handleCopy = (event) => {
        event.preventDefault();
        setCopied(checkIcon);
        navigator.clipboard.writeText(data?.certification_link);
        setTimeout(() => {
            setCopied(copyIcon);
        }, 1000);
    }

    return (
        <div>
            <BootstrapDialog
                scroll="paper"
                onClose={handleClose}
                aria-labelledby="certi-detail-title"
                open={open}
                className='add_project-modal'
            >
                <BootstrapDialogTitle id="certi-detail-title" className='modal-title' onClose={handleClose}>
                    Certificate Details
                </BootstrapDialogTitle>
                <DialogContent className='content'>
                    <div className="certificateCard certificateView">
                        {data?.certificate_file &&
                            <>
                                {IMAGES.includes(extension) ?
                                    <div className="certificateImg">
                                        <img src={data?.certificate_file} alt="img" />
                                    </div>
                                    :
                                    <div className="docCertificateView">
                                        <Typography variant='p' component='p' className="idProof-name">
                                            <span><img src={icon} alt="img" /></span>
                                            {data?.file_name}
                                            <a href={data?.certificate_file} className="downloadBtn" target="_blank" rel='noopener noreferrer'>View</a>
                                        </Typography>
                                    </div>}
                            </>
                        }
                        <div className="content detail">
                            <div className="certificate-title">
                                <Typography variant='p' component='p'>{data?.title}</Typography>
                                <Typography variant='p' component='p' className="date">{moment(new Date(data?.certification_date)).format('DD MMMM YYYY')}</Typography>
                            </div>
                            {data?.certification_link &&
                                <a href={data?.certification_link} target="_blank" rel="noreferrer" className='project-link'  >
                                    {data?.certification_link}
                                    <img className="cursor-pointer copyIcon" src={copied} alt="img" onClick={(e) => handleCopy(e)} />
                                </a>
                            }
                            {/* <div className="about-certi">
                                <Typography variant='p' component='p'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text. 
                                </Typography>
                            </div> */}
                        </div>
                    </div>
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}

export default CertificateDetailsDialog;
