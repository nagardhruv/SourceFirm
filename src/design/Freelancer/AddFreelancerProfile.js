import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import PersonalDetailStepperContent from "./PersonalDetailStepperContent";
import "assets/css/profile.css";
import ProfessionalDetailsForm from "design/ProfessionalDetailsForm";
import ProjectDetailStepperContent from "./ProjectDetailStepperContent";
import plusIcon from 'assets/img/icons/plus-icon.svg';
import WorkExpStepperContent from "./WorkExpStepperContent";
import CertificationStepperContent from "./CertificationStepperContent";

const steps = [
  "Personal Details",
  "Professional Details",
  "Projects Details",
  "Work Experience",
  "Certification",
];

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function AddFreelancerProfile() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({}); /* eslint-disable-line */

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/getting-started/installation/"
      onClick={handleClick}
    >
      Settings
    </Link>,
    <Typography key="4" color="text.primary">
      My Profile
    </Typography>,
  ];

  return (
    <>
      <Grid className="profile-top-section freelancer_profile-top-section">
        <Container>
          <Grid container className="profile-top-inner">
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Stack spacing={2} className="breadcrumb-div">
                <Breadcrumbs
                  className="breadcrumb-nav"
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <p className="clientId">
                Freelancer ID : <span>CB65854565</span>
              </p>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Container className="profile-container add_profile-container">
        <h4>Add Profile Details</h4>
        <Grid className="stepper-container">
          <Box>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              className="stepperBox"
            >
              {steps.map((label) => {
                return (
                  <Step key={label} className="stepperStep">
                    <StepLabel className="stepLabel">{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Box>
        </Grid>
        <Grid className="profile-inner add_profile-inner">
          <Box className="add_profile-form">
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
                    <PersonalDetailStepperContent />
                  </>
                )}
                {activeStep === 1 && (
                  <>
                    <h5 className="title">Professional Details</h5>
                    <ProfessionalDetailsForm
                      customText={{
                        buttonText: "Next",
                        titleText: ''
                      }} />
                  </>
                )}
                {activeStep === 2 && (
                  <>
                    <ProjectDetailStepperContent
                      customText={{
                        buttonText: "Next",
                        titleText: 'Add Project'
                      }}
                    />
                  </>
                )}
                {activeStep === 3 && (
                  <>
                    <h5 className="title">Work Experience</h5>
                    <WorkExpStepperContent
                      customText={{
                        buttonText: "Next",
                        titleText: ''
                      }}
                    />
                    <Link
                      underline="none"
                      className="addBranchBtn cursor-pointer"
                    >
                      <img src={plusIcon} alt="add" /> add New
                    </Link>
                  </>
                )}
                {activeStep === 4 && (
                  <>
                    <h5 className="title">Certification</h5>
                    <CertificationStepperContent
                      customText={{
                        buttonText: "Next",
                        titleText: ''
                      }}
                    />
                    <Link
                      underline="none"
                      className="addBranchBtn cursor-pointer"
                    >
                      <img src={plusIcon} alt="add" /> add New
                    </Link>
                  </>
                )}
                <Grid className="action-div">
                  <Link
                    href="#"
                    underline="none"
                    className="previousBtn"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Cancel
                  </Link>
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    className="primaryButton nextBtn"
                  >
                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                  </Button>
                </Grid>
              </React.Fragment>
            )}
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default AddFreelancerProfile;
