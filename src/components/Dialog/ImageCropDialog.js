import React, { Component } from "react";
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import 'assets/css/profile.css';
import 'assets/css/projectDetail.css';
import 'assets/css/allModals.css';
import Cropper from 'react-easy-crop'
import getCroppedImg from '../../utils/CropImage';
import CircularProgress from "@mui/material/CircularProgress";
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

class ImageCropDialog extends Component {
    state = {
        imageSrc: null,
        crop: { x: 0, y: 0 },
        croppedAreaPixels: {},
        zoom: 1,
        aspect: 1,
    }

    onCropChange = (crop) => {
        this.setState({ crop })
    }

    onCropComplete = (_croppedArea, croppedAreaPixels) => {
        this.setState({ croppedAreaPixels });
    }

    onZoomChange = (zoom) => {
        this.setState({ zoom })
    }

    processCropImage = async () => {
        const croppedImage = await getCroppedImg(this.state.imageSrc, this.state.croppedAreaPixels);
        fetch(croppedImage)
            .then(res => res.blob())
            .then(async (blob) => {
                const fileObj = new File([blob], this.props.file.name);
                await this.props.uploadCroppedImage(fileObj);
                setTimeout(() => {
                    this.setState({ ...this.state, imageSrc: null });
                }, 500);
            })
    }

    onClosing = (__, reason) => {
        if (reason == "backdropClick" || reason == "escapeKeyDown") return false;
        this.props.close();
        setTimeout(() => {
            this.setState({ ...this.state, imageSrc: null });
        }, 500);
    }

    render() {
        const { open } = this.props;
        if (!this.state.imageSrc && this.props.file) { this.setState({ ...this.state, imageSrc: URL.createObjectURL(this.props.file) }) }
        return (
            <div>
                <BootstrapDialog
                    onClose={this.onClosing}
                    aria-labelledby="project-detail-title"
                    open={open}
                    className='add_project-modal projectDetail-modal image-cropper-modal'
                >
                    <BootstrapDialogTitle id="project-detail-title" className='modal-title' onClose={this.onClosing}>
                        Profile Image
                    </BootstrapDialogTitle>
                    <DialogContent className='content'>
                        <Card className="projectDetail-card">
                            <CardContent>
                                <Grid className="crop-grid">
                                    <div className="crop-container">
                                        <Cropper
                                            image={this.state.imageSrc}
                                            crop={this.state.crop}
                                            zoom={this.state.zoom}
                                            aspect={this.state.aspect}
                                            cropShape="round"
                                            showGrid={true}
                                            onCropChange={this.onCropChange}
                                            onCropComplete={this.onCropComplete}
                                            onZoomChange={this.onZoomChange}
                                        />
                                    </div>
                                </Grid>
                            </CardContent>
                        </Card>
                    </DialogContent>
                    <LoadingButton
                        className={`primaryButton ${this.props?.processing && 'loading'}`}
                        onClick={this.processCropImage}
                        loading={this.props?.processing}
                        variant="contained"
                        loadingIndicator={<CircularProgress sx={{ color: "#ffffff" }} size={16} />}
                        disabled={this.props?.processing}
                    >
                        Save
                    </LoadingButton>
                </BootstrapDialog>
            </div>
        );
    }
}

export default ImageCropDialog;
