import { List, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Fragen from './Fragen';
import BasicRating from './Rating';
import Star_Rating from './Star_Rating';


const Fragebogen = ({count}) => {

    const produkt_fragen = ["Wie heißt das Gerät?", "Wie viel hat das Gerät gekostet?", "Um welche Art von Produkt handelt es sich?"]
    const nutzer_fragen = ["Beispielfrage?", "Zweite-Frage?"]
    const combinded_array = produkt_fragen.concat(nutzer_fragen)
    return (
    count < produkt_fragen.length ? (
        <Box sx={{
            '& > legend': { mt: 2}
          }}>
            <Fragen fragen_array={combinded_array} fragen_index={count}/>
            <BasicRating count={count}/> 
        </Box>
    ) : (
        <Box sx={{
            '& > legend': { mt: 2}
          }}>
            <Fragen fragen_array={combinded_array} fragen_index={count}/>
            <Star_Rating />    
        </Box>
    )
)
}

export default Fragebogen;
