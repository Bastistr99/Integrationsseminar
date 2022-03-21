import React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';


// Holt sich das ausgewählt Produkt und zeigt zu jeder Frage die Durchschnittsantwort an


const columns = [
  { field: 'frage', headerName: 'Frage', width:900 },
  { field: 'avg', headerName: 'Durchschnittliche Bewertung', width:300},
];


export default function DataGridBewertungen(props) {

  const [reviews, setReviews] = useState ([]);

  async function ReviewDaten() {
    const data = await fetch("http://localhost:3001/get_reviews");
    const result = await data.json();
    console.log(result[0].antwort[0].frage);

    const filtered_result = result.filter(
      (result) => result.id == props.id
    );

    filtered_result[0].antwort.splice(1,2);
    filtered_result[0].antwort.splice(23,1);

    const avg_result = [];
    let sum;
    
    for(let i=0; i<filtered_result[0].antwort.length; i++){

      sum = 0;
      for(let j=0; j<filtered_result.length; j++){
        sum += parseInt(filtered_result[j].antwort[i].antwort);
      };

      avg_result[i] = {
        id: i,
        frage: filtered_result[0].antwort[i].frage,
        avg: (sum/filtered_result.length).toFixed(1)
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