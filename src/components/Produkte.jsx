import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Produkte = ({bild, titel, beschreibung, id}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea onClick={() => {
            if(id === "XTC"){
              window.location.href=`/fragebogenseite`
            } else {
              window.location.href=`/${id}`
            }
              
          }}>
            <CardMedia
              component="img"
              height="140"
              image={bild}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {titel}
              </Typography>
              <Typography variant="body1" color="text.secondary" fontWeight="500">
               {beschreibung}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default Produkte;
