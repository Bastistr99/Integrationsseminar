import {React} from 'react';
import SimpleBackdrop from './Backdrop';
import { Button } from '@mui/material';


const QuestionButton = ({changeProgress, changeCount, neuer_counter, reviews, toggleHomescreen}) => {
    return (
        <div>
            {neuer_counter <= 26 ? (
          <Button
            variant="contained"
            onClick={() => {
              changeCount(neuer_counter + 1)
              changeProgress(neuer_counter * 3.8)
            }}
            sx={{alignItems: "center", justifyContent: "center", display: "flex"}}
          >
            Nächste Frage
          </Button>
        ) : (
          <SimpleBackdrop review={reviews} toggleHomescreen={(res) => {toggleHomescreen(res)}}>Zurück zur Website</SimpleBackdrop>
        )}
        </div>
    );
}

export default QuestionButton;

