import React from "react";
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';
import deleteIcon from "assets/img/icons/delete-icon.svg";
import plusIcon from 'assets/img/icons/plus-icon.svg';
import { Field } from "redux-form";
import CustomInput from "components/CustomInput/CustomInput";
import DatePickerField from "components/CustomDateRangePicker/DatePickerField";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FILETYPE } from "utils/constant";
import CustomCertiUpload from "components/customUpload/CustomCertiUpload";
import { Typography } from '@mui/material';

const CertificationFields = ({ fields, required, imageUpload, checkUrl }) => {

    return (
        <>
            {fields.length === 0 ?
                <Box component="div" className='addBtn-box'>
                    <Button onClick={() => fields.push()} >
                        + add Certificate
                    </Button>
                </Box>
                :
                <>
                    {fields.map((name, index) => (
                        <Grid className="editProject-container" key={index}>
                            <Grid className="edit-conatiner">
                                <div className="edit-container-header">
                                    <h5 className="title">Certificate {index + 1}</h5>
                                    <IconButton
                                        onClick={() => fields.remove(index)}
                                        aria-label="delete"
                                        size="medium"
                                        className="cursor-pointer closebtn">
                                        <img src={deleteIcon} alt="img" style={{ filter: "brightness(10)" }} />
                                    </IconButton>
                                </div>
                                <div className="edit-container-content">
                                    <Grid container className="formGrid">
                                        <Field
                                            name={`${name}.title`}
                                            id={`${name}.name`}
                                            component={CustomInput}
                                            labelText="Certificate Title*"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            validate={[required]}
                                            inputProps={{
                                                placeholder: "Enter Certificate Title",
                                                type: "text",
                                            }}
                                        />
                                    </Grid>
                                    <Grid className='formGrid-inner'>
                                        <Grid container className='formGrid datepicker-formGrid'>
                                            <Field
                                                name={`${name}.certification_date`}
                                                id={`${name}.date`}
                                                labelText="Certification Date*"
                                                placeholder="Select date"
                                                component={DatePickerField}
                                                inputFormat="YYYY-MM-DD"
                                                onChange={(e) => e}
                                                validate={[required]}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container className="formGrid">
                                        <Field
                                            type="file"
                                            label="Upload Certificate*"
                                            name={`${name}.certificate_file`}
                                            component={CustomCertiUpload}
                                            mimeType={FILETYPE.certificate_file_type}
                                            id={`${name}.certificate_file`}
                                            validate={(!fields.get(index)?.certification_link && !fields.get(index)?.certificate_file) ? required : null}
                                            onChange={(e) => imageUpload(e, index)}
                                        />
                                    </Grid>
                                    <Grid style={{ marginBottom: '24px', width: '100%', textAlign: 'center' }}>
                                        <Typography>or</Typography>
                                    </Grid>
                                    <Grid container className="formGrid">
                                        <Field
                                            name={`${name}.certification_link`}
                                            id={`${name}.certification_link`}
                                            labelText="Certificate Link"
                                            className='inputField'
                                            component={CustomInput}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            validate={(!fields.get(index)?.certification_link && !fields.get(index)?.certificate_file) ? [required, checkUrl] : checkUrl}
                                            inputProps={{
                                                type: "text",
                                                placeholder: "Enter Link",
                                            }}
                                        />
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    ))}
                    <Link onClick={() => fields.push()} underline="none" className="addBranchBtn cursor-pointer width-fitContent">
                        <img src={plusIcon} alt="add" /> Add New Certificate
                    </Link>
                </>}
        </>
    );
};

export default CertificationFields;