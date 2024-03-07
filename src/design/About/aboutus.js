import * as React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "assets/css/aboutus.css";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CustomBreadcrumbs from 'components/CustomBreadcrumbs/CustomBreadcrumbs';
import Footer from 'components/Footer/Footer';
import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
import Link from "@mui/material/Link";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import sf from '../../../src/assets/img/sf.svg';
import MissionImage from 'assets/img/about-mission-img.png';
import visionImage from 'assets/img/about-vision-img.png';
import FutureIcon1 from 'assets/img/icons/future-icon1.svg';
import FutureIcon2 from 'assets/img/icons/future-icon2.svg';
import FutureIcon3 from 'assets/img/icons/future-icon3.svg';
import FutureIcon4 from 'assets/img/icons/future-icon4.svg';
import FutureIcon5 from 'assets/img/icons/future-icon5.svg';
import SliderImage1 from 'assets/img/about-slider-image1.png';
import SliderImage2 from 'assets/img/about-slider-image2.png';
import SliderImage3 from 'assets/img/about-slider-image3.png';
import SliderRightImg from 'assets/img/right-slider-img.png';
import Facebook from 'assets/img/icons/about-facebook-icon.svg';
import Instagram from 'assets/img/icons/about-insragram-icon.svg';
import LinkedIn from 'assets/img/icons/about-linkedin-icon.svg';
import Twitter from 'assets/img/icons/about-twitter-icon.svg';
import Slider from 'react-slick';

function AboutUs() {

    const breadCrumbs = [{ name: 'home', path: '/home' }];

    // const [ setValue] = React.useState('1');

    // const handleChange = (event, newValue ) => {
    //     setValue(newValue);
    // };

    const setting3 = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        swipe: true,
        // speed: 5000,
        arrows: true,
        pauseOnHover: true,
        // asNavFor: '.slider-nav',
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    
                },
            },
        ],
    };
    

    return (
        <div>
            <div className='privacy-policy'>
                <section className="privacy-policy-section">
                    <div className='privacy-policy-inner'>
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
                                    About Us
                                </Typography>
                            </Grid>
                        </Container>
                    </div>
                </section>
                <section className='aboutus-section'>
                    <div className='aboutus-inner'>
                                    <Box sx={{ width: '100%', typography: 'body1' }}>
                                        {/* <TabContext value={value} > */}
                                            <div className="tabing-box-content">
                                                <div className="about-wrapper">
                                            <Container>
                                            <List className="tab-listing-content">
                                                <ListItem className="active"><Link href="#about_top_section">SourceFirms is founded!</Link></ListItem>
                                                <ListItem><Link href="#about_bottom_section">Revolutionizing Your Business’s Future</Link></ListItem>
                                                <ListItem><Link href="#about_source_section">Leading Heads of SourceFirms</Link></ListItem>
                                            </List>
                                            </Container>
                                            </div>
                                            </div>
                                            <div className="about-content">
                                           
                                                <div id="about_top_section">
                                                <Container>
                                                    <Grid container spacing={3}>
                                                    <Grid item md={12}>
                                                            <Typography variant='h4'>SourceFirms is founded! </Typography>
                                                        </Grid>
                                                        <Grid item md={4}>
                                                            <Typography variant='body1'>TRooTech Group is seeing bigger dreams, and bigger ambitions with their next venture that targets bigger problems and upsurges bigger opportunities.</Typography>
                                                            <Typography variant='body1'>Yes, after the success of TRooTech, an enterprise software development company offering re-engineering of business to enterprise solutions from scratch. These folks come with a new venture, called SOURCEFIRMS.</Typography>
                                                        </Grid>
                                                        <Grid item md={4}>
                                                        <Typography variant='body1'>SOURCEFIRMS helps businesses acquire technology talents from businesses. We know what it&apos;s like to find better resources or to build successful enterprises.</Typography>
                                                            <Typography variant='body1'>After being successful development partners for many enterprises, we wanted to become collaborators and coaches of entrepreneurs looking for development partners. So, come work with us, and we’ll work for you to provide solutions that focus on the future.</Typography>
                                                        </Grid>
                                                        <Grid item md={4}>
                                                            <div className='sf-image'>

                                                                <img src={sf} />

                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                    </Container>
                                                
                                                
                                                <div className="about-middle-content">
                                                    <Container>
                                                        <div className="about-mission">
                                                        <Grid container spacing={3}>
                                                            <Grid item lg={6} md={6} sm={6}>
                                                                <div className="about-mission-content">
                                                                    <div className="about-mission-img">
                                                                      <img src={MissionImage} alt="" />
                                                                      
                                                                    <div className="about-mission-text">
                                                                        <Typography variant="h3">Our Mission</Typography>
                                                                        <Typography variant="body1">To be trusted collaborators for enterprises and talents with an unparalleled combination of business acumen and technology expertise that focuses on their winnings.</Typography>
                                                                    </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </Grid>
                                                            <Grid item lg={6} md={6} sm={6}>
                                                                <div className="about-mission-content">
                                                                    <div className="about-mission-img">
                                                                      <img src={visionImage} alt="" />
                                                                      
                                                                    <div className="about-mission-text">
                                                                        <Typography variant="h3">Our Vision</Typography>
                                                                        <Typography variant="body1">To reimagine resource augmentation marketplace for freelancers and enterprises and bridge a gap that has existed in the global market among them for software development needs.</Typography>
                                                                    </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </Grid>
                                                            </Grid>
                                                        </div>
                                                        </Container>
                                                </div>
                                                </div>
                                                <div className="about-bottom-content" id="about_bottom_section">
                                                    <div className="future-content">
                                                        <Container>
                                                        <Grid container>
                                                            <Grid item lg={6} md={10}>
                                                                <div className="heading">
                                                                    <Typography variant="h4">
                                                                    Revolutionizing Your Business’s Future with SourceFirms…Thinking Why?
                                                                    </Typography>
                                                                </div>
                                                            </Grid>
                                                        </Grid> 
                                                        <Grid container>
                                                            <Grid item lg={4} md={4} sm={4} xs={12} >
                                                                <div className="future-card">
                                                                    <div className="future-icon">
                                                                        <img src={FutureIcon1} alt="" />
                                                                    </div>
                                                                    <div className="future-text">
                                                                        <Typography variant="h4">Global Presence</Typography>
                                                                        <Typography variant="body1">Let enterprises connect with global agency talents!!</Typography>
                                                                    </div>
                                                                </div>
                                                                </Grid>
                                                                <Grid item lg={4} md={4} sm={4} xs={12}>
                                                                <div className="future-card future-card1">
                                                                    <div className="future-icon">
                                                                        <img src={FutureIcon2} alt="" />
                                                                    </div>
                                                                    <div className="future-text">
                                                                        <Typography variant="h4">Trusted Enterprises & Resources</Typography>
                                                                        <Typography variant="body1">Connect with verified users to hire or get hired. </Typography>
                                                                    </div>
                                                                </div>
                                                            </Grid>
                                                            <Grid item lg={4} md={4} sm={4} xs={12}>
                                                                <div className="future-card future-card2">
                                                                    <div className="future-icon">
                                                                        <img src={FutureIcon3} alt="" />
                                                                    </div>
                                                                    <div className="future-text">
                                                                        <Typography variant="h4">Assured Payment</Typography>
                                                                        <Typography variant="body1">Get paid through us or directly from clients, flexibility is our top priority</Typography>
                                                                    </div>
                                                                </div>
                                                                </Grid>
                                                                <Grid item lg={4} md={4} sm={4} xs={12}>
                                                                <div className="future-card future-card3">
                                                                    <div className="future-icon">
                                                                        <img src={FutureIcon4} alt="" />
                                                                    </div>
                                                                    <div className="future-text">
                                                                        <Typography variant="h4">More Versatile</Typography>
                                                                        <Typography variant="body1">Small yet arguably more qualified vetting process</Typography>
                                                                    </div>
                                                                </div>
                                                                </Grid>
                                                                <Grid item lg={4} md={4} sm={4} xs={12}>
                                                                <div className="future-card future-card3">
                                                                    <div className="future-icon">
                                                                        <img src={FutureIcon5} alt="" />
                                                                    </div>
                                                                    <div className="future-text">
                                                                        <Typography variant="h4">Ease of Use</Typography>
                                                                        <Typography variant="body1">Signup, connect and chat, hire. Difference is the platform that enables all at one place.</Typography>
                                                                    </div>
                                                                </div>
                                                                </Grid>
                                                                <Grid item lg={4} md={4} sm={4} xs={12}>
                                                                <div className="future-card future-card4">
                                                                    <div className="future-icon">
                                                                        <img src={FutureIcon2} alt="" />
                                                                    </div>
                                                                    <div className="future-text">
                                                                        <Typography variant="h4">24/7 Support</Typography>
                                                                        <Typography variant="body1">Get answered via FAQs and extensive knowledge bases, or even chat. </Typography>
                                                                    </div>
                                                                </div>
                                                                </Grid>
                                                        </Grid>
                                                        </Container>                                                  
                                                         </div>
                                                </div>
                                                <div className="source-content" id="about_source_section">
                                                    <Container>
                                                        <Grid container>
                                                            <Grid item lg={6} md={6}>
                                                                <div className="heading">
                                                                    <Typography variant="h4">Leading Heads of SourceFirms</Typography>
                                                                    <Typography variant="body1">SourceFirms was bootstrapped by the experts, who work hard to deliver the best experience to YOU!!</Typography>
                                                                </div>
                                                            </Grid>
                                                        </Grid>
                                                        <div className="about-slider-wrapper">
                                                        <Grid container className="about-slider-align" spacing={2}>
                                                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                                                <Slider  {...setting3} className="main-slider">
                                                                   
                                                                    <div className="source-slider">
                                                                        
                                                                        <div className="slider-img">
                                                                           <img src={SliderImage1} alt="" />
                                                                        </div>
                                                                        <div className="slider-text">
                                                                            <Typography variant="h5">Nikhil Jani</Typography>
                                                                            <Typography variant="body1">Designation</Typography>
                                                                        </div>
                                                                    </div>
                                                                    <div className="source-slider">
                                                                        
                                                                        <div className="slider-img">
                                                                           <img src={SliderImage2} alt="" />
                                                                        </div>
                                                                        <div className="slider-text">
                                                                            <Typography variant="h5">Alpa Patel</Typography>
                                                                            <Typography variant="body1">Designation </Typography>
                                                                        </div>
                                                                    </div>
                                                                    <div className="source-slider">
                                                                        
                                                                        <div className="slider-img">
                                                                           <img src={SliderImage3} alt="" />
                                                                        </div>
                                                                        <div className="slider-text">
                                                                            <Typography variant="h5">Priyank Dobariya</Typography>
                                                                            <Typography variant="body1">Designation </Typography>
                                                                        </div>
                                                                    </div>
                                                                    <div className="source-slider">
                                                                        
                                                                        <div className="slider-img">
                                                                           <img src={SliderImage3} alt="" />
                                                                        </div>
                                                                        <div className="slider-text">
                                                                            <Typography variant="h5">Niraj Jagwani</Typography>
                                                                            <Typography variant="body1">CEO</Typography>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </Slider>
                                                                
                                                            </Grid>
                                                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                                            
                                                              <div className="right-slider">
                                                                <div className="main-profile-content">
                                                                    <div className="slider-text">
                                                                                <Typography variant="h5">Niraj Jagwani</Typography>
                                                                                <Typography variant="body1">CEO</Typography>
                                                                                <List>
                                                                                    <ListItem><Link href="#"><img src={Facebook} alt="" /></Link></ListItem>
                                                                                    <ListItem><Link href="#"><img src={Twitter} alt="" /></Link></ListItem>
                                                                                    <ListItem><Link href="#"><img src={LinkedIn} alt="" /></Link></ListItem>
                                                                                    <ListItem><Link href="#"><img src={Instagram} alt="" /></Link></ListItem>
                                                                                </List>
                                                                    </div>
                                                                    <div className="right-slider-img">
                                                                    <img src={SliderRightImg} alt="" />
                                                                    </div>
                                                                </div>
                                                                {/* <div className="main-profile-content">
                                                                    <div className="slider-text">
                                                                                <Typography variant="h5">Niraj Jagwani</Typography>
                                                                                <Typography variant="body1">CEO</Typography>
                                                                                <List>
                                                                                    <ListItem><Link href="#"><img src={Facebook} alt="" /></Link></ListItem>
                                                                                    <ListItem><Link href="#"><img src={Twitter} alt="" /></Link></ListItem>
                                                                                    <ListItem><Link href="#"><img src={LinkedIn} alt="" /></Link></ListItem>
                                                                                    <ListItem><Link href="#"><img src={Instagram} alt="" /></Link></ListItem>
                                                                                </List>
                                                                    </div>
                                                                    <div className="right-slider-img">
                                                                    <img src={SliderRightImg} alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="main-profile-content">
                                                                    <div className="slider-text">
                                                                                <Typography variant="h5">Niraj Jagwani</Typography>
                                                                                <Typography variant="body1">CEO</Typography>
                                                                                <List>
                                                                                    <ListItem><Link href="#"><img src={Facebook} alt="" /></Link></ListItem>
                                                                                    <ListItem><Link href="#"><img src={Twitter} alt="" /></Link></ListItem>
                                                                                    <ListItem><Link href="#"><img src={LinkedIn} alt="" /></Link></ListItem>
                                                                                    <ListItem><Link href="#"><img src={Instagram} alt="" /></Link></ListItem>
                                                                                </List>
                                                                    </div>
                                                                    <div className="right-slider-img">
                                                                    <img src={SliderRightImg} alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="main-profile-content">
                                                                    <div className="slider-text">
                                                                                <Typography variant="h5">Niraj Jagwani</Typography>
                                                                                <Typography variant="body1">CEO</Typography>
                                                                                <List>
                                                                                    <ListItem><Link href="#"><img src={Facebook} alt="" /></Link></ListItem>
                                                                                    <ListItem><Link href="#"><img src={Twitter} alt="" /></Link></ListItem>
                                                                                    <ListItem><Link href="#"><img src={LinkedIn} alt="" /></Link></ListItem>
                                                                                    <ListItem><Link href="#"><img src={Instagram} alt="" /></Link></ListItem>
                                                                                </List>
                                                                    </div>
                                                                    <div className="right-slider-img">
                                                                    <img src={SliderRightImg} alt="" />
                                                                    </div>
                                                                </div> */}

                                                              </div>
                                                            </Grid>
                                                        </Grid>
                                                        </div>
                                                    </Container>
                                                </div>
                                            {/* </TabPanel> */}
                                            
                                            </div>
                                        {/* </TabContext> */}
                                    </Box>
                               
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}


export default AboutUs;