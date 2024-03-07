import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import Progress from 'components/Progress';
import LoaderContextProvider from "./utils/LoaderContext"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Flip } from 'react-toastify';
import "./assets/css/custom.css";
import './index.css';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { GoogleOAuthProvider } from '@react-oauth/google';
import moment from "moment-timezone";

moment.tz.setDefault("UTC");

moment.relativeTimeThreshold('d', 7);
moment.relativeTimeThreshold('w', 4);
moment.updateLocale('en', {
  relativeTime: {
    s: 'few seconds ago',
    ss: '%d seconds ago',
    m: "a minute ago",
    mm: "%d minutes ago",
    h: "an hour ago",
    hh: "%d hours ago",
    d: "a day ago",
    dd: "%d days ago",
    w: "a week ago",
    ww: "%d weeks ago",
    M: "a month ago",
    MM: "%d months ago",
    y: "a year ago",
    yy: "%d years ago"
  }
});

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_KEY,
  integrations: [new BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.Fragment>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <LoaderContextProvider>
        <App />
        <Progress />
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme={"colored"}
          transition={Flip}
        />
      </LoaderContextProvider>
    </GoogleOAuthProvider>
  </React.Fragment>,
  document.getElementById("root")
);
