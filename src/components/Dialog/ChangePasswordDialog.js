import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import PropTypes from "prop-types";
import InputAdornment from '@mui/material/InputAdornment';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { reduxForm, Field, reset } from 'redux-form';
import CustomInput from 'components/CustomInput/CustomInput';
import visibilityIcon from 'assets/img/icons/visibility-icon.svg';
import visibilityOffIcon from 'assets/img/icons/visibilityOff-icon.svg';
import 'assets/css/allModals.css';
import { useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import LoadingButton from '@mui/lab/LoadingButton';

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
const required = value => (value ? undefined : 'This field is required');
const passwordsMatch = (value, allValues) => {
    if (value !== allValues.new_password1) {
        return 'Passwords does not match';
    }
    return undefined;
};
const password = value => (
    value && !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(value)
        ? 'Passwords must contain eight characters: one lower case letter [a-z] numeric character [0-9] and special character: @$!%*#?&' /* eslint-disable-line */
        : undefined
);
function ChangePasswordDialog(props) {

    const { open, close, handleSubmit, processing } = props;
    const [values, setValues] = React.useState({
        oldPassword: false,
        showPassword: false, showConfirmPassword: false,
    });
    const dispatch = useDispatch();

    const handleClose = (__, reason) => {
        if (reason == "backdropClick" || reason == "escapeKeyDown") return false;
        close();
    }


    const handleClickShowPassword = (prop) => () => {
        setValues({ ...values, [prop]: !values[prop] });
    }

    useEffect(() => {
        if (open === false) {
            dispatch(reset('ChangePasswordForm'))
        }
    }, [open])
    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                className='changePassword_modal'
            >
                <BootstrapDialogTitle id="customized-dialog-title" className='modal-title' onClose={handleClose}>
                    Change Password
                </BootstrapDialogTitle>
                <Grid>
                    <form onSubmit={handleSubmit} noValidate>
                        <DialogContent className='content'>
                            <Field
                                name="old_password"
                                component={CustomInput}
                                id="standard-adornment-password"
                                labelText="Old Password*"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                validate={[required, password]}
                                inputProps={{
                                    type: (values.oldPassword ? 'text' : 'password'),
                                    placeholder: "Enter Password",
                                    endAdornment: (
                                        <InputAdornment position="end" className='adornment-icon'>
                                            <img onClick={handleClickShowPassword('oldPassword')} src={(values.oldPassword) ? visibilityIcon : visibilityOffIcon} alt='img' />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Field
                                name="new_password1"
                                component={CustomInput}
                                id="new_password1"
                                labelText="New Password*"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                validate={[required, password, passwordsMatch]}
                                inputProps={{
                                    type: (values.showPassword ? 'text' : 'password'),
                                    placeholder: "Enter Password",
                                    endAdornment: (
                                        <InputAdornment position="end" className='adornment-icon'>
                                            <img onClick={handleClickShowPassword('showPassword')} src={(values.showPassword) ? visibilityIcon : visibilityOffIcon} alt='img' />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Field
                                name="new_password2"
                                component={CustomInput}
                                id="new_password2"
                                labelText="Confirm New Password*"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                validate={[required, passwordsMatch]}
                                inputProps={{
                                    type: (values.showConfirmPassword ? 'text' : 'password'),
                                    placeholder: "Enter Password",
                                    endAdornment: (
                                        <InputAdornment position="end" className='adornment-icon'>
                                            <img onClick={handleClickShowPassword('showConfirmPassword')} src={(values.showConfirmPassword) ? visibilityIcon : visibilityOffIcon} alt='img' />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </DialogContent>
                        <DialogActions className='bottom'>
                            <Link underline="none" onClick={handleClose} className='cancelBtn' disabled={processing}>
                                Cancel
                            </Link>
                            <LoadingButton
                                type="submit"
                                className={`primaryButton modalBtn ${processing && 'loading'}`}
                                loading={processing}
                                variant="contained"
                                color="secondary"
                                loadingIndicator={<CircularProgress sx={{ color: '#ffffff' }} size={16} />}
                                disabled={processing}
                            >
                                Change
                            </LoadingButton>
                        </DialogActions>
                    </form>
                </Grid>
            </BootstrapDialog >
        </div >
    );
}

const ReduxFormMapped = reduxForm({
    form: 'ChangePasswordForm', // a unique identifier for this form
    enableReinitialize: false,
})(ChangePasswordDialog)
export default ReduxFormMapped;