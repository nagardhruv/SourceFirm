import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const icon = <RadioButtonUncheckedIcon fontSize="small" className='uncheckedCircle-icon' />;
const checkedIcon = <CheckCircleIcon fontSize="small" className='checkedCircle-icon' />;

const ChipAutocomplete = ({ input, options, id, inputProps, meta: { touched, error }, labelText,
    displayKey }) => {

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
                    id="checkboxes-tags-demo"
                    multiple
                    limitTags={3}
                    options={options || []}
                    value={input.value || []}
                    disableCloseOnSelect
                    componentsProps={{
                        popper: {
                            sx: {
                                zIndex: 300
                            }
                        }
                    }}
                    getOptionLabel={(option) => option[displayKey]}
                    onChange={(_event, value) => {
                        input.onChange(value);
                    }}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    renderOption={(props, option, { selected }) => (
                        <li {...props} key={option?.id}
                            // style={{ marginRight: 0, marginLeft: (option.parent_skill) ? 20 : 0, fontSize: (option.parent_skill) ? 14 : 16, opacity: (option.parent_skill) ? 0.7 : 1 }}

                            className={option.parent_skill ? 'MuiAutocomplete-option autocomplete-nested-list' : 'MuiAutocomplete-option autocomplete-list'}
                        >
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                checked={selected}
                            />
                            {option.title}
                        </li>
                    )}

                    renderInput={(params) => (
                        <TextField {...params} className='multiSelect-Textfield'
                            value={input.value}
                            InputProps={{
                                ...params.InputProps,
                                ...inputProps,
                                placeholder: (input.value.length === 0) ? inputProps.placeholder : "",
                            }}
                            fullWidth
                        />
                    )}
                />

                {touched && error ? (
                    <FormHelperText style={{ color: 'red' }}>{touched && error}</FormHelperText>
                ) : null}
            </FormControl>
        </>
    )
}

export default ChipAutocomplete;
