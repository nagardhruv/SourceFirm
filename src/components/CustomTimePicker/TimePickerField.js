import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { isPastDate } from 'utils/Date';

export default function TimePickerField(props) {
    const { input, id, labelText, labelProps, inputFormat, minTime, meta: { dirty, error }, className } = props;
    const [open, setOpen] = useState(false);
    const preventKeyboard = (event) => {
        event.preventDefault(); event.target.onpaste = e => e.preventDefault(); return false;
    }

    return (
        <FormControl variant="standard" className='formControl'
            error={dirty && Boolean(error)}>
            {labelText !== undefined ? (
                <InputLabel shrink htmlFor={id} {...labelProps}>
                    {labelText}
                </InputLabel>
            ) : null}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopTimePicker
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    error={dirty && Boolean(error)}
                    id={id}
                    format={inputFormat}
                    value={input.value || null}
                    minTime={minTime ?? null}
                    shouldDisableTime={() => minTime && isPastDate(minTime)}
                    onChange={(newValue) => {
                        input.onChange(newValue);
                    }}
                    PopperProps={{
                        className: className || 'custom-datetime-picker',
                    }}
                    DialogProps={{
                        className: className || 'custom-datetime-picker',
                    }}
                    renderInput={(params) =>
                        <TextField
                            onClick={() => setOpen(true)}
                            id={id}
                            {...params}
                            onKeyPress={preventKeyboard}
                            onKeyDown={preventKeyboard}
                            onMouseDown={preventKeyboard}
                            error={dirty && Boolean(error)}
                            autoComplete="off"
                        />
                    }

                />
            </LocalizationProvider >
            {dirty && error && <FormHelperText style={{ color: 'red' }}>{dirty && error}</FormHelperText>}
        </FormControl>
    )
}

TimePickerField.propTypes = {
    input: PropTypes.object.isRequired,
    labelText: PropTypes.string,
    name: PropTypes.string,
    meta: PropTypes.object
};