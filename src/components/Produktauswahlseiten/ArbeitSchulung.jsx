import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Produkte from "../Produkttemplate";

const ArbeitSchulung = () => {
  const [produkte, setProdukte] = useState([]);

  const get_produkte = async () => {
    const data = await fetch("http://localhost:3001/get_produkte");
    const result = await data.json();

    setProdukte(result);
  };

  useEffect(() => {
    get_produkte();
  }, []);

  const filtered_produkts = produkte.filter(
    (produkte) => produkte.kategorie === "Arbeit & Schulung"
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1, marginTop: "3vh" }}>
        <Grid container spacing={8}>
          {filtered_produkts.map((produkt) => {
              return (
            <Grid
              item
              xs={4}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                position: "relative"
              }}
            >
              <Produkte beschreibung={produkt.beschreibung} bild={produkt.image} titel={produkt.name} id={produkt._id} minHeight={500} preis={produkt.uvp}/>
            </Grid>
          )})}
        </Grid>
      </Box>
    </div>
  );
};

export default ArbeitSchulung;
