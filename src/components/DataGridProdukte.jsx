import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Link from '@mui/material/Link';
import { useState, useEffect } from 'react';

//Spalten des DataGrids
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

// Holt sich die Produkte aus der Datenbank und rendert diese in einer Tabelle mit den durchschnittlichen Bewertungen 


export default function DataGridProdukte() {

  const [produkte, setProdukte] = useState ([]);

  async function ProduktDaten() {
    //Holt alle Produkte aus der Datenbank
    const data = await fetch(`${process.env.URL}:3001/get_produkte`);
    const result = await data.json();

    //DataGrid braucht das Attribut "id". deshalb Änderung von "_id" zu "id"
    const manipulatedResult = await result.map(({
      _id: id,
      ...rest
    }) => ({
      id,
      ...rest
    }));

    //Einfügen eines Attributs, das denk Link zur Produkteseite enthält
    const ResultWithLinks = await manipulatedResult.map(obj => ({
      ...obj,
      link: "/produkt/"+(obj.id)
    }));

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