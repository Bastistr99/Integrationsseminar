import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';


const columns = [
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'beschreibung', headerName: 'Beschreibung', width: 400 },
  { field: 'kategorie', headerName: 'Kategorie', width: 200 },
  { field: 'uvp', headerName: 'UVP', width: 70, },
  { field: 'bewertung', headerName: 'Gesamtbewertung', width: 150, flex:1 },
];


export default function DataGridProdukte() {

  const [produkte, setProdukte] = useState ([]);

  async function ProduktDaten() {
    const data = await fetch("http://localhost:3001/get_produkte");
    const result = await data.json();

    const manipulatedResult = await result.map(({
      _id: id,
      ...rest
    }) => ({
      id,
      ...rest
    }));

    setProdukte(manipulatedResult);
  };
  
  useEffect(() => {
   ProduktDaten();
  }, []);

  return (
    <div>
      <div style={{ height: 500, width: '80%', marginLeft: '10%', marginTop: 30}}>
        <DataGrid rows={produkte} columns={columns} />
      </div>
      <div>
        <p id="test"></p>
      </div>
    </div>
  );
}