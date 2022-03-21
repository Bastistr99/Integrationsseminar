import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function LinearProgressWithLabel(props) {
//Zeigt an, wie weit der User mit dem beantworten der Fragen ist
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 7 }}>
      <Box sx={{ width: "90%", mr: 2, ml: 2 }}>
        <LinearProgress variant="determinate" {...props} sx={{height: "25px"}}/>
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="h5" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};
