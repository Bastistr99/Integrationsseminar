import { Box } from "@mui/system";
import React from "react";
import Fragen from "./Fragen";
import BasicRating from "./Rating";
import FragebogenTemplate from "./fragenbogen_template.json";

const Fragebogen = ({ count, getResults, results }) => {

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
