import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import 'assets/css/profile.css';
import 'assets/css/allModals.css';

import plusIcon from 'assets/img/icons/plus-icon.svg';
import minusIcon from 'assets/img/icons/minus-icon.svg';
import ProfessionalDetailsForm from './ProfessionalDetailsForm';
import ProjectDetailTable from './ProjectDetailTable';
import WorkHistoryForm from './WorkHistoryForm';
import CertificateForm from './CertificateForm';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

function EditFreelancerProfile() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
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
        <Link
            underline="hover"
            key="3"
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
        >
            My Profile
        </Link>,
        <Typography key="4" color="text.primary">
            edit profile
        </Typography>,
      ];

    const handleClickOpen = () => {
        setOpen(true);
      };

  return (
    <>
    <Grid className='profile-top-section freelancer_profile-top-section'>
        <Container>
            <Grid container className='profile-top-inner'>
                <Grid item lg={6}>
                    <Stack spacing={2} className='breadcrumb-div'>
                        <Breadcrumbs
                            className='breadcrumb-nav'
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                </Grid>
                <Grid item lg={6}>
                    <p className='clientId'>Freelancer ID : <span>CB65854565</span></p>
                </Grid>
            </Grid>
        </Container>
    </Grid>
    <Container className='profile-container add_profile-container'>
        <h4>Edit Profile</h4>
        <Grid className='profile-inner add_profile-inner'>
            <Grid className='add_profile-form'>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='accordion_panel-container'>
                    <AccordionSummary
                    expandIcon={expanded ? <img src={minusIcon} alt='img' /> : <img src={plusIcon} alt='img' /> }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className='panel-header'
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} className='panel-title'>
                            Professional Details
                        </Typography>
                        <Typography className='approval-tag'>
                            Your profile is under approval
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='accordion_panel-content'>
                        <ProfessionalDetailsForm />
                        <Grid className='action-div'>
                            <Link href="#" underline="none" className='previousBtn'>Cancel</Link>
                            <Button  variant="contained" className='primaryButton nextBtn'  onClick={handleClickOpen}>Submit</Button >
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='accordion_panel-container'>
                    <AccordionSummary
                    expandIcon={expanded ? <img src={minusIcon} alt='img' /> : <img src={plusIcon} alt='img' /> }
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    className='panel-header'
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} className='panel-title'>
                            Project Details
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='accordion_panel-content'>
                        <ProjectDetailTable />
                        <Grid className='action-div'>
                            <Link href="#" underline="none" className='previousBtn'>Cancel</Link>
                            <Button  variant="contained" className='primaryButton nextBtn'  onClick={handleClickOpen}>Submit</Button >
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='accordion_panel-container'>
                    <AccordionSummary
                    expandIcon={expanded ? <img src={minusIcon} alt='img' /> : <img src={plusIcon} alt='img' /> }
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    className='panel-header'
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} className='panel-title'>
                            Work Experience
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='accordion_panel-content'>
                        <WorkHistoryForm />
                        <WorkHistoryForm />
                        <Link
                            onClick={() => fields.push()}
                            underline="none"
                            className="addBranchBtn cursor-pointer"
                        >
                            <img src={plusIcon} alt="add" /> add New
                        </Link>
                        <Grid className='action-div'>
                            <Link href="#" underline="none" className='previousBtn'>Cancel</Link>
                            <Button  variant="contained" className='primaryButton nextBtn'  onClick={handleClickOpen}>Submit</Button >
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className='accordion_panel-container'>
                    <AccordionSummary
                    expandIcon={expanded ? <img src={minusIcon} alt='img' /> : <img src={plusIcon} alt='img' /> }
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    className='panel-header'
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} className='panel-title'>
                            Certification
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='accordion_panel-content'>
                        <CertificateForm />
                        <CertificateForm />
                        <Link
                            onClick={() => fields.push()}
                            underline="none"
                            className="addBranchBtn cursor-pointer"
                        >
                            <img src={plusIcon} alt="add" /> add New
                        </Link>
                        <Grid className='action-div'>
                            <Link href="#" underline="none" className='previousBtn'>Cancel</Link>
                            <Button  variant="contained" className='primaryButton nextBtn'  onClick={handleClickOpen}>Submit</Button >
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    </Container>
    </>
  );
}

export default EditFreelancerProfile;
