import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../../store/actions/index";
import { toast } from "react-toastify";
import { LoaderContext } from "utils/LoaderContext";
import LeftContainer from "../components/LeftContainer";
import RightContainer from "../components/RightContainer";
import Grid from "@mui/material/Grid";
import "assets/css/auth.css";
import "assets/css/profile.css";
import UserType from "./component/UserType";
import SignUpForm from "./component/SignUpForm";
import { isLogIn } from "utils/Auth";
import { getUserStatus } from "utils/Common";
import { Helmet } from "react-helmet";

const SignUp = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const { toggalLoader } = useContext(LoaderContext);
  const [activeUser, setActiveUser] = useState(3);
  const [activeStep, setActiveStep] = useState("selectUserType");
  const userDetails = useSelector((state) => state.authReducer?.userDetails);

  const signUp = (values) => {
    const signUpObj = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      user_type: activeUser,
      // contact_number: `+${values.country.phone}${values.phoneNumber}`,
      contact_number: values.phoneNumber,
      city: values.city.id,
      password: values.password,
      confirm_password: values.confirm_password,
      is_terms_and_condition_accepted: values.is_terms_and_condition_accepted,
    };

    toggalLoader(true);
    dispatch(Actions.signUp(signUpObj))
      .then((response) => {
        if (response.status === 201) {
          // dispatch({ type: "LOGIN_USER", payload: response.data });
          // dispatch({ type: 'GET_USER_DETAILS', payload: response.data });
          dispatch({ type: "LOGIN_TEMP_USER", payload: response.data });
          dispatch({ type: 'USER_TEMP_DETAILS', payload: response.data });
          toast.success("Register successfully");
          history.push(
            "/email-verify",
            { email: response.data.email }
          );
        } else {
          dispatch({ type: "LOGIN_USER", payload: null });
          dispatch({ type: 'GET_USER_DETAILS', payload: {} });
          Object.keys(response.data).forEach((error) => {
            toast.error(response.data[error][0]);
          })
        }
        toggalLoader(false);
      })
      .catch(() => {
        toggalLoader(false);
      });

  };

  const showPageContent = () => {
    if (activeStep == "selectUserType") {
      return (
        <UserType
          userType={(user) => {
            setActiveUser(user);
          }}
          activeUser={activeUser}
          changeStep={() => {
            setActiveStep("signUpForm");
          }}
        />
      );
    } else if (activeStep == "signUpForm") {
      return (
        <SignUpForm userType={activeUser} changeStep={() => { setActiveStep("selectUserType"); }}
          onSubmit={(values) => { signUp(values); }} />
      );
    } else {
      return (
        <UserType changeStep={() => { setActiveStep("signUpForm"); }} />
      );
    }
  };
  useEffect(() => {
    if (isLogIn()) {
      let route = getUserStatus(userDetails, userDetails.username);
      history.push(route);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>SourceFirms: World&apos;s first and fastest marketplace to hire agile software development team</title>

      </Helmet>
      <Grid container className="loginpage">
        <LeftContainer />
        <Grid className="right-container signUp-container">
          <RightContainer>{showPageContent()}</RightContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
