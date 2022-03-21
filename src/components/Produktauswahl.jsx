import {React} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Produkte from './Produkttemplate';
import HealthBild from "./pictures/doctor-6701410_1280.jpg"
import SecurityBild from "./pictures/fingerprint-2904774_1280.jpg"
import MobilityBild from "./pictures/park-5528190_1280.jpg"
import CultureBild from "./pictures/stage-1248769_1280.jpg"
import WorkBild from "./pictures/student-849825_1280.jpg"
import VitilityBild from "./pictures/sunset-4276841_1280.jpg"
import WohnenBild from "./pictures/vw-beetle-405876_1280.jpg"
import InfoBild from "./pictures/woman-3083379_1280.jpg"



const Produktauswahl = () => {

    //Hier werden die 8 verschiedenen Überkategorien angezeigt 

    //Klickt man auf eine der Kategorien, wird man auf eine der Produktauswahlseiten geleitet, die im gleichnamigen Ordner liegen

    return (
        <div>
            <Box sx={{flexGrow: 1, marginTop: "3vh"}}>
                <Grid container spacing={4}>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                          <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Gesundheit & Pflege zu tun haben"} bild={HealthBild} titel={"Gesundheit & Pflege"} id={"GesundheitPflege"} minHeight={300} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Wohnen & Gebäude zu tun haben"} bild={WohnenBild} titel={"Wohnen & Gebäude"} id={"WohnenGebaude"} minHeight={300}/>
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Freizeit & Kultur zu tun haben"} bild={CultureBild} titel={"Freizeit & Kultur"} id={"FreitzeitKultur"} minHeight={300}/>
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Vitalität & Fähigkeiten zu tun haben"} bild={VitilityBild} titel={"Vitalität & Fähigkeiten"} id={"VitalitaetFaehigkeiten"} minHeight={300}/>
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Mobilität & Transport zu tun haben"} bild={MobilityBild} titel={"Mobilität & Transport"} id={"MobilitaetTransport"} minHeight={300}/>
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Arbeit & Schulung zu tun haben"} bild={WorkBild} titel={"Arbeit & Schulung"} id={"ArbeitSchulung"} minHeight={300}/>
                    </Grid>
                    <Grid item xs={6} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Sicherheit & Schutz zu tun haben"} bild={SecurityBild} titel={"Sicherheit & Schutz"} id={"SicherheitSchutz"} minHeight={300}/>
                    </Grid>
                    <Grid item xs={6} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Kategorien die mit dem Thema Informationen & Kommunikation zu tun haben"} bild={InfoBild} titel={"Informationen & Kommunikation"} id={"InformationKommunikation"} minHeight={300}/>
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    );
}

export default Produktauswahl;
