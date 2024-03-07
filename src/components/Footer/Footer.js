import * as React from "react";
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';
// import Input from '@mui/material/Input';
import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import FormControl from '@mui/material/FormControl';
import 'assets/css/footer.css';

import logo from 'assets/img/logo-white.png';
import history from "utils/history";
import moment from "moment";
import facebookIcon from "assets/img/icons/facebook-followus.svg";
import instagramIcon from "assets/img/icons/instagram-followus.svg";
import twitterIcon from "assets/img/icons/twitter-followus.svg";
import linkedIcon from "assets/img/icons/linkedin-followus.svg";

function Footer() {
  const handleRedirection = (path) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    history.push(`/${path}`)
  }

  return (
    <footer className="footer px-0 px-lg-3 footer-reserve-section">
      <Container>
        <Grid container alignItems="center" >
          <Grid item lg={5} md={4} sm={3} xs={12}>
            <Grid className="footer-content">
              <div className="footer-logo">
                <a href="#">
                  <img src={logo} alt="logo"></img>
                </a>

              </div>
              <div className="footer-follow-us">
                <h3>Follow Us</h3>

                <div className="footer-main-icon">

                  <Link className="social-links" href="https://www.facebook.com/sourcefirms" target="_blank">
                    <img src={facebookIcon} />
                  </Link>
                  <Link className="social-links" href="https://twitter.com/sourcefirms" target="_blank">
                    <img src={twitterIcon} />
                  </Link>
                  <Link className="social-links" href="https://www.linkedin.com/company/sourcefirms/" target="_blank">
                    <img src={linkedIcon} />
                  </Link>
                  <Link className="social-links" href="https://www.instagram.com/sourcefirms/" target="_blank">
                    <img src={instagramIcon} />
                  </Link>
                </div>
              </div>
              {/* <h5 className="link-title">
                subscribe our Newsletter
              </h5>
              <p>
                Be the first one to know  about discounts, offers and events. Unsubscribe whenever you like.
              </p>
              <FormControl variant="standard" className='formControl subscribe-input'> */}
              {/* <InputLabel shrink htmlFor="bootstrap-input">
                  Email
                </InputLabel> */}
              {/* <Input className='inputField' placeholder="Enter your email" />
                <Button variant="contained" className="primaryButton btn-fill submit-btn" type="submit">
                  Submit
                </Button>
              </FormControl> */}
            </Grid>
          </Grid>
          {/* <Grid item lg={1} md={1} sx={{ display: { md: 'none', lg: 'block' } }}></Grid> */}
          <Grid item lg={7} md={8} sm={9} xs={12}>
            <div className="footer-content footer-main-menu">
              {/* <h5 className="link-title">
                About
              </h5> */}
              <ul className="footer-links footer-text">
                <li>
                  <Link onClick={() => handleRedirection('about-us')}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link onClick={() => handleRedirection('terms-condition')}>Terms and Conditions</Link>
                </li>

                <li>
                  <Link onClick={() => handleRedirection('contact-us')}>Contact Us</Link>
                </li>
                <li>
                  <Link onClick={() => handleRedirection('privacy-policy')}>Privacy Policy</Link>
                </li>


                <li>
                  <Link onClick={() => handleRedirection('faq')}>FAQs</Link>
                </li>

              </ul>
              <ul className="footer-links ">
                <li>
                  <h4>How It Works</h4>
                </li>
                <li>
                  <Link onClick={() => handleRedirection('how-it-works/client')}> For Client</Link>
                </li>
                <li>
                  <Link onClick={() => handleRedirection('how-it-works/agency')}> For Agency</Link>
                </li>
              </ul>
            </div>
          </Grid>
          {/* <Grid item lg={2} md={2} sm={4} xs={4}>
            <div className="footer-content"> */}
          {/* <h5 className="link-title">
                Support
              </h5> */}
          {/* <ul className="footer-links">
                <li>
                  <Link>Contact us</Link>
                </li>
              </ul>
            </div> */}
          {/* </Grid> */}
          {/* <Grid item lg={2} md={2} sm={4} xs={4}>
            <div className="footer-content"> */}
          {/* <h5 className="link-title">
                FAQ
              </h5> */}
          {/* <ul className="footer-links">
                <li>
                  <Link>Account</Link>
                </li>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </Grid> */}
        </Grid>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="footer-bottom footer-content text-center">
              <p className="copyright">{`© 2021-${moment().format('YYYY')}, All Rights Reserved`}</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
