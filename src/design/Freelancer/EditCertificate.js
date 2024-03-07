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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import IconButton from "@mui/material/IconButton";

import "assets/css/profile.css";
import "assets/css/allModals.css";
import plusIcon from "assets/img/icons/plus-icon.svg";
import deleteIcon from "assets/img/icons/delete-icon.svg";
import Image1 from "assets/img/projectimage-1.png";
import Image2 from "assets/img/projectimage-2.png";
// import DeleteProjectDialog from "components/Dialog/DeleteProjectDialog";
import UpdateProjectDialog from "components/Dialog/UpdateProjectDialog";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";

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

const ariaLabel = { "aria-label": "description" };

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function EditCertificate(props) {
  const [value, setValue] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
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
      Profile
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/getting-started/installation/"
      onClick={handleClick}
    >
      My Profile
    </Link>,
    <Typography key="4" color="text.primary">
      Edit Certificate{" "}
    </Typography>,
  ];

  return (
    <>
      <Grid className="profile-top-section add_profile-top-section">
        <Container>
          <Grid container className="profile-top-inner">
            <Grid item lg={6} md={6} sm={12} xs={12}>
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
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <p className="clientId">
                Freelancer ID : <span>CB65854565</span>
              </p>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Container className="profile-container add_profile-container">
        <h4>Edit Work Experience</h4>
        <Grid className="profile-inner edit_project-inner">
          <Grid container>
            <Grid item lg={3} md={3} sm={3} className="projects-sidebar">
              <h5 className="title">Projects</h5>

              <List>
                <ListItem className="projectsListItem">
                  <Link href="#" underline="none">
                    Google IT Automation
                  </Link>
                </ListItem>
                <ListItem className="projectsListItem">
                  <Link href="#" underline="none">
                    Javascript  Automation
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    underline="none"
                    className="addBranchBtn cursor-pointer"
                  >
                    <img src={plusIcon} alt="add" /> add New
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item lg={9} md={9} sm={9} className="editProject-container">
              <Grid className="edit-conatiner">
                <div className="edit-container-header">
                  <h5 className="title">Certificate  1</h5>
                  {/* <IconButton
                    onClick={handleOpenDialog}
                    aria-label="delete"
                    size="medium"
                    className="cursor-pointer"
                  >
                    <img
                      src={deleteIcon}
                      alt="img"
                      style={{ filter: "brightness(10)" }}
                    />
                  </IconButton> */}
                </div>
                <div className="edit-container-content">
                  <Grid container className="formGrid">
                    <Grid className="formGrid-inner">
                      <FormControl variant="standard" className="formControl">
                        <InputLabel shrink htmlFor="bootstrap-input">
                          Certificate Title*
                        </InputLabel>
                        <Input
                          className="inputField"
                          placeholder="Enter certificate title"
                          inputProps={ariaLabel}
                        />
                      </FormControl>
                    </Grid>
                    <Grid className="formGrid-inner">
                      <FormControl variant="standard" className="formControl">
                        <InputLabel shrink htmlFor="bootstrap-input">
                          Certification Date*
                        </InputLabel>
                        <Grid
                          container
                          className="formGrid datepicker-formGrid"
                        >
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <DatePicker
                                value={value}
                                onChange={(newValue) => {
                                  setValue(newValue);
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                        </Grid>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container className="formGrid">
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <FormControl variant="standard" className="formControl">
                        <InputLabel shrink htmlFor="bootstrap-input">
                          Certification Image*
                        </InputLabel>
                        <Input
                          className="inputField"
                          placeholder="Enter image*"
                          inputProps={ariaLabel}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container className="formGrid">
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <FormControl variant="standard" className="formControl">
                        <InputLabel shrink htmlFor="bootstrap-input">
                          Description*
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
                </div>
              </Grid>
              <Grid className="action-div">
                <Link href="#" underline="none" className="previousBtn">
                  Cancel
                </Link>
                <Button
                  onClick={handleOpenDialog}
                  variant="contained"
                  className="primaryButton nextBtn"
                  href="/add-project-detail"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <UpdateProjectDialog open={openDialog} close={handleCloseDialog} />
    </>
  );
}

export default EditCertificate;
