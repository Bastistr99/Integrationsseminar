import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Typography } from '@mui/material';
import JsonObjekt from './Abschlussbutton';

//Dieses Objekt wird am Ende des Fragebogens angezeigt

//Nachdem der Nutzer auf den Button gedrückt hat, wird das JSON-Objekt (Abschlussbutton) ausgeführt und die Ergebnisse werden an die Datenbank geschickt



export default function SimpleBackdrop({review, toggleHomescreen}) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, display: "flex", alignItems: "center", justifyContent: "center"}}
        open={open}
        onClick={handleClose}
      > <div>
        <Typography variant='h6' color="inherit">
            Vielen Dank für ihre Antworten!
        </Typography>
        <br />
        <JsonObjekt review={review} toggleHomescreen={(res => toggleHomescreen(res))}/>
        </div>
      </Backdrop>
    </div>
  );
}