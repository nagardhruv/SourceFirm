import React from 'react'
import { useLocation } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Dashboard from './Dashboard'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from "../store/actions/index";
import { USER_TYPES } from 'utils/constant';
import { Helmet } from 'react-helmet';

export default function Home() {
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.authReducer.userDetails);

  const getUserDetails = () => {
    dispatch(Actions.getUserDetails()).then(res => {
      if (res.status === 200) {
        dispatch({ type: 'GET_USER_DETAILS', payload: res.data });
      }
      else {
        dispatch({ type: 'GET_USER_DETAILS', payload: {} });
      }
    }).catch(() => {
      dispatch({ type: 'GET_USER_DETAILS', payload: {} });
    })
  }

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      let element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
    if (user?.token) {
      getUserDetails();
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title>SourceFirms: Remote software developers from global software agencies</title>
      </Helmet>
      <div className="wrapper">
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className={`dashboard-main-content ${(userDetails?.user_type === USER_TYPES.CLIENT) ? "dashboard-main-client-content" : ""}`}>
            <Dashboard />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
