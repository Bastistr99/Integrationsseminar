import {React} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Produkte from '../Produkte';
import Küchenbild from "./kitchen-tools.png";
import Ofen from "./Ofen.jpg";
import Kuechenmaschine from "./Kuechenmaschine.jpg";
import Herd from "./Herd.jpg";


const KChengerTe = () => {

    return (
        <div>
            <Box sx={{flexGrow: 1, marginTop: "3vh"}}>
                <Grid container spacing={8}>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                          <Produkte beschreibung={"Hier finden Sie alle Produkte zum Produktbereich Ofen"} bild={Ofen} titel={"Ofen"} id={"Ofen"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Produkte zum Produktbereich Herd"} bild={Herd} titel={"Herd"} id={"Herd"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <Produkte beschreibung={"Hier finden Sie alle Produkte zum Produktbereich Küchenmaschine"} bild={Kuechenmaschine} titel={"Küchenmaschine"} id={"Kuechenmaschine"} />
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

export default KChengerTe;
