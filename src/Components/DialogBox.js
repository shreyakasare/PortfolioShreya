import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const DataTable = ({ data }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const handleDelete = (index) => {
    // Handle delete action here, e.g., remove the item from the 'data' array
    // You can use the index to remove the item from the 'data' array
  };

  const handleClose = () => {
    setDialogOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
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
                  <IconButton onClick={() => handleEdit(item)} color="primary">
                 <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(index)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          {/* Render form fields for editing here */}
          {/* For example, you can use TextField components */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DataTable;
