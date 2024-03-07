import * as React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import "assets/css/profile.css";

const ariaLabel = { "aria-label": "description" };

function PersonalDetailStepperContent() {
  const [country, setCountry] = React.useState("");
  const [city, setCity] = React.useState("");

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <h5 className="title">Personal Details</h5>
      <Grid container className="formGrid">
        <Grid className="formGrid-inner">
          <FormControl variant="standard" className="formControl">
            <InputLabel shrink htmlFor="bootstrap-input">
              First Name*
            </InputLabel>
            <Input
              className="inputField"
              placeholder="Enter first name"
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
              placeholder="Enter Last Name"
              inputProps={ariaLabel}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container className="formGrid">
        <Grid className="formGrid-inner">
          <FormControl variant="standard" className="formControl">
            <InputLabel shrink htmlFor="bootstrap-input">
              City & Country*
            </InputLabel>
            <Select
              value={country}
              onChange={handleChangeCountry}
              className="inputField"
              placeholder="Select country"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>New York, America</MenuItem>
              <MenuItem value={20}>USA</MenuItem>
              <MenuItem value={30}>Canada</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid className="formGrid-inner">
          <FormControl variant="standard" className="formControl">
            <InputLabel shrink htmlFor="bootstrap-input">
              City & Country*
            </InputLabel>
            <Select
              value={city}
              onChange={handleChangeCity}
              className="inputField"
              placeholder="Select city"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>New York, America</MenuItem>
              <MenuItem value={20}>USA</MenuItem>
              <MenuItem value={30}>Canada</MenuItem>
            </Select>
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
    </>
  );
}

export default PersonalDetailStepperContent;
