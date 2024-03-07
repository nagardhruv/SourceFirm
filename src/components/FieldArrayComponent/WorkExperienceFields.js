import React from "react";
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';
import closeIcon from 'assets/img/icons/close-icon.svg';
import plusIcon from 'assets/img/icons/plus-icon.svg';
import { Field } from "redux-form";
import CustomInput from "components/CustomInput/CustomInput";
import DatePickerField from "components/CustomDateRangePicker/DatePickerField";
import CustomTextArea from "components/CustomTextArea/CustomTextArea";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


const WorkExperienceFields = ({ fields, required, handleChangeDate, minDate, handleRemove }) => {

    const removeField = (index) => {
        fields.remove(index);
        handleRemove(index)
    }

    return (
        <>
            {fields.length === 0 ?
                <Box component="div" className='addBtn-box'>
                    <Button onClick={() => fields.push()} >
                        + add Work Experience
                    </Button>
                </Box>
                :
                <>
                    {fields.map((name, index) => (
                        <Grid className="editProject-container" key={index}>
                            <Grid className="edit-conatiner">
                                <div className="edit-container-header">
                                    <h5 className="title">Work History {index + 1}</h5>
                                    <IconButton
                                        onClick={() => removeField(index)}
                                        aria-label="delete"
                                        size="medium"
                                        className="cursor-pointer closebtn">
                                        <img src={closeIcon} alt="img" style={{ filter: "brightness(10)" }} />
                                    </IconButton>
                                </div>
                                <div className="edit-container-content">
                                    <Grid container className="formGrid">
                                        <Grid className='formGrid-inner'>
                                            <Field
                                                name={`${name}.company_name`}
                                                id={`${name}.company_name`}
                                                component={CustomInput}
                                                labelText="Company Name*"
                                                formControlProps={{
                                                    fullWidth: true,
                                                }}
                                                validate={[required]}
                                                inputProps={{
                                                    placeholder: "Enter Company Name",
                                                    type: "text",
                                                }}
                                            />
                                        </Grid>
                                        <Grid className='formGrid-inner'>
                                            <Field
                                                name={`${name}.title`}
                                                id={`${name}.title`}
                                                component={CustomInput}
                                                labelText="Designation*"
                                                formControlProps={{
                                                    fullWidth: true,
                                                }}
                                                validate={[required]}
                                                inputProps={{
                                                    placeholder: "Enter Company Name",
                                                    type: "text",
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid className='formGrid-inner'>
                                        <Grid container className='formGrid datepicker-formGrid'>
                                            <Grid className='formGrid-inner'>
                                                <Field
                                                    name={`${name}.start_date`}
                                                    id={`${name}.start_date`}
                                                    labelText="Duration*"
                                                    placeholder="Start Date"
                                                    component={DatePickerField}
                                                    inputFormat="YYYY-MM-DD"
                                                    onChange={(date) => {
                                                        handleChangeDate(date, index)
                                                    }
                                                    }
                                                    validate={[required]}

                                                />
                                            </Grid>
                                            <span className="to-text">to</span>
                                            <Grid className='formGrid-inner'>
                                                <Field
                                                    name={`${name}.end_date`}
                                                    id={`${name}.end_date`}
                                                    component={DatePickerField}
                                                    minDate={minDate[index]}
                                                    placeholder="End Date"
                                                    inputFormat="YYYY-MM-DD"
                                                    validate={[required]}
                                                />
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                    <Grid className='formGrid-inner'>
                                        <Field
                                            name={`${name}.description`}
                                            component={CustomTextArea}
                                            id={`${name}.description`}
                                            labelText="About*"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            multiline={true}
                                            rows={2}
                                            maxRows={10}
                                            placeholder="Enter Text"
                                        />
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    ))}
                    <Link onClick={() => fields.push()} underline="none" className="addBranchBtn cursor-pointer width-fitContent">
                        <img src={plusIcon} alt="add" /> add New
                    </Link>
                </>}
        </>
    );
};

export default WorkExperienceFields;    