import * as React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicRating({ count, getResult }) {
  const [art, setArt] = React.useState("");
  const [text, setText] = React.useState("");

  const handleChange = (event) => {
    setArt(event.target.value);
    setText(event.target.value);
  };

const inputRef = React.createRef()

  React.useEffect(()=> {
    const inputText = inputRef.current.value
    console.log(inputText)
     getResult(inputText);
   },[text])

  return (
    <div>
      {count < 2 ? (
        <Box sx={{ "& > legend": { mt: 2 }, mb: 5 }} component="form" sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }} noValidate autoComplete="off"> 
          <TextField id="standard_basic" variant="standard" ref={inputRef} onChange={handleChange}/>
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
              <MenuItem value={"Haushaltsgegenstand"}>Haushaltsgegenstand</MenuItem>
              <MenuItem value={"Technik"}>Technik</MenuItem>
              <MenuItem value={"Medizinisches Gerät"}>Medizinisches Gerät</MenuItem>
            </Select>
            <FormHelperText>Notwenige Angabe</FormHelperText>
          </FormControl>
        </Box>
      )}
    </div>
  );
}
