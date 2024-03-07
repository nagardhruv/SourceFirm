import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import plusIcon from "assets/img/icons/plus-icon.svg";
import { Field } from "redux-form";
import { SelectAutocomplete, SelectField } from "components/CustomeAutoComplete/AsynAutocomplete";
import { IconButton, MenuItem } from "@mui/material";
import deleteIcon from 'assets/img/icons/delete-icon.svg';
import { required } from "utils/Validation";
import { PROFICIENCY_TAG } from "utils/constant";

const LanguageField = ({
    fields,
    getLanguages,
    languages,
    removeLanguages,
    proficiency,
}) => {

    if (fields.length == 0) {
        fields.push();
    }

    const populateSelectedKeys = (langs, current) => {
        const currentLanguage = fields.get(current);
        let currentLangKey = currentLanguage?.key ?? currentLanguage?.communication_language?.key ?? null;
        let langKeys = [];
        if (langs && langs.length > 0) {
            langs.forEach(elem => {
                let elemKey = elem?.key ?? elem?.communication_language?.key ?? null;
                if (elemKey && elemKey !== currentLangKey) {
                    langKeys.push(elemKey);
                }
            })
        }
        return langKeys;
    }

    const handleApiCall = (value, keys, index) => {
        if (value.toString().length > 2) {
            getLanguages(value, keys, index);
        }
    }

    return (
        <>
            <Grid className="language-container">
                <div className="languageTitle">
                    <p>Which language do you know?</p>
                </div>
                {fields.map((name, index) => (
                    <Grid container className="formGrid languageContent" key={index}>
                        <Grid className="formGrid-inner">
                            <Field
                                name={`${name}.communication_language`}
                                displayKey="value"
                                id={`${name}.communication_language`}
                                labelText="Language*"
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                options={languages}
                                component={SelectAutocomplete}
                                loading={false}
                                required
                                validate={[required]}
                                inputProps={{
                                    placeholder: "Select language",
                                }}
                                onSearch={(e) => {
                                    handleApiCall(e.target.value, populateSelectedKeys(fields.getAll(), index));
                                }}
                                onBlurEvent={removeLanguages}
                                onFocusEvent={(event) => handleApiCall(event.target.value, populateSelectedKeys(fields.getAll(), index))}
                            >
                            </Field>
                        </Grid>
                        <Grid className="formGrid-inner">
                            <Field
                                name={`${name}.proficiency.id`}
                                component={SelectField}
                                id={`${name}.proficiency`}
                                labelText="Proficiency*"
                                validate={required}
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                placeholder="Select language level"
                            >
                                {proficiency && proficiency.map((prof) => (
                                    <MenuItem value={prof.id} key={prof.id}>
                                        {PROFICIENCY_TAG[prof.id]}
                                    </MenuItem>
                                ))}
                            </Field>
                        </Grid>
                        {
                            fields.length > 1 &&
                            <div className="deleteDiv">
                                <IconButton
                                    onClick={() => fields.remove(index)}
                                    className="deletebtn"
                                >
                                    <img src={deleteIcon} alt="close" />
                                </IconButton>
                            </div>
                        }
                    </Grid>
                ))}
                <Link
                    onClick={() => fields.push()}
                    underline="none"
                    className="addBranchBtn addLang cursor-pointer width-fitContent"
                >
                    <img src={plusIcon} alt="add" /> add New
                </Link>
            </Grid>

        </>
    );
};

export default LanguageField;
