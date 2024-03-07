import * as React from "react";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ProjectCard from "components/Cards/ProjectCard";
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
import "assets/css/profile.css";
import "assets/css/allModals.css";

import freelancerProfileIcon from "assets/img/icons/freelancer-icon-white.svg";
import editIcon from "assets/img/icons/edit-icon.svg";
import envelopeIcon from "assets/img/icons/envelope.svg";
import locationIcon from "assets/img/icons/location.svg";
import phoneIcon from "assets/img/icons/phone.svg";
// import certificate1 from "assets/img/certificate-1.png";
// import certificate2 from "assets/img/certificate-2.png";
// import certificate3 from "assets/img/certificate-3.png";
import KeyIcon from 'assets/img/icons/Key-icon.svg';
// import deleteIcon from "assets/img/icons/delete-icon.svg";
import ProfessionalDetailTab from "./ProfessionalDetailTab";
// import NewProjectCard from "components/Cards/NewProjectCard";
import ProjectDetailTab from "./ProjectDetailTab";
import CertificateDetailTab from "./CertificateDetailTab";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function AgencyDeveloperProfile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const [value, setValue] = React.useState(0);

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
      Manage Developers
    </Link>,
    <Typography key="4" color="text.primary">
      Developer Profile
    </Typography>,
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid className="profile-top-section freelancer_profile-top-section">
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
      </Grid>
      <Container className="profile-container my_profile-container">
        <Grid className="userprofile-detail-section">
          <Grid className="userDetails">
            <Grid className="userImage">
              <div className="user">
                <img src={freelancerProfileIcon} alt="img" />
              </div>
            </Grid>
            <Grid className="userInfo">
              <div>
                <h4>Isabelle Eileen</h4>
                <p className="clientId">
                  Developer ID : <span>IE65482369</span>
                </p>
              </div>
              {/* <img className='more_action' src={moreActionIcon} alt='img' /> */}
              <div>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={openMenu ? "long-menu" : undefined}
                  aria-expanded={openMenu ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleMenuClick}
                  className="more_action"
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleMenuClose}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  PaperProps={{
                    style: {
                      width: "14ch",
                    },
                  }}
                >
                  <MenuItem
                    onClick={handleMenuClose}
                    className="more_actionList"
                  >
                    <Link>
                      <img
                        src={editIcon}
                        style={{ width: "12px" }}
                        alt="img"
                      />
                      Edit Profile
                    </Link>
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuClose}
                    className="more_actionList"
                  >
                    <Link>
                      <img
                        src={KeyIcon}
                        style={{ width: "12px" }}
                        alt="img"
                      />
                      Change Password
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </Grid>
          </Grid>
          <Grid className="companyDetails experienceDetails">
            <Grid className="formGrid">
              <label>Profile Type</label>
              <p>Senior</p>
            </Grid>
            <Grid className="formGrid">
              <label>Experience</label>
              <p>7+ Years</p>
            </Grid>
            <Grid className="formGrid">
              <label>Projects</label>
              <p>08</p>
            </Grid>
            <Grid className="formGrid">
              <label>Availability</label>
              <p>Full Time</p>
            </Grid>
            <Grid className="formGrid">
              <label>Education</label>
              <p>Msc</p>
            </Grid>
          </Grid>
        </Grid>

        {/* Agency Profile Details */}
        <Grid container className="freelancer_profile-details">
          <Grid item lg={4} md={4} sm={12}>
            <Grid className="profile-inner my_profile-inner personalDetail-section">
              <Grid className="title">
                <Typography variant="h5">Personal Details</Typography>
                <Link className="edit-icon">
                  <img src={editIcon} alt="img" />
                </Link>
              </Grid>
              <Grid container className="formGrid">
                <FormControl variant="standard" className="formControl">
                  <Avatar className="profile_avatar">
                    <img src={phoneIcon} alt="img" />
                  </Avatar>
                  <Grid>
                    <label>Contact Number</label>
                    <p className="value">+918424575478</p>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid container className="formGrid">
                <FormControl variant="standard" className="formControl">
                  <Avatar className="profile_avatar">
                    <img src={envelopeIcon} alt="img" />
                  </Avatar>
                  <Grid>
                    <label>Email</label>
                    <p className="value">cherryblossom455@test.com</p>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid container className="formGrid">
                <FormControl variant="standard" className="formControl">
                  <Avatar className="profile_avatar">
                    <img src={locationIcon} alt="img" />
                  </Avatar>
                  <Grid>
                    <label>Location</label>
                    <p className="value">New York, America</p>
                  </Grid>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={8} md={8} sm={12}>
            <Grid className="profile-inner my_profile-inner otherDetail-section">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    label="Professional Details"
                    {...a11yProps(0)}
                    className="tab-title"
                  />
                  <Tab
                    label="Projects"
                    {...a11yProps(1)}
                    className="tab-title"
                  />
                  <Tab
                    label="Certificates"
                    {...a11yProps(2)}
                    className="tab-title"
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <ProfessionalDetailTab />
              </TabPanel>
              <TabPanel value={value} index={1} className="projects">
                <ProjectDetailTab />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <CertificateDetailTab />
              </TabPanel>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AgencyDeveloperProfile;
