import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from '@mui/material/FormHelperText';
import { CircularProgress } from "@mui/material";

const SingleAutocomplete = ({ input, options, id, disabled, inputProps, meta: { touched, error },
    labelText, displayKey, onInputChange, zIndex, loading }) => {
    return (
        <>
            <FormControl
                variant="standard"
                className="formControl"
            >
                {labelText !== undefined ? (
                    <InputLabel shrink htmlFor={id}>
                        {labelText}
                    </InputLabel>
                ) : null}
                <Autocomplete
                    id={id}
                    className="inputField selectTextField"
                    options={options}
                    selectOnFocus={false}
                    autoHighlight
                    clearOnBlur
                    disabled={disabled || false}
                    getOptionLabel={(option) => option[displayKey] || ""}
                    value={input.value}
                    isOptionEqualToValue={(option, value) => option[displayKey] === value[displayKey]}
                    onChange={(_event, newValue) => {
                        input.onChange(newValue);
                    }}
                    onInputChange={(_event, value) => {
                        onInputChange(value);
                    }}
                    loading={loading ?? false}
                    componentsProps={{
                        popper: {
                            sx: {
                                zIndex: `${zIndex} !important` || 300
                            }
                        }
                    }}
                    renderInput={(params) => {
                        return (
                            <TextField
                                {...params}
                                fullWidth
                                InputProps={{
                                    ...params.InputProps,
                                    ...inputProps,
                                    endAdornment: (
                                        <>
                                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                            {params.InputProps.endAdornment}
                                        </>
                                    ),
                                }}
                            />
                        );
                    }}
                />

                {touched && error ? (
                    <FormHelperText style={{ color: 'red' }}>{touched && error}</FormHelperText>
                ) : null}
            </FormControl>
        </>
    );
};

export default SingleAutocomplete;
