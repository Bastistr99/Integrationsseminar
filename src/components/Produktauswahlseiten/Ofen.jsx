import {React} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Produkte from '../Produkte';
import Kuechenmaschine from "./Kuechenmaschine.jpg";
import Herd from "./Herd.jpg";
import Ofen1 from "./Ofen1.png";
import Ofen2 from "./Ofen2.jpg";
import Ofen3 from "./Ofen3.jpg";


const Ofen = () => {

    return (
        <div>
            <Box sx={{flexGrow: 1, marginTop: "5vh"}}>
                <Grid container spacing={8}>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                          <Produkte beschreibung={"Jetzt diesen Ofen bewerten"} bild={Ofen1} titel={"Samsung XTC"} id={"XTC"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                        <Produkte beschreibung={"Jetzt diesen Ofen bewerten"} bild={Ofen2} titel={"Fischer 1234"} id={"Fischer"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                         <Produkte beschreibung={"Jetzt diesen Ofen bewerten"} bild={Ofen3} titel={"Haberatzg"} id={"Habers"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                          <Produkte beschreibung={"Jetzt diesen Ofen bewerten"} bild={Ofen1} titel={"Samsung XTC"} id={"XTC"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                        <Produkte beschreibung={"Jetzt diesen Ofen bewerten"} bild={Ofen2} titel={"Fischer 1234"} id={"Fischer"} />
                    </Grid>
                    <Grid item xs={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                         <Produkte beschreibung={"Jetzt diesen Ofen bewerten"} bild={Ofen3} titel={"Haberatzg"} id={"Habers"} />
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    );
}

export default Ofen;
