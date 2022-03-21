import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Produkte = ({bild, titel, beschreibung, id, preis, minHeight}) => {

//Sowohl die Überkategorien, als auch die Produkte werden Mithilfe dieses Templates erstellt

//Größe kann über minHeight variable mitgegeben werden

    return (
        <Card sx={{width: 500, minHeight: minHeight,  position: "relative" }}>
          <CardActionArea onClick={() => {
            if(id < 17){
              window.location.href=`/fragebogenseite/${id}`
            } else {
              window.location.href=`/${id}`
            }
              
          }}>
            <CardMedia
              component="img"
              height="150"
              image={bild}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" sx={{marginTop: "1vh"}}>
                {titel}
              </Typography>
              <Typography variant="body1" color="text.secondary" fontWeight="500">
               {beschreibung}
              </Typography>
              <Typography variant="h4" color="text.secondary" fontWeight="500" >
                {preis === undefined ? "" : preis + "€"}
               
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default Produkte;
