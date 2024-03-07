import * as React from 'react';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import editIcon from 'assets/img/icons/edit-icon.svg';
import deleteIcon from 'assets/img/icons/delete-icon.svg';

const columns = [
  { id: 'user_id', label: 'User ID', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 170 },
  {
    id: 'category',
    label: 'Category',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'experience',
    label: 'Experience',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'projects',
    label: 'Projects Done',
    minWidth: 20,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 80,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: ' ',
    minWidth: 20,
    format: (value) => value.toLocaleString('en-US'),
  },
];


const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#548ca8',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#CECECE' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

function ManageAgencyDeveloper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleAction = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleActionMenuClose = () => {
    setAnchorEl(null);
  };

  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <>
      <Container>
        <Grid className='pagetitle-container'>
          <h3>Manage Developers</h3>
          <Button variant="contained" className='primaryButton nextBtn'>+ Add New</Button >
        </Grid>
        <Paper sx={{ width: '100%' }} className='manage-developer-paper'>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table" className='manage_developer-table'>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={12} className='tableTitle'>
                    Developers
                  </TableCell>
                </TableRow>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ top: 50, minWidth: column.minWidth }}
                      className='tableCellHead'
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover role="checkbox" tabIndex={-1} >
                  <TableCell className='tableDataCell'>
                    SP46548542
                  </TableCell>
                  <TableCell className='tableDataCell'>
                    Alexander	Harper
                  </TableCell>
                  <TableCell className='tableDataCell'>
                    Software Developer
                  </TableCell>
                  <TableCell className='tableDataCell'>
                    3+ Years
                  </TableCell>
                  <TableCell className='tableDataCell'>
                    8+
                  </TableCell>
                  <TableCell className='tableDataCell'>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                  </TableCell>
                  <TableCell className='tableDataCell'>
                    <div>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={openMenu ? 'long-menu' : undefined}
                        aria-expanded={openMenu ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleAction}
                        className='actionBtn'
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleActionMenuClose}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        PaperProps={{
                          style: {
                            width: '10ch',
                          },
                        }}
                      >
                        <MenuItem onClick={handleActionMenuClose} className='more_actionList'>
                          <Link onClick={handleAction}><img src={editIcon} style={{ width: '12px' }} alt='img' />Edit</Link>
                        </MenuItem>
                        <MenuItem onClick={handleActionMenuClose} className='more_actionList delete'>
                          <Link onClick={handleAction}><img src={deleteIcon} style={{ width: '12px' }} alt='img' />Delete</Link>
                        </MenuItem>
                      </Menu>
                    </div>
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
        </Paper>
      </Container>
    </>
  );
}

export default ManageAgencyDeveloper;
