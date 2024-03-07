import * as React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import bgElement from "assets/img/bg-element-path.png";
import history from "utils/history";

export default function RightContainer({ children }) {
  return (
    <>
      <Grid item className="login-nav">
        <Link onClick={() => { history.push('/') }} underline="none" className="nav-link">
          Home
        </Link>
        {/* <Link onClick={() => { history.push('/') }} underline="none" className="nav-link">
          Plans
        </Link> */}
      </Grid>
      {children}
      <div className="bg-element">
        <img src={bgElement} alt="img" />
      </div>
    </>
  );
}
