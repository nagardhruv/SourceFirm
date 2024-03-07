import React from "react";
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';
import deleteIcon from "assets/img/icons/delete-icon.svg";
import plusIcon from 'assets/img/icons/plus-icon.svg';
import { Field } from "redux-form";
import CustomInput from "components/CustomInput/CustomInput";
import CustomTextArea from "components/CustomTextArea/CustomTextArea";
import ChipAutocomplete from "components/CustomeAutoComplete/ChipAutocomplete";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { required, checkUrl, characterLimit, checkZeroMonth } from "utils/Validation";
import CustomMultipleUpload from "components/customUpload/CustomMultipleUpload";
import { FILETYPE } from "utils/constant";
import { CircularProgress } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import CustomCheckBox from "components/CustomCheckBox/CustomCheckBox";
import { avoidKeysForNumber } from "utils/Common";


const ProjectFields = ({ fields, handleRemove, technologies, skills, removeImage, allImages, uploadImage, imageLoaders, isUploading }) => {

    const removeFields = (index) => {
        fields.remove(index);
        handleRemove(index);
    }
    return (
        <>
            {fields.length === 0 ?
                <Box component="div" className='addBtn-box'>
                    <Button onClick={() => fields.push()} >
                        + add Project
                    </Button>
                </Box>
                :
                <>
                    {fields.map((name, index) => (
                        <Grid className="editProject-container" key={index}>
                            <Grid className="edit-conatiner">
                                <div className="edit-container-header">
                                    <h5 className="title">Project {index + 1}</h5>
                                    <IconButton
                                        onClick={() => removeFields(index)}
                                        aria-label="delete"
                                        size="medium"
                                        className="cursor-pointer closebtn">
                                        <img src={deleteIcon} alt="img" style={{ filter: "brightness(10)" }} />
                                    </IconButton>
                                </div>
                                <div className="edit-container-content">
                                    <Grid container className="formGrid">
                                        <Grid className='formGrid-inner'>
                                            <Field
                                                name={`${name}.title`}
                                                id={`${name}.title`}
                                                component={CustomInput}
                                                labelText="Project Name*"
                                                formControlProps={{
                                                    fullWidth: true,
                                                }}
                                                validate={[required]}
                                                inputProps={{
                                                    placeholder: "Enter Project Name",
                                                    type: "text",
                                                }}
                                                normalize={characterLimit(100)}
                                            />
                                        </Grid>
                                        <Grid className='formGrid-inner'>
                                            <Grid container className='formGrid datepicker-formGrid'>
                                                <Grid className='project-duretion-month'>
                                                    <Field
                                                        name={`${name}.duration`}
                                                        component={CustomInput}
                                                        id={`${name}.duration`}
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
                                                    id={`${name}.is_on_going`}
                                                    name={`${name}.is_on_going`}
                                                    component={CustomCheckBox}
                                                    labelText="On going"
                                                />
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                    <Grid container className='formGrid'>
                                        <Field
                                            name={`${name}.technologies`}
                                            component={ChipAutocomplete}
                                            id={`${name}.technologies`}
                                            labelText="Technologies"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            options={technologies || []}
                                            displayKey="title"
                                            // validate={required}
                                            onChange={(value) => value}
                                            inputProps={{
                                                placeholder: "Select Used Technologies",
                                                type: "text",
                                            }}
                                        />
                                    </Grid>
                                    <Grid container className='formGrid'>
                                        <Field
                                            name={`${name}.skills`}
                                            component={ChipAutocomplete}
                                            id={`${name}.skills`}
                                            labelText="Skills"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            options={skills || []}
                                            displayKey="title"
                                            // validate={required}
                                            onChange={(value) => value}
                                            inputProps={{
                                                placeholder: "Select Used Skills",
                                                type: "text",
                                            }}
                                        />
                                    </Grid>
                                    <Grid className='formGrid-inner'>
                                        <Field
                                            name={`${name}.description`}
                                            component={CustomTextArea}
                                            id={`${name}.description`}
                                            labelText="About"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            multiline={true}
                                            rows={2}
                                            placeholder="Enter Text"
                                        />
                                    </Grid>
                                    <Grid className='add-image-container'>
                                        <p className='label'>Images</p>
                                        <List className='add-imageList'>
                                            {allImages && allImages.length > 0 && allImages[index]?.map((file, fileIndex) => (
                                                <ListItem className="item" key={fileIndex}>
                                                    <img src={file.url} alt="img" />
                                                    <div className='imageOverlay'>
                                                        <img onClick={() => { removeImage(fileIndex, index); }} src={deleteIcon} alt='img' />
                                                    </div>
                                                </ListItem>
                                            ))}
                                            {(imageLoaders && imageLoaders?.length > 0 && imageLoaders?.[index]) &&
                                                <ListItem className="item" >
                                                    <div style={{ justifyContent: 'center' }}>
                                                        <CircularProgress disableShrink />
                                                    </div>
                                                </ListItem>
                                            }
                                            <ListItem className="add-imageBox">
                                                <Field
                                                    name={`${name}.images`}
                                                    id={`${name}.images`}
                                                    component={CustomMultipleUpload}
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    mimeType={FILETYPE.image}
                                                    onChange={(e) => uploadImage(e, index)}
                                                    inputProps={{
                                                        type: "file",
                                                        placeholder: "Enter Text",

                                                    }}
                                                    isUploading={isUploading}
                                                />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                    <Grid container className='formGrid'>
                                        <Grid item lg={12} md={12} sm={12}>
                                            {/* <FormControl variant="standard" className='formControl'> */}
                                            <Field
                                                name={`${name}.link`}
                                                id={`${name}.link`}
                                                labelText="Project Link"
                                                component={CustomInput}
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                validate={[checkUrl]}
                                                inputProps={{
                                                    type: "text",
                                                    placeholder: "Enter Link",
                                                }}
                                            />
                                            {/* </FormControl> */}
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    ))
                    }
                    <Link onClick={() => fields.push()} underline="none" className="addBranchBtn cursor-pointer width-fitContent">
                        <img src={plusIcon} alt="add" /> add New Project
                    </Link>
                </>}
        </>
    );
};

export default ProjectFields;    