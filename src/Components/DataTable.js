import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const DataTable = ({ data, onEdit, onDelete }) => {
     data = []
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Serial Number</TableCell>
            <TableCell>To Amount</TableCell>
            <TableCell>Flat Rate</TableCell>
            <TableCell>Percent Rate</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.Ml1SrNo}</TableCell>
              <TableCell>{item.ToAmt}</TableCell>
              <TableCell>{item.FlatRate}</TableCell>
              <TableCell>{item.PercentRate}</TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(index)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(index)} color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
