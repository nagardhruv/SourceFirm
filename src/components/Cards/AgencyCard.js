import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import 'assets/css/agencyCard.css';

import arrowRight from "assets/img/icons/arrow-right.svg";

function AgencyCard() {
    return(
        <Card className="agency-card">
            <div className="agency-card-inner">
                <CardContent>
                    <Grid className="agency-top">
                        <Grid className="agency-detail">
                            <h6 className="card-number">
                                CA46548542
                            </h6>
                            <p>
                                America
                            </p>
                        </Grid>
                        <Grid className="agency-link">
                            <img src={arrowRight} alt="forward" />
                        </Grid>
                    </Grid>
                    <Grid className="content">
                        <h6 className="agency-name">
                            Software Development  Agency
                        </h6>
                        <List className='list'>
                            <ListItem className="listItem">7+ Years of Experience</ListItem>
                            <ListItem className="listItem">12+ Projects Done</ListItem>
                        </List>
                    </Grid>
                </CardContent>
                <CardActions>
                    <div className="agency-footer">
                        <ul className="multiuser">
                            <li><span>H</span></li>
                            <li><span>V</span></li>
                            <li><span>58+</span></li>
                        </ul>
                        <p>Developer</p>
                    </div>
                </CardActions>
            </div>
        </Card>
    );
}

export default AgencyCard;