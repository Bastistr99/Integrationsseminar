import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function Star_Rating() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Box sx={{ "& > legend": { mt: 2 }, mb: 5 }}>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
    </div>
  );
}
