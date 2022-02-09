import { useState } from "react";
import "./App.css";
import ResponsiveAppBar from "../components/Navbar";


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const cards = ["Fragebogen", "Produktvergleich", "Produktbewertungen"];

const texte =["Bewerten Sie selbst Produkte!", "Vergleichen Sie die Bewertungen zweier Produkte!", "Schauen Sie sich zahlreiche Bewertungen von Produkten an!"];

const icons = ["../../fragebogen_icon.png", "../../produktvergleich_icon.png", "../../produktbewertungen_icon.png"];

const links =["/fragebogen", "/produktvergleich", "/produktbewertungen"]

const theme = createTheme();


function Home() {

  return (
    <>
    <div className="App">
      <ResponsiveAppBar />
            
        <h1> Willkommen zu QuantumLeap Senior!</h1>
        
    </div>



<ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>        
        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image = {icons[index]}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card}
                    </Typography>
                    <Typography>
                      {texte[index]}
                      
                    </Typography>  

                  </CardContent>
                  <CardActions>
                    <Button size="big" href = {links[index]}> Besuchen</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    
      {/* End footer */}
    </ThemeProvider>

  </>
  );
}

export default Home;


