import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
import JsonObjekt from './Json_Objekt';

export default function SimpleBackdrop({review}) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      > <div>
        <Typography variant='h6' color="inherit">
            Vielen Dank für ihre Antworten!
        </Typography>
        <br />
        <JsonObjekt review={review} />
        </div>
      </Backdrop>
    </div>
  );
}