import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

export default function Auswahl() {
  const [age, setAge] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>

    <FormControl sx={{ m: 1, minWidth: 400, marginTop: 5 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={0}> Alle </MenuItem>
          <MenuItem value={1}>Mobiltelefone</MenuItem>
          <MenuItem value={2}>Haushaltsgeräte</MenuItem>
        </Select>
        <FormHelperText> <Typography variant="h6"> Kategorie </Typography> </FormHelperText>
      
      </FormControl>
    </div>
  );
}