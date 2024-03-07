import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Select from '@mui/material/Select';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import 'assets/css/allModals.css';
import 'assets/css/developer-profile.css';
import 'assets/css/add-developer.css';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import deleteIcon from 'assets/img/icons/delete-icon.svg';
import Image1 from 'assets/img/projectimage-1.png';
import Image2 from 'assets/img/projectimage-2.png';
import ProjectCard from 'components/Cards/ProjectCard';


const ariaLabel = { 'aria-label': 'description' };

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

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 28,
              top: 26,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

function TabPanelSecond() {
    const [open, setOpen] = React.useState(false);
    const [country, setCountry] = React.useState('');
    const [value, setValue] = React.useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChangeCountry = (event) => {
      setCountry(event.target.value);
  };

  return (
    <>
        <Grid className='add_developer-form'>
            <Typography variant='h5' className='title'>
              Developer Projects
            </Typography>
            <div className='added-project-box'>
              <ProjectCard />
            </div>
            <Box component="div" className='addproject-box'>
              <Button  onClick={handleClickOpen}>
                +<br/>
                Add New Project
              </Button>
            </Box>
        </Grid>

      {/* modal start */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className='add_project-modal'
      >
        <BootstrapDialogTitle id="customized-dialog-title" className='modal-title' onClose={handleClose}>
            Add Project
        </BootstrapDialogTitle>
        <DialogContent className='content'>
          <Grid container className='formGrid'>
            <Grid className='formGrid-inner'>
                <FormControl variant="standard" className='formControl'>
                    <InputLabel shrink htmlFor="bootstrap-input">
                      Project Name*
                    </InputLabel>
                    <Input className='inputField' placeholder="Enter full name" inputProps={ariaLabel} />
                </FormControl>
            </Grid>
            <Grid className='formGrid-inner'>
                <FormControl variant="standard" className='formControl'>
                    <InputLabel shrink htmlFor="bootstrap-input">
                      Project Duration*
                    </InputLabel>
                    {/* <Input className='inputField' placeholder="Enter full name" inputProps={ariaLabel} /> */}
                    <Grid container className='formGrid datepicker-formGrid'>
                    <Grid className='formGrid-inner'>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <span>to</span>
                    <Grid className='formGrid-inner'>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    </Grid>
                </FormControl>
            </Grid>
          </Grid>
          <Grid container className='formGrid'>
            <Grid item lg={12} md={12} sm={12}>
              <FormControl variant="standard" className='formControl'>
                <InputLabel shrink htmlFor="bootstrap-input">
                  Used Technologies*
                </InputLabel>
                <Select
                    value={country}
                    onChange={handleChangeCountry}
                    className='inputField'
                    placeholder="Select category"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>category 1</MenuItem>
                    <MenuItem value={20}>category 2</MenuItem>
                    <MenuItem value={30}>category 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
          </Grid>
          <Grid container className='formGrid'>
            <Grid item lg={12} md={12} sm={12}>
              <FormControl variant="standard" className='formControl'>
                <InputLabel shrink htmlFor="bootstrap-input">
                  About*
                </InputLabel>
                <TextField className='multiSelect-Textfield' multiline rows={4} placeholder="Enter text" />
              </FormControl>
            </Grid>
          </Grid>
          <Grid className='add-image-container'>
              <p className='label'>Images</p>
              <List className='add-imageList'>
                <ListItem className="item">
                    <img src={Image1} alt="img"/>
                    <div className='imageOverlay'>
                      <img src={deleteIcon} alt='img'/>
                    </div>
                </ListItem>
                <ListItem className="item">
                    <img src={Image2} alt="img"/>
                    <div className='imageOverlay'>
                      <img src={deleteIcon} alt='img'/>
                    </div>
                </ListItem>
                <ListItem className="add-imageBox">
                  <Button>
                    +<br/>
                    Add Image
                  </Button>
                </ListItem>
              </List>
          </Grid>
          <Grid container className='formGrid'>
            <Grid item lg={12} md={12} sm={12}>
              <FormControl variant="standard" className='formControl'>
                <InputLabel shrink htmlFor="bootstrap-input">
                  Project link
                </InputLabel>
                <Input className='inputField' placeholder="Enter link" inputProps={ariaLabel} />
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className='bottom'>
          <Link underline="none" onClick={handleClose} className='cancelBtn'>Cancel</Link>
          <Button autoFocus onClick={handleClose} type='submit' variant="contained" className='primaryButton modalBtn'>
            Add
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}

export default TabPanelSecond;
