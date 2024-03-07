import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import "assets/css/agencyDeveloperCard.css";
import bagIcon from "assets/img/icons/suitcase-grey-icon.svg";
import clockIcon from "assets/img/icons/clock-grey-icon.svg";
import bag2Icon from "assets/img/icons/suitcase-blue-icon.svg";
import clock2Icon from "assets/img/icons/clock-blue-icon.svg";

function AgencyDeveloperCard() {
  return (
    <Card className="agency-developer-card">
      <div className="agency-developer-card_inner">
        <CardContent>
          <Grid className="agency-top">
            <Grid className="agency-detail">
              <h6 className="card-number">CA46548542</h6>
              <p>America</p>
            </Grid>
            <Grid className="agency-exp-info">
                <div>
                    <span className="experience">
                        <img src={bagIcon} alt="img"/>
                        <img src={bag2Icon} className="blue-icon" alt="img"/>
                        5+ Years
                    </span>
                </div>
                <div>
                    <span className="duration">
                        <img src={clockIcon} alt="img"/>
                        <img src={clock2Icon} className="blue-icon" alt="img"/>
                        Full Time
                    </span>
                </div>
            </Grid>
          </Grid>
          <Grid className="content">
            <Grid className="skillset">
              <List className="skillList">
                <ListItem className="skillList-item">
                  <ListItemText primary="Mobile App" />
                </ListItem>
                <ListItem className="skillList-item">
                  <ListItemText primary="IOS Developmaent" />
                </ListItem>
                <ListItem className="skillList-item">
                  <ListItemText primary="Web App" />
                </ListItem>
                <ListItem className="skillList-item more-skillList-item">
                  <ListItemText primary="+6" />
                </ListItem>
              </List>
            </Grid>
            <Typography className="discription">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting...
            </Typography>
          </Grid>
        </CardContent>
      </div>
    </Card>
  );
}

export default AgencyDeveloperCard;
