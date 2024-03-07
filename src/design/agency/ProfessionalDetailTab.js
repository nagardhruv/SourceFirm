import * as React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import "assets/css/profile.css";
import "assets/css/allModals.css";
import editIcon from "assets/img/icons/edit-icon.svg";
import fileIcon from 'assets/img/icons/file-icon.svg';
import FormControl from "@mui/material/FormControl";

function ProfessionalDetailTab() {

  return (
    <>
      <Grid container justifyContent="flex-end" style={{ paddingBottom: '20px', }}>
        <Typography className='approval-tag profileInnerApproval-tag'>
          Professional Detail is under approval
        </Typography>
        <IconButton className="edit-icon editBtn cursor-pointer">
          <img src={editIcon} alt="img" />
        </IconButton>
      </Grid>
      <p className="CategoryTitle">Skill</p>
      <Grid>
        <List className="categoryList">
          <ListItem className="categoryList-item">
            <ListItemText primary="Software Development" />
          </ListItem>
          <ListItem className="categoryList-item">
            <ListItemText primary="Web Development" />
          </ListItem>
          <ListItem className="categoryList-item">
            <ListItemText primary="Web Development" />
          </ListItem>
          <ListItem className="categoryList-item">
            <ListItemText primary="Web Development" />
          </ListItem>
          <ListItem className="categoryList-item">
            <ListItemText primary="Web Development" />
          </ListItem>
          <ListItem className="categoryList-item">
            <ListItemText primary="Web Development" />
          </ListItem>
          <ListItem className="categoryList-item">
            <ListItemText primary="Web Development" />
          </ListItem>
        </List>
      </Grid>

      <p className="CategoryTitle">Sub-skills</p>
      <Grid>
        <List className="categoryList">
          <ListItem className="subcategoryList-item">
            <ListItemText primary="Node" />
          </ListItem>
          <ListItem className="subcategoryList-item">
            <ListItemText primary="Java" />
          </ListItem>
          <ListItem className="subcategoryList-item">
            <ListItemText primary="HTML" />
          </ListItem>
          <ListItem className="subcategoryList-item">
            <ListItemText primary="Flutter" />
          </ListItem>
          <ListItem className="subcategoryList-item">
            <ListItemText primary="Node" />
          </ListItem>
          <ListItem className="subcategoryList-item">
            <ListItemText primary="Java" />
          </ListItem>
          <ListItem className="subcategoryList-item more-subcategory">
            <ListItemText primary="+6" />
          </ListItem>
        </List>
      </Grid>
      <Grid className="aboutContent">
        <p className="developer-profile-subtitle">About</p>
        <p className="content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum has been the industry&#39;s standard dummy text.
          Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry Lorem Ipsum has been the
          industry&#39;s standard dummy text. Lorem Ipsum is simply dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum has been the industry&#39;s standard dummy text.
          Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry Lorem Ipsum has been the
          industry&#39;s standard dummy text. Lorem Ipsum is simply dummy text.
          <a href="#">Read More</a>
        </p>

        <p className="developer-profile-subtitle">Specialties</p>
        <p className="content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum has been the industry&#39;s standard dummy text.
          Lorem Ipsum is simply dummy text.
          <a href="#">Read More</a>
        </p>

        <p className="developer-profile-subtitle">Location</p>
        <p className="content location">
          3117, Hillhaven Drive, Santa Fe Springs, New York, America
        </p>

        {/* language slider */}
        <p className="developer-profile-subtitle">Language</p>
        <div className="language-section">
          <div className="language-div">
            <Typography id="langEng-slider">English</Typography>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" className="language_slider" />
          </div>
          <div className="language-div">
            <Typography id="langHindi-slider">Hindi</Typography>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" className="language_slider" />
          </div>
        </div>

        <Grid container className='formGrid'>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <FormControl variant="standard" className='formControl'>
              <Grid>
                <label className="idProof-label">ID Proof <span className='updated-dot'></span></label>
                <Typography variant='p' component='p' className='idProof-name'>
                  <span><img src={fileIcon} height="16px" alt="img" /></span>
                  PAN Card.pdf
                  <a href="#" className="downloadBtn">Download</a>
                </Typography>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

    </>
  );
}

export default ProfessionalDetailTab;
