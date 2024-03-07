import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import closeIcon from 'assets/img/icons/close-icon.svg';
import plusIcon from 'assets/img/icons/plus-icon.svg';
import { Field } from "redux-form";
import { SelectAutocomplete } from "components/CustomeAutoComplete/AsynAutocomplete"
import CustomCheckBox from 'components/CustomCheckBox/CustomCheckBox';
import { IconButton } from '@mui/material';
import { avoidPasting } from "utils/Common";

const BranchFields = ({ fields, branchCC, handleChangeCity, handleChangeCountry, countryList, change, required, removeList, getCountryList, formStates }) => {
  const [anyChecked, setAnyChecked] = useState(false);
  if (fields.length == 0) {
    fields.push();
  }

  const checkForChecked = () => {
    let checked = false;
    fields.map(async (_e, i) => {
      let data = fields.get(i);
      if (!checked) {
        if (data && data?.is_head_quarter) {
          checked = true;
        } else {
          checked = false;
        }
      }
      if (fields.length === i + 1) {
        if (checked) setAnyChecked(true);
        else setAnyChecked(false);
      }
    });
  }
  useEffect(() => {
    if (!anyChecked) {
      checkForChecked();
    }
  }, [fields])

  const handleClick = async (index) => {
    await fields.map((e, i) => {
      change(`${e}.is_head_quarter`, (index === i) ? true : false);
    });
    checkForChecked();
  }
  const isHeadOffice = (index) => {
    let data = fields.get(index);
    return data?.is_head_quarter;
  }

  const handleApiCall = (value, keys, index) => {
    if (value.toString().length > 2) {
      getCountryList(value, keys, index);
    }
  }
  return (
    <>
      {fields.map((name, index) => (

        <Grid key={index} className="branch-container">
          <div className="branch-count">
            <p>Branch {index + 1}</p>
          </div>
          {(fields.length > 1 && !isHeadOffice(index)) &&
            <IconButton onClick={() => fields.remove(index)} className="closebtn">
              <img src={closeIcon} alt="close" />
            </IconButton>
          }
          <Grid container className="formGrid">
            <Grid className="formGrid-inner">
              <Field
                name={`${name}.country`}
                component={SelectAutocomplete}
                id={`${name}.country`}
                labelText="Country*"
                formControlProps={{
                  fullWidth: true,
                }}
                options={countryList}
                displayKey="name"
                validate={[required]}
                onChange={(value) => {
                  change(`${name}.city`, "");
                  handleChangeCountry(value, index);
                }}
                inputProps={{
                  placeholder: "Choose country",
                }}
                onBlurEvent={removeList}
                onSearch={(e) => {
                  handleApiCall(e.target.value);
                }}
              // onFocusEvent={(event) => handleApiCall(event.target.value)}
              />
            </Grid>
            <Grid className="formGrid-inner">
              <Field
                name={`${name}.city`}
                displayKey="display_name"
                id={`${name}.city`}
                labelText="City*"
                formControlProps={{
                  fullWidth: true,
                }}
                options={branchCC?.city?.length > 0 ? branchCC.city[index] : []}
                component={SelectAutocomplete}
                loading={false}
                required
                validate={[required]}
                inputProps={{
                  placeholder: "Choose city",
                }}
                onSearch={(e) => {
                  handleChangeCity(e.target.value, index);
                }}
                onKeyDown={avoidPasting}
                disabled={!formStates?.branches[index]?.country}
              />
            </Grid>
          </Grid>
          <Field
            name={`${name}is_head_quarter`}
            component={CustomCheckBox}
            onChange={() => handleClick(index)}
            labelText="Make It As A Primary Branch"
            validate={anyChecked ? undefined : required}
            id="company.is_head_quarter" />
        </Grid>
      ))}
      <Link onClick={() => fields.push({ is_head_quarter: false })} underline="none"
        className="addBranchBtn cursor-pointer">
        <img src={plusIcon} alt="add" /> Add New Branch
      </Link>
    </>
  );
};

export default BranchFields;