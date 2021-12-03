import React, { useState } from "react";
import "./MainView.css";
import Washer from "./Washer/Washer";
import { makeStyles } from "@mui/styles";
import { Button, Alert, Snackbar } from "@mui/material";

const useStyles = makeStyles({
  button: {
    height: 20,
    width: 200,
  },
});
function MainView(props) {
  const [open, setOpen] = useState(false);
  function onIncorrectClick(e) {
    e.preventDefault();
    setOpen(true);
  }
  function handleClose(e) {
    setOpen(false);
  }
  const classes = useStyles();
  return (
    <div className="main-container">
      {props?.selected.davis ? (
        <div className="main-div">
          <h1 className="title">Washers</h1>
          <div className="washers">
            <Washer
              number="1"
              type="washer"
              use={props?.washers[0].washer1}
              timer={props?.timers.washer1}
              handleWasherClick={props?.handleWasherClick[0]}
            ></Washer>
            <Washer
              number="2"
              type="washer"
              use={props?.washers[0].washer2}
              timer={props?.timers.washer2}
              handleWasherClick={props?.handleWasherClick[0]}
            ></Washer>
            <Washer
              number="3"
              type="washer"
              use={props?.washers[0].washer3}
              timer={props?.timers.washer3}
              handleWasherClick={props?.handleWasherClick[0]}
            ></Washer>
          </div>
          <h1 className="title">Dryers</h1>

          <div className="dryers">
            <Washer
              number="1"
              type="dryer"
              use={props?.dryers[0].dryer1}
              timer={props?.timers.dryer1}
              handleWasherClick={props?.handleWasherClick[0]}
            ></Washer>
            <Washer
              number="2"
              type="dryer"
              use={props?.dryers[0].dryer2}
              timer={props?.timers.dryer2}
              handleWasherClick={props?.handleWasherClick[0]}
            ></Washer>
            <Washer
              number="3"
              type="dryer"
              use={props?.dryers[0].dryer3}
              timer={props?.timers.dryer3}
              handleWasherClick={props?.handleWasherClick[0]}
            ></Washer>
          </div>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={onIncorrectClick}
          >
            Report Incorrect
          </Button>
        </div>
      ) : props?.selected.jonas ? (
        <div className="main-div">
          <h1 className="title">Washers</h1>
          <div className="washers">
            <Washer
              number="1"
              type="washer"
              use={props?.washers[1].washer1}
              timer={props?.timers.washer1}
              handleWasherClick={props?.handleWasherClick[1]}
            ></Washer>
            <Washer
              number="2"
              type="washer"
              use={props?.washers[1].washer2}
              timer={props?.timers.washer2}
              handleWasherClick={props?.handleWasherClick[1]}
            ></Washer>
            <Washer
              number="3"
              type="washer"
              use={props?.washers[1].washer3}
              timer={props?.timers.washer3}
              handleWasherClick={props?.handleWasherClick[1]}
            ></Washer>
          </div>
          <h1 className="title">Dryers</h1>

          <div className="dryers">
            <Washer
              number="1"
              type="dryer"
              use={props?.dryers[1].dryer1}
              timer={props?.timers.dryer1}
              handleWasherClick={props?.handleWasherClick[1]}
            ></Washer>
            <Washer
              number="2"
              type="dryer"
              use={props?.dryers[1].dryer2}
              timer={props?.timers.dryer2}
              handleWasherClick={props?.handleWasherClick[1]}
            ></Washer>
            <Washer
              number="3"
              type="dryer"
              use={props?.dryers[1].dryer3}
              timer={props?.timers.dryer3}
              handleWasherClick={props?.handleWasherClick[1]}
            ></Washer>
          </div>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={onIncorrectClick}
          >
            Report Incorrect
          </Button>
        </div>
      ) : props?.selected.cph ? (
        <div className="main-div">
          <h1 className="title">Washers</h1>
          <div className="washers">
            <Washer
              number="1"
              type="washer"
              use={props?.washers[2].washer1}
              timer={props?.timers.washer1}
              handleWasherClick={props?.handleWasherClick[2]}
            ></Washer>
            <Washer
              number="2"
              type="washer"
              use={props?.washers[2].washer2}
              timer={props?.timers.washer2}
              handleWasherClick={props?.handleWasherClick[2]}
            ></Washer>
            <Washer
              number="3"
              type="washer"
              use={props?.washers[2].washer3}
              timer={props?.timers.washer3}
              handleWasherClick={props?.handleWasherClick[2]}
            ></Washer>
          </div>
          <h1 className="title">Dryers</h1>

          <div className="dryers">
            <Washer
              number="1"
              type="dryer"
              use={props?.dryers[2].dryer1}
              timer={props?.timers.dryer1}
              handleWasherClick={props?.handleWasherClick[2]}
            ></Washer>
            <Washer
              number="2"
              type="dryer"
              use={props?.dryers[2].dryer2}
              timer={props?.timers.dryer2}
              handleWasherClick={props?.handleWasherClick[2]}
            ></Washer>
            <Washer
              number="3"
              type="dryer"
              use={props?.dryers[2].dryer3}
              timer={props?.timers.dryer3}
              handleWasherClick={props?.handleWasherClick[2]}
            ></Washer>
          </div>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={onIncorrectClick}
          >
            Report Incorrect
          </Button>
        </div>
      ) : props?.selected.humphrey ? (
        <div className="main-div">
          <h1 className="title">Washers</h1>
          <div className="washers">
            <Washer
              number="1"
              type="washer"
              use={props?.washers[3].washer1}
              timer={props?.timers.washer1}
              handleWasherClick={props?.handleWasherClick[3]}
            ></Washer>
            <Washer
              number="2"
              type="washer"
              use={props?.washers[3].washer2}
              timer={props?.timers.washer2}
              handleWasherClick={props?.handleWasherClick[3]}
            ></Washer>
            <Washer
              number="3"
              type="washer"
              use={props?.washers[3].washer3}
              timer={props?.timers.washer3}
              handleWasherClick={props?.handleWasherClick[3]}
            ></Washer>
          </div>
          <h1 className="title">Dryers</h1>
          <div className="dryers">
            <Washer
              number="1"
              type="dryer"
              use={props?.dryers[3].dryer1}
              timer={props?.timers.dryer1}
              handleWasherClick={props?.handleWasherClick[3]}
            ></Washer>
            <Washer
              number="2"
              type="dryer"
              use={props?.dryers[3].dryer2}
              timer={props?.timers.dryer2}
              handleWasherClick={props?.handleWasherClick[3]}
            ></Washer>
            <Washer
              number="3"
              type="dryer"
              use={props?.dryers[3].dryer3}
              timer={props?.timers.dryer3}
              handleWasherClick={props?.handleWasherClick[3]}
            ></Washer>
          </div>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={onIncorrectClick}
          >
            Report Incorrect
          </Button>
        </div>
      ) : (
        <div className="main-div">
          <h1>Choose a laundry Room</h1>
        </div>
      )}

      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert severity="success">
          The admin has been notified of the reported error.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default MainView;
