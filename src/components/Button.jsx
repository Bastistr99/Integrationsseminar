import {React} from 'react';
import SimpleBackdrop from './Backdrop';
import { Button } from '@mui/material';


const QuestionButton = ({changeProgress, changeCount, neuer_counter, reviews, toggleHomescreen,  fragebogen_complete}) => {
    return (
        <div style={{position: "absolute", top: "100%"}}>
            {neuer_counter <= 26 ? (
          <Button
            variant="contained"
            onClick={() => {
              changeCount(neuer_counter + 1)
              changeProgress(neuer_counter * 4)
            }}
            color="secondary"
            sx={{alignItems: "center", justifyContent: "center", display: "flex"}}
          >
            Nächste Frage
          </Button>
        ) : (
          <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <SimpleBackdrop review={fragebogen_complete} toggleHomescreen={(res) => {toggleHomescreen(res)
            changeCount(neuer_counter + 1); window.location.href = "http://localhost:3000/" } }>Zurück zur Website</SimpleBackdrop>
          </div>
        )}
        </div>
    );
}

export default QuestionButton;

