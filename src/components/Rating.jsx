import * as React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicRating({ count }) {
  const [art, setArt] = React.useState("");

  const handleChange = (event) => {
    setArt(event.target.value);
  };

  return (
    <div>
      {count < 2 ? (
        <Box sx={{ "& > legend": { mt: 2 }, mb: 5 }} component="form" sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }} noValidate autoComplete="off"> 
          <TextField id="standard_basic" label="Gerätename" variant="standard" />
        </Box>
      ) : (
        <Box sx={{ "& > legend": { mt: 2 }, mb: 5 }}>
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-required-label">Art</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              value={art}
              label="Art *"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Keins</em>
              </MenuItem>
              <MenuItem value={"Haushaltsgegenstand"}>Ten</MenuItem>
              <MenuItem value={"Technik"}>Twenty</MenuItem>
              <MenuItem value={"Medizinisches Gerät"}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Notwenige Angabe</FormHelperText>
          </FormControl>
        </Box>
      )}
    </div>
  );
}
