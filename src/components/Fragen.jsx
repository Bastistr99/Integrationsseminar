import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const Fragen = ({ fragen_array, fragen_index }) => {
  return (
    <div>
      {fragen_array !== "null" ? (fragen_array.map((frage, index) => {
        if ((fragen_index === index)) {
          return (
            <List>
              <ListItem alignItems="flex-start">
                <ListItemText primary={frage}/>
              </ListItem>
            </List>
          );
        }
      })) : (["Hier ist ein Fehler unterlaufen, bitte laden Sie die Seite neu"])}
    </div>
  );
};

export default Fragen;
