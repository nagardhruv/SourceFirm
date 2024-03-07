import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import routes from "routes.js";
import { isLogIn } from "utils/Auth";
import history from "utils/history";
import { USER_TYPES } from "utils/constant";

function Admin() {
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const userDetails = useSelector((state) => state.authReducer.userDetails);
  const is_email_verified = userDetails?.is_email_verified;
  const email = userDetails?.email || null;
  const userTypes = Object.fromEntries(Object.entries(USER_TYPES).map(([k, v]) => [v, k]));
  const incomingUserType = userTypes?.[userDetails?.user_type] || "";

  if (isLogIn() && is_email_verified === false) {
    history.push('/email-verify', { email: email, isNotShowTryAnotherEmail: false })
  }

  const userKeysCheck = (user, keys) => {
    if (keys) {
      let status = false;
      for (let key of keys.keys()) {
        if (user[key] === keys.get(key)) { status = true; }
      }
      return status;
    }
    return true;
  }

  const getRoutes = (route) => {
    return route.map((prop, key) => {
      if ((prop.layout === "/admin" && isLogIn())) {
        if (prop?.permitted?.includes(incomingUserType) && userKeysCheck(userDetails, prop?.keysCheck)) {
          return <Route exact path={prop.path} render={(props) => <prop.component {...props} />} key={key} />
        }
      } else if (prop.path == location.pathname) {
        history.push('/login');
      } else {
        return <Route key={key} path="/" render={() => <Redirect to="/login" />} />;
      }
    });
  };
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (window.innerWidth < 993 && document.documentElement.className.indexOf("nav-open") !== -1) {
      document.documentElement.classList.toggle("nav-open");
      let element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);


  return (
    <>
      <div className="wrapper">
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className={`main-content ${(userDetails?.user_type === USER_TYPES.CLIENT) ? "main-client-content" : ""}`} >
            <Switch>{getRoutes(routes)}</Switch>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Admin;
