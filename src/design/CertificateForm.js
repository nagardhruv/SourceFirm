import * as React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';

import closeIcon from 'assets/img/icons/close-icon.svg';

const ariaLabel = { 'aria-label': 'description' };

function CertificateForm() {
  return (
    <Grid className="work-history certificate-form">
      <div className="history-count">
        <p>Certificate  1</p>
      </div>
      <a href="#" className="closebtn">
        <img src={closeIcon} alt="close" />
      </a>
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
            <Input
              className="inputField"
              placeholder="Enter date"
              inputProps={ariaLabel}
            />
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
    </Grid>
  );
}

export default CertificateForm;
