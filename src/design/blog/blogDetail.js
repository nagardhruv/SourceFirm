
import React from 'react';
import AdminNavbar from "components/Navbars/AdminNavbar";
import "assets/css/blog-detail.css";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CustomBreadcrumbs from 'components/CustomBreadcrumbs/CustomBreadcrumbs';
// import Footer from 'components/Footer/Footer';
import BlogDetailBanner from 'assets/img/blog-detail-banner.png';
import BlogGraph from 'assets/img/blog-graph-img.png';
import BlogProfile from 'assets/img/blog-profile-img.svg';
import ContactFacebook from "assets/img/icons/contact-facebook-icon.svg";
import ContactTwitter from "assets/img/icons/contact-twitter-icon.svg";
import ContactLinkedIn from "assets/img/icons/contact-linkedin-icon.svg";
import ContactInstagram from "assets/img/icons/contact-instagram-icon.svg";
import CustomInput from 'components/CustomInput/CustomInput';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import googleIcon from 'assets/img/icons/Google-icon.svg';
// import visibilityIcon from 'assets/img/icons/visibility-icon.svg';
import visibilityOffIcon from 'assets/img/icons/visibilityOff-icon.svg';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
// import linkedinIcon from 'assets/img/icons/linkedin.svg';
import envelopeIcon from 'assets/img/icons/envelope.svg';
import lockIcon from 'assets/img/icons/lock.svg';
import {reduxForm,  Field } from 'redux-form';
import history from 'utils/history';
import "assets/css/auth.css";
import { Typography } from '@mui/material';
import { required, email, trimmed } from 'utils/Validation';
import RecentPost1 from 'assets/img/recent-post-img1.png';
import RecentPost2 from 'assets/img/recent-post-img2.png';
import RecentPost3 from 'assets/img/recent-post-img3.png';
import RecentPost4 from 'assets/img/recent-post-img4.png';
import Slider from 'react-slick';
import BlogPopular1 from 'assets/img/blog-popular-img1.png';
import BlogPopular2 from 'assets/img/blog-popular-img2.png';
import BlogPopular3 from 'assets/img/blog-popular-img3.png';
import BlogPopular4 from 'assets/img/blog-popular-img4.png';
import Footer from 'components/Footer/Footer';



function BlogDetail() {

    const setting6 = {
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        arrows: true,
        // swipe: false,
        dots: false,
        speed: 2000,
        // cssEase: 'linear',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay:true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay:false,
                    
                },
            },
        ],
    };
    const setting7 = {
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        arrows: false,
        // swipe: false,
        dots: true,
        speed: 2000,
        // cssEase: 'linear',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay:true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay:false,
                    
                },
            },
        ],
    };

    const breadCrumbs = [
        { name: 'home', path: '/home' },
        { name: 'blog', path: '/blog' },
        // { name: 'About Us', path: '/About Us' },
    ]

    
      return (
        <>
            <div className='dashboard-main-content'>
            <div className="main-panel">
                        <AdminNavbar />
                
                <section className="blog-detail-section">
                    <div className="blog-detail-inner">
                        <Container>
                            <Grid container>
                            <Grid item lg={6}>
                                    <Stack spacing={2} className='breadcrumb-div'>
                                        <CustomBreadcrumbs current="blog detail" previous={breadCrumbs} />
                                    </Stack>
                            </Grid>
                            </Grid>

                            <Grid container>
                                <Grid item lg={12} xs={12}>
                                    <div className="blog-detail-banner">
                                        <img src={BlogDetailBanner} alt={BlogDetailBanner} />
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </section>

                <section className="introduction-section">
                    <div className="introduction-inner">
                        <Container>
                            <Grid container>
                                <Grid item lg={8} md={8} sm={7} xs={12}>
                                    <div className="blog-left-tab">
                                        <div className="blog-sub-menu">
                                            <p>Development</p>
                                            <span></span>
                                            <p>5 Min read</p>
                                        </div>
                                        <div className="blog-detail-heading">
                                            <h2>Software Development Trends to Look Out for in 2023 </h2>
                                        </div>
                                        <div className="blog-detail-main-tab">
                                            <div className="introduction-tab" id="introduction">
                                                <p>The software development industry is valued at around $260 billion and is expected to grow beyond $700 billion by 2026. But which software development trends will rule 2023? Let’s take a look at the five key trends that are set to dominate this year. Keep reading till the end as we answer a much-debated question: will remote work continue for software developers in 2023?</p>
                                            </div>
                                            <div className="introduction-tab" id="webapp">
                                                <h3>The rise of Web 3.0</h3>
                                                <p>As opposed to Web 2.0, Web 3.0 aims to adopt technologies such as machine learning, AI, blockchain, etc. to enhance the user experience. It is also aimed to give more control to the user over their data usage and visibility. Some major benefits of Web 3.0 are</p>
                                                <ul>
                                                    <li>The platforms on Web 3 will not be centralized. This means that the data won’t be in the control of a single authority or database. Web 3 will rely on a global network to ensure that no one person or authority can disrupt it. This feature will prevent the hacking of data.</li>
                                                    <li>Web 3 will allow users to get paid for the data they share with various platforms. This feature will incentivize users to share their data while helping businesses to be more transparent about their data policies.</li>
                                                    <li>Web 3 will be highly beneficial for the insurance sector. Currently, the insurance sector struggles with major issues: incomplete information about the customers, claim settlements, false claims, etc. Web 3.0 is transparent and decentralized, which can help in curbing false claims. Since Web 3 will allow peer-to-peer sharing of data, the chances of data getting hampered by middlemen or some authorities will be reduced to a great extent.</li>
                                                    <li>The data on social media platforms will be more secure and safe as users will have enhanced control over the data they share on these platforms.</li>
                                                </ul>
                                            </div>
                                            <div className="introduction-tab" id="blockchain">
                                                <h3>Blockchain will gain momentum</h3>
                                                <p>While the crypto market has seen its ups and downs, blockchain tech is steadily growing popular. With a high potential of transforming industries such as healthcare, finance, etc., blockchain will be one of the most sought-after technologies in 2023.</p>
                                                <p>Let’s take a look at some of the major advantages offered by blockchain:</p>
                                                <ul>
                                                    <li>The data once stored on the blockchain cannot be altered, replaced, or deleted. This feature is known as immutability. And thus, using blockchain technology can help prevent data tampering within the network.</li>
                                                    <li>Blockchain technology offers transparency. A member of the blockchain can access any record on it due to decentralization.</li>
                                                    <li>No single authority is in control of blockchain technology. Thus, it is free of censorship and no authority can exercise its powers with this technology.</li>
                                                    <li>It is easy to trace any changes in the network as blockchain creates an irreversible audit trail.</li>
                                                    <li>Data is encrypted, end to end. Thus, your data is secure on the blockchain network.</li>
                                                    <li>The process of transactions on the blockchain is highly efficient and free of human error.</li>
                                                </ul>
                                            </div>
                                            <div className="introduction-tab" id="global-graph">
                                                <h3>Artificial intelligence will become prevalent</h3>
                                                <div className="graph-img">
                                                    <img src={BlogGraph} alt="BlogGraph" />
                                                </div>
                                                <p>AI is becoming more and more affordable and accessible. The AI software market is projected to garner a revenue of over $100 billion by the year 2025. AI can complete complex tasks which humans cannot handle. This is why AI adoption is increasing on a much larger scale, with organizations across the globe adopting it. Let’s take a look at the major benefits of AI:</p>
                                                <ul>
                                                    <li>AI reduces human error to a great extent. As AI analyzes previous information and uses algorithms to take decisions, there is very little scope for human error.</li>
                                                    <li>As opposed to humans, AI is available round the clock. It can perform multiple tasks simultaneously, without taking a break.</li>
                                                    <li>The decisions made by AI are unbiased. Unlike humans, AI can’t get affected by emotions, situations, etc while making a decision.</li>
                                                </ul>
                                                <p>Also, read AI vs ML vs Deep Learning</p>
                                                <p>So, these are the major trends in the software development industry that we’ll be witnessing this year. But wait, we are still to answer the question: is remote work going to continue in 2023?</p>
                                            </div>
                                        </div>

                                        <div className="blog-author-box">
                                            <div className="author-profile">
                                                <img src={BlogProfile} />
                                            </div>
                                            <div className="author-content">
                                                <h6>Vishal Nakum <em>( Author )</em></h6>
                                                <p>While the crypto market has seen its ups and downs, blockchain tech is steadily growing popular. With a high potential of transforming industries such as healthcare</p>
                                            </div>
                                        </div>

                                        

                                    </div>

                                    <div className="social-media">
                                            <ul>
                                                <li><p>Share This Article :</p></li>
                                                <li><a href="#"><img src={ContactFacebook} alt="ContactFacebook" /></a></li>
                                                <li><a href="#"><img src={ContactTwitter} alt="ContactTwitter" /></a></li>
                                                <li><a href="#"><img src={ContactLinkedIn} alt="ContactLinkedIn" /></a></li>
                                                <li><a href="#"><img src={ContactInstagram} alt="ContactInstagram" /></a></li>
                                            </ul>
                                    </div>
                                    
                                </Grid>
                                <Grid item lg={4} md={4} sm={5} xs={12}>
                                    <div className="blog-right-tab">
                                        <ul>
                                            <li><a href="#introduction" className="active">Introduction</a></li>
                                            <li><a href="#webapp">The rise of Web 3.0</a></li>
                                            <li><a href="#blockchain">Blockchain will gain momentum</a></li>
                                            <li><a href="#global-graph">Kubernetes adoption will skyrocket</a></li>
                                            <li><a href="#">DevSecOps will grow exponentially</a></li>
                                            <li><a href="#">Artificial intelligence will become prevalent</a></li>
                                            <li><a href="#">The answer is yes! Remote work is here to stay!</a></li>
                                        </ul>

                                        <div className="blog-login">
                                            <div className="login-heading">
                                                <h3>Login</h3>
                                            </div>

                                            <form  noValidate className='form-content'>
                                                <Field
                                                    name="username"
                                                    component={CustomInput}
                                                    id="username"
                                                    labelText="Work Email Address *"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    validate={[required, email]}
                                                    inputProps={{
                                                        placeholder: "your@email.com ",
                                                        type: "text",
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <img src={envelopeIcon} height='16px' alt='img' />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                    normalize={trimmed()}
                                                />
                                                <Field
                                                    name="password"
                                                    component={CustomInput}
                                                    id="password"
                                                    labelText="Password *"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    validate={[required]}
                                                    inputProps={{
                                                        placeholder: "Enter Password",
                                                        type: ( 'password'),
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <img src={lockIcon} alt='img' />
                                                            </InputAdornment>
                                                        ),
                                                        endAdornment: (
                                                            <InputAdornment position="end" className='adornment-icon'>
                                                                <img  src={ visibilityOffIcon} alt='img' />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                                <FormControl variant="standard" className='formControl text-right'>
                                                    <Link underline="none" className='forget-link cursor-pointer' onClick={() => history.push('/forgetpassword')}>Forgot Password? </Link>
                                                </FormControl>
                            
                            <Button variant="contained" classes={{
                                root: 'primaryButton'
                            }} type="submit" className='w100' style={{ marginBottom: '20px' }}>Login</Button >
                            <Divider>or</Divider>
                            <Grid className="socialLogin" gap={1.8}>
                                <Button size='large' className='media-btn'
                                    onClick={e => {
                                        e.preventDefault();
                                        document.querySelector('.google_login_btn').click()
                                    }}>
                                    <span><img src={googleIcon} alt='img' /></span>
                                    Continue with Google
                                </Button>
                                {/* <Button size='large' className='media-btn'>
                                        <span><img src={linkedinIcon} alt='img' /></span>
                                        Continue with linkedin
                                    </Button> */}
                                <div style={{ display: 'none' }}>
                                    <Button className='media-btn google_login_btn'>
                                        <span><img src={googleIcon} alt='img' /></span>
                                    </Button>
                                </div>
                            </Grid>
                            <Grid className='link-container'>
                                <Typography variant="p" component="p" gutterBottom>Don&apos;t have an account? <Link onClick={() => { history.push('/signup') }} underline="none" className='signUp-link cursor-pointer'>Sign up</Link></Typography>
                            </Grid>
                        </form>
                                        </div>

                                        <div className="recent-post">
                                            <div className="Recent-Posts-heading">
                                                <h4>Recent Posts</h4>
                                            </div>
                                            <a href="#" className="recent-post-detail">
                                                <div className="recent-post-left">
                                                    <img src={RecentPost1} alt="" />
                                                </div>
                                                <div className="recent-post-right">
                                                    <h5>5 major software development trends in 2023</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>

                                                </div>
                                            </a>
                                            <a href="#" className="recent-post-detail">
                                                <div className="recent-post-left">
                                                    <img src={RecentPost2} alt="" />
                                                </div>
                                                <div className="recent-post-right">
                                                    <h5>5 major software development trends in 2023</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>

                                                </div>
                                            </a>
                                            <a href="#" className="recent-post-detail">
                                                <div className="recent-post-left">
                                                    <img src={RecentPost3} alt="" />
                                                </div>
                                                <div className="recent-post-right">
                                                    <h5>5 major software development trends in 2023</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>

                                                </div>
                                            </a>
                                            <a href="#" className="recent-post-detail">
                                                <div className="recent-post-left">
                                                    <img src={RecentPost4} alt="" />
                                                </div>
                                                <div className="recent-post-right">
                                                    <h5>5 major software development trends in 2023</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing</p>

                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </section>

                <section className="popular-section related-blog-post">
                <div className="popular-inner">
                    <Container>
                        <Grid container>
                            <Grid item lg={12} md={12}>
                                <div className="about-heading">
                                    <h2>Most Popular</h2>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid conatiner>
                            <Grid item lg={12}>
                            <Slider {...setting6} className="about-card-slider">
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular1} alt="BlogPopular1" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular2} alt="BlogPopular2" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular3} alt="BlogPopular3" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular4} alt="BlogPopular4" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular1} alt="BlogPopular1" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular2} alt="BlogPopular2" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular3} alt="BlogPopular3" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular4} alt="BlogPopular4" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                
                        </Slider>
                            </Grid>
                        </Grid>

                        
                    </Container>
                </div>
                </section>
                <section className="popular-section most-popular-section">
                <div className="popular-inner">
                    <Container>
                        <Grid container>
                            <Grid item lg={12} md={12}>
                                <div className="about-heading">
                                    <h2>Most Popular</h2>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid conatiner>
                            <Grid item lg={12}>
                            <Slider {...setting7} className="about-card-slider">
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular1} alt="BlogPopular1" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular2} alt="BlogPopular2" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular3} alt="BlogPopular3" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular4} alt="BlogPopular4" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular1} alt="BlogPopular1" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular2} alt="BlogPopular2" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular3} alt="BlogPopular3" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="blog-card-wrapper">
                                        <div className="blog-card-header">
                                            <img src={BlogPopular4} alt="BlogPopular4" />
                                        </div>
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Talent Cloud is the best alternative to IT service</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <em></em>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                
                        </Slider>
                            </Grid>
                        </Grid>

                        
                    </Container>
                </div>
                </section>

                <Footer />

                </div>
            </div>
        </>
      )
}

const BlogDetailPage = reduxForm({
    form: 'BlogDetail', // a unique identifier for this form
    enableReinitialize: false
})(BlogDetail)
export default BlogDetailPage