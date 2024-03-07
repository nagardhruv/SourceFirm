import React from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';

export default function CustomRadioGroup(props) {

    const { meta: { touched, error }, labelText, input, labelProps, id } = props;

    return (
        <FormControl>
            {labelText !== undefined ? (
                <FormLabel
                    htmlFor="bootstrap-input"
                    {...labelProps}
                >
                    {labelText}
                </FormLabel>
            ) : null}
            <RadioGroup id={id} {...input} row />
            {touched && error ? (
                <FormHelperText style={{ color: 'red' }}>{touched && error}</FormHelperText>
            ) : null}
        </FormControl>
    );
}

CustomRadioGroup.propTypes = {
    labelText: PropTypes.node,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    error: PropTypes.bool,
    success: PropTypes.bool,
    input: PropTypes.object,
};
