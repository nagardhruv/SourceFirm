import * as React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "assets/css/faq.css";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CustomBreadcrumbs from 'components/CustomBreadcrumbs/CustomBreadcrumbs';
import FaqLEftImg from 'assets/img/faq-left-img.png'
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import AccordianIcon from 'assets/img/accordion-icon.png'


// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';


function Faq() {

    const breadCrumbs = [{ name: 'home', path: '/home' }];

    // const [ setValue] = React.useState('1');

    // const handleChange = (event, newValue ) => {
    //     setValue(newValue);
    // };

    
    

    return (
        <div>
            <div className='faq-main-section'>
                <section className="faq-banner">
                    <div className='faq-banner'>
                        <Container>
                            <Grid container>
                                <Grid item lg={6}>
                                    <Stack spacing={2} className='breadcrumb-div'>
                                        <CustomBreadcrumbs current="About Us" previous={breadCrumbs} />
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Grid className='banner-header'>
                                <Typography variant='h2'>
                                Frequently Asked Questions
                                </Typography>
                            </Grid>
                        </Container>
                    </div>
                </section>
               
            </div>
            <div className="faq-question">
                <section className="faq-section">
                    <div className="faq-inner">
                        <Container>
                            <Grid container spacing={10}>
                                <Grid item lg={4} md={3}>
                                    <div className="faq-left-img">
                                        <img src={FaqLEftImg} alt="" />
                                    </div>
                                </Grid>
                                <Grid item lg={8} md={9}>
                                    <div className="faq-accordian">
                                    <Accordion className="acordian-content">
                                    <AccordionSummary
                                    expandIcon={<img src={AccordianIcon} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className="accordion-panel"
                                    >
                                    <Typography variant="h2">What is SourceFirms?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="faq-accordion-body">
                                    <Typography variant="body1">
                                    SourceFirms is the world’s first resource augmentation marketplace that acts as a bridge between employers and talents. Talents are able to apply for the jobs they like. On the other hand, employers can find numerous potential software developers who can complete projects at a comprehensive price. 
                                    </Typography>
                                    </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="acordian-content">
                                        <AccordionSummary
                                        expandIcon={<img src={AccordianIcon} />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        className="accordion-panel"
                                        >
                                        <Typography variant="h2">How Does SourceFirms Differ From Other Platforms?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className="faq-accordion-body">
                                        <Typography variant="body1">
                                        At SourceFirms, we connect employers and resources from all around the world. Unlike other platforms, we test every account registered with us and make sure we don’t have any spammers on our platform. Also, we offer a secured and safe workroom for our resources & employers.
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="acordian-content">
                                        <AccordionSummary
                                        expandIcon={<img src={AccordianIcon} />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                        className="accordion-panel"
                                        >
                                        <Typography variant="h2">What are all special benefits offered by SourceFirms while joining?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className="faq-accordion-body">
                                        <Typography variant="body1">
                                        Many online marketplaces face numerous challenges in producing reliable freelance workers for employers and vice versa. However, at SourceFirms we follow strong protocols and screening tests to maintain the reliability of our platform users. Also, we offer a dedicated workroom for all users where they can manage their work. 
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="acordian-content">
                                        <AccordionSummary
                                        expandIcon={<img src={AccordianIcon} />}
                                        aria-controls="panel4a-content"
                                        id="panel4a-header"
                                        className="accordion-panel"
                                        >
                                        <Typography variant="h2">How many resources can I expect on the SourceFirms platform?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className="faq-accordion-body">
                                        <Typography variant="body1">
                                        At the SourceFirms platform, we can assure you will find resources for multiple tech stacks from multiple agencies on this single platform. But getting work or getting hired by employers is on your caliber and it should match what employers are looking for. However, our expert will assist you in all forms to get the right resources. 
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="acordian-content">
                                        <AccordionSummary
                                        expandIcon={<img src={AccordianIcon} />}
                                        aria-controls="panel5a-content"
                                        id="panel5a-header"
                                        className="accordion-panel"
                                        >
                                        <Typography variant="h2">Who owns the legal rights for the work done on the SourceFirms platform?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className="faq-accordion-body">
                                        <Typography variant="body1">
                                        Once the work is accepted and paid by the respective employer, the legal rights for the work done by resource go to the employer. Also, SourceFirms doesn’t own any legal rights to the resource’s work. To know more about the work legality, please get in touch with us. 
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="acordian-content">
                                        <AccordionSummary
                                        expandIcon={<img src={AccordianIcon} />}
                                        aria-controls="panel6a-content"
                                        id="panel6a-header"
                                        className="accordion-panel"
                                        >
                                        <Typography variant="h2">What happens if SourceFirms is down during the final conversation of my project?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className="faq-accordion-body">
                                        <Typography variant="body1">
                                        SourceFirms platform is empowered with a strong technology stack; we go to every possible length to maintain our site reliability. Also, we keep the site&apos;s availability and reliability as our top priority. However, if any unexpected thing happens during an extreme situation SourceFirms will try hard to get the site live as soon as possible. 
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="acordian-content">
                                        <AccordionSummary
                                        expandIcon={<img src={AccordianIcon} />}
                                        aria-controls="panel7a-content"
                                        id="panel7a-header"
                                        className="accordion-panel"
                                        >
                                        <Typography variant="h2">Is there any legal agreement needed for working on the SourceFirms platform?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className="faq-accordion-body">
                                        <Typography variant="body1">
                                        Yes! SourceFirms enters into a talent agreement with every resource & client registered on its platform. 
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="acordian-content">
                                        <AccordionSummary
                                        expandIcon={<img src={AccordianIcon} />}
                                        aria-controls="panel8a-content"
                                        id="panel8a-header"
                                        className="accordion-panel"
                                        >
                                        <Typography variant="h2">How much do resources get paid?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className="faq-accordion-body">
                                        <Typography variant="body1">
                                        Payment terms will be mentioned in the employer’s job post and the same will be paid upon task completion. 
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="acordian-content">
                                        <AccordionSummary
                                        expandIcon={<img src={AccordianIcon} />}
                                        aria-controls="panel9a-content"
                                        id="panel9a-header"
                                        className="accordion-panel"
                                        >
                                        <Typography variant="h2">Whether there will be any cut-off of resource’s earnings by SourceFirms as commission?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className="faq-accordion-body">
                                        <Typography variant="body1">
                                        No! As of now, we don’t charge anything from resources. Even registration is completely FREE! However, SourceFirms will only charge for job posting to the clients. 
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="acordian-content">
                                        <AccordionSummary
                                        expandIcon={<img src={AccordianIcon} />}
                                        aria-controls="panel10a-content"
                                        id="panel10a-header"
                                        className="accordion-panel"
                                        >
                                        <Typography variant="h2">What happens if my project gets rejected?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className="faq-accordion-body">
                                        <Typography variant="body1">
                                        You need to deliver quality workmanship to maintain a good reputation on the SourceFirms platform. Project/task rejection is up to the employer’s decision; resources must meet the requirements of the project. However, if the project gets rejected, the client may ask you for re-work or cancel the project; if it gets canceled you own the legal right for the same. 
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="acordian-content">
                                        <AccordionSummary
                                        expandIcon={<img src={AccordianIcon} />}
                                        aria-controls="panel11a-content"
                                        id="panel11a-header"
                                        className="accordion-panel"
                                        >
                                        <Typography variant="h2">What shall I suppose to do if the client does not pay after receiving my work?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className="faq-accordion-body">
                                        <Typography variant="body1">
                                        SourceFirms platform goes to every possible length to maintain legacy and reliability on having authenticated users. So, you don&apos;t have to worry about the payment. 
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Faq;