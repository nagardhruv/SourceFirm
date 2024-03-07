import * as React from "react";
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
import "assets/css/error.css";
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
// import CustomBreadcrumbs from 'components/CustomBreadcrumbs/CustomBreadcrumbs';
// import FaqLEftImg from 'assets/img/faq-left-img.png'
// import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
// import AccordianIcon from 'assets/img/accordion-icon.png';
import ErrorImg from 'assets/img/error-img.png'
import { Button, Typography } from "@mui/material";




function Error_page() {

    return (
        <div>
          <section className="error-section">
            <div className="error-inner">
                <Container>
                    <div className="error-middle-content">
                        <div className="error-img">
                        <img src={ErrorImg} alt="" />  
                        </div>
                        <div className="error-text">
                            <Typography variant="body1">Oops, Sorry we can’t find that page</Typography>
                            <div className="error-back-btn">
                                <Button className="btn btn-primary">Back to Home</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
          </section> 
        </div>
    )
}

export default Error_page;