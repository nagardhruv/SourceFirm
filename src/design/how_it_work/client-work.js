import React, { useEffect } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ClientBannerImg from 'assets/img/client-banner-image.png';
import WorkPattern1 from 'assets/img/work-pattern-banner1.png';
import WorkPattern2 from 'assets/img/work-pattern-banner2.png';
import WorkPattern3 from 'assets/img/work-pattern3.png';
import WorkPattern4 from 'assets/img/work-pattern4.png';
import WorkPattern5 from 'assets/img/work-pattern5.png';
import WorkPattern6 from 'assets/img/work-pattern6.png';
import WorkPattern7 from 'assets/img/work-pattern7.png';
import ExploreImage from 'assets/img/explore-image.png';
import ExplorePattern1 from 'assets/img/explore-pattern1.png';
import ExplorePattern2 from 'assets/img/explore-pattern2.png';
import ExplorePattern3 from 'assets/img/explore-pattern3.png';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem } from "@mui/material";
import AccordianUpIcon from 'assets/img/accordian-up-icon.png';
import Typography from '@mui/material/Typography';
import WordIcon from 'assets/img/word-icon.png';
import RegisterIcon from 'assets/img/register-icon.png';
import TimeIcon from 'assets/img/time.png';
import ProjectIcon from 'assets/img/project.png';
import CostIcon from 'assets/img/cost.png';
import ExploreIcon from 'assets/img/explore-icon.png';
import GreatBag from 'assets/img/great-bag.png'
import GreatTime from 'assets/img/great-time.png'
import GreatCopy from 'assets/img/great-copy.png'
import GreatLock from 'assets/img/great-lock.png'
import WorkSign from 'assets/img/work-done-sign-img.png'
import WorkDonePattern1 from 'assets/img/work-pattern1.png'
import WorkDonePattern2 from 'assets/img/work-pattern2.png'
import WorkDoneBg1 from 'assets/img/work-done-bg1.png'
import WorkDoneBg2 from 'assets/img/work-done-bg2.png'
import Step2Image from 'assets/img/step2-image.png'
import Step2Pattern2 from 'assets/img/step2-pattern2.png'
import Step2Pattern1 from 'assets/img/step2-patter1.png'
import Step3Image from 'assets/img/step3-image.png'
import Step3Pattern2 from 'assets/img/step3-pattern2.png'
import Step3Pattern1 from 'assets/img/step3-pattern1.png'
import Step4Image from 'assets/img/step4-image.png'
import Step4Pattern2 from 'assets/img/step4-pattern2.png'
import Step4Pattern1 from 'assets/img/step4-pattern1.png'
import Step4Pattern3 from 'assets/img/step4-pattern3.png'
import "assets/css/client-work.css";
import AccordianIcon from 'assets/img/accordion-icon.png'
import AOS from "aos";
import "aos/dist/aos.css";
import "assets/css/custom-animation.css";


function ClientWork() {

    const [expanded, setExpanded] = React.useState('panel1a-header');
    const [faqExpanded, setFaqExpanded] = React.useState('panel30a-header');

    const handleChange = (panel, section) => (event, isExpanded) => {
        if (section === 'FAQ') {
            setFaqExpanded(isExpanded ? panel : false)
        } else {
            setExpanded(isExpanded ? panel : false);
        }
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <div className="client-main-section">
                <section className="client-work-banner-section">
                    <div className="client-work-banner-inner">
                        <Container>
                            <div className="work-top-banner">
                                <Grid container className="work-contain-box">
                                    <Grid item lg={6} md={6} sm={9} xs={12}>
                                        <div className="work-banner-content">
                                            <h1><span>Hire Resources </span> for 5x Faster Project Completion</h1>
                                            <p>Get your work done right with the right people at the right time.</p>
                                            <button className="btn btn-primary">Get Started Now!</button>
                                        </div>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12}>
                                        <div className="work-right-content">

                                            <div className="pattern-1 pulse">
                                                <img src={WorkPattern1} alt='img' />
                                            </div>
                                            <div className="pattern-2 pulse">
                                                <img src={WorkPattern2} alt='img' />
                                            </div>
                                            <div className="pattern-3 pulse">
                                                <img src={WorkPattern3} alt='img' />
                                            </div>
                                            <div className="pattern-4 pulse">
                                                <img src={WorkPattern4} alt='img' />
                                            </div>
                                            <div className="pattern-5 pulse">
                                                <img src={WorkPattern5} alt='img' />
                                            </div>
                                            <div className="pattern-6 pulse">
                                                <img src={WorkPattern6} alt='img' />
                                            </div>
                                            <div className="pattern-7">
                                                <img src={WorkPattern7} alt='img' />
                                            </div>
                                            <div className="work-banner-image">
                                                <div className="work-bg1 zoomInUp"></div>
                                                <div className="work-bg2 zoomInUp"></div>
                                                <div className="work-bg3 zoomInUp"></div>
                                                <img src={ClientBannerImg} alt='img' className="fadeIn" />
                                            </div>
                                        </div>
                                    </Grid>

                                </Grid>
                            </div>
                        </Container>
                    </div>
                </section>

                <section className="explore-section">
                    <div className="explore-inner">
                        <Container>
                            <div className="explore-wrapper">
                                <Grid container>
                                    <Grid item lg={6} md={6} sm={12}>
                                        <div className="explore-left-content ">
                                            <div className="explore-box">
                                                <div className="explore-left-image">
                                                    <div className="explore-pattern1 aos-init aos-animate" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="900">
                                                        <img src={ExplorePattern1} alt='img' />
                                                    </div>
                                                    <div className="explore-pattern2 aos-init aos-animate" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1400">
                                                        <img src={ExplorePattern2} alt='img' />
                                                    </div>
                                                    <div className="explore-pattern3 aos-init aos-animate" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2000">
                                                        <img src={ExplorePattern3} alt='img' />
                                                    </div>
                                                    <img src={ExploreImage} alt='img' className="aos-init aos-animate" data-aos="fade-in" data-aos-duration="800" />
                                                </div>
                                                <div className="explore-card">
                                                    <h3> One Platform, <br />Endless Opportunities <br />to <span> Hire the Best Technical Talents. </span> </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg={6} md={6} pl={3} sm={12}>
                                        <div className="explore-right-content">
                                            <div className="heading">
                                                <h2>Connect & Explore <span>Agencies</span> </h2>
                                                <p>Register to connect with agencies within the shortest possible time!</p>
                                            </div>
                                            <div className="main-explore-accordion">
                                                <Accordion className="explore-accordion-content" expanded={expanded === 'panel1a-header'} onChange={handleChange('panel1a-header')}>
                                                    <AccordionSummary
                                                        expandIcon={<img src={AccordianUpIcon} />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        className="accordion-panel"
                                                    >
                                                        <img src={WordIcon} className="explore-acordion-icon" />
                                                        <Typography variant="h2">World’s first and fast</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails className="explore-accordion-body">
                                                        <Typography variant="body1">
                                                            Experienced software development agencies are a click away! Register yourself with all the details precisely on the world’s first and fast resource augmentation marketplace to connect with the best software development agencies!
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion className="explore-accordion-content" expanded={expanded === 'panel2a-header'} onChange={handleChange('panel2a-header')}>
                                                    <AccordionSummary
                                                        expandIcon={<img src={AccordianUpIcon} />}
                                                        aria-controls="panel2a-content"
                                                        id="panel2a-header"
                                                        className="accordion-panel"
                                                    >
                                                        <img src={RegisterIcon} className="explore-acordion-icon" />
                                                        <Typography variant="h2">Register to connect</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails className="explore-accordion-body">
                                                        <Typography variant="body1">
                                                            At SourceFirms, we connect employers and resources from all around the world. Unlike other platforms, we test every account registered with us and make sure we don’t have any spammers on our platform. Also, we offer a secured and safe workroom for our resources & employers.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion className="explore-accordion-content" expanded={expanded === 'panel3a-header'} onChange={handleChange('panel3a-header')}>
                                                    <AccordionSummary
                                                        expandIcon={<img src={AccordianUpIcon} />}
                                                        aria-controls="panel3a-content"
                                                        id="panel3a-header"
                                                        className="accordion-panel"
                                                    >
                                                        <img src={ExploreIcon} className="explore-acordion-icon" />
                                                        <Typography variant="h2">Explore the developers</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails className="explore-accordion-body">
                                                        <Typography variant="body1">
                                                            Many online marketplaces face numerous challenges in producing reliable freelance workers for employers and vice versa. However, at SourceFirms we follow strong protocols and screening tests to maintain the reliability of our platform users. Also, we offer a dedicated workroom for all users where they can manage their work.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                            <div className="explore-register-btn">
                                                <button className="btn btn-primary">Register Now</button>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </section>

                <section className="business-impact-section">
                    <div className="business-impact-inner">
                        <Container>
                            <Grid container>
                                <Grid item xs={12}>
                                    <div className="heading">
                                        <h2>What’s the <span> Business Impact? </span></h2>
                                    </div>


                                    <List className="impact-listing">
                                        <ListItem>
                                            <div className="list-top-img">
                                                <img src={TimeIcon} alt={TimeIcon} />
                                            </div>
                                            <div className="list-top-content">
                                                <h2>65%</h2>
                                                <p>Reduction in time-to-hire</p>
                                            </div>
                                        </ListItem>
                                        <ListItem>
                                            <div className="list-top-img">
                                                <img src={CostIcon} alt={CostIcon} />
                                            </div>
                                            <div className="list-top-content">
                                                <h2>50%</h2>
                                                <p>Saving in cost-to-hire</p>
                                            </div>
                                        </ListItem>
                                        <ListItem>
                                            <div className="list-top-img">
                                                <img src={ProjectIcon} alt={ProjectIcon} />
                                            </div>
                                            <div className="list-top-content">
                                                <h2>5x</h2>
                                                <p>Faster Project Done</p>
                                            </div>
                                        </ListItem>
                                    </List>

                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </section>

                <section className="great-about-section">
                    <div className="great-about-inner">
                        <Container>
                            <div className="great-about-wrapper">
                                <Grid container>
                                    <Grid item sm={12}>
                                        <div className="heading">
                                            <h2>What&apos;s Great About it?</h2>
                                        </div>
                                    </Grid>
                                </Grid>

                                <Grid container alignItems="flex-end">
                                    <Grid item lg={3} md={3} sm={6}>
                                        <div className="great-about-card aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                                            <div className="great-top-image">
                                                <img src={GreatBag} alt={GreatBag} />
                                            </div>
                                            <div className="great-about-text">
                                                <h3>A Pool of Experienced Agencies</h3>
                                                <p>Agencies with experienced resources to work on 200+ sophisticated upgraded technology to deliver advanced solutions.</p>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg={3} md={3} sm={6}>
                                        <div className="great-about-card aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">
                                            <div className="great-top-image">
                                                <img src={GreatLock} alt={GreatLock} />
                                            </div>
                                            <div className="great-about-text">
                                                <h3>Security</h3>
                                                <p>Verify software development agencies to ensure 100% data security.</p>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg={3} md={3} sm={6}>
                                        <div className="great-about-card great-about-third-card aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1800">
                                            <div className="great-top-image">
                                                <img src={GreatCopy} alt={GreatCopy} />
                                            </div>
                                            <div className="great-about-text">
                                                <h3>Supportive Policies</h3>
                                                <p>Ensure reliable hiring with our supportive policies. Our offered agencies have skilled resources that fulfill client’s needs.</p>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg={3} md={3} sm={6}>
                                        <div className="great-about-card aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2200">
                                            <div className="great-top-image">
                                                <img src={GreatTime} alt={GreatTime} />
                                            </div>
                                            <div className="great-about-text">
                                                <h3>Time-Zone Aligned</h3>
                                                <p>Hire software development agencies to manage projects as per your time zone.</p>
                                            </div>
                                        </div>
                                    </Grid>

                                </Grid>
                            </div>
                        </Container>
                    </div>
                </section>

                <section className="work-done-section">
                    <div className="work-done-inner">
                        <Container>
                            <Grid container>
                                <Grid item lg={6}>
                                    <div className="heading">
                                        <h2>It&apos;s Easy to Get <span> Work Done on SourceFirms </span></h2>
                                    </div>
                                </Grid>
                            </Grid>
                            <div className="register-wrapper">
                                <div className="bg-image1">
                                    <img src={WorkDoneBg1} alt={WorkDoneBg1} />
                                </div>
                                <Grid container spacing={8} alignItems="center" className="stepper-work">
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <div className="left-work-content">
                                            <div className="work-done-patter1 aos-init aos-animate" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1200">
                                                <img src={WorkDonePattern1} alt={WorkDonePattern1} />
                                            </div>
                                            <div className="work-done-patter2 aos-init aos-animate" data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1800">
                                                <img src={WorkDonePattern2} alt={WorkDonePattern2} />
                                            </div>
                                            <div className="left-work-image">
                                                <img src={WorkSign} alt={WorkSign} />
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <div className="right-work-content">
                                            <span>Step 1</span>
                                            <h3>Register Yourself!</h3>
                                            <p>Register yourself to B2B marketplace for software development needs.</p>
                                            <button className="btn btn-primary">Register Now</button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="register-wrapper">
                                <div className="bg-image1">
                                    <img src={WorkDoneBg2} alt={WorkDoneBg2} />
                                </div>
                                <Grid container spacing={8} alignItems="center">
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <div className="right-work-content">
                                            <span>Step 2</span>
                                            <h3>Connect with Agency</h3>
                                            <p>Get connected with agencies for staff or resource augmentation by evaluating their developers’ skills, expertise, and experience before hiring.</p>
                                        </div>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <div className="left-work-content">
                                            <div className="step2-patter1 aos-init aos-animate" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1200" >
                                                <img src={Step2Pattern1} alt={Step2Pattern1} />
                                            </div>
                                            <div className="step2-patter2 aos-init aos-animate" data-aos="flip-left" data-aos-easing="linear" data-aos-duration="1800">
                                                <img src={Step2Pattern2} alt={Step2Pattern2} />
                                            </div>
                                            <div className="left-work-image">
                                                <img src={Step2Image} alt={WorkSign} />
                                            </div>
                                        </div>
                                    </Grid>

                                </Grid>
                            </div>
                            <div className="register-wrapper">
                                <div className="bg-image1">
                                    <img src={WorkDoneBg1} alt={WorkDoneBg1} />
                                </div>
                                <Grid container spacing={8} alignItems="center" className="stepper-work">
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <div className="left-work-content">
                                            <div className="step3-patter1 aos-init aos-animate" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1200">
                                                <img src={Step3Pattern1} alt={Step3Pattern1} />
                                            </div>
                                            <div className="step3-patter2 aos-init aos-animate" data-aos="flip-left" data-aos-easing="linear" data-aos-duration="1800">
                                                <img src={Step3Pattern2} alt={Step3Pattern2} />
                                            </div>
                                            <div className="left-work-image">
                                                <img src={Step3Image} alt={WorkSign} />
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <div className="right-work-content">
                                            <span>Step 3</span>
                                            <h3>Get Work Done</h3>
                                            <p>Discuss the payment terms and give the green light to your hired software development agency</p>
                                        </div>
                                    </Grid>


                                </Grid>
                            </div>
                            <div className="register-wrapper">

                                <Grid container spacing={8} alignItems="center">
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <div className="right-work-content">
                                            <span>Step 4</span>
                                            <h3>Make Payment Securely</h3>
                                            <p>Choose one of the payment methods and make payment securely.</p>
                                        </div>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <div className="left-work-content">
                                            <div className="step4-patter1 aos-init aos-animate" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1200">
                                                <img src={Step4Pattern1} alt={Step4Pattern1} />
                                            </div>
                                            <div className="step4-patter2 aos-init aos-animate" data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1800">
                                                <img src={Step4Pattern2} alt={Step4Pattern2} />
                                            </div>
                                            <div className="step4-patter3 aos-init aos-animate" data-aos="flip-in" data-aos-easing="linear" data-aos-duration="1000">
                                                <img src={Step4Pattern3} alt={Step4Pattern3} />
                                            </div>
                                            <div className="left-work-image">
                                                <img src={Step4Image} alt={WorkSign} />
                                            </div>
                                        </div>
                                    </Grid>

                                </Grid>
                            </div>
                        </Container>
                    </div>
                </section>

                <section className="faq-question client-faq-question">
                    <div className="faq-section">
                        <div className="faq-inner">

                            <Container>
                                <Grid container>
                                    <Grid item sm={12}>
                                        <div className="heading">
                                            <h2>Frequently Asked <span> Questions </span></h2>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <div className="faq-accordian">
                                            <Accordion className="acordian-content" expanded={faqExpanded === 'panel30a-header'} onChange={handleChange('panel30a-header', 'FAQ')}>
                                                <AccordionSummary
                                                    expandIcon={<img src={AccordianIcon} />}
                                                    aria-controls="panel10a-content"
                                                    id="panel30a-header"
                                                    className="accordion-panel"
                                                >
                                                    <Typography variant="h2">What projects can I do on SourceFirms?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className="faq-accordion-body">
                                                    <Typography variant="body1">
                                                        At SourceFirms, you will find technical projects related to web development, mobile app development, software development, design, copywriting, creative creating, review writing, blog writing, and so on.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion className="acordian-content" expanded={faqExpanded === 'panel31a-header'} onChange={handleChange('panel31a-header', 'FAQ')}>
                                                <AccordionSummary
                                                    expandIcon={<img src={AccordianIcon} />}
                                                    aria-controls="panel11a-content"
                                                    id="panel31a-header"
                                                    className="accordion-panel"
                                                >
                                                    <Typography variant="h2">What is the experience of your software development agencies?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className="faq-accordion-body">
                                                    <Typography variant="body1">
                                                        SourceFirms platform goes to every possible length to maintain legacy and reliability on having authenticated users. So, you don&apos;t have to worry about the payment.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <div className="faq-accordian">
                                            <Accordion className="acordian-content" expanded={faqExpanded === 'panel32a-header'} onChange={handleChange('panel32a-header', 'FAQ')}>
                                                <AccordionSummary
                                                    expandIcon={<img src={AccordianIcon} />}
                                                    aria-controls="panel7a-content"
                                                    id="panel32a-header"
                                                    className="accordion-panel"
                                                >
                                                    <Typography variant="h2">Do you provide details of the software developers before hiring?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className="faq-accordion-body">
                                                    <Typography variant="body1">
                                                        Yes! SourceFirms enters into a talent agreement with every resource & client registered on its platform.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion className="acordian-content" expanded={faqExpanded === 'panel33a-header'} onChange={handleChange('panel33a-header', 'FAQ')}>
                                                <AccordionSummary
                                                    expandIcon={<img src={AccordianIcon} />}
                                                    aria-controls="panel8a-content"
                                                    id="panel33a-header"
                                                    className="accordion-panel"
                                                >
                                                    <Typography variant="h2">Is SourceFirms good for building a business?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className="faq-accordion-body">
                                                    <Typography variant="body1">
                                                        Payment terms will be mentioned in the employer’s job post and the same will be paid upon task completion.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion className="acordian-content" expanded={faqExpanded === 'panel34a-header'} onChange={handleChange('panel34a-header', 'FAQ')}>
                                                <AccordionSummary
                                                    expandIcon={<img src={AccordianIcon} />}
                                                    aria-controls="panel9a-content"
                                                    id="panel34a-header"
                                                    className="accordion-panel"
                                                >
                                                    <Typography variant="h2">How Do You Approve Software Development Agencies?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className="faq-accordion-body">
                                                    <Typography variant="body1">
                                                        No! As of now, we don’t charge anything from resources. Even registration is completely FREE! However, SourceFirms will only charge for job posting to the clients.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default ClientWork;