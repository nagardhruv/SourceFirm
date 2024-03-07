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
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import userIcon from "assets/img/icons/user.svg";
import editIcon from "assets/img/icons/edit-icon.svg";

import "assets/css/profile.css";
import "assets/css/allModals.css";

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

function AddDeveloper(props) {
  const { uploadImage, previewImage } = props;

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
  const circle = (
    <Box component="span" className="profileEditBox">
      <img src={previewImage ? previewImage : userIcon} className={previewImage ? "profile_image" : "default"} alt='img' />
    </Box>
  );

  const editImage = (
    <label htmlFor="icon-button-file">
      <Input accept="image/*" name="profile_image" id="icon-button-file" type="file" onChange={uploadImage} />
      <IconButton aria-label="upload picture" component="span">
        <img src={editIcon} alt='img' />
      </IconButton>
    </label>
  );

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
            <h5 className="title">Developer Details</h5>
            <Grid item lg={12} md={12} sm={12} className="text-center">
              <Badge color="secondary" overlap="circular" className='profileBadge' badgeContent={editImage}>
                {circle}
              </Badge>
            </Grid>
            <Grid container className="formGrid">
              <Grid className="formGrid-inner">
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Full Name*
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
                    Last Name*
                  </InputLabel>
                  <Input
                    className="inputField"
                    placeholder="Enter full name"
                    inputProps={ariaLabel}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className="formGrid">
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Location*
                  </InputLabel>
                  <Input
                    className="inputField"
                    placeholder="Enter location"
                    inputProps={ariaLabel}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className="formGrid">
              <Grid className="formGrid-inner">
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Email (Uneditable)*
                  </InputLabel>
                  <Input
                    className="inputField"
                    placeholder="Enter Email"
                    inputProps={ariaLabel}
                  />
                </FormControl>
              </Grid>
              <Grid className="formGrid-inner">
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Contact Number
                  </InputLabel>
                  <Input
                    className="inputField"
                    placeholder="Enter contact number"
                    inputProps={ariaLabel}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className="formGrid">
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Skill*
                  </InputLabel>
                  <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={skills}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title}
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                        />
                        {option.title}
                      </li>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className="multiSelect-Textfield"
                        placeholder="Select skills"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className="formGrid">
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Sub-skills*
                  </InputLabel>
                  <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={skills}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title}
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                        />
                        {option.title}
                      </li>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className="multiSelect-Textfield"
                        placeholder="Select skills"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className="formGrid">
              <Grid className="formGrid-inner">
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Profile Type*
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
                    Experience*
                  </InputLabel>
                  <Input
                    className="inputField"
                    placeholder="Enter experience"
                    inputProps={ariaLabel}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className="formGrid">
              <Grid className="formGrid-inner">
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Working Hours in Month*
                  </InputLabel>
                  <Input
                    className="inputField"
                    placeholder="Enter number"
                    inputProps={ariaLabel}
                  />
                </FormControl>
              </Grid>
              <Grid className="formGrid-inner">
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    ID Proof
                  </InputLabel>
                  <Input
                    className="inputField customFile-input"
                    placeholder="Upload file"
                    multiple
                    type="file"
                    accept=".pdf,image/*"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className="formGrid">
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Technologies*
                  </InputLabel>
                  <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={subCategories}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title}
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                        />
                        {option.title}
                      </li>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className="multiSelect-Textfield"
                        placeholder="Select technologies"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className="formGrid">
              <Grid className="formGrid-inner">
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Education*
                  </InputLabel>
                  <Input
                    className="inputField"
                    placeholder="Enter education"
                    inputProps={ariaLabel}
                  />
                </FormControl>
              </Grid>
              <Grid className="formGrid-inner">
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Language*
                  </InputLabel>
                  <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={skills}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title}
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                        />
                        {option.title}
                      </li>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className="multiSelect-Textfield"
                        placeholder="Select language"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className="formGrid">
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <FormControl variant="standard" className="formControl">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Specialties
                  </InputLabel>
                  <TextField
                    className="multiSelect-Textfield"
                    multiline
                    rows={1}
                    placeholder="Enter text"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className="formGrid">
              <Grid item lg={12} md={12} sm={12} xs={12}>
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

            <Grid className="action-div">
              <Link href="#" underline="none" className="previousBtn">
                Cancel
              </Link>
              <Button
                variant="contained"
                className="primaryButton nextBtn"
                href="/add-project-detail"
              >
                Submit & Continue
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AddDeveloper;
