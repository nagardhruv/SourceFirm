import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from "@material-ui/core/FormLabel";
import classNames from "classnames";
import styles from "assets/jss/material-dashboard-react/components/customInputStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons


const useStyles = makeStyles(styles);
/* Textfield */
export default function InputFieldNew({ meta: { touched, error }, input,
  success, id, labelProps, labelText, formControlProps, iconProps, ...rest }) {
  const [val] = useState('');
  const classes = useStyles();
  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined
  });
  return (
    <>
      <FormControl
        {...formControlProps}
        className={formControlProps.className + " " + classes.formControl}
        error={touched && Boolean(error)}
        style={{ width: '100%' }}
      >
        {labelText !== undefined ? (
          <FormLabel
            className={classes.labelRoot + labelClasses}
            htmlFor={id}
            {...labelProps}
          >
            {labelText}
          </FormLabel>
        ) : null}
        <TextField
          {...rest}
          {...input}
          classes={{
            root: marginTop,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {iconProps}
              </InputAdornment>
            )
          }}
          id={id}
          value={val || input.value}
          error={touched && Boolean(error)}
        />
        {touched && error && <FormHelperText>{touched && error}</FormHelperText>}
      </FormControl>
    </>
  );
}


InputFieldNew.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  InputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
};

InputFieldNew.defaultProps = {
  meta: null,
};