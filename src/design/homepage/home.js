import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "assets/css/new-home.css";
import Bannerprofile from "assets/img/banner-img.png";
import Button from '@mui/material/Button';
import Google from 'assets/img/google-img.png';
import Facebook from 'assets/img/facebook-img.png';
import Argrace from 'assets/img/argrace-img.png';
import Samsung from 'assets/img/samsung-img.png';
import Ebay from 'assets/img/ebay-img.png';
import Netflix from 'assets/img/netflix.png';
import Agencyimg from 'assets/img/agency-img1.png';
import Agencyimg1 from 'assets/img/agency-img2.png';
import Agencyimg2 from 'assets/img/agency-img3.png';
import Agencyimg3 from 'assets/img/agency-img4.png';
import Location from 'assets/img/location.png';
import Developmentprofile from 'assets/img/develop-profile1.png';
import Developmentprofile1 from 'assets/img/develop-profile2.png';
import Slider from 'react-slick';
import Developimg1 from 'assets/img/develop-img1.png';
import Developimg2 from 'assets/img/develop-img2.png';
import Developimg3 from 'assets/img/develop-img3.png';
import Developimg4 from 'assets/img/develop-img4.png';
import Registerimg from 'assets/img/register-bg.png';
import Regiterpattern1 from 'assets/img/register-profile1.png';
import Regiterpattern2 from 'assets/img/register-profile2.png';
import Regiterpattern3 from 'assets/img/register-profile3.png';
import Regiterpattern4 from 'assets/img/register-profile4.png';
import Regiterpattern5 from 'assets/img/register-profile5.png';




function Homepage() {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              arrows: false,
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              arrows: false,
              slidesToShow: 1,
            },
          },
        ],
      };
      
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
      return (
        <>
          <section className="banner-section">
            <div className="banner-inner">
              <div className="banner-bg-section">
                <div className="banner-bg">
                  <Container>
                    <Grid container className=''>
                      <Grid item lg={6} md={6}>
                        <div className="banner-image">
                          <img src={Bannerprofile} alt='img' />
                        </div>
                      </Grid>
                      <Grid item lg={6} md={6}>
                        <div className="banner-content">
                          <h2>Easy to Hire Talented Candidates & Professional Agencies !</h2>
                          <p>Easy to hire and user friendly Platform.Lorem Ipsum is simply dummy text of
                            the
                            printing and typesetting industry Lorem Ipsum has been the industry's
                            standard
                            dummy text .</p>
                          <button className="btn btn-primary">Create Job Post</button>
                        </div>
                      </Grid>
                    </Grid>
                  </Container>
                </div>
              </div>
              <div className="banner-client">
                <Container>
                  <Grid container>
                    <Grid item lg={6} md={6}>
                      <ul className="profetion-list">
                        <li>
                          <h3>100K+</h3>
                          <p>Talented <span> Freelancer </span></p>
                        </li>
                        <li>
                          <h3>26K+</h3>
                          <p>Professional <span> Agencies </span> </p>
                        </li>
                        <li>
                          <h3>10K+</h3>
                          <p>Happy <span> Clients </span></p>
                        </li>
                      </ul>
                    </Grid>
    
                    <Grid item lg={6} md={6}>
                      <ul className="banner-icon">
                        <li><img src={Google} alt='Google' /></li>
                        <li><img src={Facebook} alt='Facebook' /></li>
                        <li><img src={Argrace} alt='Argrace' /></li>
                        <li><img src={Samsung} alt='Samsung' /></li>
                        <li><img src={Ebay} alt='Ebay' /></li>
                        <li><img src={Netflix} alt='Netflix' /></li>
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
                  <Grid item lg={8} md={6}>
                    <div className="heading">
                      <h2>120+ <span> Skills </span> Registered Our Platform</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
                        Ipsum has been the industry's standard dummy text.</p>
                    </div>
                  </Grid>
                </Grid>
    
                <Slider  {...setting1} className="platform-slider ">
                  <div className='platform-box'>
                    <div className='platform-header'>
                      <img src={Developimg1} alt='Developimg1' />
                    </div>
                    <div className='platform-body'>
                      <h3>Web Development</h3>
                      <p>1200+ Candidates</p>
                    </div>
                  </div>
                  <div className='platform-box'>
                    <div className='platform-header platform-header2'>
                      <img src={Developimg2} alt='Developimg2' />
                    </div>
                    <div className='platform-body'>
                      <h3>Web Development</h3>
                      <p>1200+ Candidates</p>
                    </div>
                  </div>
                  <div className='platform-box'>
                    <div className='platform-header platform-header3'>
                      <img src={Developimg3} alt='Developimg3' />
                    </div>
                    <div className='platform-body'>
                      <h3>Web Development</h3>
                      <p>1200+ Candidates</p>
                    </div>
                  </div>
                  <div className='platform-box'>
                    <div className='platform-header platform-header4'>
                      <img src={Developimg4} alt='Developimg4' />
                    </div>
                    <div className='platform-body'>
                      <h3>Web Development</h3>
                      <p>1200+ Candidates</p>
                    </div>
                  </div>
                  <div className='platform-box'>
                    <div className='platform-header platform-header2'>
                      <img src={Developimg2} alt='Developimg2' />
                    </div>
                    <div className='platform-body'>
                      <h3>Web Development</h3>
                      <p>1200+ Candidates</p>
                    </div>
                  </div>
                </Slider>
    
                <Slider  {...setting2} className="platform-slider ">
                  <div className='platform-box'>
                    <div className='platform-header platform-header4'>
                      <img src={Developimg4} alt='Developimg4' />
                    </div>
                    <div className='platform-body'>
                      <h3>Web Development</h3>
                      <p>1200+ Candidates</p>
                    </div>
                  </div>
                  <div className='platform-box'>
                    <div className='platform-header platform-header3'>
                      <img src={Developimg3} alt='Developimg3' />
                    </div>
                    <div className='platform-body'>
                      <h3>Web Development</h3>
                      <p>1200+ Candidates</p>
                    </div>
                  </div>
                  <div className='platform-box'>
                    <div className='platform-header platform-header2'>
                      <img src={Developimg2} alt='Developimg2' />
                    </div>
                    <div className='platform-body'>
                      <h3>Web Development</h3>
                      <p>1200+ Candidates</p>
                    </div>
                  </div>
                  <div className='platform-box'>
                    <div className='platform-header platform-header'>
                      <img src={Developimg1} alt='Developimg1' />
                    </div>
                    <div className='platform-body'>
                      <h3>Web Development</h3>
                      <p>1200+ Candidates</p>
                    </div>
                  </div>
                  <div className='platform-box'>
                    <div className='platform-header platform-header3'>
                      <img src={Developimg3} alt='Developimg3' />
                    </div>
                    <div className='platform-body'>
                      <h3>Web Development</h3>
                      <p>1200+ Candidates</p>
                    </div>
                  </div>
                </Slider>
    
                <Slider  {...setting3} className="platform-slider ">
                  <div className='platform-box'>
                    <div className='platform-header platform-header2'>
                      <img src={Developimg2} alt='Developimg2' />
                    </div>
                    <div className='platform-body'>
                      <h3>Web Development</h3>
                      <p>1200+ Candidates</p>
                    </div>
                  </div>
                  <div className='platform-box'>
                    <div className='platform-header platform-header3'>
                      <img src={Developimg3} alt='Developimg3' />
                    </div>
                    <div className='platform-body'>
                      <h3>Web Development</h3>
                      <p>1200+ Candidates</p>
                    </div>
                  </div>
                  <div className='platform-box'>
                    <div className='platform-header platform-header4'>
                      <img src={Developimg4} alt='Developimg4' />
                    </div>
                    <div className='platform-body'>
                      <h3>Web Development</h3>
                      <p>1200+ Candidates</p>
                    </div>
                  </div>
                  <div className='platform-box'>
                    <div className='platform-header'>
                      <img src={Developimg1} alt='Developimg1' />
                    </div>
                    <div className='platform-body'>
                      <h3>Web Development</h3>
                      <p>1200+ Candidates</p>
                    </div>
                  </div>
                  <div className='platform-box'>
                    <div className='platform-header platform-header3'>
                      <img src={Developimg3} alt='Developimg3' />
                    </div>
                    <div className='platform-body'>
                      <h3>Web Development</h3>
                      <p>1200+ Candidates</p>
                    </div>
                  </div>
                </Slider>
              </Container>
            </div>
          </section>
    
          <section className="agency-section">
            <div className="agency-inner">
              <Container>
                <Grid container justifyContent='center'>
                  <Grid item lg={8} md={6} >
                    <div className="heading">
                      <h2>26000+ Professional <span> Agencies </span></h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
                        Ipsum has been the industry's standard dummy text.</p>
                    </div>
                  </Grid>
                </Grid>
                <Slider {...settings} className="agency-slider ">
                  <div className="agency-main-content">
                    <div className="agency-box">
                      <div className="agency-img">
                        <img src={Agencyimg} alt='Agencyimg' />
                      </div>
                      <div className="agency-text">
                        <h4>Digital Rocketship</h4>
                        <p> <img src={Location} alt='Location' />New York, America</p>
    
                        <div className="development-list">
                          <ul>
                            <li><img src={Developmentprofile} alt='Developmentprofile' /></li>
                            <li><img src={Developmentprofile1} alt='Developmentprofile1' /></li>
                            <li>
                              <p>58+</p>
                            </li>
                          </ul>
                          <span>Developers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="agency-main-content">
                    <div className="agency-box">
                      <div className="agency-img">
                        <img src={Agencyimg1} alt='Agencyimg1' />
                      </div>
                      <div className="agency-text">
                        <h4>Digital Rocketship</h4>
                        <p><img src={Location} alt='Location' />New York, America</p>
    
                        <div className="development-list">
                          <ul>
                            <li><img src={Developmentprofile} alt='Developmentprofile' /></li>
                            <li><img src={Developmentprofile1} alt='Developmentprofile1' /></li>
                            <li>
                              <p>58+</p>
                            </li>
                          </ul>
                          <span>Developers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="agency-main-content">
                    <div className="agency-box">
                      <div className="agency-img">
                        <img src={Agencyimg2} alt='Agencyimg2' />
                      </div>
                      <div className="agency-text">
                        <h4>Digital Rocketship</h4>
                        <p><img src={Location} alt='Location' />New York, America</p>
    
                        <div className="development-list">
                          <ul>
                            <li><img src={Developmentprofile} alt='Developmentprofile' /></li>
                            <li><img src={Developmentprofile1} alt='Developmentprofile1' /></li>
                            <li>
                              <p>58+</p>
                            </li>
                          </ul>
                          <span>Developers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="agency-main-content">
                    <div className="agency-box">
                      <div className="agency-img">
                        <img src={Agencyimg3} alt='Agencyimg3' />
                      </div>
                      <div className="agency-text">
                        <h4>Digital Rocketship</h4>
                        <p><img src={Location} alt='Location' />New York, America</p>
    
                        <div className="development-list">
                          <ul>
                            <li><img src={Developmentprofile} alt='Developmentprofile' /></li>
                            <li><img src={Developmentprofile1} alt='Developmentprofile1' /></li>
                            <li>
                              <p>58+</p>
                            </li>
                          </ul>
                          <span>Developers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="agency-main-content">
                    <div className="agency-box">
                      <div className="agency-img">
                        <img src={Agencyimg2} alt='Agencyimg2' />
                      </div>
                      <div className="agency-text">
                        <h4>Digital Rocketship</h4>
                        <p><img src={Location} alt='Location' />New York, America</p>
    
                        <div className="development-list">
                          <ul>
                            <li><img src={Developmentprofile} alt='Developmentprofile' /></li>
                            <li><img src={Developmentprofile1} alt='Developmentprofile1' /></li>
                            <li>
                              <p>58+</p>
                            </li>
                          </ul>
                          <span>Developers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </Container>
            </div>
          </section>
    
          <section className="follow-section">
            <div className="follow-inner">
              <Container>
                <Grid container>
                  <Grid item lg={6} md={6}>
                    <div className="heading">
                      <h2>Follow Easy <span> 4 Steps </span></h2>
                      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                        officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                        nostrud amet.</p>
    
                      <Button className="btn btn-primary">Get Started</Button>
                    </div>
                  </Grid>
                </Grid>
    
                <div className="follow-list">
                  <Grid container>
                    <Grid item lg={3} md={3} sm={6}>
                      <div className="follow-list-box">
                        <div className="box-top">
                          <h2>1</h2>
                        </div>
                        <div className="box-bottom">
                          <h3>Create Job Post</h3>
                          <p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6}>
                      <div className="follow-list-box">
                        <div className="box-top">
                          <h2>2</h2>
                        </div>
                        <div className="box-bottom">
                          <h3>Recommended Candidates</h3>
                          <p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6}>
                      <div className="follow-list-box follow-list-box1">
                        <div className="box-top">
                          <h2>3</h2>
                        </div>
                        <div className="box-bottom">
                          <h3>Candidate Interview</h3>
                          <p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6}>
                      <div className="follow-list-box follow-list-box2">
                        <div className="box-top">
                          <h2>4</h2>
                        </div>
                        <div className="box-bottom">
                          <h3>Hire Candidates</h3>
                          <p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
          </section>
    
          <section className='register-section'>
            <div className='register-inner'>
              <Container>
                <div className='register-wrapper'>
                  <Grid container alignItems='center'>
                    <Grid item lg={6} md={6}>
                      <div className='register-content'>
                        <div className='register-pattern pattern-1'>
                          <img src={Regiterpattern1} alt='Regiterpattern1' />
                        </div>
                        <div className='register-pattern pattern-2'>
                          <img src={Regiterpattern2} alt='Regiterpattern2' />
                        </div>
                        <div className='register-pattern pattern-3'>
                          <img src={Regiterpattern3} alt='Regiterpattern3' />
                        </div>
                        <div className='register-pattern pattern-4'>
                          <img src={Regiterpattern4} alt='Regiterpattern4' />
                        </div>
                        <div className='register-pattern pattern-5'>
                          <img src={Regiterpattern5} alt='Regiterpattern5' />
                        </div>
                        <div className='register-img'>
                          <img src={Registerimg} alt='Registerimg' />
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={6} md={8}>
                      <div className='register-text'>
                        <div className='heading'>
                          <h2>200000+  Talented <span> Candidates </span> Registered Our Platform</h2>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text. Easy to hire and user friendly Platform.</p>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
          </section>
        </>
      )
}
export default Homepage