import React from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function CustomTextArea(props) {
    const { meta: { touched, error }, labelText, id, labelProps, input, rows, placeholder, dataTestId } = props;

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
            <TextareaAutosize
                className='inputField specialty-content'
                minRows={rows}
                placeholder={placeholder}
                id={id}
                data-testid={dataTestId || ""}
                {...input}
            />
            {touched && error ? (
                <FormHelperText style={{ color: 'red' }}>{touched && error}</FormHelperText>
            ) : null}
        </FormControl>
    );
}


CustomTextArea.propTypes = {
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    error: PropTypes.bool,
    success: PropTypes.bool,
    input: PropTypes.object,
};
