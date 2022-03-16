import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'hi', col2: 'World' }
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Name', width: 200 },
  { field: 'col2', headerName: 'Beschreibung', width: 300 },
  { field: 'col3', headerName: 'UVP', width: 100 },
  { field: 'col4', headerName: 'Kategorie', width: 150, },
  { field: 'col5', headerName: 'Gesamtbewertung', width: 150, flex:1 },
];


export default function DataGridProdukte() {
  return (
    <div>
      <div style={{ height: 300, width: '80%', marginLeft: '10%', marginTop: 30}}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}