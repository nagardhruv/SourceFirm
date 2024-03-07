import React from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

export default function MultilineTextArea(props) {
  const { meta: { touched, error }, labelText, id, labelProps,  input, rows, placeholder, multiline, maxRows } = props;

  return (
    <FormControl
      variant="standard" className='formControl'
      error={touched && Boolean(error)}
    >
      {labelText !== undefined ? (
        <InputLabel
          shrink
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <TextField
        className='multiSelect-Textfield'
        inputProps={{
          autoComplete: 'new-password',
          ...input
        }}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        placeholder={placeholder}
        id={id}
        error={touched && Boolean(error)}
      />
      {touched && error ? (
        <FormHelperText style={{ color: 'red' }}>{touched && error}</FormHelperText>
      ) : null}
    </FormControl>
  );
}


MultilineTextArea.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
  input: PropTypes.object,
};
