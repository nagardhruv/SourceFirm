import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import 'assets/css/featureCard.css'

import brackets from 'assets/img/icons/brackets.svg';

function FeaturedCard() {
  return (
    <Card className="featured-card">
      <CardContent>
        <Grid className="featured-top">
          <div className="icon-container">
            <img src={brackets} className="featured-icon" />
          </div>
          <div className="featured-title">
            <p className="featured-count">10K+</p>
            <p className="featured-position">Developers</p>
          </div>
        </Grid>
        <Typography className="content">
          {`Lorem Ipsum is simply dummy text of the printing and typesetting the industry's standard dummy text .`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FeaturedCard;