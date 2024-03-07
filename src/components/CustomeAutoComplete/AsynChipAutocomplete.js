import React from "react";
import PropTypes from "prop-types";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const icon = <RadioButtonUncheckedIcon fontSize="small" className='uncheckedCircle-icon' />;
const checkedIcon = <CheckCircleIcon fontSize="small" className='checkedCircle-icon' />;

/* AutocompleteTags start */
const AsynChipAutocomplete = ({ displayKey, valueKey, input, labelText, placeholder, id, formControlProps, inputProps,
    options, loading, meta: { touched, error }, onSearch, ...custom }) => {
    return (
        <>
            <FormControl
                variant="standard"
                className="formControl"
                {...formControlProps}>
                {labelText !== undefined ? (
                    <InputLabel shrink htmlFor={id}>
                        {labelText}
                    </InputLabel>
                ) : null}
                <Autocomplete
                    {...custom}
                    multiple
                    limitTags={3}
                    id="checkboxes-tags-demo"
                    className="selectTextField"
                    options={options || []}
                    value={input.value || []}
                    freeSolo={true}
                    getOptionLabel={(option) => option[displayKey] || ''}
                    isOptionEqualToValue={(option, value) => option[displayKey] === value[displayKey]}
                    onChange={(_event, value) => {
                        input.onChange(value);
                    }}
                    disableCloseOnSelect
                    renderOption={(props, option, { selected }) => (
                        <li {...props} key={option[valueKey]}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option[displayKey]}
                        </li>
                    )}
                    renderInput={(params) => {
                        return (
                            <TextField
                                className='multiSelect-Textfield'
                                {...params}
                                {...custom}
                                error={touched && Boolean(error)}
                                placeholder={placeholder}
                                onChange={onSearch}
                                autoComplete="off"
                                fullWidth
                                InputProps={{
                                    ...params.InputProps,
                                    ...inputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {loading ? (
                                                <CircularProgress color="primary" size={30} />
                                            ) : null}
                                            {params.InputProps.endAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                            />
                        );
                    }}
                />
                {touched && error && (
                    <FormHelperText style={{ color: "red" }}>
                        {touched && error}
                    </FormHelperText>
                )}
            </FormControl>
        </>
    );
};
AsynChipAutocomplete.propTypes = {
    input: PropTypes.object.isRequired,
    labelText: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    meta: PropTypes.object,
    onSearch: PropTypes.func,
};
AsynChipAutocomplete.defaultProps = {
    meta: null,
    labelText: "",
    placeholder: "",
    options: [],
    valueKey: 'id',
    loading: false,
};
export default AsynChipAutocomplete