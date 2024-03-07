import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Select from "@mui/material/Select";
import "assets/css/add-developer.css";

import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const icon = (
  <RadioButtonUncheckedIcon fontSize="small" className="uncheckedCircle-icon" />
);
const checkedIcon = (
  <CheckCircleIcon fontSize="small" className="checkedCircle-icon" />
);

const ariaLabel = { "aria-label": "description" };

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

function ProfessionalDetailsForm() {
  const [country, setCountry] = React.useState("");

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  return (
    <>
      <Grid className="add_developer-form">
        <Grid container className="formGrid">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <FormControl variant="standard" className="formControl">
              <InputLabel shrink htmlFor="bootstrap-input">
                Skills*
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
                className="inputField"
                placeholder="Enter ID Proof"
                inputProps={ariaLabel}
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
      </Grid>
    </>
  );
}

export default ProfessionalDetailsForm;
