import React from 'react';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import FormControl from '@mui/material/FormControl';
import 'react-phone-input-2/lib/material.css';
import FormHelperText from '@mui/material/FormHelperText';
export default function PhoneNumberField(props) {
  const { meta: { touched, error
  }, formControlProps, phone, id, countryCode, handleChangePhone, disableDropdown, input: { onBlur } } = props;
  return (
    <FormControl
      className="formControl" variant="standard"
      {...formControlProps}>
      <PhoneInput
        specialLabel="Contact Number*"
        shrink
        className="phoneInputField"
        country={countryCode}
        // onlyCountries={countryCodes()}
        autoFormat={true}
        countryCodeEditable={false}
        onChange={(data, value) => {
          onBlur();
          handleChangePhone(data, value)
        }}
        disableDropdown={disableDropdown || false}
        // disableInitialCountryGuess={true}
        disableCountryGuess={true}
        inputProps={{
          autoComplete: 'new-password',
          form: {
            autoComplete: 'off',
          }
        }}
        // {...input}
        id={id}
        value={phone}
        error={touched && Boolean(error)}
      />
      {touched && error ? (
        <FormHelperText style={{ color: 'red' }}>{touched && error}</FormHelperText>
      ) : null}
    </FormControl>
  );
}

PhoneNumberField.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
  input: PropTypes.object,
};