import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import moment from 'moment';

export default function DatePickerField(props) {
    const { input, id, labelText, labelProps, inputFormat, formatSelected, minDate, maxDate, disableFuture, disablePast, meta: { touched, error }, className } = props;
    const [open, setOpen] = useState(false);
    const preventKeyboard = (event) => {
        event.preventDefault(); event.target.onpaste = e => e.preventDefault(); return false;
    }
    return (
        <FormControl variant="standard" className='formControl'>
            {labelText !== undefined ? (
                <InputLabel shrink htmlFor={id} {...labelProps}>
                    {labelText}
                </InputLabel>
            ) : null}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    id={id}
                    format={inputFormat}
                    inputFormat={formatSelected || 'MM/dd/yyyy'}
                    minDate={minDate || undefined}
                    maxDate={maxDate || undefined}
                    value={input.value || null}
                    onChange={(newValue) => {
                        input.onChange(moment(newValue).local().format(inputFormat));
                    }}
                    PopperProps={{
                        className: className || 'custom-datetime-picker',
                    }}
                    DialogProps={{
                        className: className || 'custom-datetime-picker',
                    }}
                    disableFuture={(disableFuture === false) ? false : true}
                    disablePast={(disablePast) ? true : false}
                    renderInput={(params) =>
                        <TextField
                            onClick={() => setOpen(true)}
                            id={id}
                            {...params}
                            onKeyPress={preventKeyboard}
                            onKeyDown={preventKeyboard}
                            onMouseDown={preventKeyboard}
                            autoComplete="off"
                        />
                    }

                />
            </LocalizationProvider >
            {touched && error && <FormHelperText style={{ color: 'red' }}>{touched && error}</FormHelperText>}
        </FormControl>
    )
}

DatePickerField.propTypes = {
    input: PropTypes.object.isRequired,
    labelText: PropTypes.string,
    name: PropTypes.string,
    meta: PropTypes.object
};