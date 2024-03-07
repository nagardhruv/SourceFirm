import React from "react";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "assets/css/createJob.css";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import basicInfoIcon from "assets/img/icons/basic_info-icon.svg";
import avaibilityIcon from "assets/img/icons/avaibility-icon.svg";
import expertiseIcon from "assets/img/icons/expertise-icon.svg";
import experienceIcon from "assets/img/icons/experience-icon.svg";
import budgetIcon from "assets/img/icons/budget-icon.svg";
import partTimeIcon from "assets/img/icons/part-time-icon.svg";
import fullTimeIcon from "assets/img/icons/full-time-icon.svg";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function valuetext(value) {
  return `${value}°C`;
}

const ariaLabel = { "aria-label": "description" };

const ColorlibStepIconRoot = styled("div")(({ ownerState }) => ({
  backgroundColor: "#ffffff26",
  zIndex: 1,
  color: "#fff",
  width: 32,
  height: 32,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    background: "#3981F7",
    //   boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    //   border: '6px solid #446891',
  }),
  ...(ownerState.completed && {
    background: "#08D6A8",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <img src={basicInfoIcon} alt="img" />,
    2: <img src={avaibilityIcon} alt="img" />,
    3: <img src={expertiseIcon} alt="img" />,
    4: <img src={experienceIcon} alt="img" />,
    5: <img src={budgetIcon} alt="img" />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  {
    label: "Basic Info",
    description: `Lorem Ipsum is simply dummy text of the typesetting industry.`,
  },
  {
    label: "Availability",
    description:
      "Lorem Ipsum is simply dummy text of the typesetting industry.",
  },
  {
    label: "Expertise",
    description: `Lorem Ipsum is simply dummy text of the typesetting industry.`,
  },
  {
    label: "Experience",
    description: `Lorem Ipsum is simply dummy text of the typesetting industry.`,
  },
  {
    label: "Budget",
    description: `Lorem Ipsum is simply dummy text of the typesetting industry.`,
  },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function CreateJobPost() {
  const [position, setPosition] = React.useState("");
  const [activeStep, setActiveStep] = React.useState(0);
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangePosition = (event) => {
    setPosition(event.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Container>
        <Grid container className="createJob-container">
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Grid className="createJob-stepper">
              <Grid className="title">
                <Typography variant="h5">Create Job Post</Typography>
                <Typography className="step-count">
                  Step 1<span>/5</span>
                </Typography>
              </Grid>
              <Divider className="createJob-divider" />

              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step) => (
                  <Step key={step.label}>
                    <StepLabel
                      className="stepperLabel"
                      StepIconComponent={ColorlibStepIcon}
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography className="stepDescription">
                        {step.description}
                      </Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid className="createJob-wrapper">
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {activeStep === 0 && (
                    <>
                      <Grid className="createJob-wrapper-inner">
                        <h3>Basic info</h3>
                        <Grid container className="formGrid">
                          <FormControl
                            variant="standard"
                            className="formControl"
                          >
                            <InputLabel shrink htmlFor="bootstrap-input">
                              Job Title*
                            </InputLabel>
                            <Select
                              value={position}
                              onChange={handleChangePosition}
                              className="inputField"
                              placeholder="Select position"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>New York, America</MenuItem>
                              <MenuItem value={20}>USA</MenuItem>
                              <MenuItem value={30}>Canada</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid container className="formGrid">
                          <FormControl
                            variant="standard"
                            className="formControl"
                          >
                            <InputLabel shrink htmlFor="bootstrap-input">
                              Job Description*
                            </InputLabel>
                            <TextField
                              className="multiSelect-Textfield"
                              multiline
                              rows={4}
                              placeholder="Enter description"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                      <div className="bottom-buttons">
                        <Button onClick={handleBack} className="saveDraftBtn">
                          Save as Draft
                        </Button>
                        <div className='action-div'>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            className="primaryButton nextBtn"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                  {activeStep === 1 && (
                    <>
                      <Grid className="createJob-wrapper-inner">
                        <h3>Availability</h3>
                        <Grid container className="formGrid">
                          <FormControl
                            variant="standard"
                            className="formControl"
                          >
                            <InputLabel shrink htmlFor="bootstrap-input">
                              No. of Positions*
                            </InputLabel>
                            <Select
                              value={position}
                              onChange={handleChangePosition}
                              className="inputField"
                              placeholder="Select no. of positions"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>New York, America</MenuItem>
                              <MenuItem value={20}>USA</MenuItem>
                              <MenuItem value={30}>Canada</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid className="availability-section">
                          <Typography className="title">
                            Select Availability*
                          </Typography>
                          <RadioGroup
                            row
                            aria-labelledby="demo-form-control-label-placement"
                            name="position"
                            defaultValue="top"
                            className="availability-options"
                          >

                            <div className="select-avaibility cursor-pointer">
                              <FormControlLabel
                                value="half-time"
                                control={<Radio
                                  icon={<CircleOutlinedIcon />}
                                  checkedIcon={<CheckCircleIcon />}
                                  className="select-radiobox"
                                />}
                              />
                              <div>
                                <img src={partTimeIcon} alt="img" />
                                <Typography>Half Time</Typography>
                              </div>
                            </div>
                            <div className="select-avaibility cursor-pointer">
                              <FormControlLabel
                                value="full-time"
                                control={<Radio
                                  icon={<CircleOutlinedIcon />}
                                  checkedIcon={<CheckCircleIcon />}
                                  className="select-radiobox"
                                />}
                              />
                              <div>
                                <img src={fullTimeIcon} alt="img" />
                                <Typography>Full Time</Typography>
                              </div>
                            </div>
                          </RadioGroup>
                        </Grid>
                      </Grid>
                      <div className="bottom-buttons">
                        <Button onClick={handleBack} className="saveDraftBtn">
                          Save as Draft
                        </Button>
                        <div className='action-div'>
                          <Link underline="none" className='cancelBtn'>Back</Link>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            className="primaryButton nextBtn"
                          >
                            Next
                          </Button>
                        </div>

                      </div>
                    </>
                  )}
                  {activeStep === 2 && (
                    <>
                      <Grid className="createJob-wrapper-inner">
                        <h3>Expertise</h3>
                        <Grid container className="formGrid">
                          <FormControl
                            variant="standard"
                            className="formControl"
                          >
                            <InputLabel shrink htmlFor="bootstrap-input">
                              Skills*
                            </InputLabel>
                            <Select
                              value={position}
                              onChange={handleChangePosition}
                              className="inputField"
                              placeholder="Search and add"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>New York, America</MenuItem>
                              <MenuItem value={20}>USA</MenuItem>
                              <MenuItem value={30}>Canada</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid container className="formGrid">
                          <FormControl
                            variant="standard"
                            className="formControl"
                          >
                            <InputLabel shrink htmlFor="bootstrap-input">
                              Technologys*
                            </InputLabel>
                            <Select
                              value={position}
                              onChange={handleChangePosition}
                              className="inputField"
                              placeholder="Search and add"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>New York, America</MenuItem>
                              <MenuItem value={20}>USA</MenuItem>
                              <MenuItem value={30}>Canada</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                      <div className="bottom-buttons">
                        <Button onClick={handleBack} className="saveDraftBtn">
                          Save as Draft
                        </Button>
                        <div className='action-div'>
                          <Link underline="none" className='cancelBtn'>Back</Link>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            className="primaryButton nextBtn"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                  {activeStep === 3 && (
                    <>
                      <Grid className="createJob-wrapper-inner">
                        <h3>Experience</h3>
                        <Grid container className="jobExperience">
                          <List className="createJobList">
                            <ListItem className="createJob-item">
                              <Typography>1 Year</Typography>
                              <Checkbox
                                {...label}
                                icon={<CircleOutlinedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                className="createJob-checkbox"
                              />
                            </ListItem>
                            <ListItem className="createJob-item">
                              <Typography>1 - 2 Year</Typography>
                              <Checkbox
                                {...label}
                                icon={<CircleOutlinedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                className="createJob-checkbox"
                              />
                            </ListItem>
                            <ListItem className="createJob-item">
                              <Typography>3 - 4 Year</Typography>
                              <Checkbox
                                {...label}
                                icon={<CircleOutlinedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                className="createJob-checkbox"
                              />
                            </ListItem>
                            <ListItem className="createJob-item">
                              <Typography>4 - 5 Years</Typography>
                              <Checkbox
                                {...label}
                                icon={<CircleOutlinedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                className="createJob-checkbox"
                              />
                            </ListItem>
                            <ListItem className="createJob-item">
                              <Typography>5 - 6 Year</Typography>
                              <Checkbox
                                {...label}
                                icon={<CircleOutlinedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                className="createJob-checkbox"
                              />
                            </ListItem>
                            <ListItem className="createJob-item">
                              <Typography>6 - 7 Year</Typography>
                              <Checkbox
                                {...label}
                                icon={<CircleOutlinedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                className="createJob-checkbox"
                              />
                            </ListItem>
                            <ListItem className="createJob-item">
                              <Typography>2 - 4 Year</Typography>
                              <Checkbox
                                {...label}
                                icon={<CircleOutlinedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                className="createJob-checkbox"
                              />
                            </ListItem>
                            <ListItem className="createJob-item">
                              <Typography>3 - 6 Year</Typography>
                              <Checkbox
                                {...label}
                                icon={<CircleOutlinedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                className="createJob-checkbox"
                              />
                            </ListItem>
                            <ListItem className="createJob-item">
                              <Typography>5 - 10 Year</Typography>
                              <Checkbox
                                {...label}
                                icon={<CircleOutlinedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                className="createJob-checkbox"
                              />
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                      <div className="bottom-buttons">
                        <Button onClick={handleBack} className="saveDraftBtn">
                          Save as Draft
                        </Button>
                        <div className='action-div'>
                          <Link underline="none" className='cancelBtn'>Back</Link>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            className="primaryButton nextBtn"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                  {activeStep === 4 && (
                    <>
                      <Grid className="createJob-wrapper-inner">
                        <h3>Budget</h3>
                        <Grid container className="jobBudget">
                          <Typography className="title">
                            Salary Type*
                          </Typography>
                          <RadioGroup
                            row
                            aria-labelledby="demo-form-control-label-placement"
                            name="position"
                            defaultValue="top"
                            className="jobBudget-radiogroup"
                          >
                            <List className="createJobList">
                              <ListItem className="createJob-item">
                                <Typography>Hourly</Typography>
                                <FormControlLabel
                                  value="hourly"
                                  control={<Radio
                                    icon={<CircleOutlinedIcon />}
                                    checkedIcon={<CheckCircleIcon />}
                                    className="createJob-radiobox"
                                  />}
                                />
                              </ListItem>
                              <ListItem className="createJob-item">
                                <Typography>Daily</Typography>
                                <FormControlLabel
                                  value="daily"
                                  control={<Radio
                                    icon={<CircleOutlinedIcon />}
                                    checkedIcon={<CheckCircleIcon />}
                                    className="createJob-radiobox"
                                  />}
                                />
                              </ListItem>
                              <ListItem className="createJob-item">
                                <Typography>Weekly</Typography>
                                <FormControlLabel
                                  value="weekly"
                                  control={<Radio
                                    icon={<CircleOutlinedIcon />}
                                    checkedIcon={<CheckCircleIcon />}
                                    className="createJob-radiobox"
                                  />}
                                />
                              </ListItem>
                              <ListItem className="createJob-item">
                                <Typography>Monthly</Typography>
                                <FormControlLabel
                                  value="monthly"
                                  control={<Radio
                                    icon={<CircleOutlinedIcon />}
                                    checkedIcon={<CheckCircleIcon />}
                                    className="createJob-radiobox"
                                  />}
                                />
                              </ListItem>
                              <ListItem className="createJob-item">
                                <Typography>Yearly</Typography>
                                <FormControlLabel
                                  value="yearly"
                                  control={<Radio
                                    icon={<CircleOutlinedIcon />}
                                    checkedIcon={<CheckCircleIcon />}
                                    className="createJob-radiobox"
                                  />}
                                />
                              </ListItem>
                            </List>
                          </RadioGroup>
                        </Grid>
                        <Grid container className="jobBudget">
                          <Typography className="title">
                            Budget*
                          </Typography>
                          <Box className="budgetSlider">
                            <Slider
                              getAriaLabel={() => 'Temperature range'}
                              value={value}
                              onChange={handleChange}
                              valueLabelDisplay="auto"
                              getAriaValueText={valuetext}
                            />
                          </Box>
                          <Grid className="budgetSliderInputs">
                            <Grid container className="formGrid budget-formGrid">
                              <FormControl variant="standard" className="formControl">
                                <Input
                                  className="inputField"
                                  inputProps={ariaLabel}
                                  endAdornment={<InputAdornment position="end">$</InputAdornment>}
                                />
                              </FormControl>
                              <Typography className="to-text">to</Typography>
                              <FormControl variant="standard" className="formControl">
                                <Input
                                  className="inputField"
                                  inputProps={ariaLabel}
                                  endAdornment={<InputAdornment position="end">$</InputAdornment>}
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container className="jobBudget">
                          <Typography className="title">
                            How do you wish to make Payment*
                          </Typography>
                          <RadioGroup
                            row
                            aria-labelledby="demo-form-control-label-placement"
                            name="position"
                            defaultValue="top"
                            className="jobBudget-radiogroup"
                          >
                            <List className="createJobList">
                              <ListItem className="createJob-item">
                                <Typography>With website</Typography>
                                <FormControlLabel
                                  value="with-website"
                                  control={<Radio
                                    icon={<CircleOutlinedIcon />}
                                    checkedIcon={<CheckCircleIcon />}
                                    className="createJob-radiobox"
                                  />}
                                />
                              </ListItem>
                              <ListItem className="createJob-item">
                                <Typography>Without website</Typography>
                                <FormControlLabel
                                  value="without-website"
                                  control={<Radio
                                    icon={<CircleOutlinedIcon />}
                                    checkedIcon={<CheckCircleIcon />}
                                    className="createJob-radiobox"
                                  />}
                                />
                              </ListItem>
                            </List>
                          </RadioGroup>
                        </Grid>
                      </Grid>
                      <div className="bottom-buttons">
                        <Button onClick={handleBack} className="saveDraftBtn">
                          Save as Draft
                        </Button>
                        <div className='action-div'>
                          <Link underline="none" className='cancelBtn'>Back</Link>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            className="primaryButton nextBtn"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </React.Fragment>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default CreateJobPost;
