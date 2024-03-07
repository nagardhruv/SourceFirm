import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from "@mui/material/Link";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import "assets/css/new-home.css";
import Bannerprofile from "assets/img/banner-img.png";
import Button from '@mui/material/Button';
import Slider from 'react-slick';
import Developimg1 from 'assets/img/develop-img1.png';
import Developimg2 from 'assets/img/develop-img2.png';
import Developimg3 from 'assets/img/develop-img3.png';
import Developimg4 from 'assets/img/develop-img4.png';
import JobPost1 from 'assets/img/icons/post-list1.svg';
import JobPost2 from 'assets/img/icons/post-list2.svg';
import JobPost3 from 'assets/img/icons/post-list3.svg';
import ClientImg from 'assets/img/client-img.png';
import Profile1 from 'assets/img/icons/profile1.svg';
import Profile2 from 'assets/img/icons/profile2.svg';
import Profile3 from 'assets/img/icons/profile3.svg';
import Profile4 from 'assets/img/icons/profile4.svg';
import Profile5 from 'assets/img/icons/profile5.svg';
import DevelopImg from 'assets/img/develop-image.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { Typography } from '@mui/material';
import TrophyImg from 'assets/img/trophy-img.png';
import history from 'utils/history';
import { isLogIn } from 'utils/Auth';
import { useSelector } from 'react-redux';
import { USER_TYPES } from 'utils/constant';

function Homepage() {

    const setting1 = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        swipe: false,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        pauseOnHover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                },
            },
        ],
    };

    const setting2 = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        swipe: false,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        rtl: true,
        pauseOnHover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                },
            },
        ],
    };

    const setting3 = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        swipe: false,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        pauseOnHover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                },
            },
        ],
    };

    const userDetails = useSelector((state) => state.authReducer.userDetails);

    const handleRedirection = () => {
        if (isLogIn()) {
            if (userDetails?.user_type === USER_TYPES.CLIENT) {
                history.push('/my-profile')
            } else {
                history.push('/manage-developers')
            }
        } else {
            history.push('/signup')
        }
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <div className='new-home-page'>
                <section className="banner-section">
                    <div className="banner-inner">
                        <div className="banner-bg-section">
                            <div className="banner-bg">
                                <Container>
                                    <Grid container className=''>
                                        <Grid item lg={6} md={6} sm={6} xs={12} className="banner-colum">
                                            <div className="banner-image">
                                                <img src={Bannerprofile} alt='img' />
                                            </div>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={6} xs={12} className="banner-text-colum">
                                            <div className="banner-content">
                                                <h1>World&apos;s 1st and fully automated staff augmentation marketplace!
                                                    <span>Hire remote software developers and work with top-level agencies across the globe. Get their experienced and talented software development resources on-demand and for long-term contracts. </span></h1>
                                                {/* <button className="btn btn-primary">Create Job Post</button> */}
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </div>
                        </div>
                        <div className="banner-client">
                            <Container>
                                <Grid container>
                                    <Grid item lg={3} md={4} sm={3} xs={12}>
                                        <ul className="profetion-list">
                                            <li>
                                                <div className='list-icon'>
                                                    <img src={JobPost1} alt="" />
                                                </div>
                                                <h4>Post job</h4>
                                            </li>
                                        </ul>
                                    </Grid>
                                    <Grid item lg={5} md={4} sm={5} xs={12}>
                                        <ul className="profetion-list">
                                            <li>
                                                <div className='list-icon'>
                                                    <img src={JobPost2} alt="" />
                                                </div>
                                                <h4>Connect with software development agencies</h4>
                                            </li>
                                        </ul>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={4} xs={12}>
                                        <ul className="profetion-list profetion-list-content">
                                            <li>
                                                <div className='list-icon'>
                                                    <img src={JobPost3} alt="" />
                                                </div>
                                                <h4>Hire their resource</h4>
                                            </li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </div>
                </section>

                <section className='platform-section'>
                    <div className='platform-inner'>
                        <Container>
                            <Grid container justifyContent='center'>
                                <Grid item lg={8} md={10} sm={12}>
                                    <div className="heading">
                                        <h2>Find every<span> tech stack </span> covered</h2>
                                        <p>From common technologies to even the rarest of them, we have world-class agency resources covering every tech stack.</p>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                        <div className='home-slider-content'>
                            <Container>
                                <Slider  {...setting1} className="platform-slider ">
                                    <div className='platform-box'>
                                        <div className='platform-header'>
                                            <img src={Developimg1} alt='Developimg1' />
                                        </div>
                                        <div className='platform-body'>
                                            <h5>Salesforce Developers</h5>
                                        </div>
                                    </div>
                                    <div className='platform-box'>
                                        <div className='platform-header platform-header2'>
                                            <img src={Developimg2} alt='Developimg2' />
                                        </div>
                                        <div className='platform-body'>
                                            <h5>Golang Engineers</h5>
                                        </div>
                                    </div>
                                    <div className='platform-box'>
                                        <div className='platform-header platform-header3'>
                                            <img src={Developimg3} alt='Developimg3' />
                                        </div>
                                        <div className='platform-body'>
                                            <h5>AWS Developers</h5>
                                        </div>
                                    </div>
                                    <div className='platform-box'>
                                        <div className='platform-header platform-header4'>
                                            <img src={Developimg4} alt='Developimg4' />
                                        </div>
                                        <div className='platform-body'>
                                            <h5>Azure Developers</h5>
                                        </div>
                                    </div>
                                    <div className='platform-box'>
                                        <div className='platform-header platform-header2'>
                                            <img src={Developimg2} alt='Developimg2' />
                                        </div>
                                        <div className='platform-body'>
                                            <h5>.Net Developers</h5>
                                        </div>
                                    </div>
                                </Slider>

                                <Slider  {...setting2} className="platform-slider ">
                                    <div className='platform-box'>
                                        <div className='platform-header platform-header4'>
                                            <img src={Developimg4} alt='Developimg4' />
                                        </div>
                                        <div className='platform-body'>
                                            <h5>Kubernetes Experts</h5>
                                        </div>
                                    </div>
                                    <div className='platform-box'>
                                        <div className='platform-header platform-header3'>
                                            <img src={Developimg3} alt='Developimg3' />
                                        </div>
                                        <div className='platform-body'>
                                            <h5>Tableu Developers</h5>
                                        </div>
                                    </div>
                                    <div className='platform-box'>
                                        <div className='platform-header platform-header2'>
                                            <img src={Developimg2} alt='Developimg2' />
                                        </div>
                                        <div className='platform-body'>
                                            <h5>Ruby on Rails Developers</h5>
                                        </div>
                                    </div>
                                    <div className='platform-box'>
                                        <div className='platform-header platform-header'>
                                            <img src={Developimg1} alt='Developimg1' />
                                        </div>
                                        <div className='platform-body'>
                                            <h5>Django Developers</h5>
                                        </div>
                                    </div>
                                    <div className='platform-box'>
                                        <div className='platform-header platform-header3'>
                                            <img src={Developimg3} alt='Developimg3' />
                                        </div>
                                        <div className='platform-body'>
                                            <h5>NodeJS Developers</h5>
                                        </div>
                                    </div>
                                </Slider>

                                <Slider  {...setting3} className="platform-slider ">
                                    <div className='platform-box'>
                                        <div className='platform-header platform-header2'>
                                            <img src={Developimg2} alt='Developimg2' />
                                        </div>
                                        <div className='platform-body'>
                                            <h5>AI ML Engineers</h5>
                                        </div>
                                    </div>
                                    <div className='platform-box'>
                                        <div className='platform-header platform-header3'>
                                            <img src={Developimg3} alt='Developimg3' />
                                        </div>
                                        <div className='platform-body'>
                                            <h5>Data Scientists</h5>
                                        </div>
                                    </div>
                                    <div className='platform-box'>
                                        <div className='platform-header platform-header4'>
                                            <img src={Developimg4} alt='Developimg4' />
                                        </div>
                                        <div className='platform-body'>
                                            <h5>Angular Developers</h5>
                                        </div>
                                    </div>
                                    <div className='platform-box'>
                                        <div className='platform-header'>
                                            <img src={Developimg1} alt='Developimg1' />
                                        </div>
                                        <div className='platform-body'>
                                            <h5>Springboot Developers</h5>
                                        </div>
                                    </div>
                                    <div className='platform-box'>
                                        <div className='platform-header platform-header3'>
                                            <img src={Developimg3} alt='Developimg3' />
                                        </div>
                                        <div className='platform-body'>
                                            <h5>React Developers</h5>
                                        </div>
                                    </div>
                                </Slider>

                            </Container>
                        </div>
                    </div>
                </section>

                <section className='client-section'>
                    <div className='client-inner'>
                        <Container>
                            <Grid container spacing={5}>
                                <Grid item lg={6} md={6} sm={6}>
                                    <div className='client-left-image'>
                                        <img src={ClientImg} alt="client-imgage" />
                                        <div className='agency-trophy' data-aos="fade-right" data-aos-easing="linear"
                                            data-aos-duration="1200">
                                            <Typography variant='h3'>Here&apos;re all agency-disciplined on-demand software developers for you at one source.</Typography>
                                            <img src={TrophyImg} alt="" />
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item lg={6} md={6} sm={6}>
                                    <div className="heading">
                                        <h2>Dear clients</h2>
                                    </div>
                                    <div className='client-right-content'>
                                        <Grid container spacing={2}>
                                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                                <div className='client-box'>
                                                    <div className='client-profile'>
                                                        <img src={Profile1} alt="" />
                                                    </div>
                                                    <div className='client-text'>
                                                        <p>No scarcity and no crunch ever because multiple agencies are working here as the world&apos;s first B2B community of software development agencies to provide you with great developers on-demand.
                                                        </p>
                                                    </div>

                                                </div>
                                                <div className='client-box'>
                                                    <div className='client-profile client-profile1'>
                                                        <img src={Profile2} alt="" />
                                                    </div>
                                                    <div className='client-text'>
                                                        <p>Hire remote software developers from agencies, work directly with them, and get the dual benefits of discipline and vetted talent.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                                <div className='client-box'>
                                                    <div className='client-profile client-profile2'>
                                                        <img src={Profile3} alt="" />
                                                    </div>
                                                    <div className='client-text'>
                                                        <p>Match with agencies based on your requirements.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='client-box'>
                                                    <div className='client-profile client-profile3'>
                                                        <img src={Profile4} alt="" />
                                                    </div>
                                                    <div className='client-text'>
                                                        <p>Discuss your job descriptions and see their developer profiles.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='client-box'>
                                                    <div className='client-profile client-profile4'>
                                                        <img src={Profile5} alt="" />
                                                    </div>
                                                    <div className='client-text'>
                                                        <p>Chat, schedule interviews and start the contracts as you hire remote software developers.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </section>

                <section className="follow-section">
                    <div className="follow-inner">
                        <Container>
                            <Grid container>
                                <Grid item lg={8} md={8}>
                                    <div className="heading">
                                        <h2>Take the <span> first step</span>, the rest is easy </h2>
                                        <p>You will love the ease of using SourceFirms. Onboarding is easy, matching with an agency is smooth, and hiring dedicated developers with filters is even easier.</p>
                                        <Button className="btn btn-primary" onClick={handleRedirection}>Get Started</Button>
                                    </div>
                                </Grid>
                            </Grid>

                            <div className="follow-list">
                                <Grid container className="follow-type">
                                    <Grid item lg={3} md={3} sm={3} xs={12} data-aos="fade-in" data-aos-easing="linear"
                                        data-aos-duration="500" data-aos-delay="300">
                                        <div className="follow-list-box">
                                            <div className="box-top">
                                                <h2>1</h2>
                                            </div>
                                            <div className="box-bottom">
                                                <h5>Create client profile</h5>

                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg={3} md={3} sm={3} xs={12} data-aos="fade-in" data-aos-easing="linear"
                                        data-aos-duration="1000" data-aos-delay="600">
                                        <div className="follow-list-box">
                                            <div className="box-top">
                                                <h2>2</h2>
                                            </div>
                                            <div className="box-bottom">
                                                <h5>Wait for your approval</h5>

                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg={3} md={3} sm={3} xs={12} data-aos="fade-in" data-aos-easing="linear"
                                        data-aos-duration="1500" data-aos-delay="900">
                                        <div className="follow-list-box follow-list-box1">
                                            <div className="box-top">
                                                <h2>3</h2>
                                            </div>
                                            <div className="box-bottom">
                                                <h5>Get matched with an agency</h5>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item lg={3} md={3} sm={3} xs={12} data-aos="fade-in" data-aos-easing="linear"
                                        data-aos-duration="2000" data-aos-delay="1200">
                                        <div className="follow-list-box follow-list-box2">
                                            <div className="box-top">
                                                <h2>4</h2>
                                            </div>
                                            <div className="box-bottom">
                                                <h5>Browse and interview agency resources</h5>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </section>

                <section className='develop-section'>
                    <div className='develop-inner'>
                        <Container>
                            <Grid container>
                                <Grid item lg={7} md={7} sm={7} xs={12}>
                                    <div className="heading">
                                        <h2>Dear agencies</h2>
                                    </div>

                                    <List>
                                        <ListItem>
                                            <Link>Find long-term contract work for your on-demand software developers.</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link>Get matched to all sizes of enterprise clients looking for software development.</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link>Matching works according to your developer profiles and your agency&apos;s technology strengths. </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link>Share developer profiles, provide agile software development teams, and start contracts at no cost.</Link>
                                        </ListItem>
                                    </List>
                                </Grid>


                                <Grid item lg={5} md={5} sm={5} xs={12}>
                                    <div className='develop-image'>
                                        <img src={DevelopImg} alt="DevelopImg" />
                                        <div className='agency-trophy' data-aos="fade-left" data-aos-easing="linear"
                                            data-aos-duration="1200">
                                            <Typography variant='h3'>Here&apos;s the world&apos;s first official global resource augmentation marketplace for you.
                                            </Typography>
                                            <img src={TrophyImg} alt="" />
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Homepage