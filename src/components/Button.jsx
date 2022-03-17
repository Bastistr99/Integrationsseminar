import {React} from 'react';
import SimpleBackdrop from './Backdrop';
import { Button } from '@mui/material';


const QuestionButton = ({changeProgress, changeCount, neuer_counter, reviews, toggleHomescreen,  fragebogen_complete}) => {
    return (
        <div>
            {neuer_counter <= 25 ? (
          <Button
            variant="contained"
            onClick={() => {
              changeCount(neuer_counter + 1)
              changeProgress(neuer_counter * 4)
            }}
            sx={{alignItems: "center", justifyContent: "center", display: "flex"}}
          >
            Nächste Frage
          </Button>
        ) : (
          <SimpleBackdrop review={fragebogen_complete} toggleHomescreen={(res) => {toggleHomescreen(res)}}>Zurück zur Website</SimpleBackdrop>
        )}
        </div>
    );
}

export default QuestionButton;

