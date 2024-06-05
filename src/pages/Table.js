// src/pages/Tables.js
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
  { field: 'email', headerName: 'Email', width: 160 },
];

const rows = [
  { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 42, email: 'jane@example.com' },
  // Add more rows as needed
];

const Tables = () => {
  const [tableRows, setTableRows] = useState(rows);

  const handleEditCellChange = ({ id, field, props }) => {
    if (props.value !== undefined) {
      const updatedRows = tableRows.map((row) => (row.id === id ? { ...row, [field]: props.value } : row));
      setTableRows(updatedRows);
    }
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={tableRows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        onEditCellChange={handleEditCellChange}
      />
    </div>
  );
};

export default Tables;
