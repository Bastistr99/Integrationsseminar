import * as React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon fontSize="large"/>,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon fontSize="large"/>,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon fontSize="large"/>,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon fontSize="large"/>,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon fontSize="large"/>,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function BasicRating({ count, getResult, result }) {

  const handleChangeInput = (index, event) => {
    const values = [...result];
    values[index][event.target.name] = event.target.value;
    getResult(values);
    console.log(result);
  };

  const handleAddReview = () => {
    getResult([
      ...result,
      {
        antwort: "",
        sternwert: 0,
      },
    ]);
  };

  React.useEffect(() => {
    handleAddReview();
  }, [count]);

  return (
    <div>
      {count < 3 ? (
        <Box sx={{ mt: 5, mb: 3 }} noValidate autoComplete="off">
          <form>
            {result.map((inputField, index) => {
              if (index === count) {
                return (
                  <div key={index}>
                    <TextField
                      type="text"
                      value={inputField.antwort}
                      name="antwort"
                      label="Antwort"
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </div>
                );
              }
            })}
          </form>
        </Box>
      ) : (
        <div>
          <Box sx={{ "& > legend": { mt: 2 }, mb: 5 }}>
            {result.map((inputField, index) => {
              if (index === count) {
                return (
                  <div key={index}>
                  <Rating
                    name="sternwert"
                    defaultValue={2}
                    IconContainerComponent={IconContainer}
                    highlightSelectedOnly
                    value={inputField.sternwert}
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                  </div>
                );
              }
            })}
          </Box>
        </div>
      )}
    </div>
  );
}
