import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Link from '@mui/material/Link';
import { useState, useEffect } from 'react';

const columns = [
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'beschreibung', headerName: 'Beschreibung', width: 400 },
  { field: 'kategorie', headerName: 'Kategorie', width: 200 },
  { field: 'uvp', headerName: 'UVP', width: 70, },
  { field: 'link', headerName: 'Bewertung', width: 150, flex:1,
  renderCell: (params) => (
    <Link href={`${params.value}`}>Zur Bewertungsübersicht</Link>
  )},
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

    const ResultWithLinks = await manipulatedResult.map(obj => ({
      ...obj,
      link: "/produkt/"+(obj.id)
    }));

    console.log(ResultWithLinks);

    setProdukte(ResultWithLinks);
  };
  
  useEffect(() => {
   ProduktDaten();
  }, []);

  return (
      <div style={{ height: 600, width: '80%', marginLeft: '10%', marginTop: 30}}>
        <DataGrid rows={produkte} columns={columns} />
      </div>
  );
}