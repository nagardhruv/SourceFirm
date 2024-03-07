import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SearchBar from '../Chat/SearchBar';
import 'assets/css/myrequest.css';
import { Field, reduxForm } from 'redux-form';
import { required } from 'utils/Validation';
import { SelectAutocomplete } from 'components/CustomeAutoComplete/AsynAutocomplete';
import EnhancedTable from './table';


function TabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));



function My_request() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid className="request-top-section">
      <Container>
        <Grid className="request-top-inner">
          <div className="request-heading">
            <Typography variant='h3'>My Requests</Typography>
          </div>

          <div className='request-table'>
            <div className={classes.root}>
              <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Requests" {...a11yProps(0)} />
                  <Tab label="Rejected" {...a11yProps(1)} />

                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <div className='main-table-filter'>
                  <div className='searchbar-content'>
                    <SearchBar />
                    <div className='filter-btn'>
                      <Field
                        className='filter-icon'
                        name="profile_type"
                        displayKey="title"
                        id="profile_type"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        options={[]}
                        component={SelectAutocomplete}
                        loading={false}
                        required
                        validate={[required]}
                        inputProps={{
                          placeholder: "All",
                        }}
                      // onChange={(_value) => { value }}
                      >
                      </Field>
                    </div>
                  </div>
                  <div className='job-post-table'>
                    <EnhancedTable />
                  </div>

                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>

            </div>
          </div>
        </Grid>
      </Container>
    </Grid>
  );
}
const My_requestFormMap = reduxForm({
  form: "MyRequest",
  enableReinitialize: true,
})(My_request);

export default My_requestFormMap;
