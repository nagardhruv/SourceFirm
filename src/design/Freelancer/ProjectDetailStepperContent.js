import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "assets/css/profile.css";

import editIcon from "assets/img/icons/edit-icon.svg";
import deleteIcon from "assets/img/icons/delete-icon.svg";

const columns = [
  { id: "project_name", label: "Project Name", minWidth: 170 },
  {
    id: "category",
    label: "Category",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "project_duration",
    label: "Project Duration",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "action",
    label: " ",
    minWidth: 20,
    format: (value) => value.toLocaleString("en-US"),
  },
];

function ProjectDetailStepperContent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleAction = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleActionMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <TableContainer>
        <Table
          className="manage_developer-table project_detail-table"
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 50, minWidth: column.minWidth }}
                  className="tableCellHead"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell className="tableDataCell">Amazon</TableCell>
              <TableCell className="tableDataCell">
                Software Developer
              </TableCell>
              <TableCell className="tableDataCell">12 Months</TableCell>
              <TableCell className="tableDataCell">
                <div>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={openMenu ? "long-menu" : undefined}
                    aria-expanded={openMenu ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleAction}
                    className="actionBtn"
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleActionMenuClose}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    PaperProps={{
                      style: {
                        width: "10ch",
                      },
                    }}
                  >
                    <MenuItem
                      className="more_actionList"
                    >
                      <Link onClick={handleAction}>
                        <img
                          src={editIcon}
                          style={{ width: "12px" }}
                          alt="img"
                        />
                        Edit
                      </Link>
                    </MenuItem>
                    <MenuItem
                      className="more_actionList delete"
                    >
                      <Link onClick={handleAction}>
                        <img
                          src={deleteIcon}
                          style={{ width: "12px" }}
                          alt="img"
                        />
                        Delete
                      </Link>
                    </MenuItem>
                  </Menu>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        
      </TableContainer>
      <Box component="div" className='addBtn-box'>
        <Button >
          + Add New Project
        </Button>
      </Box>
    </>
  );
}

export default ProjectDetailStepperContent;
