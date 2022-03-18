import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

//const rows: GridRowsProp = [
const rows = [
  { id: 1, col1i: 'so', col2: 'also' }
];

//const columns: GridColDef[] = [
const columns = [
  { field: 'col1i', headerName: 'Name', width: 200 },
  { field: 'col2', headerName: 'Beschreibung', width: 300 },
  { field: 'col3', headerName: 'UVP', width: 100 },
  { field: 'col4', headerName: 'Kategorie', width: 150, },
  { field: 'col5', headerName: 'Gesamtbewertung', width: 150, flex:1 },
];

function ProduktDaten() {
  fetch("http://localhost:3001/get_produkte") 
  .then(res => res.json())
  .then(data => {
    console.log(data[0].name);
    console.log(data);
    document.getElementById('test').innerHTML = data[0].name;
  });
};

ProduktDaten();

export default function DataGridProdukte() {

  return (
    <div>
      <div style={{ height: 300, width: '80%', marginLeft: '10%', marginTop: 30}}>
        <DataGrid rows={rows} columns={columns} />
      </div>
      <div>
        <p id="test"></p>
      </div>
    </div>
  );
}