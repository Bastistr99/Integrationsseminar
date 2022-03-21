import { Button } from "@mui/material";
import React from "react";


//Mit diesem Button werden die Daten, die davor durch den Fragebogen gesammelt werden an die MongoDB geschickt

// POST 

const JsonObjekt = ({review, toggleHomescreen}) => {
  console.log(review)
  const get_data = () => {
      toggleHomescreen(true)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
       id: review[1].productid,
       antwort: review,
       fragen: review
      }),
    };

    fetch("http://localhost:3001/send_review", requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return <Button variant='outlined' color='inherit' onClick={get_data}>Zurück zur Startseite</Button>;
};

export default JsonObjekt;
