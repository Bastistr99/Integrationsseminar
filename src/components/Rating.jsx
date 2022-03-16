import * as React from "react";
import Box from "@mui/material/Box";
import { TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';

const customIcons = {
  0: {
    icon: "",
    label: "Keine Auswahl getroffen"
  },
  1: {
    icon: <CircleRoundedIcon  style={{fontSize: "70px", color: "red", marginLeft: "1vh", marginRight: "1vh"}} />,
    label: <Typography variant="h6" sx={{ color: "red" }} >Stimme nicht zu</Typography>,
  },
  2: {
    icon: <CircleRoundedIcon style={{fontSize: "70px", color: "orange", marginLeft: "1vh", marginRight: "1vh"}} />,
    label: <Typography variant="h6" sx={{ color: "orange" }} >Stimme eher nicht zu</Typography>,
  },
  3: {
    icon: <CircleRoundedIcon style={{fontSize: "70px", color: "yellowgreen", marginLeft: "1vh", marginRight: "1vh"}} />,
    label: <Typography variant="h6" sx={{ color: "yellowgreen" }} >Stimme eher zu</Typography>,
  },
  4: {
    icon: <CircleRoundedIcon style={{fontSize: "70px", color: "green", marginLeft: "1vh", marginRight: "1vh"}} />,
    label: <Typography variant="h6" sx={{color: "green" }} >Stimme zu</Typography>,
  }
};

const technologieIcons = {
  0: {
    icon: "",
    label: "Keine Auswahl getroffen"
  },
  1: {
    icon: <CircleRoundedIcon style={{fontSize: "70px", color: "red", marginLeft: "1vh", marginRight: "1vh"}} />,
    label: <Typography variant="h6" sx={{ color: "red" }} >Gar nicht</Typography>,
  },
  2: {
    icon: <CircleRoundedIcon style={{fontSize: "70px", color: "orange", marginLeft: "1vh", marginRight: "1vh"}} />,
    label: <Typography variant="h6" sx={{ color: "orange" }} >Kaum</Typography>,
  },
  3: {
    icon: <CircleRoundedIcon style={{fontSize: "70px", color: "yellowgreen", marginLeft: "1vh", marginRight: "1vh"}} />,
    label: <Typography variant="h6" sx={{ color: "yellowgreen" }} >Etwas</Typography>,
  },
  4: {
    icon: <CircleRoundedIcon style={{fontSize: "70px", color: "green", marginLeft: "1vh", marginRight: "1vh"}} />,
    label: <Typography variant="h6" sx={{color: "green" }} >Sehr</Typography>,
  }
};
const altIcons = {
  0: {
    icon: "",
    label: "Keine Auswahl getroffen"
  },
  1: {
    icon: "<18",
    label: <Typography variant="h6" sx={{ color: "red" }} >Unter 18</Typography>,
  },
  2: {
    icon: "18-30",
    label: <Typography variant="h6" sx={{ color: "orange" }} >Zwischen 18 und 30</Typography>,
  },
  3: {
    icon: "31-60",
    label: <Typography variant="h6" sx={{ color: "yellowgreen" }} >Zwischen 31 und 60</Typography>,
  },
  4: {
    icon: ">60",
    label: <Typography variant="h6" sx={{color: "green" }} >Über 60</Typography>,
  }
};
const geschlechtIcons = {
  0: {
   icon: "",
   label: ""
  },
  1: {
    icon: <MaleIcon style={{fontSize: "70px", color: "darkblue", marginLeft: "1vh", marginRight: "1vh"}}/>,
    label: <Typography variant="h6" sx={{ color: "darkblue" }} >Männlich</Typography>,
  },
  2: {
    icon: <FemaleIcon style={{fontSize: "70px", color: "pink", marginLeft: "1vh", marginRight: "1vh"}} />,
    label: <Typography variant="h6" sx={{ color: "pink" }}> Weiblich</Typography>,
  },
  3: {
    icon: <TransgenderIcon style={{fontSize: "70px", color: "darkgreen", marginLeft: "1vh", marginRight: "1vh"}} />,
    label: <Typography variant="h6" sx={{ color: "darkgreen" }}> Transgender</Typography>,
  },
  4: {
    icon: <DoNotDisturbIcon style={{fontSize: "70px", color: "black", marginLeft: "1vh", marginRight: "1vh"}} />,
    label: <Typography variant="h6" sx={{ color: "black" }}> Keine Angabe</Typography>,
  }
}

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}
function TechnologieContainer(props) {
  const { value, ...other } = props;
  return <span {...other} >{technologieIcons[value].icon}</span>;
}
function AlterContainer(props) {
  const { value, ...other } = props;
  return <span style={{ marginLeft: "1vh", marginRight: "4vh", color: "blue", opacity: "100%", boxShadow: "3px 2px 2px 2px blue", width: "15vh", alignItems: "center", justifyContent: "center", display: "flex"}}{...other} >{altIcons[value].icon}</span>;
}
function GeschlechtContainer(props) {
  const { value, ...other } = props;
  return <span {...other} >{geschlechtIcons[value].icon}</span>;
}


IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

TechnologieContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

AlterContainer.propTypes = {
  value: PropTypes.number.isRequired,
}

GeschlechtContainer.propTypes = {
  value: PropTypes.number.isRequired,
}

export default function BasicRating({ count, getResult, result }) {

  const [hover, setHover] = React.useState(-1);

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
      {count < 3 ? 
        (
          <Box sx={{ mt: 5, mb: 3, alignItems: "center", justifyContent: "center", display: "flex" }} noValidate autoComplete="off">
            {count == 0 ? (  
              <div>
                <Box sx={{ "& > legend": { mt: 2 }, mb: 5 , alignItems: "center", justifyContent: "center", display: "flex"}}>
                  {result.map((inputField, index) => {
                    if (index === count) {
                      return (
                        <div key={index}>
                          <Rating
                            name="sternwert"
                            defaultValue={2}
                            IconContainerComponent={TechnologieContainer}
                            highlightSelectedOnly
                            value={inputField.sternwert}
                            size="large"
                            onChange={(event) => handleChangeInput(index, event)}
                            onChangeActive={(event, newHover) => {
                              setHover(newHover);
                            }}
                            max={4}
                            sx={{display: "flex"}}
                          />
                          <Box sx={{mt: "2vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography variant="h6" >{technologieIcons[hover !== -1 ? hover : inputField.sternwert].label}</Typography>
                          </Box>
                        </div>
                      );
                    }
                  })}
                </Box>
              </div>
            ) 
            : 
            (
              <div>
                {count == 1 ? (  
                  <div>
                    <Box sx={{ "& > legend": { mt: 2 }, mb: 5 , alignItems: "center", justifyContent: "center", display: "flex"}}>
                      {result.map((inputField, index) => {
                        if (index === count) {
                          return (
                            <div key={index}>
                              <Rating
                                name="sternwert"
                                defaultValue={2}
                                IconContainerComponent={AlterContainer}
                                highlightSelectedOnly
                                value={inputField.sternwert}
                                size="large"
                                onChange={(event) => handleChangeInput(index, event)}
                                onChangeActive={(event, newHover) => {
                                  setHover(newHover);
                                }}
                                max={4}
                                sx={{display: "flex"}} 
                              />
                              <Box sx={{mt: "2vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography variant="h6" >{altIcons[hover !== -1 ? hover : inputField.sternwert].label}</Typography>
                              </Box>
                            </div>
                          );
                        }
                      })}
                    </Box>
                 </div>
                ) 
                : 
                (  
                <div>
                  <Box sx={{ "& > legend": { mt: 2 }, mb: 5 , alignItems: "center", justifyContent: "center", display: "flex"}}>
                    {result.map((inputField, index) => {
                      if (index === count) {
                        return (
                          <div key={index}>
                            <Rating
                              name="sternwert"
                              defaultValue={2}
                              IconContainerComponent={GeschlechtContainer}
                              highlightSelectedOnly
                              value={inputField.sternwert}
                              size="large"
                              onChange={(event) => handleChangeInput(index, event)}
                              onChangeActive={(event, newHover) => {
                                setHover(newHover);
                              }}
                              max={4}
                              sx={{display: "flex"}}
                            />
                            <Box sx={{mt: "2vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <Typography variant="h6" >{geschlechtIcons[hover !== -1 ? hover : inputField.sternwert].label}</Typography>
                            </Box>
                         </div>
                        );
                      }
                    })}
                  </Box>
                </div>
              )
            }
          </div>
        )}
         </Box>)
        : 
        (
        <div>
          <Box sx={{ "& > legend": { mt: 2 }, mb: 5 , alignItems: "center", justifyContent: "center", display: "flex"}}>
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
                      size="large"
                      onChange={(event) => handleChangeInput(index, event)}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      max={4}
                      sx={{display: "flex"}}
                    />
                   <Box sx={{mt: "2vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                     <Typography variant="h6" >{customIcons[hover !== -1 ? hover : inputField.sternwert].label}</Typography>
                   </Box>
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
