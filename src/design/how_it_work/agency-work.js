import   React, { useEffect } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "assets/css/client-work.css";
import "assets/css/agency-work.css";
import AgencyPattern1 from 'assets/img/agency-pattern1.png';
import AgencyPattern2 from 'assets/img/agency-pattern2.png';
import AgencyPattern3 from 'assets/img/agency-pattern3.png';
import AgencyPattern4 from 'assets/img/agency-pattern4.png';
import AgencyPattern5 from 'assets/img/agency-pattern5.png';
import AgencyPattern6 from 'assets/img/agency-pattern6.png';
import AgencyPattern7 from 'assets/img/agency-pattern7.png';
import AgencyPattern8 from 'assets/img/agency-pattern8.png';
import AgencyPattern9 from 'assets/img/agency-pattern9.png';
import AgencyPattern10 from 'assets/img/agency-pattern10.png';
import AccountCardIcon1 from 'assets/img/account-card-icon1.png';
import AccountCardIcon2 from 'assets/img/account-card-icon2.png';
import AccountCardIcon3 from 'assets/img/account-card-icon3.png';
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import AccordianUpIcon from 'assets/img/accordian-up-icon.png';
import Typography from '@mui/material/Typography';
import WordIcon from 'assets/img/word-icon.png';
import RegisterIcon from 'assets/img/register-icon.png';
import ExploreIcon from 'assets/img/explore-icon.png';
import AgencyLeftImage from 'assets/img/agency-left-image.png';
import AgencyAboutBg1 from 'assets/img/agency-about-bg1.png';
import AgencyAboutBg2 from 'assets/img/agency-about-bg2.png';
import EarnImage1 from 'assets/img/earn-box-image1.png';
import EarnImage2 from 'assets/img/earn-box-image2.png';
import PaindRightImage from 'assets/img/paid-right-image.png';
import PaindPattern1 from 'assets/img/paid-right-pattern1.png';
import PaindPattern2 from 'assets/img/paid-right-pattern2.png';
import PaindPattern3 from 'assets/img/paid-right-pattern3.png';
import PaindPattern4 from 'assets/img/paid-right-pattern4.png';
import AccordianIcon from 'assets/img/accordion-icon.png'
import AOS from "aos";
import "aos/dist/aos.css";
import "assets/css/custom-animation.css";



function AgencyWork() {

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
        <div className="agency-main-section">
            
            <section className="agency-banner-section">
                <div className="agency-banner-inner">
                    <Container>
                        
                            <Grid container justifyContent={'center'}>
                                <Grid item lg={6} md={8} sm={12}>
                                    <div className="heading">
                                        <h2> Work With <span>  the <br /> Top Global Clients </span></h2>
                                        <p>Online destination to find a better way to work – Remotely and flexibly.</p>
                                        <button className="btn btn-primary">Get Started Now!</button>
                                    </div>
                                </Grid>
                            </Grid>
                            <div className="agency-banner-wrapper">
                            <div className="agency-pattern1 zoomIn">
                                 <img src={AgencyPattern1} alt={AgencyPattern1} />
                            </div>
                            <div className="agency-pattern2 zoomIn">
                                 <img src={AgencyPattern2} alt={AgencyPattern2} />
                            </div>
                            <div className="agency-pattern3 zoomIn">
                                 <img src={AgencyPattern3} alt={AgencyPattern3} />
                            </div>
                            <div className="agency-pattern4 zoomIn">
                                 <img src={AgencyPattern4} alt={AgencyPattern4} />
                            </div>
                            <div className="agency-pattern5 zoomIn">
                                 <img src={AgencyPattern5} alt={AgencyPattern5} />
                            </div>
                            <div className="agency-pattern6 zoomIn">
                                 <img src={AgencyPattern6} alt={AgencyPattern6} />
                            </div>
                            <div className="agency-pattern7 zoomIn">
                                 <img src={AgencyPattern7} alt={AgencyPattern7} />
                            </div>
                            <div className="agency-pattern8 zoomIn">
                                 <img src={AgencyPattern8} alt={AgencyPattern8} />
                            </div>
                            <div className="agency-pattern9 zoomIn">
                                 <img src={AgencyPattern9} alt={AgencyPattern9} />
                            </div>
                            <div className="agency-pattern10 zoomIn">
                                 <img src={AgencyPattern10} alt={AgencyPattern10} />
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <section className="account-section">
                <div className="account-inner">
                    <Container>
                        <Grid container>
                            <Grid item lg={6} md={12} sm={12}>
                                <div className="heading">
                                     <h2>One Account, Million Jobs</h2>
                                     <p>How does it work?</p>
                                </div>
                            </Grid>
                        </Grid>
                        <div className="account-wrapper">
                            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                                <Grid item lg={4} md={4} sm={4} xs={12}>
                                    <div className="account-card aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="100">
                                        <div className="account-card-image">
                                        <img src={AccountCardIcon1} alt={AccountCardIcon1} />
                                        </div>
                                        <div className="account-card-text">
                                            <h3>Registration (The first and Important step) </h3>
                                            <p>Experienced software development agencies are a click away! Register yourself with all the details precisely on the world’s first and fast resource augmentation marketplace to connect with the best software development agencies!</p>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={4} md={4} sm={4} xs={12}>
                                    <div className="account-card aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="300">
                                        <div className="account-card-image">
                                        <img src={AccountCardIcon2} alt={AccountCardIcon2} />
                                        </div>
                                        <div className="account-card-text">
                                            <h3>Many more <br /> ways to earn</h3>
                                            <p>Quickest Hiring of Experienced Applicants - Register to connect with a larger pre-vetted resource pool and get your project done at a committed time-frame.</p>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={4} md={4} sm={4} xs={12}>
                                    <div className="account-card aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="600">
                                        <div className="account-card-image">
                                        <img src={AccountCardIcon3} alt={AccountCardIcon3} />
                                        </div>
                                        <div className="account-card-text">
                                            <h3>Get paid with flexible payment terms.</h3>
                                            <p>With SourceFirms, you can easily connect with the right software development agency, explore their developers’ profiles, and chat to discuss the projects.</p>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </section>

            <section className="agency-explore-section explore-section">
                <div className="explore-inner">
                    <Container>
                        <div className="explore-wrapper">
                            <Grid container>
                                <Grid item lg={6} md={6} sm={12}>   
                                    <div className="agency-left-content">
                                        <div className="agency-left-pattern1 aos-init aos-animate" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" >
                                            <img src={AgencyAboutBg1} alt={AgencyAboutBg1} />
                                        </div>
                                        <div className="agency-left-pattern2 aos-init aos-animate" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                            <img src={AgencyAboutBg2} alt={AgencyAboutBg2} />
                                        </div>
                                        <div className="agency-left-pattern3">
                                        </div>
                                        <div className="agency-left-pattern4">
                                        </div>
                                        <div className="agency-left-image">
                                            <img src={AgencyLeftImage} alt={AgencyLeftImage} />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item lg={6} md={6} pl={3} sm={12}>
                                    <div className="explore-right-content">
                                        <div className="heading">
                                            <h2>What&apos;s Great  <span>About it?</span> </h2>
                                        </div>
                                        <div className="main-explore-accordion">
                                            <Accordion className="explore-accordion-content" expanded={expanded === 'panel1a-header'} onChange={handleChange('panel1a-header')}>
                                            <AccordionSummary
                                            expandIcon={<img src={AccordianUpIcon} />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            className="accordion-panel"
                                            >
                                            <img src={WordIcon} className="explore-acordion-icon"/>
                                            <Typography variant="h2">Improved Skills</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails className="explore-accordion-body">
                                            <Typography variant="body1">
                                            SourceFirms has by far the largest pool of global clients with a wider variety of project types - find yourself learning new things as you go.
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
                                                <img src={RegisterIcon} className="explore-acordion-icon"/>
                                                <Typography variant="h2">Self-management</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className="explore-accordion-body">
                                                <Typography variant="body1">
                                                Be your own boss – choose your project, working hours, and other aspects of managing the project efficiently.
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
                                                <img src={ExploreIcon} className="explore-acordion-icon"/>
                                                <Typography variant="h2">No unpaid Overtime</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails className="explore-accordion-body">
                                                <Typography variant="body1">
                                                If you are working, it means you are earning. Get paid for work, even for your overtime. 
                                                </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                        
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </section>

            <section className="earn-section">
                <div className="earn-inner">
                    <Container>
                        <Grid container>
                            <Grid item lg={12} sm={12}>
                                <div className="heading">
                                    <h2>Explore More, Earn More <span> - But, How? </span> </h2>
                                </div>
                            </Grid>
                        </Grid>

                        <div className="earn-box">
                        <Grid container>
                            <Grid item lg={6} sm={6}>
                                <div className="earn-card">
                                    <div className="earn-card-text">
                                        <h4>Explore Endless Opportunities</h4>
                                        <p>Create an account, add developer’s details precisely, and find out the opportunities relevant to expertise mentioned. You have got the chance to work on jobs/projects on an hourly or fixed-price basis. Share a unique approach with us so we will find the next opportunity for you by 10x faster.</p>
                                    <button className="btn btn-secondary">Explore Opportunities</button>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item lg={6} sm={6}>
                                <div className="earn-card">
                                    <div className="earn-card-image">
                                        <img src={EarnImage1} alt={EarnImage1} />
                                    </div>
                                </div>
                            </Grid>
                            </Grid>
                            <Grid container className="box-earn-wrapper">
                            <Grid item lg={6} sm={6}>
                                <div className="earn-card">
                                    <div className="earn-card-image">
                                        <img src={EarnImage2} alt={EarnImage2} />
                                    </div>
                                </div>
                            </Grid>
                            <Grid item lg={6} sm={6}>
                                <div className="earn-card fourth-earn-card">
                                    <div className="earn-card-text">
                                        <h4>Let Your Skills Bring Opportunities for You</h4>
                                        <p>Are your developers skilled enough? Are your developers’ skills in demand? Are you ready to work on any project&apos;s size? Let our team assess your resources’ experience and offer an opportunity to work with large, multi-stage projects.</p>
                                    <button className="btn btn-secondary">Register Now</button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        </div>
                    </Container>
                </div>
            </section>

            <section className="paid-section">
                <div className="paid-inner">
                    
                    <Container>
                        <div className="paid-box">
                            <Grid container>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <div className="paid-left-content">
                                        <h2>How Do You <span> Get Paid? </span></h2>
                                        <ul>
                                            <li>100% assured payment</li>
                                            <li>Choose the best ways to get paid – Wire Transfer, Direct Deposit, PayPal, and more</li>
                                        </ul>
                                        <p>Learn more about our <a href=""> Payment terms </a></p>
                                    </div>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <div className="paid-right-content">
                                        <div className="paid-pattern1 aos-init aos-animate" data-aos="fade-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                            <img src={PaindPattern1} alt={PaindPattern1} />
                                        </div>
                                        <div className="paid-pattern2 aos-init aos-animate" data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                        <img src={PaindPattern2} alt={PaindPattern2} />
                                        </div>
                                        <div className="paid-pattern3 aos-init aos-animate" data-aos="flip-up"  data-aos-duration="2000">
                                        <img src={PaindPattern3} alt={PaindPattern3} />
                                        </div>
                                        <div className="paid-pattern4 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1400">
                                        <img src={PaindPattern4} alt={PaindPattern4} />
                                        </div>
                                        
                                        <div className="paid-right-image">
                                            <img src={PaindRightImage} alt={PaindRightImage} />
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
                                            <Typography variant="h2">Is SourceFirms free to join as a software development agency?</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails className="faq-accordion-body">
                                            <Typography variant="body1">
                                            Yes! It’s completely free to join, find work, and find new projects as an agency on our platform. We do not charge any fee while registration or connecting with clients for projects.
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
                                            <Typography variant="h2">As a software development agency, Can I grow my business with SourceFirms?</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails className="faq-accordion-body">
                                            <Typography variant="body1">
                                            Absolutely! Many successful businesses had bright careers with strong backgrounds and employment records on SourceFirms. Our platform supports agencies who are new to the freelancing field to build strong backgrounds. We support every agency for building a successful career in the software development field.
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
                                            <Typography variant="h2">How does SourceFirms benefit me as a software development agency?</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails className="faq-accordion-body">
                                            <Typography variant="body1">
                                            Many software development agencies prefer to work through the B2B marketplace because of the freedom and flexibility. Moreover, by working through the B2B marketplace, agencies can get a chance to work with great clients/brands from around the globe. SourceFirms is the world&apos;s first and fast resource augmentation marketplace which provides enough opportunity to talents along with the support they need for success.
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
                                            <Typography variant="h2">What types of projects can I find on SourceFirms?</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails className="faq-accordion-body">
                                            <Typography variant="body1">
                                            Brands and companies across the globe are looking for professionals with the desired skill sets to complete their jobs. In the SourceFirms platform, you can easily find jobs that match your skill set in your desired field. You can find all kinds of work from fixed prices to hourly rate contracts on the SourceFirms platform.
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

export default AgencyWork;