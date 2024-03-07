import React from "react";
import ErrorImg from "assets/img/error-img.png";
import "assets/css/error.css";
import { Button, Typography, Container } from "@mui/material";
import history from "utils/history";

const PageNotFound = () => {
    return (
        <div>
            <section className='error-section'>
                <div className='error-inner'>
                    <Container>
                        <div className='error-middle-content'>
                            <div className='error-img'>
                                <img src={ErrorImg} alt='' />
                            </div>
                            <div className='error-text'>
                                <Typography variant='body1'>
                                    Oops, Sorry we can’t find that page
                                </Typography>
                                <div className='error-back-btn'>
                                    <Button
                                        className='btn btn-primary'
                                        onClick={() => history.push("/")}>
                                        Back to Home
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </div>
    );
};

export default PageNotFound;
