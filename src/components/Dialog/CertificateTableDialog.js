import React, { useState } from "react";
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import 'assets/css/profile.css';
import 'assets/css/projectDetail.css';
import 'assets/css/allModals.css';
import moment from "moment";
import CertificateDetailsDialog from "./CertificateDetailsDialog";
import certificateIcon from "assets/img/certificate.svg";
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


function CertificateTableDialog(props) {
    const { open, close, data } = props;
    const [certificateDetailsDialogue, setCertificateDetailsDialogue] = useState(false);
    const [singleCertificateData, setSingleCertificateData] = useState(null);

    const handleOpenDetailsDialogue = (certificate = null) => {
        setCertificateDetailsDialogue(!certificateDetailsDialogue);
        if (certificate?.id) setSingleCertificateData(certificate);
    }

    const handleClose = (__, reason) => {
        if (reason == "backdropClick" || reason == "escapeKeyDown") return false;
        close();
    }

    const columns = [
        { id: 'image_id', label: '', minWidth: 100 },
        {
            id: 'certi_title',
            label: 'Certificate Title',
            minWidth: 170,
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'certi_date',
            label: 'Certification Date',
            minWidth: 170,
            format: (value) => value.toLocaleString('en-US'),
        },
    ];

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
                    <TableContainer>
                        <Table className='project_detail-table certificate_table'>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ top: 50, minWidth: column.minWidth }}
                                            className='tableCellHead'
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data && data.length > 0 && data.map(certificate => {
                                    let extension = getFileExtention(certificate?.certificate_file);
                                    let icon = getFileIcon(extension)
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={certificate?.id} onClick={() => handleOpenDetailsDialogue(certificate)}>
                                            <TableCell className='tableDataCell'>
                                                <div className="certificateImg">
                                                    <img src={certificate?.certificate_file ? (IMAGES.includes(extension) ? certificate?.certificate_file : icon) : certificateIcon} alt="img" />
                                                </div>
                                            </TableCell>
                                            <TableCell className='tableDataCell'>
                                                {certificate?.title}
                                            </TableCell>
                                            <TableCell className='tableDataCell'>
                                                {moment(new Date(certificate?.certification_date)).format('DD MMMM YYYY')}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <CertificateDetailsDialog
                        open={certificateDetailsDialogue}
                        close={handleOpenDetailsDialogue}
                        data={singleCertificateData}
                    />
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}

export default CertificateTableDialog;
