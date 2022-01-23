import { Button } from "@mui/material";
import React from "react";

const JsonObjekt = ({ review}) => {
  const get_data = () => {
      console.log(review)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product: {
          name: review[0].antwort,
          preis: review[1].antwort,
          art: review[2].antwort,
        },
        personalbezogene_aspekte: {
          nutzer: {
            akzeptanz: 0,
            autonomie: 2,
            gefahr: 3,
            gesellschaftlich: 4,
            komfortabel: 3,
            medikamentenkonsum: 2,
            privatsphaere: 1,
            psychische_sicherheit: 3,
            pyschische_entlastung: 1,
            selbststaendigkeit: 2,
            zumutbarkeit: 3,
          },
          angehoerige: {
            entlastung_angehoerige: 4,
            ermoeglichung_fuehrsorge: 2,
          },
          pflegepersonal: {
            akzeptanz: 2,
            entlastung: 4,
          },
        },
        technologische_aspekte: {
          ausfall: 2,
          bedienung: 4,
          bedienungsfreundlichkeit: 2,
          beziehung: 1,
          datensicherheit: 0,
          datentransparenz: 3,
          design: 4,
          einrichtung: 2,
          hardware_software: 3,
          infrastruktur: 1,
          leistungsfaehigkeit: 1,
          robustheit: 3,
          schnelle_verfuegbarkeit: 1,
          service: 2,
          wohnraum: 2,
        },
        ökonomische_aspekte: {
          anschaffungskosten: 2,
          service: 1,
          betreuungsaufwand: 1,
          betriebskosten: 3,
          kostenuebernahme: 4,
          laufende_kosten: 1,
          wartungsaufwand: 4,
        },
      }),
    };

    fetch("http://localhost:3001/send_review", requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return <Button variant='outlined' color='inherit' onClick={get_data}>Zurück zur Startseite</Button>;
};

export default JsonObjekt;
