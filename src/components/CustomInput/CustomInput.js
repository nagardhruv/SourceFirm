import React from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';

export default function CustomInput(props) {
  const { meta: { touched, error }, labelText, id, labelProps, inputProps, input, inputRef, onKeyDown, dataTestId } = props;
  return (
    <FormControl variant="standard" className='formControl'>
      {labelText !== undefined ? (
        <InputLabel
          shrink
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        className='inputField'
        inputProps={{
          //autoComplete: 'new-password',
          autoComplete: "off",
          min: '0',
          ...input
        }}
        inputRef={inputRef}
        autoComplete="off"

        {...inputProps}
        id={id}
        data-testid={dataTestId}
        onKeyDown={onKeyDown}
        onWheel={event => event.target.blur()}
        error={touched && Boolean(error)}
      />
      {touched && error ? (
        <FormHelperText style={{ color: 'red' }}>{touched && error}</FormHelperText>
      ) : null}
    </FormControl>
  );
}


CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
  input: PropTypes.object,
};