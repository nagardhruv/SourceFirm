import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import 'assets/css/jobpostdetail.css';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import DotIcon from 'assets/img/icons/dot-icon.svg';
import { useSelector } from 'react-redux';
import { findSalaryType, getAvailability } from 'utils/Common';

const JobPostDetailsCard = () => {

  const jobPostDetail = useSelector(state => state?.jobPostReducer?.jobPostDetail);

  return (
    <Grid>
      <div className="job-list-content">
        <div className="job-list-card">
          <div className="job-card-header">
            <div className="heading-text">
              <Typography variant="h5">{jobPostDetail?.title}</Typography>
              <Typography variant="body1">Job post ID : {jobPostDetail?.uid}</Typography>
            </div>
            {/* <div className="active-inactive-list">
              <div className="heading-dot-icon">
                <img src={DotIcon} alt="img" />
              </div>
            </div> */}
          </div>
          <div className="job-card-body">
            <div className="position-content">
              <List>
                <ListItem>
                  <Typography variant="h3">{jobPostDetail?.experience?.title}</Typography>
                  <span>Experience</span>
                </ListItem>
                <ListItem>
                  <Typography variant="h3">{getAvailability(jobPostDetail?.availability) || '-'}</Typography>
                  <span>Availability</span>
                </ListItem>
                <ListItem>
                  <Typography variant="h3">{jobPostDetail?.positions}</Typography>
                  <span>Position</span>
                </ListItem>
              </List>
              <div className="amount-year">
                <Typography variant="h2">
                  ${`${jobPostDetail?.budget_from} - ${jobPostDetail?.budget_to}`}
                  <span>/{findSalaryType(jobPostDetail?.salary_type)}</span></Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default JobPostDetailsCard;