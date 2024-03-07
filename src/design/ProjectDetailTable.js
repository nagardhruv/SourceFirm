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
import 'assets/css/profile.css';

import plusIcon from 'assets/img/icons/plus-icon.svg';
import editIcon from 'assets/img/icons/edit-icon.svg';
import deleteIcon from 'assets/img/icons/delete-icon.svg';
import DeleteProjectDialog from './DeleteProjectDialog';

const columns = [
  { id: 'project_name', label: 'Project Name', minWidth: 170 },
  {
    id: 'category',
    label: 'Category',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'durations',
    label: 'Project Duration',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: ' ',
    minWidth: 20,
    format: (value) => value.toLocaleString('en-US'),
  },
];

function ProjectDetailTable() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);
    const openMenu = Boolean(anchorEl);
    const handleAction = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleActionMenuClose = () => {
        setAnchorEl(null);
    };
    const handleOpenDialog = () => {
        setOpenDialog(true);
    };
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

  return (
    <>
        <TableContainer>
            <Table className='project_detail-table'>
                <TableHead>
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
                        Amazon
                      </TableCell>
                      <TableCell className='tableDataCell'>
                        Software Developer
                      </TableCell>
                      <TableCell className='tableDataCell'>
                        12 Months
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
                                  <Link onClick={handleAction}><img src={editIcon} style={{ width: '12px' }} alt='img'/>Edit</Link>
                              </MenuItem>
                              <MenuItem onClick={handleOpenDialog} className='more_actionList delete'>
                                  <Link><img src={deleteIcon} style={{ width: '12px' }} alt='img'/>Delete</Link>
                              </MenuItem>
                          </Menu>
                        </div>
                      </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <Link
            onClick={() => fields.push()}
            underline="none"
            className="addBranchBtn cursor-pointer"
        >
            <img src={plusIcon} alt="add" /> add New
        </Link>
        <DeleteProjectDialog open={openDialog} close={handleCloseDialog}  />
    </>
  );
}

export default ProjectDetailTable;
