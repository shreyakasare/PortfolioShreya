import React, { useState } from 'react';
import DialogBox from './DialogBox'; // Assuming you have a DialogBox component
import DataTable from './DataTable'; // Import the DataTable component

function ParentComponent() {
  const [data, setData] = useState([]); // Initialize with your data

  const handleEdit = (index) => {
    // Handle edit action here, e.g., open the dialog box for editing
    // You can pass the item from 'data[index]' to the dialog box for editing
  };

  const handleDelete = (index) => {
    // Handle delete action here, e.g., remove the item from the 'data' array
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <div>
      <DialogBox data={data} setData={setData} />
      <DataTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default ParentComponent;
