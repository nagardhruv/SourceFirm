import React from 'react';
import "assets/css/blog.css";
import Container from '@mui/material/Container';
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import searchIcon from "assets/img/icons/search.svg";
import "assets/css/chat.css";
import Grid from '@mui/material/Grid';
import BlogBanner from 'assets/img/blog-banner-img.png';
import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from 'components/Footer/Footer';
import BlogProfile from 'assets/img/blog-profile-img.svg';
import BlogCard1 from 'assets/img/blog-card1.png';
import BlogCard2 from 'assets/img/blog-card2.png';
import BlogCard3 from 'assets/img/blog-card3.png';
import Slider from 'react-slick';
import BlogPopular1 from 'assets/img/blog-popular-img1.png';
import BlogPopular2 from 'assets/img/blog-popular-img2.png';
import BlogPopular3 from 'assets/img/blog-popular-img3.png';
import BlogPopular4 from 'assets/img/blog-popular-img4.png';
import ArticleProfile1 from 'assets/img/article-profile1.png';
import ArticleProfile2 from 'assets/img/article-profile2.png';
import ArticleProfile3 from 'assets/img/article-profile3.png';
import ArticleProfile4 from 'assets/img/article-profile4.png';
import ArticleProfile5 from 'assets/img/article-profile5.png';
import ArticleProfile6 from 'assets/img/article-profile6.png';
import ArticleProfile7 from 'assets/img/article-profile7.png';
import BlogArrow from 'assets/img/blog-arrow.svg';
import { Button } from '@mui/material';



const Search = styled("div")(() => ({
    position: "relative",
    // borderRadius: "8px",
    // backgroundColor: alpha("#6a8caa", 0.08),
    
    // marginLeft: 0,
    // width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6E7377",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        height: "32px",
        [theme.breakpoints.up("md")]: {
        },
    },
}));




function Blog() {

    const setting5 = {
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        // swipe: false,
        dots: true,
        speed: 2000,
        arrows: false,
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
    
      return (
        <>
        <div className='dashboard-main-content'>
        <div className="main-panel">
                    <AdminNavbar />
            <section className='blog-section'>
                <div className='blog-inner'>
                    <Container>
                        <div className='blog-header'>
                            <h2><span>SourceFirms</span> Blog</h2>
                            <div className='blog-search'>
                            <Search className="searchBar">
                                <SearchIconWrapper>
                                    <img src={searchIcon} alt="img" />
                                </SearchIconWrapper>
                                <StyledInputBase
                                className='blog-search-bar'
                                    placeholder="Search…"
                                    inputProps={{ "aria-label": "search" }}
                                />
                            </Search>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <section className="blog-banner-section">
               <div className="blog-banner-inner">
                <Container>
                    <div className="blog-banner-box">
                        <Grid container alignItems="center">
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                <div className="blog-left-content">
                                    <img src={BlogBanner} alt="BlogBanner" />
                                </div>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                <div className="blog-right-content">
                                    <span>Development</span>
                                    <h3>Software Development Trends to Look Out for in 2023 </h3>
                                    <p>At &quot;sourcefirms.com&quot;, we secure and respect the privacy of our users. We strictly follow global privacy guidelines/policies to protect your interests</p>

                                    <div className="blog-profile-detail">
                                        <div className="profile-left-detail">
                                            <img src={BlogProfile} alt="BlogProfile" />
                                        </div>
                                        <div className="profile-right-detail">
                                            <h6>Vishal Nakum</h6>
                                            <p>Jan 5, 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
               </div>
            </section>

            <section className="blog-card-section">
            <div className="blog-card-inner">
                <Container>
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={{ xs: 3, sm: 3 }}>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <div className="blog-card-wrapper">
                                <div className="blog-card-header">
                                    <img src={BlogCard1} alt="BlogCard1" />
                                </div>
                                <div className="blog-card-body">
                                
                                    <span>Development</span>
                                    <h3>Finding the Best Alternative to IT Service</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                    <div className="blog-profile-detail">
                                        <div className="profile-left-detail">
                                            <img src={BlogProfile} alt="BlogProfile" />
                                        </div>
                                        <div className="profile-right-detail">
                                            <h6>Vishal Nakum</h6>
                                            <p>Jan 5, 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <div className="blog-card-wrapper">
                                <div className="blog-card-header">
                                    <img src={BlogCard2} alt="BlogCard2" />
                                </div>
                                <div className="blog-card-body">
                                
                                    <span>Development</span>
                                    <h3>Finding the Best Alternative to IT Service</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                    <div className="blog-profile-detail">
                                        <div className="profile-left-detail">
                                            <img src={BlogProfile} alt="BlogProfile" />
                                        </div>
                                        <div className="profile-right-detail">
                                            <h6>Vishal Nakum</h6>
                                            <p>Jan 5, 2023</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <div className="blog-card-wrapper">
                                <div className="blog-card-header">
                                    <img src={BlogCard3} alt="BlogCard3" />
                                </div>
                                <div className="blog-card-body">
                                
                                    <span>Development</span>
                                    <h3>Finding the Best Alternative to IT Service</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                    <div className="blog-profile-detail">
                                        <div className="profile-left-detail">
                                            <img src={BlogProfile} alt="BlogProfile" />
                                        </div>
                                        <div className="profile-right-detail">
                                            <h6>Vishal Nakum</h6>
                                            <p>Jan 5, 2023</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            
                        </Grid>
                    </Grid>
                </Container>
            </div>
            </section>

            <section className="popular-section">
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
                            <Slider {...setting5} className="about-card-slider">
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

            <section className="article-section">
                <div className="article-inner">
                    <Container>
                        <Grid container>
                            <Grid item lg={12} md={12}>
                                <div className="about-heading">
                                    <h2>All articles</h2>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={{ xs: 3, sm: 3 }}>
                            <Grid item lg={6} md={6}>
                                <a href="#" className="article-card">
                                    <div className="article-card-image">
                                        <img src={ArticleProfile1} alt="ArticleProfile1" />
                                    </div>
                                    <div className="blog-card-wrapper">
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Software development trends in 2023</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                
                                                <div className="profile-left-detail">
                                                    <img src={BlogProfile} alt="BlogProfile" />
                                                </div>
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                                <div className="blog-Arrow">
                                                   <img src={BlogArrow} alt="BlogArrow" />                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </a>
                            </Grid>
                            <Grid item lg={6} md={6}>
                                <a href="#" className="article-card">
                                    <div className="article-card-image">
                                        <img src={ArticleProfile2} alt="ArticleProfile2" />
                                    </div>
                                    <div className="blog-card-wrapper">
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Software development trends in 2023</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-left-detail">
                                                    <img src={BlogProfile} alt="BlogProfile" />
                                                </div>
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                                <div className="blog-Arrow">
                                                   <img src={BlogArrow} alt="BlogArrow" />                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </a>
                            </Grid>
                            <Grid item lg={6} md={6}>
                                <a href="#" className="article-card">
                                    <div className="article-card-image">
                                        <img src={ArticleProfile3} alt="ArticleProfile3" />
                                    </div>
                                    <div className="blog-card-wrapper">
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Software development trends in 2023</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-left-detail">
                                                    <img src={BlogProfile} alt="BlogProfile" />
                                                </div>
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                                <div className="blog-Arrow">
                                                   <img src={BlogArrow} alt="BlogArrow" />                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </a>
                            </Grid>
                            <Grid item lg={6} md={6}>
                                <a href="#" className="article-card">
                                    <div className="article-card-image">
                                        <img src={ArticleProfile4} alt="ArticleProfile4" />
                                    </div>
                                    <div className="blog-card-wrapper">
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Software development trends in 2023</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-left-detail">
                                                    <img src={BlogProfile} alt="BlogProfile" />
                                                </div>
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                                <div className="blog-Arrow">
                                                   <img src={BlogArrow} alt="BlogArrow" />                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </a>
                            </Grid>
                            <Grid item lg={6} md={6}>
                                <a href="#" className="article-card">
                                    <div className="article-card-image">
                                        <img src={ArticleProfile5} alt="ArticleProfile5" />
                                    </div>
                                    <div className="blog-card-wrapper">
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Software development trends in 2023</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-left-detail">
                                                    <img src={BlogProfile} alt="BlogProfile" />
                                                </div>
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                                <div className="blog-Arrow">
                                                   <img src={BlogArrow} alt="BlogArrow" />                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </a>
                            </Grid>
                            <Grid item lg={6} md={6}>
                                <a href="#" className="article-card">
                                    <div className="article-card-image">
                                        <img src={ArticleProfile6} alt="ArticleProfile6" />
                                    </div>
                                    <div className="blog-card-wrapper">
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Software development trends in 2023</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-left-detail">
                                                    <img src={BlogProfile} alt="BlogProfile" />
                                                </div>
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                                <div className="blog-Arrow">
                                                   <img src={BlogArrow} alt="BlogArrow" />                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </a>
                            </Grid>
                            <Grid item lg={6} md={6}>
                                <a href="#" className="article-card">
                                    <div className="article-card-image">
                                        <img src={ArticleProfile7} alt="ArticleProfile7" />
                                    </div>
                                    <div className="blog-card-wrapper">
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Software development trends in 2023</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-left-detail">
                                                    <img src={BlogProfile} alt="BlogProfile" />
                                                </div>
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                                <div className="blog-Arrow">
                                                   <img src={BlogArrow} alt="BlogArrow" />                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </a>
                            </Grid>
                            <Grid item lg={6} md={6}>
                                <a href="#" className="article-card">
                                    <div className="article-card-image">
                                        <img src={ArticleProfile1} alt="ArticleProfile1" />
                                    </div>
                                    <div className="blog-card-wrapper">
                                        <div className="blog-card-body">
                                        
                                            <span>Development</span>
                                            <h3>Software development trends in 2023</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</p>

                                            <div className="blog-profile-detail">
                                                <div className="profile-left-detail">
                                                    <img src={BlogProfile} alt="BlogProfile" />
                                                </div>
                                                <div className="profile-right-detail">
                                                    <h6>Vishal Nakum</h6>
                                                    <p>Jan 5, 2023</p>
                                                </div>
                                                <div className="blog-Arrow">
                                                   <img src={BlogArrow} alt="BlogArrow" />                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </a>
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={{ xs: 3, sm: 3 }}>
                            <Grid item lg={12} xs={12}>
                                <div className="blog-btn">
                                    <Button className="load-more-btn">Load More</Button>
                                </div>
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
export default Blog