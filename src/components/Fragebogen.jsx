import { Box } from "@mui/system";
import React, {useState, useEffect} from "react";
import Fragen from "./Fragen";
import BasicRating from "./Rating";
import FragebogenTemplate from "./fragenbogen_template.json";
import { useParams } from "react-router-dom";

const Fragebogen = ({ count, getResults, results, setAntworten }) => {

  const [fragebogen, setFragebogen] = useState([])

  const frage = []
  const { id } = useParams();

  for(var fragen in FragebogenTemplate){
      frage.push(FragebogenTemplate[fragen].frage)
  }  

  console.log(results)

  useEffect(()=> {
    if(count == 25) {
      results.map((antwort,i) => {
        let body = {
          frage: frage[i],
          antwort: antwort.sternwert,
          productid: id
        }
        setFragebogen(oldarray => [...oldarray, body])
      })
    }
    setAntworten(fragebogen)
  }, [count])

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Fragen fragen_array={FragebogenTemplate} fragen_index={count} />
      <BasicRating
        count={count}
        getResult={(result) => getResults(result)}
        result={results}
      />
    </Box>
  );
};

export default Fragebogen;
