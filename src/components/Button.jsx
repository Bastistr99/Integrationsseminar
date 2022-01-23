import {React} from 'react';
import SimpleBackdrop from './Backdrop';
import { Button } from '@mui/material';


const QuestionButton = ({changeProgress, changeCount, neuer_counter, reviews}) => {
    return (
        <div>
            {neuer_counter <= 17 ? (
          <Button
            variant="contained"
            onClick={() => {
              changeCount(neuer_counter + 1)
              changeProgress(neuer_counter * 6)
            }}
          >
            Nächste Frage
          </Button>
        ) : (
          <SimpleBackdrop review={reviews}>Zurück zur Website</SimpleBackdrop>
        )}
        </div>
    );
}

export default QuestionButton;

