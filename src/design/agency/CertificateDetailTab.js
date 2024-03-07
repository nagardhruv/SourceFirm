import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import certificate1 from "assets/img/projectimage-1.png";
// import certificate2 from "assets/img/projectimage-2.png";
// import certificate3 from "assets/img/projectimage-3.png";
// import viewIcon from "assets/img/icons/visibility-icon.svg";
import 'assets/css/profile.css';
import 'assets/css/projectDetail.css';
import CertificateDetailsDialog from 'components/Dialog/CertificateDetailsDialog';

const columns = [
  { id: 'image_id', label: 'Image', minWidth: 100 },
  {
    id: 'certi_title',
    label: 'Certificate Title',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'certi_date',
    label: 'Certification Date',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
];

function CertificateDetailTab() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

  return (
    <>
      <TableContainer>
        <Table className='project_detail-table certificate_table'>
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
            <TableRow hover role="checkbox" tabIndex={-1} onClick={handleClickOpen}>
              <TableCell className='tableDataCell'>
                    <div className="certificateImg">
                      <img src={certificate1} alt="img" />
                    </div>
              </TableCell>
              <TableCell className='tableDataCell'>
              Google IT Automation
              </TableCell>
              <TableCell className='tableDataCell'>
              01 March 2021
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <CertificateDetailsDialog open={open} close={handleClose}/>
    </>
  );
}

export default CertificateDetailTab;
