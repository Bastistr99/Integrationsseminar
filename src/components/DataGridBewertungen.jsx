import React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';


// Holt sich alle Reviews und zeigt zu jeder Frage die Durchschnittsantwort an

//Spalten des DataGrids
const columns = [
  { field: 'frage', headerName: 'Frage', width:900 },
  { field: 'avg', headerName: 'Durchschnittliche Bewertung', width:300},
];

//erhält ProduktID von Produktübersicht.jsx als prop
export default function DataGridBewertungen(props) {

  const [reviews, setReviews] = useState ([]);

  //holt Produktbewertungen aus Datenbank
  async function ReviewDaten() {
    const data = await fetch(`${process.env.URL}:3001/get_reviews`);
    const result = await data.json();

    //Filtert anhand der ID die Bewertungen des gefragten Produkts aus allen Bewertungen heraus
    const filtered_result = result.filter(
      (result) => result.id == props.id
    );

    //Herausfilterung von hier nicht relevanten Fragen (Alter...)
    filtered_result[0].antwort.splice(1,2);
    filtered_result[0].antwort.splice(23,1);

    const avg_result = [];
    let sum, counter;
    
    //Iteriert über alle Fragen
    for(let i=0; i<filtered_result[0].antwort.length; i++){
      sum = 0;
      counter = 0;

      //Iteriert über alle Antworten zur jeweiligen Frage
      for(let j=0; j<filtered_result.length; j++){
        if(filtered_result[j].antwort[i].antwort != 0){
          sum += parseInt(filtered_result[j].antwort[i].antwort);
          counter++;
        };
      };

      avg_result[i] = {
        id: i,
        frage: filtered_result[0].antwort[i].frage,
        avg: (sum/counter).toFixed(1)
      };
    };

    setReviews(avg_result);

  };

  useEffect(() => {
    ReviewDaten()
  }, []);


  return(
        
    <>
      <Divider>
        <Chip label="Bewertungen" />
      </Divider>

      <b>Skala: 1 = Stimme nicht zu; 2 = Stimme eher nicht zu; 3 = Stimme eher zu; 4 = Stimme zu</b>

      <div style={{ height: 500, width: '80%', marginLeft: '10%', marginTop: 30}}>
        <DataGrid rows={reviews} columns={columns} />
      </div>
    </>

);
}