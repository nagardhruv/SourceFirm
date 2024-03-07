import * as React from "react";
import Grid from "@mui/material/Grid";
import history from "utils/history";
import logo from "assets/img/logo-white.png";
import halfOval_shape2 from "assets/img/half_oval-shape2.png";
import Typography from '@mui/material/Typography';

export default function LeftContainer() {
  return (
    <Grid className="left-container">
      <div className="bg-element"  >
        <img src={halfOval_shape2} alt="shape"></img>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" className="cursor-pointer" onClick={() => history.push("/")} />
      </div>
      <Typography variant="p" component="p" gutterBottom>
        SourceFirms is the global marketplace of one of the largest communities of
        Clients, Agencies, and Independent Contractors for Software Development.
        It connects talent 3x times better with more opportunities to transform
        performance and growth for resilient people (clients), talents (developers),
        and enterprises where it matters most – Technology Solution, IT Consulting,
        Digital Transformation and more.
      </Typography>
    </Grid>
  );
}
