import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormControl from '@mui/material/FormControl';
import { reduxForm, Field, getFormValues, reset } from 'redux-form';
import { required } from "utils/Validation";
import 'assets/css/allModals.css';
import 'assets/css/developer-profile.css';
import 'assets/css/add-developer.css';
import CustomTextArea from "components/CustomTextArea/CustomTextArea";
import { Typography } from "@mui/material";

const CutomeDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const CutomeDialogTitle = (props) => {
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

CutomeDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};


function AgencyRequestDialogue(props) {
    const { open, close, handleSubmit, customText } = props;
    const dispatch = useDispatch();

    const handleClose = (__, reason) => {
        if (reason == "backdropClick" || reason == "escapeKeyDown") return false;
        close();
    }

    useEffect(() => {
        if (open === false) {
            dispatch(reset('AgencyRequestForm'))
        }
    }, [open]);

    return (
        <>
            <CutomeDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                className='approval_modal agency-request_modal'>
                <form onSubmit={handleSubmit}>
                    <CutomeDialogTitle id="customized-dialog-title" className='modal-title' onClose={handleClose}>
                        {customText.titleText}
                    </CutomeDialogTitle>

                    <DialogContent className='content'>
                        <Typography className="request-subtitle">
                            Describe the type of agency you&#39;re looking to - please be as detailed as possible:
                        </Typography>
                        <Grid container className='formGrid'>
                            <FormControl variant="standard" className='formControl'>
                                <Field
                                    name="requested_message"
                                    id="requested_message"
                                    className='inputField'
                                    component={CustomTextArea}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    rows={5}
                                    required
                                    validate={[required]}
                                    inputProps={{
                                        placeholder: "Enter text",
                                    }}
                                    placeholder="I am looking for…"
                                />
                            </FormControl>
                        </Grid>
                    </DialogContent>
                    <DialogActions className='action-div'>
                        <Link underline="none" onClick={handleClose} className='cancelBtn'>Cancel</Link>
                        <Button autoFocus type='submit' variant="contained" className='primaryButton modalBtn'>
                            {customText.buttonText}
                        </Button>
                    </DialogActions>
                </form>
            </CutomeDialog>
        </>
    );
}

const ReduxFormMapped = reduxForm({
    form: 'AgencyRequestForm', // a unique identifier for this form
    enableReinitialize: true,
})(AgencyRequestDialogue);
const mapStateToProps = (state) => {
    return { formValue: getFormValues('AgencyRequestForm')(state) }
}
export default connect(mapStateToProps)(ReduxFormMapped);