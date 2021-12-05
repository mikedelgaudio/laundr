import React, { useEffect, useState } from "react";
import "../App.css";
const Test = (props) => {
  const [buttonPressed, setButtonPressed] = useState(false);

  function handleButtonPressed(event) {
    setButtonPressed(true);
  }
  useEffect(() => {}, [, buttonPressed]);
  if (!buttonPressed) {
    return <button onClick={handleButtonPressed}>HI</button>;
  } else {
    return <div className="button-pressed">You Pressed the button!</div>;
  }
};

export default Test;
