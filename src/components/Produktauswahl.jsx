import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Produkte from './Produkte';
import HealthBild from "./doctor-6701410_1280.jpg"
import SecurityBild from "./fingerprint-2904774_1280.jpg"
import MobilityBild from "./park-5528190_1280.jpg"
import CultureBild from "./stage-1248769_1280.jpg"
import WorkBild from "./student-849825_1280.jpg"
import VitilityBild from "./sunset-4276841_1280.jpg"
import WohnenBild from "./vw-beetle-405876_1280.jpg"
import InfoBild from "./woman-3083379_1280.jpg"



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
                <Grid container spacing={4}>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                          <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Gesundheit & Pflege zu tun haben"} bild={HealthBild} titel={"Gesundheit & Pflege"} id={"GesundheitPflege"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Wohnen & Gebäude zu tun haben"} bild={WohnenBild} titel={"Wohnen & Gebäude"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Freizeit & Kultur zu tun haben"} bild={CultureBild} titel={"Freizeit & Kultur"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Vitalität & Fähigkeiten zu tun haben"} bild={VitilityBild} titel={"Vitalität & Fähigkeiten"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Mobilität & Transport zu tun haben"} bild={MobilityBild} titel={"Mobilität & Transport"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Arbeit & Schulung zu tun haben"} bild={WorkBild} titel={"Arbeit & Schulung"} />
                    </Grid>
                    <Grid item xs={6} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Sicherheit & Schutz zu tun haben"} bild={SecurityBild} titel={"Sicherheit & Schutz"} />
                    </Grid>
                    <Grid item xs={6} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Informationen & Kommunikation zu tun haben"} bild={InfoBild} titel={"Informationen & Kommunikation"} />
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    );
}

export default Produktauswahl;
