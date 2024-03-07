import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "assets/css/developer-profile.css";
import "assets/css/client-profile.css";
import "assets/css/profile.css";
import "assets/css/projectCard.css";
import suitcaseIcon from "assets/img/icons/suitcase-blue-icon.svg";
import paperIcon from "assets/img/icons/paper-blue-icon.svg";
import clockIcon from "assets/img/icons/clock-blue-icon.svg";
import graduateIcon from "assets/img/icons/graduate-blue-icon.svg";
import certiImage1 from "assets/img/certificate-1.png";
import linkIcon from "assets/img/icons/link-icon.svg";
import arrowIcon from "assets/img/icons/arrow-right.svg";
import noProjectImage from "assets/img/icons/no-projects-icon.svg";
import { Divider } from "@mui/material";


function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function CandidateProfile() {
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
      Developer
    </Link>,
    <Typography key="4" color="text.primary">
      Profile
    </Typography>,
  ];

  const settings = {
    dots: false,
    margin: 10,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    marginLeft: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 5,
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
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <Grid container className="profile-top-inner">
          <Grid item lg={12} md={12} sm={12}>
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
        </Grid>
      </Container>
      <Container>
        <Grid container className="dashboard-container candidate-profile">
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Grid className="left-profile-container">
              <div className="profile-details">
                <Typography variant="h5" className="profile-id">
                  CA4654854256
                </Typography>
                <Typography className="profile-position">
                  Software Developer
                </Typography>
              </div>
              <div className="profile-subDetails">
                <img src={suitcaseIcon} alt="img" />
                <Typography>
                  <span>7+ Years</span>
                  <br></br>
                  Experience
                </Typography>
              </div>
              <div className="profile-subDetails">
                <img src={paperIcon} alt="img" />
                <Typography>
                  <span>24</span>
                  <br></br>
                  Projects Done
                </Typography>
              </div>
              <div className="profile-subDetails">
                <img src={clockIcon} alt="img" />
                <Typography>
                  <span>Full Time</span>
                  <br></br>
                  Availability
                </Typography>
              </div>
              <div className="profile-subDetails">
                <img src={graduateIcon} alt="img" />
                <Typography>
                  <span>Msc</span>
                  <br></br>
                  Education
                </Typography>
              </div>
              <Divider />
              <Grid className="lang-section candidate-lang-section">
                <Typography className="title">Language</Typography>
                <div className="language-section">
                  <div className="language-div">
                    <Typography id="langEng-slider">English</Typography>
                    <Typography className="lang-status">Fluent</Typography>
                    <Slider
                      disabled={true}
                      defaultValue={100}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                      className="language_slider"
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Grid className="right-profile-container">
              <Grid className="profile-aboutContent">
                <Typography className="candidate-profile-title">
                  About
                </Typography>
                <Typography className="candidate-profile-description">
                  Hi, I am professional Software Developer with 4+ years of
                  experience. I can design website ui, app ui, dashboard ui,
                  thank you card, logo, flyer, brochure, banner, etc. If you
                  need any help just give me a knock. Looking forward to working
                  with you! Lorem ipsum Mauris nec erat ut libero vulputate
                  pulvinar. Aliquam ante erat, blandit at pretium et, accumsan
                  ac est. Integer vehicula rhoncus molestie. Consectetur
                  adipisicing elit. Debitis illum fuga eveniet. Deleniti
                  asperiores, commodi quae ipsum quas est itaque, ipsa, dolore
                  beatae. Voluptates nemo blanditiis iste eius officia minus. Id
                  nisi, consequuntur sunt. Consectetur adipisicing elit. Debitis
                  illum fuga eveniet. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry Lorem Ipsum has been the
                  industry standard dummy text. Lorem Ipsum is simply dummy
                  text. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry
                  standard dummy text.
                </Typography>
              </Grid>
              <Grid className="specialties-section">
                <Typography className="candidate-profile-title">
                  Specialties
                </Typography>
                <Typography className="candidate-profile-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry
                  standard dummy text. Lorem Ipsum is simply dummy text. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry Lorem Ipsum has been the industry standard dummy
                  text. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry
                  standard dummy text. Lorem Ipsum is simply dummy text. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry Lorem Ipsum has been the industry standard dummy
                  text.
                </Typography>
              </Grid>
              <Grid className="skills-section">
                <Typography className="candidate-profile-title">
                  Skills
                </Typography>
                <Grid>
                  <List className="categoryList">
                    <ListItem className="categoryList-item">
                      <ListItemText primary="Software Development" />
                    </ListItem>
                    <ListItem className="categoryList-item">
                      <ListItemText primary="Web Development" />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Grid className="sub-skills-section">
                <Typography className="candidate-profile-title">
                  Sub-Skills
                </Typography>
                <Grid>
                  <List className="categoryList">
                    <ListItem className="categoryList-item">
                      <ListItemText primary="Sub-skill 1" />
                    </ListItem>
                    <ListItem className="categoryList-item">
                      <ListItemText primary="Sub-skill 2" />
                    </ListItem>
                    <ListItem className="categoryList-item">
                      <ListItemText primary="Sub-skill 3" />
                    </ListItem>
                    <ListItem className="categoryList-item">
                      <ListItemText primary="Sub-skill 4" />
                    </ListItem>
                    <ListItem className="categoryList-item">
                      <ListItemText primary="Sub-skill 5" />
                    </ListItem>
                    <ListItem className="categoryList-item">
                      <ListItemText primary="Sub-skill 6" />
                    </ListItem>
                    <ListItem className="categoryList-item">
                      <ListItemText primary="Sub-skill 7" />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Grid className="technologies-section">
                <Typography className="candidate-profile-title">
                  Technologies
                </Typography>
                <Grid>
                  <List className="categoryList">
                    <ListItem className="categoryList-item">
                      <ListItemText primary="Node" />
                    </ListItem>
                    <ListItem className="categoryList-item">
                      <ListItemText primary="Java" />
                    </ListItem>
                    <ListItem className="categoryList-item">
                      <ListItemText primary="HTML" />
                    </ListItem>
                    <ListItem className="categoryList-item">
                      <ListItemText primary="Flutter" />
                    </ListItem>
                    <ListItem className="categoryList-item">
                      <ListItemText primary="Node" />
                    </ListItem>
                    <ListItem className="categoryList-item">
                      <ListItemText primary="Java" />
                    </ListItem>
                    <ListItem className="categoryList-item">
                      <ListItemText primary="Adobe XD" />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Grid className="certificates-section">
                <div className="title-section">
                  <Typography className="candidate-profile-title">
                    Certificates
                  </Typography>
                  <a href="#" className="see-all-btn">See All</a>
                </div>

                <Grid>
                  <Grid item lg={12}>
                    <Slider {...settings} className="certificate_slider">
                      <div className="item">
                        <div className="candidate-certificateCard">
                          <div className="card-img">
                            <img src={certiImage1} alt="img" />
                          </div>
                          <div>
                            <Typography className="certi-title">
                              Google IT Automation
                            </Typography>
                            <Typography className="certi-date">
                              01 March 2021
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="candidate-certificateCard">
                          <div className="card-img">
                            <img src={certiImage1} alt="img" />
                          </div>
                          <div>
                            <Typography className="certi-title">
                              Google IT Automation 2
                            </Typography>
                            <Typography className="certi-date">
                              01 March 2021
                            </Typography>
                          </div>
                        </div>
                      </div>
                      {/* <div className="item">
                      <div className="candidate-certificateCard">
                        <div className="card-img">
                          <img src={certiImage1} alt="img"/>
                        </div>
                        <div>
                          <Typography className="certi-title">
                          Google IT Automation 3
                          </Typography>
                          <Typography className="certi-date">
                          01 March 2021
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="candidate-certificateCard">
                        <div className="card-img">
                          <img src={certiImage1} alt="img"/>
                        </div>
                        <div>
                          <Typography className="certi-title">
                          Google IT Automation 4
                          </Typography>
                          <Typography className="certi-date">
                          01 March 2021
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="candidate-certificateCard">
                        <div className="card-img">
                          <img src={certiImage1} alt="img"/>
                        </div>
                        <div>
                          <Typography className="certi-title">
                          Google IT Automation 5
                          </Typography>
                          <Typography className="certi-date">
                          01 March 2021
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="candidate-certificateCard">
                        <div className="card-img">
                          <img src={certiImage1} alt="img"/>
                        </div>
                        <div>
                          <Typography className="certi-title">
                          Google IT Automation 6
                          </Typography>
                          <Typography className="certi-date">
                          01 March 2021
                          </Typography>
                        </div>
                      </div>
                    </div> */}
                    </Slider>
                  </Grid>
                  <Grid className="certificate-card-empty">
                    <div>
                      <img src={noProjectImage} alt="img" />
                      <Typography>No Certificates!</Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <div className="projects-section">
                <Typography className="candidate-profile-title">
                  Projects
                </Typography>
                <Grid
                  container
                  className="projectsList candidateprofile-projects"
                >
                  <Grid item className="projectListItem">
                    <Card className="project-card">
                      <div className="project-card-inner">
                        <CardContent>
                          <Grid className="project-top">
                            <div className="icon-container">
                              <Typography>MS</Typography>
                            </div>
                            <div className="project-title cursor-pointer">
                              <p className="name">Microsoft</p>
                            </div>
                            <a href="#" target="_blank">
                              <img src={linkIcon} alt="img" />
                            </a>
                            <Grid className="duration-details">
                              <Typography>
                                <span>02 March 2021</span>
                                <span> to </span>
                                <span>18 May 2021</span>
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid className="about_project">
                            <Typography>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry Lorem Ipsum has been the
                              industry standard dummy text. Lorem Ipsum is
                              simply dummy text. Lorem Ipsum is simply dummy
                              text of the printing and typesetting industry
                              Lorem Ipsum has been the industry standard dummy
                              text...
                            </Typography>
                          </Grid>
                          <Grid className="skillset">
                            <List className="skillList">
                              <ListItem className="skillList-item">
                                <ListItemText primary="Java" />
                              </ListItem>
                            </List>
                          </Grid>
                          <a href="#" className="arrow-link">
                            <img src={arrowIcon} alt="img" />
                          </a>
                        </CardContent>
                      </div>
                    </Card>
                  </Grid>
                  <Grid className="project-card-empty">
                    <div>
                      <img src={noProjectImage} alt="img" />
                      <Typography>No Projects!</Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CandidateProfile;
