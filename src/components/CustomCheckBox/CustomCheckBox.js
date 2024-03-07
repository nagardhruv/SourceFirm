import React from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

export default function CustomCheckBox(props) {

    const { meta: { touched, error }, labelText, input } = props;

    return (
        <FormGroup>
            <FormControlLabel variant="standard" className='checkboxInput' control={<Checkbox checked={(input.value) ? input.value : false} {...input} />} label={labelText} />
            {touched && error ? (
                <FormHelperText style={{ color: 'red' }}>{touched && error}</FormHelperText>
            ) : null
            }
        </FormGroup>
    );
}

CustomCheckBox.propTypes = {
    labelText: PropTypes.node,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    error: PropTypes.bool,
    success: PropTypes.bool,
    input: PropTypes.object,
};