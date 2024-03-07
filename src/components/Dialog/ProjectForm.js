import React, { useRef, useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions/index";
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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { reduxForm, Field, getFormValues } from 'redux-form';
import deleteIcon from 'assets/img/icons/delete-icon.svg';
import CustomInput from 'components/CustomInput/CustomInput.js';
import { required, checkUrl, characterLimit, checkZeroMonth } from "utils/Validation";
import ChipAutocomplete from "components/CustomeAutoComplete/ChipAutocomplete";
import 'assets/css/allModals.css';
import 'assets/css/developer-profile.css';
import 'assets/css/add-developer.css';
import { CustomEditor } from "components/CustomEditor/CustomEditor";
import { FILETYPE } from "utils/constant";
import CustomCheckBox from "components/CustomCheckBox/CustomCheckBox";
import InputAdornment from '@mui/material/InputAdornment';
import { avoidKeysForNumber } from "utils/Common";

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


function ProjectForm(props) {
    const { open, close, handleSubmit, uploadImage, filesData, removeImage,  customText } = props;
    const dispatch = useDispatch();
    const inputFile = useRef(null)
    const [allImages, setAllImages] = useState([]);
    const technologies = useSelector((state) => state.commonReducer?.technologies);

    const getTechnologies = (search) => {
        dispatch(Actions.getTechnologies(search));
    }
    const handleCapture = (e) => {
        uploadImage(e)
    }
    useEffect(() => {
        getTechnologies('');
    }, []);
    useEffect(() => {
        setAllImages(filesData);
    }, [filesData]);

    return (
        <>
            {/* modal start */}
            <CutomeDialog
                onClose={close}
                aria-labelledby="customized-dialog-title"
                open={open}
                className='add_project-modal'>

                <form onSubmit={handleSubmit}>
                    <CutomeDialogTitle id="customized-dialog-title" className='modal-title' onClose={close}>
                        {customText.titleText}
                    </CutomeDialogTitle>

                    <DialogContent className='content'>
                        <Grid container className='formGrid'>
                            <Grid className='formGrid-inner'>
                                <span></span>
                                <Field
                                    name="title"
                                    id="title"
                                    labelText="Project Name*"
                                    className='inputField'
                                    component={CustomInput}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    validate={[required]}
                                    inputProps={{
                                        type: "text",
                                        placeholder: "Project Name",
                                    }}
                                />
                            </Grid>

                            <Grid className='formGrid-inner'>
                                <Grid container className='formGrid datepicker-formGrid'>
                                    <Grid className='project-duretion-month'>
                                        <Field
                                            name="duration"
                                            component={CustomInput}
                                            id="duration"
                                            labelText="Project Duration*"
                                            formControlProps={{
                                                fullWidth: true
                                            }}

                                            validate={[required, checkZeroMonth]}
                                            inputProps={{
                                                placeholder: "Enter number",
                                                type: 'number',
                                                endAdornment: (
                                                    <InputAdornment position="end" className="month-duration">
                                                        Months
                                                    </InputAdornment>
                                                )
                                            }}
                                            onKeyDown={avoidKeysForNumber}
                                            normalize={characterLimit(2)}
                                        />
                                        <Field
                                            id="is_on_going"
                                            name="is_on_going"
                                            component={CustomCheckBox}
                                            labelText="On going"
                                        />
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid container className='formGrid'>
                            <Field
                                name="technologies"
                                component={ChipAutocomplete}
                                id="technologies"
                                labelText="Used Technology*"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                options={technologies || []}
                                displayKey="title"
                                validate={required}
                                onChange={(value) => value}
                                inputProps={{
                                    placeholder: "Select Used Technologies",
                                    type: "text",
                                }}
                            />
                        </Grid>
                        <Grid container className='formGrid'>
                            <Field
                                name="description"
                                component={CustomEditor}
                                id="description"
                                labelText="About*"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                validate={[required]} inputProps={{
                                    placeholder: "Enter Text",
                                }}
                            />
                        </Grid>
                        <Grid className='add-image-container'>
                            <p className='label'>Images</p>
                            <List className='add-imageList'>
                                {allImages && allImages.map((file, index) => (
                                    <ListItem className="item" key={index}>
                                        <img src={file.url} alt="img" />
                                        <div className='imageOverlay'>
                                            <img onClick={() => { removeImage(index); }} src={deleteIcon} alt='img' />
                                        </div>
                                    </ListItem>
                                ))}
                                <ListItem className="add-imageBox">
                                    <Button onClick={() => { inputFile.current.click(); }} >
                                        <input ref={inputFile} accept={FILETYPE.image} type="file" multiple onChange={handleCapture} style={{ 'display': 'none' }} />
                                        +<br />
                                        Add Image
                                    </Button>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid container className='formGrid'>
                            <Grid item lg={12} md={12} sm={12}>
                                <FormControl variant="standard" className='formControl'>
                                    <Field
                                        name="link"
                                        id="link"
                                        labelText="Project Link"
                                        className='inputField'
                                        component={CustomInput}
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        validate={[checkUrl]}
                                        inputProps={{
                                            type: "text",
                                            placeholder: "Enter Text",
                                        }}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions className='bottom'>
                        <Link underline="none" onClick={close} className='cancelBtn'>Cancel</Link>
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
    form: 'CreateProjectForm', // a unique identifier for this form
    enableReinitialize: true,
})(ProjectForm);
const mapStateToProps = (state) => {
    return { formValue: getFormValues('CreateProjectForm')(state) }
}
export default connect(mapStateToProps)(ReduxFormMapped);