import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const Fragen = ({ fragen_array, fragen_index }) => {

const frage = []
  for(var fragen in fragen_array){
   frage.push(fragen_array[fragen].frage)
}
  return (
    <div>
      {fragen_array !== "null" ? 
      (frage.map((frage, index) => {
        if ((fragen_index === index)) {
          return (
            <List key={index}>
              <ListItem >
                <ListItemText sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                  <Typography variant="h4" >{frage}</Typography>
                </ListItemText>
              </ListItem>
            </List>
          );
        }
      })) 
      : (["Hier ist ein Fehler unterlaufen, bitte laden Sie die Seite neu"])}
    </div>
  );
};

export default Fragen;
