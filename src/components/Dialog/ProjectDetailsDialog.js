import React, { useState } from "react";
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Slider from "react-slick";
import copyIcon from 'assets/img/icons/filecopy-icon.svg';
import checkIcon from 'assets/img/icons/manage-list-blue4.svg';
import 'assets/css/profile.css';
import 'assets/css/projectDetail.css';
import 'assets/css/allModals.css';
import { SpliceList } from "components/SpliceList/SpliceList";
import SingleImagePreview from "./SingleImagePreview";

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


function ProjectDetailsDialog(props) {
    const { open, close, data } = props;
    const [openPreview, setOpenPreview] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [copied, setCopied] = useState(copyIcon);

    const settings = {
        dots: false,
        margin: 10,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                arrows: false,
                autoplay: true,
            }
        }]
    };

    const handleClose = (__, reason) => {
        if (reason == "backdropClick" || reason == "escapeKeyDown") return false;
        close();
    }

    const handleImagePreview = (image) => {
        setPreviewImage(image);
        setOpenPreview(true);
    }
    const handleClosePreview = () => {
        setOpenPreview(false);
    }

    const handleCopy = (event) => {
        event.preventDefault();
        setCopied(checkIcon);
        navigator.clipboard.writeText(data?.link);
        setTimeout(() => {
            setCopied(copyIcon);
        }, 1000);
    }

    return (
        <div>
            <BootstrapDialog onClose={handleClose} aria-labelledby="project-detail-title"
                open={open} className='add_project-modal projectDetail-modal'            >
                <BootstrapDialogTitle id="project-detail-title" className='modal-title' onClose={handleClose}>
                    Project Details
                </BootstrapDialogTitle>
                <DialogContent className='content'>
                    <Card className="projectDetail-card">
                        <CardContent>
                            <Grid className="project-top">
                                <div className="icon-container">
                                    {/* <img src={brackets} className="project-icon" /> */}
                                    <p>{data?.title?.substring(0, 2)?.toUpperCase()}</p>
                                </div>
                                <div className="project-title">
                                    <p className="name">{data?.title}</p>
                                    {/* <p className="category">Software Development</p> */}
                                </div>
                            </Grid>
                            {data?.description &&
                                <Grid className='aboutSection'>
                                    <p className='developer-profile-subtitle'>About</p>
                                    <p className='aboutContent'>
                                        {data?.description}
                                    </p>
                                </Grid>
                            }
                            <Grid className='skillset'>
                                <p className='developer-profile-subtitle'>Used Technologies</p>
                                <List className='skillList'>
                                    <SpliceList data={data?.technologies} mainClass="skillList-item" subClass="more-skill"
                                        limit={5}
                                    />
                                </List>
                            </Grid>
                            <Grid className='skillset'>
                                <p className='developer-profile-subtitle'>Used Skills</p>
                                <List className='skillList'>
                                    <SpliceList data={data?.skills} mainClass="skillList-item" subClass="more-skill"
                                        limit={5}
                                    />
                                </List>
                            </Grid>
                            {data?.images && data?.images?.length > 0 &&
                                <Grid>
                                    <p className='developer-profile-subtitle'>Images</p>
                                    <Slider {...settings} className="projectImage_slider project-main-slider">
                                        {data?.images && data?.images?.length > 0 && data.images.map((image, i) => {
                                            return (
                                                <div className="item" key={i} onClick={() => handleImagePreview(image)}>
                                                    <img src={image.url} alt="img" />
                                                </div>
                                            )
                                        })}
                                    </Slider>
                                </Grid>
                            }
                            {data?.link &&
                                <Grid>
                                    <p className='developer-profile-subtitle'>Project Link</p>
                                    <a href={data?.link} target="_blank" rel="noreferrer" className='project-link' >
                                        {data?.link}
                                        <img className="cursor-pointer copyIcon" src={copied} alt="img" onClick={(e) => handleCopy(e)} />
                                    </a>
                                </Grid>
                            }
                            {(data?.duration > 0) &&
                                <Grid>
                                    <p className='developer-profile-subtitle'>Project Duration</p>
                                    <p className='project-duration'>{data?.duration} Months {data?.is_on_going && ' - Ongoing'}</p>
                                </Grid>
                            }
                        </CardContent>
                    </Card>
                </DialogContent>
            </BootstrapDialog>
            {openPreview && <SingleImagePreview open={openPreview} image={previewImage} close={handleClosePreview} />}
        </div>
    );
}

export default ProjectDetailsDialog;
