import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Produkte from './Produkte';
import Küchenbild from "../components/Produktauswahlseiten/kitchen-tools.png";



const Produktauswahl = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.text.secondary,
      }));

    return (
        <div>
            <Box sx={{flexGrow: 1, marginTop: "3vh"}}>
                <Grid container spacing={2}>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                          <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Küche zu tun haben"} bild={Küchenbild} titel={"Küchengeräte"} id={"kuechengeraete"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Küche zu tun haben"} bild={Küchenbild} titel={"Küchengeräte"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Küche zu tun haben"} bild={Küchenbild} titel={"Küchengeräte"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Küche zu tun haben"} bild={Küchenbild} titel={"Küchengeräte"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Küche zu tun haben"} bild={Küchenbild} titel={"Küchengeräte"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Küche zu tun haben"} bild={Küchenbild} titel={"Küchengeräte"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Küche zu tun haben"} bild={Küchenbild} titel={"Küchengeräte"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Küche zu tun haben"} bild={Küchenbild} titel={"Küchengeräte"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Küche zu tun haben"} bild={Küchenbild} titel={"Küchengeräte"} />
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    );
}

export default Produktauswahl;
