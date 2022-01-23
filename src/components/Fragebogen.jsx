import { Box } from '@mui/system';
import React from 'react';
import Fragen from './Fragen';
import BasicRating from './Rating';


const Fragebogen = ({count, getResults, results}) => {



    const produkt_fragen = ["Wie heißt das Gerät?", "Wie viel hat das Gerät gekostet?", "Um welche Art von Produkt handelt es sich?"]
    const nutzer_fragen = ["Beispielfrage?", "Zweite-Frage?", "Förderung der Autonomie (Technik hilft eigenständig zu bestimmen, ob oder wie etwas ausgeführt wird)", 
    "Förderung der Selbständigkeit (Technik hilft bei der selbständigen Ausführung einer Handlung)", "Förderung der physischen Sicherheit (Schutz vor Gefahren z.B. Sturz, Feuer)",
    "Psychische Entlastung", "Ermöglichung gesellschaftlicher Teilhabe (Vermeidung sozialer Isolation)", "Geringe Gefahr der Stigmatisierung", "Positive Auswirkungen auf den Medikamentenkonsum"]
    const combinded_array = produkt_fragen.concat(nutzer_fragen)
    return (
    count < produkt_fragen.length ? (
        <Box sx={{
            '& > legend': { mt: 2}
          }}>
            <Fragen fragen_array={combinded_array} fragen_index={count}/>
            <BasicRating count={count} getResult={result => getResults(result)} result={results}/> 
        </Box>
    ) : (
        <Box sx={{
            '& > legend': { mt: 2}
          }}>
            <Fragen fragen_array={combinded_array} fragen_index={count}/>
            <BasicRating count={count} getResult={result => getResults(result)} result={results}/>    
        </Box>
    ) 
)
}

export default Fragebogen;
