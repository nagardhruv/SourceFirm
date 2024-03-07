import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import CustomInput from "components/CustomInput/CustomInput.js";
import { SelectAutocomplete } from "components/CustomeAutoComplete/AsynAutocomplete"
import userIcon from "assets/img/icons/user.svg";
import envelopeIcon from "assets/img/icons/envelope.svg";
import locationIcon from "assets/img/icons/location.svg";
import globeIcon from "assets/img/icons/globe.svg";
import lockIcon from "assets/img/icons/lock.svg";
import visibilityIcon from 'assets/img/icons/visibility-icon.svg';
import visibilityOffIcon from 'assets/img/icons/visibilityOff-icon.svg';
import CustomCheckBox from "components/CustomCheckBox/CustomCheckBox";
import { Field, getFormValues, reduxForm } from "redux-form";
import * as Actions from "../../../../store/actions/index";
import { required, email, trimmed, checkPhoneNumber } from 'utils/Validation';
import { loadcaptcha, validateCaptcha, LoadCanvasTemplate } from 'components/CustomCaptcha/CustomCaptcha';
import { Typography } from "@mui/material";
import PhoneNumberField from "components/CustomPhoneNumber/PhoneNumberField";
import { userTypeContent } from "utils/constant";
import { getCountryAndPhone } from "utils/Common";

const passwordsMatch = (value, allValues) => {
    if (value !== allValues.password) {
        return "Passwords does not match";
    }
    return undefined;
};
const password = (value) =>
    value &&
        !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(value)
        ? 'Passwords must contain eight characters: one lower case letter [a-z] numeric character [0-9] and special character: @$!%*#?&' /* eslint-disable-line */
        : undefined;

const checkCaptcha = (value) => {
    if (validateCaptcha(value, false) === true) {
        return undefined
    } else {
        return "Captcha does not match"
    }
}

function SignUpForm(props) {
    const dispatch = useDispatch();
    const { changeStep, handleSubmit, change, formStates, userType } = props;
    const [values, setValues] = useState({ showPassword: false, showConfirmPassword: false });
    const [countryList, setCountryList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [time, setTime] = useState('')
    // const [loading, setLoading] = useState(false);
    const [countryCode, setCountryCode] = useState("in");
    const [phoneNumber, setPhoneNumber] = useState(null);  /* eslint-disable-line */
    const content = userTypeContent?.find(e => e.type === userType);

    const handleChangeCountry = (country) => {
        const phoneDetails = getCountryAndPhone(country, countryCode);
        setCountryCode(phoneDetails.countryCode);
        setPhoneNumber(phoneDetails.phone);
        change('city', '');
        setCityList([]);
        change('phoneNumber', '');
    };

    const getCountryList = (search) => {
        clearTimeout(time);
        setTime(setTimeout(() => {
            if (search.length > 2) {
                dispatch(Actions.getCountryList(search)).then((response) => {
                    if (response.status === 200) {
                        let data = response.data?.results ?? response.data;
                        setCountryList(data);
                    } else {
                        setCountryList([])
                    }
                }).catch(() => {
                    setCountryList([]);
                })
            }
        }, 1000));
    }

    const handleChangeCity = (name) => {
        if (formStates?.country) {
            clearTimeout(time);
            setTime(setTimeout(() => {
                if (name.length > 2) {
                    // setLoading(true)
                    dispatch(Actions.getCityList({ country: formStates?.country?.id, name: name }))
                        .then((response) => {
                            // setLoading(false)
                            if (response.status === 200) {
                                setCityList(response.data)
                            } else {
                                setCityList([])
                            }
                        }).catch(() => {
                            setCityList([]);
                        })
                }
            }, 1000));
        }
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleClickShowConfirmPassword = () => {
        setValues({
            ...values,
            showConfirmPassword: !values.showConfirmPassword,
        });
    };

    const clearCaptchaCode = () => {
        change('captch_code', '')
    }

    const handleChangePhone = (value, data) => {
        if (data.countryCode === countryCode) {
            clearTimeout(time);
            setTime(setTimeout(() => {
                change('phoneNumber', `+${value}`);
            }, 1000));
        } else {
            setCountryCode(data.countryCode)
            change('phoneNumber', `+${data.dialCode}`);
        }
    }

    useEffect(() => {
        loadcaptcha(5);
    }, []);
    return (
        <Grid className="form-container">
            <Grid item className="loginForm signupForm">
                <Typography variant="h1" className="title">{content.title}</Typography>
                <Typography variant="body1" className="signup-title">{content.subTitle}</Typography>
                <form onSubmit={handleSubmit} noValidate>
                    <Grid container className="formGrid">
                        <Grid item className="formGrid-inner">
                            <Field
                                name="first_name"
                                component={CustomInput}
                                id="first_name"
                                labelText="First Name*"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                validate={[required]}
                                inputProps={{
                                    placeholder: "Enter first name",
                                    type: "text",
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={userIcon} alt="img" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item className="formGrid-inner">
                            <Field
                                name="last_name"
                                component={CustomInput}
                                id="last_name"
                                labelText="Last Name*"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                validate={[required]}
                                inputProps={{
                                    placeholder: "Enter last name",
                                    type: "text",
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={userIcon} alt="img" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="formGrid">
                        <Grid item className="formGrid-inner">
                            <Field
                                name="country"
                                component={SelectAutocomplete}
                                id="country"
                                labelText="Country*"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                options={countryList}
                                displayKey="name"
                                validate={[required]}
                                onChange={value => {
                                    handleChangeCountry(value);
                                }
                                }
                                inputProps={{
                                    placeholder: "Choose country",
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={globeIcon} alt="img" />
                                        </InputAdornment>
                                    ),
                                }}
                                onSearch={(e) => getCountryList(e.target.value)} />
                            {/* onFocusEvent={(event) => getCountryList(event.target.value)} */}
                        </Grid>
                        <Grid item className="formGrid-inner">
                            <Field
                                name="city"
                                id="city"
                                labelText="City*"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                options={cityList}
                                component={SelectAutocomplete}
                                // loading={loading}
                                required
                                validate={[required]}
                                displayKey="display_name"
                                inputProps={{
                                    placeholder: "Choose city",
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={locationIcon} alt="img" />
                                        </InputAdornment>
                                    ),
                                }}
                                onSearch={(e) => handleChangeCity(e.target.value)}
                                disabled={!formStates?.country}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="formGrid">
                        <Grid item className="formGrid-inner">
                            <Field
                                name="email"
                                component={CustomInput}
                                id="email"
                                labelText="Email*"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                validate={[required, email]}
                                inputProps={{
                                    placeholder: "Enter work email address",
                                    type: "text",
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={envelopeIcon} alt="img" />
                                        </InputAdornment>
                                    ),
                                }}
                                normalize={trimmed()}
                            />
                        </Grid>
                        <Grid item className="formGrid-inner">
                            <Field
                                name="phoneNumber"
                                component={PhoneNumberField}
                                id="phoneNumber"
                                labelText="Phone Number*"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                validate={[checkPhoneNumber]}
                                inputProps={{
                                    placeholder: "Enter valid contact number",
                                }}
                                phone={phoneNumber}
                                countryCode={countryCode}
                                disableDropdown={true}
                                handleChangePhone={handleChangePhone}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="formGrid">
                        <Grid item className="formGrid-inner">
                            <Field
                                name="password"
                                component={CustomInput}
                                id="password"
                                labelText="Password*"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                validate={[required, password, passwordsMatch]}
                                inputProps={{
                                    placeholder: "Enter password",
                                    type: values.showPassword ? "text" : "password",
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={lockIcon} alt="img" />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end" className='adornment-icon'>
                                            <img onClick={handleClickShowPassword} src={(values.showPassword) ? visibilityIcon : visibilityOffIcon} alt='img' />
                                        </InputAdornment>
                                    ),
                                }}
                                normalize={trimmed()}
                            />
                        </Grid>
                        <Grid item className="formGrid-inner">
                            <Field
                                name="confirm_password"
                                component={CustomInput}
                                id="confirm_password"
                                labelText="Confirm Password*"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                validate={[required, passwordsMatch]}
                                inputProps={{
                                    placeholder: "Re-enter password ",
                                    type: values.showConfirmPassword ? "text" : "password",
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={lockIcon} alt="img" />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end" className='adornment-icon'>
                                            <img onClick={handleClickShowConfirmPassword} src={(values.showConfirmPassword) ? visibilityIcon : visibilityOffIcon} alt='img' />
                                        </InputAdornment>
                                    ),
                                }}
                                normalize={trimmed()}
                            />
                        </Grid>
                        <Grid item lg={12}>
                            <div className="signlabel-box">
                            <Field
                            
                                name="is_terms_and_condition_accepted"
                                component={CustomCheckBox}
                                labelText={<span>By signing in to your account, you agree to the <a className="signup-links" href="https://sourcefirms.com/terms-condition" target="_blank" rel="noreferrer">Terms of Use</a> and <a className="signup-links" href="https://sourcefirms.com/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a></span>}
                                validate={required}
                            />
                            </div>


                        </Grid>
                    </Grid>
                    <Grid container className="formGrid">
                        <Grid item className="formGrid-inner captchContainer">
                            <LoadCanvasTemplate clearCode={clearCaptchaCode} />
                        </Grid>
                        <Grid item className="formGrid-inner">
                            <Field
                                name="captch_code"
                                component={CustomInput}
                                id="captch_code"
                                labelText="Enter the text as shown in the image *"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                validate={[required, checkCaptcha]}
                                inputProps={{
                                    placeholder: "Enter captcha",
                                    type: "text"
                                }}
                            />
                        </Grid>
                        <input id="captcha_code_input" style={{ display: "none" }} />
                    </Grid>
                    <Grid className="action-div">
                        <Link
                            href={null}
                            onClick={() => changeStep()}
                            underline="none"
                            className="cursor-pointer previousBtn"
                        >
                            Back
                        </Link>
                        <Button type="submit" variant="contained" className="primaryButton nextBtn">
                            {content?.buttonTitle}
                        </Button>
                    </Grid>
                </form>
            </Grid >
        </Grid >
    );
}

const ReduxSignUpFormMapped = reduxForm({
    form: "SignUpForm", // a unique identifier for this form
    enableReinitialize: false,
})(SignUpForm);

const mapStateToProps = (state) => {
    return {
        formStates: getFormValues('SignUpForm')(state) // here 'form' is the name you have given your redux form 
    }
}

export default connect(mapStateToProps)(ReduxSignUpFormMapped);