import React, { useEffect } from "react";
import PropTypes from "prop-types";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@mui/styles";

import FormControl from "@mui/material/FormControl";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles(() => ({
    autocompleteCustom: {
        "&.MuiFormControl-root label + div > div": {
            padding: "0px 0px 0px !important",
        },
    },
}));
export const SelectField = ({
    input, labelText, name, placeholder, id, formControlProps, meta: { touched, error }, children, ...custom }) => {

    return (
        <FormControl
            variant="standard"
            className="formControl"
            {...formControlProps}>
            {labelText !== undefined ? (
                <InputLabel shrink htmlFor={id}>
                    {labelText}
                </InputLabel>
            ) : null}
            <Select
                {...input}
                {...custom}
                className='inputField'
                size="small"
                variant="standard"
                placeholder={placeholder}
                inputProps={{
                    name: `${name}`,
                }}
                IconComponent={ExpandMoreIcon}
            >
                {children}
            </Select>
            {touched && error && <FormHelperText style={{ color: 'red' }}>{touched && error}</FormHelperText>}
        </FormControl>
    );
};
SelectField.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    meta: PropTypes.object,
};
SelectField.defaultProps = {
    label: "",
    name: "",
    meta: null,
    required: false,
};

/* AutocompleteTags start */
export const SelectAutocomplete = ({
    displayKey,
    input,
    labelText,
    placeholder,
    id,
    formControlProps,
    inputProps,
    options,
    loading,
    onBlurEvent,
    onFocusEvent,
    meta: { touched, error },
    onSearch,
    ...custom
}) => {
    return (
        <>
            <FormControl
                variant="standard"
                className="formControl"
                {...formControlProps}
            >
                {labelText !== undefined ? (
                    <InputLabel shrink htmlFor={id}>
                        {labelText}
                    </InputLabel>
                ) : null}
                <Autocomplete
                    {...custom}
                    className="inputField selectTextField"
                    options={options || []}
                    value={input.value || ''}
                    id={id}
                    // freeSolo={true}
                    getOptionLabel={(option) => option[displayKey] || ''}
                    isOptionEqualToValue={(option, value) => option[displayKey] === value[displayKey]}
                    onChange={(_event, value) => {
                        input.onChange(value);
                    }}
                    componentsProps={{
                        popper: {
                            sx: {
                                zIndex: 300
                            }
                        }
                    }}
                    renderInput={(params) => {
                        return (
                            <TextField
                                {...params}
                                {...custom}
                                error={touched && Boolean(error)}
                                placeholder={placeholder}
                                onChange={onSearch}
                                onBlur={onBlurEvent}
                                onFocus={onFocusEvent}
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
SelectAutocomplete.propTypes = {
    input: PropTypes.object.isRequired,
    labelText: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    meta: PropTypes.object,
    onSearch: PropTypes.func,
};
SelectAutocomplete.defaultProps = {
    meta: null,
    labelText: "",
    placeholder: "",
    options: []
};

/* AutocompleteTags start */
export const SelectAutocompleteTags = ({
    input,
    label,
    required,
    options,
    meta: { touched, error },
    onSearch,
    ...custom
}) => {
    const classes = useStyles();
    useEffect(() => {
        if (!input.value) {
            input.onChange([]);
        }
    }, []);
    return (
        <>
            <FormControl
                className={classes.autocompleteCustom}
                style={{ width: "100%" }}
            >
                <Autocomplete
                    {...custom}
                    required
                    multiple
                    options={options}
                    value={input.value}
                    // getOptionLabel={option => {
                    //   if (option && option.name) return option.name.toString();
                    //   return '';
                    // }}
                    onChange={(_event, value) => {
                        input.onChange(value);
                    }}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip key={index} label={option.name} {...getTagProps({ index })} />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            {...custom}
                            error={touched && Boolean(error)}
                            required={required}
                            variant="standard"
                            label={label}
                            onChange={onSearch}
                            fullWidth
                        />
                    )}
                />
                {touched && error && (
                    <FormHelperText>{touched && error}</FormHelperText>
                )}
            </FormControl>
        </>
    );
};
SelectAutocompleteTags.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array.isRequired,
    validate: PropTypes.bool,
    required: PropTypes.bool,
    meta: PropTypes.object,
    onSearch: PropTypes.func,
};
SelectAutocompleteTags.defaultProps = {
    meta: null,
    validate: false,
    required: false,
    label: "",
    placeholder: ""
};

/* AutocompleteTags start */
export const SelectAutocompleteFreeSolo = ({
    input,
    label,
    placeholder,
    required,
    options,
    meta: { touched, error },
}) => (
    <>
        <FormControl>
            <Autocomplete
                freeSolo
                options={options.map((option) => option.label)}
                onChange={(_event, value) => {
                    input.onChange(value);
                }}
                value={input.value}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        error={touched && Boolean(error)}
                        size="small"
                        required={required}
                        variant="standard"
                        placeholder={placeholder}
                        value={input.value}
                        label={label}
                        fullWidth
                        onChange={(event) => {
                            input.onChange(event.target.value);
                        }}
                    />
                )}
            />
            {touched && error && <FormHelperText>{touched && error}</FormHelperText>}
        </FormControl>
    </>
);
SelectAutocompleteFreeSolo.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    validate: PropTypes.bool,
    required: PropTypes.bool,
    meta: PropTypes.object,
};
SelectAutocompleteFreeSolo.defaultProps = {
    meta: null,
    validate: false,
    required: false,
    label: "",
    placeholder: "",
    options: [],
};
