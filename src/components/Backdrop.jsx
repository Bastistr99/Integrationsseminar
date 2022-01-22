import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function SimpleBackdrop() {
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
        <Button variant='outlined' color='inherit'>Zurück zur Startseite</Button>
        </div>
      </Backdrop>
    </div>
  );
}