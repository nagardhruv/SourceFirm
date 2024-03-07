import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import 'assets/css/allModals.css';
import 'assets/css/profile.css';
import 'assets/css/add-developer.css';

import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
import TabPanelFirst from './TabPanelFirst';
import TabPanelSecond from './TabPanelSecond';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

function AddDeveloper() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          Manage Developers
        </Link>,
        <Typography key="4" color="text.primary">
            Add Developer
        </Typography>,
      ];


  return (
    <>
        <Container>
            <Grid container className='profile-top-inner'>
                <Grid item lg={12} md={12} sm={12}>
                    <Stack spacing={2} className='breadcrumb-div-light'>
                        <Breadcrumbs
                            className='breadcrumb-nav'
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                    <Grid className='pagetitle-container'>
                        <h3>Add Developer</h3>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={4} md={4} sm={4}>
                  <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                    className="tabs-container"
                  >
                    <Tab label={
                        <>
                          <FirstTab />
                        </>
                      } 
                      {...a11yProps(0)} 
                    />
                    <Tab label={
                        <>
                          <SecondTab />
                        </>
                      } {...a11yProps(1)} 
                    />
                  </Tabs>
                </Grid>
                <Grid item lg={8} md={8} sm={8} className='panel-container'>
                  <TabPanel value={value} index={0} className='add_developer-panel'>
                    <TabPanelFirst />
                  </TabPanel>
                  <TabPanel value={value} index={1} className='add_developer-panel'>
                    <TabPanelSecond />
                  </TabPanel>
                  <Grid className='action-div'>
                    <Link href="#" underline="none" className='previousBtn'>Cancel</Link>
                    <Button  variant="contained" className='primaryButton nextBtn'>Submit</Button >
                  </Grid>
                </Grid>
            </Grid>
        </Container>
    </>
  );
}

export default AddDeveloper;
