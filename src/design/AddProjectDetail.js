import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import "assets/css/profile.css";
import "assets/css/allModals.css";

import deleteIcon from 'assets/img/icons/delete-icon.svg';
import Image1 from 'assets/img/projectimage-1.png';
import Image2 from 'assets/img/projectimage-2.png';

const icon = (
  <RadioButtonUncheckedIcon fontSize="small" className="uncheckedCircle-icon" />
);
const checkedIcon = (
  <CheckCircleIcon fontSize="small" className="checkedCircle-icon" />
);

// skills
const subCategories = [
  { title: "sub-category" },
  { title: "sub-category" },
  { title: "sub-category" },
  { title: "sub-category" },
  { title: "sub-category" },
  { title: "sub-category" },
  { title: "sub-category" },
  { title: "sub-category" },
  { title: "sub-category" },
];

const skills = [
  { title: "skill" },
  { title: "skill" },
  { title: "skill" },
  { title: "skill" },
  { title: "skill" },
  { title: "skill" },
  { title: "skill" },
  { title: "skill" },
  { title: "skill" },
];

const ariaLabel = { "aria-label": "description" };

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function AddProjectDetail(props) {
    const [country, setCountry] = React.useState('');
    const [value, setValue] = React.useState(null);

    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
    };

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
    <Typography key="3" color="text.primary">
      Add Developer
    </Typography>,
  ];

  return (
    <>
      <Grid className="profile-top-section add_profile-top-section">
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
      <Container className="profile-container add_profile-container">
        <h4>Add Developer</h4>
        <Grid className="profile-inner add_profile-inner">
          <Grid className="add_profile-form">
            <h5 className="title">Project Details</h5>
            <Grid container className="formGrid">
              <Grid className="formGrid-inner">
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Project Name*
                  </InputLabel>
                  <Input
                    className="inputField"
                    placeholder="Enter full name"
                    inputProps={ariaLabel}
                  />
                </FormControl>
              </Grid>
              <Grid className="formGrid-inner">
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Project Duration*
                  </InputLabel>
                  {/* <Input className='inputField' placeholder="Enter full name" inputProps={ariaLabel} /> */}
                  <Grid container className="formGrid datepicker-formGrid">
                    <Grid className="formGrid-inner">
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <span>to</span>
                    <Grid className="formGrid-inner">
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className="formGrid">
              <Grid item lg={12} md={12} sm={12}>
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Used Technologies*
                  </InputLabel>
                  <Select
                    value={country}
                    onChange={handleChangeCountry}
                    className="inputField"
                    placeholder="Select category"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>category 1</MenuItem>
                    <MenuItem value={20}>category 2</MenuItem>
                    <MenuItem value={30}>category 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className="formGrid">
              <Grid item lg={12} md={12} sm={12}>
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    About*
                  </InputLabel>
                  <TextField
                    className="multiSelect-Textfield"
                    multiline
                    rows={4}
                    placeholder="Enter text"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid className="add-image-container">
              <p className="label">Images</p>
              <List className="add-imageList">
                <ListItem className="item">
                  <img src={Image1} alt="img" />
                  <div className="imageOverlay">
                    <img src={deleteIcon} alt="img" />
                  </div>
                </ListItem>
                <ListItem className="item">
                  <img src={Image2} alt="img" />
                  <div className="imageOverlay">
                    <img src={deleteIcon} alt="img" />
                  </div>
                </ListItem>
                <ListItem className="add-imageBox">
                  <Button>
                    +<br />
                    Add Image
                  </Button>
                </ListItem>
              </List>
            </Grid>
            <Grid container className="formGrid">
              <Grid item lg={12} md={12} sm={12}>
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Project link
                  </InputLabel>
                  <Input
                    className="inputField"
                    placeholder="Enter link"
                    inputProps={ariaLabel}
                  />
                </FormControl>
              </Grid>
            </Grid>
            
            <Grid className="action-div">
            <Link href="#" underline="none" className="skipNowBtn">
                Skip for Now
            </Link>
              <Link href="#" underline="none" className="previousBtn">
                Cancel
              </Link>
              <Button
                variant="contained"
                className="primaryButton nextBtn"
                href="/add-project-detail"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AddProjectDetail;
