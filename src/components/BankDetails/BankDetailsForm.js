import React from "react";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Field, reduxForm, getFormValues } from "redux-form";
import { required, IFSC, accountNumberLimit } from "utils/Validation";
import UnderApprovedDialog from "components/Dialog/UnderApprovedDialog";
import history from "utils/history";
import InfoIcon from "assets/img/icons/info-icon.svg";
import CheckIcon from "assets/img/icons/check.svg";
import CustomFileUpload from "components/customUpload/CustomFileUpload";
import { FILETYPE } from "utils/constant";
import { avoidKeysForNumber } from "utils/Common";

function BankDetailsForm(props) {
  const { handleSubmit, initialValues, handleChangeIdentity, IFSCData, onIFSCChange, openDialog } = props;
  const handleValidateCode = (e) => {
    onIFSCChange(e.target.value);
  }
  const backToHome = () => {
    history.push("/home");
  };
  return (
    <>
      <Container className="profile-container add_profile-container">
        <h4>{initialValues?.id ? `Edit` : `Add`} Bank Details</h4>
        <Grid className="profile-inner add_profile-inner">
          <form onSubmit={handleSubmit} noValidate>
            <Grid className="add_profile-form">
              <h5 className="title">Bank Details</h5>
              <Grid container className="formGrid">
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Field
                    name="name"
                    component={CustomInput}
                    id="name"
                    labelText="Account Holder Name*"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    helperText="demo"
                    validate={[required]}
                    inputProps={{
                      placeholder: "Enter account holder name",
                      type: "text",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container className="formGrid">
                <Grid item className="formGrid-inner">
                  <Field
                    name="account_no"
                    component={CustomInput}
                    id="account_no"
                    labelText="Account Number*"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    validate={[required, accountNumberLimit]}
                    inputProps={{
                      placeholder: "Enter account number",
                      type: "number",
                    }}
                    onKeyDown={avoidKeysForNumber}
                  />
                </Grid>
                <Grid item className="formGrid-inner">
                  <Field
                    name="ifsc_code"
                    component={CustomInput}
                    id="ifsc_code"
                    labelText="IFSC Code*"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    validate={[required, IFSC]}
                    inputProps={{
                      placeholder: "Enter IFSC code",
                      type: "text",
                      endAdornment: <img src={IFSCData?.valid ? CheckIcon : InfoIcon} alt="img" className="infoIcon" />,

                    }}
                    onChange={(e) => handleValidateCode(e)}
                  />
                </Grid>
              </Grid>
              <Grid container className="formGrid">
                <Field
                  type="file"
                  name='id_proof'
                  id="id_proof"
                  component={CustomFileUpload}
                  onChange={(e) => handleChangeIdentity(e)}
                  validate={[required]}
                  mimeType={FILETYPE.file}
                />
              </Grid>
              {IFSCData?.data && Object.keys(IFSCData?.data).length !== 0 && (
                <Grid className="bankDetailContainer">
                  <Grid container className="formGrid">
                    <Grid className="bankLabel">
                      <p className="value">Bank</p>
                    </Grid>
                    <Grid className="bankValue">
                      <p className="value">{IFSCData?.data?.BANK}</p>
                    </Grid>
                  </Grid>
                  <Grid container className="formGrid">
                    <Grid className="bankLabel">
                      <p className="value">Branch</p>
                    </Grid>
                    <Grid className="bankValue">
                      <p className="value">{IFSCData?.data?.BRANCH}</p>
                    </Grid>
                  </Grid>
                  <Grid container className="formGrid">
                    <Grid className="bankLabel">
                      <p className="value">Address</p>
                    </Grid>
                    <Grid className="bankValue">
                      <p className="value">{IFSCData?.data?.ADDRESS}</p>
                    </Grid>
                  </Grid>
                  <Grid container className="formGrid">
                    <Grid className="bankLabel">
                      <p className="value">Contact</p>
                    </Grid>
                    <Grid className="bankValue">
                      <p className="value">{IFSCData?.data?.CONTACT}</p>
                    </Grid>
                  </Grid>
                  <Grid container className="formGrid">
                    <Grid className="bankLabel">
                      <p className="value">City</p>
                    </Grid>
                    <Grid className="bankValue">
                      <p className="value">{IFSCData?.data?.CITY}</p>
                    </Grid>
                  </Grid>
                  <Grid container className="formGrid">
                    <Grid className="bankLabel">
                      <p className="value">District</p>
                    </Grid>
                    <Grid className="bankValue">
                      <p className="value">{IFSCData?.data?.DISTRICT}</p>
                    </Grid>
                  </Grid>
                  <Grid container className="formGrid">
                    <Grid className="bankLabel">
                      <p className="value">State</p>
                    </Grid>
                    <Grid className="bankValue">
                      <p className="value">{IFSCData?.data?.STATE}</p>
                    </Grid>
                  </Grid>
                </Grid>
              )}
              <Grid className="action-div">
                <Link onClick={() => history.push("/my-profile")} underline="none" className="previousBtn cursor-pointer">
                  Cancel
                </Link>
                <Button
                  type="submit"
                  variant="contained"
                  className="primaryButton nextBtn"
                  disabled={!IFSCData?.valid}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>
      <UnderApprovedDialog
        open={openDialog}
        backToHome={backToHome}
      />
    </>
  );
}

const ReduxClientFormMapped = reduxForm({
  form: "BankDetailsForm", // a unique identifier for this form
  enableReinitialize: false,
})(BankDetailsForm);

const mapStateToProps = (state) => {
  return {
    formStates: getFormValues("BankDetailsForm")(state), // here 'form' is the name you have given your redux form
  };
};

export default connect(mapStateToProps)(ReduxClientFormMapped);
