import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Washer from "./Washer";
import Navbar from "../Layout/Navbar/Navbar";
import "../../styles/home.css";
const useStyles = makeStyles({
  page: {
    backgroundColor: "#E5E5E5",
    width: "100%",
    height: "100%",
    position: "absolute",
    "z-index": -1,
    marginLeft: 0,
    marginRight: 0,
    overflow: "hidden",
  },
  navbar: {
    backgroundColor: "#2148C0",
    width: 200,
    height: "100%",
    position: "absolute",
    marginLeft: 0,
    "z-index": 2,
    float: "left",
  },
  star: {
    color: "#FFCA0D",
    cursor: "pointer",
  },
});
const Home = (props) => {
  const [selected, setSelected] = useState({
    davis: true,
    jonas: false,
    cph: false,
    humphrey: false,
  });
  const [favorited, setFavorited] = useState({
    davis: true,
    jonas: false,
    cph: false,
    humphrey: false,
  });
  const [washers, setWasher] = useState({
    washer1: "free",
    washer2: "in-use",
    washer3: "ooo",
  });
  const [dryers, setDryers] = useState({
    dryer1: "free",
    dryer2: "in-use",
    dryer3: "ooo",
  });

  const [admin, setAdmin] = useState(false);

  const classes = useStyles();

  function select(e) {
    let html = `${e.target.innerHTML}`;
    if (html.includes("Davis")) {
      setSelected({ davis: true, jonas: false, cph: false, humphrey: false });
    } else if (html.includes("Jonas")) {
      setSelected({ davis: false, jonas: true, cph: false, humphrey: false });
    } else if (html.includes("Castle Point")) {
      setSelected({ davis: false, jonas: false, cph: true, humphrey: false });
    } else {
      setSelected({ davis: false, jonas: false, cph: false, humphrey: true });
    }
  }

  function unfavorite(dorm) {
    if (dorm === "davis") {
      setFavorited({
        davis: false,
        jonas: favorited.jonas,
        humphrey: favorited.humphrey,
        cph: favorited.cph,
      });
    }
    if (dorm === "jonas") {
      setFavorited({
        davis: favorited.davis,
        jonas: false,
        humphrey: favorited.humphrey,
        cph: favorited.cph,
      });
    }
    if (dorm === "cph") {
      setFavorited({
        davis: favorited.davis,
        jonas: favorited.jonas,
        humphrey: favorited.humphrey,
        cph: false,
      });
    }
    if (dorm === "hump") {
      setFavorited({
        davis: favorited.davis,
        jonas: favorited.jonas,
        humphrey: false,
        cph: favorited.cph,
      });
    }
  }

  function favorite(dorm) {
    if (dorm === "davis") {
      setFavorited({
        davis: true,
        jonas: favorited.jonas,
        humphrey: favorited.humphrey,
        cph: favorited.cph,
      });
    }
    if (dorm === "jonas") {
      setFavorited({
        davis: favorited.davis,
        jonas: true,
        humphrey: favorited.humphrey,
        cph: favorited.cph,
      });
    }
    if (dorm === "cph") {
      setFavorited({
        davis: favorited.davis,
        jonas: favorited.jonas,
        humphrey: favorited.humphrey,
        cph: true,
      });
    }
    if (dorm === "hump") {
      setFavorited({
        davis: favorited.davis,
        jonas: favorited.jonas,
        humphrey: true,
        cph: favorited.cph,
      });
    }
  }

  function handleWasherClick(e) {
    console.log("hi");
  }
  if (favorited && selected) {
    return (
      <div className={classes.page}>
        <div className={classes.navbar}>
          <div className="navbar-header">
            <p>{props.school} Laundry Rooms</p>
            {selected.davis ? (
              <div className="selected-laundry-room-name-div">
                {favorited.davis ? (
                  <StarIcon
                    className={classes.star}
                    onClick={() => unfavorite("davis")}
                  ></StarIcon>
                ) : (
                  <StarBorderIcon
                    className={classes.star}
                    onClick={() => favorite("davis")}
                  ></StarBorderIcon>
                )}
                <p className="laundry-room-name">Davis</p>
              </div>
            ) : (
              <div className="laundry-room-name-div">
                {favorited.davis ? (
                  <StarIcon
                    className={classes.star}
                    onClick={() => unfavorite("davis")}
                  ></StarIcon>
                ) : (
                  <StarBorderIcon
                    className={classes.star}
                    onClick={() => favorite("davis")}
                  ></StarBorderIcon>
                )}
                <p className="laundry-room-name" onClick={select}>
                  Davis
                </p>
              </div>
            )}
            {selected.jonas ? (
              <div className="selected-laundry-room-name-div">
                {favorited.jonas ? (
                  <StarIcon
                    className={classes.star}
                    onClick={() => unfavorite("jonas")}
                  ></StarIcon>
                ) : (
                  <StarBorderIcon
                    className={classes.star}
                    onClick={() => favorite("jonas")}
                  ></StarBorderIcon>
                )}
                <p className="laundry-room-name">Jonas</p>
              </div>
            ) : (
              <div className="laundry-room-name-div">
                {favorited.jonas ? (
                  <StarIcon
                    className={classes.star}
                    onClick={() => unfavorite("jonas")}
                  ></StarIcon>
                ) : (
                  <StarBorderIcon
                    className={classes.star}
                    onClick={() => favorite("jonas")}
                  ></StarBorderIcon>
                )}
                <p className="laundry-room-name" onClick={select}>
                  Jonas
                </p>
              </div>
            )}
            {selected.cph ? (
              <div className="selected-laundry-room-name-div">
                {favorited.cph ? (
                  <StarIcon
                    className={classes.star}
                    onClick={() => unfavorite("cph")}
                  ></StarIcon>
                ) : (
                  <StarBorderIcon
                    className={classes.star}
                    onClick={() => favorite("cph")}
                  ></StarBorderIcon>
                )}
                <p className="laundry-room-name">Castle Point</p>
              </div>
            ) : (
              <div className="laundry-room-name-div">
                {favorited.cph ? (
                  <StarIcon
                    className={classes.star}
                    onClick={() => unfavorite("cph")}
                  ></StarIcon>
                ) : (
                  <StarBorderIcon
                    className={classes.star}
                    onClick={() => favorite("cph")}
                  ></StarBorderIcon>
                )}
                <p className="laundry-room-name" onClick={select}>
                  Castle Point
                </p>
              </div>
            )}
            {selected.humphrey ? (
              <div className="selected-laundry-room-name-div">
                {favorited.humphrey ? (
                  <StarIcon
                    className={classes.star}
                    onClick={() => unfavorite("hump")}
                  ></StarIcon>
                ) : (
                  <StarBorderIcon
                    className={classes.star}
                    onClick={() => favorite("hump")}
                  ></StarBorderIcon>
                )}
                <p className="laundry-room-name">Humphrey's</p>
              </div>
            ) : (
              <div className="laundry-room-name-div">
                {favorited.humphrey ? (
                  <StarIcon
                    className={classes.star}
                    onClick={() => unfavorite("hump")}
                  ></StarIcon>
                ) : (
                  <StarBorderIcon
                    className={classes.star}
                    onClick={() => favorite("hump")}
                  ></StarBorderIcon>
                )}
                <p className="laundry-room-name" onClick={select}>
                  Humphrey's
                </p>
              </div>
            )}
          </div>
        </div>
        {selected.davis ? (
          <div className="main-div">
            <h1 className="title">Washers</h1>
            <div className="washers">
              <Washer
                number="1"
                type="washer"
                use={washers.washer1}
                onClick={handleWasherClick}
              ></Washer>
              <Washer
                number="2"
                type="washer"
                use={washers.washer2}
                onClick={handleWasherClick}
              ></Washer>
              <Washer
                number="3"
                type="washer"
                use={washers.washer3}
                onClick={handleWasherClick}
              ></Washer>
            </div>
            <h1 className="title">Dryers</h1>

            <div className="dryers">
              <Washer
                number="1"
                type="dryer"
                use={dryers.dryer1}
                onClick={handleWasherClick}
              ></Washer>
              <Washer
                number="2"
                type="dryer"
                use={dryers.dryer2}
                onClick={handleWasherClick}
              ></Washer>
              <Washer
                number="3"
                type="dryer"
                use={dryers.dryer3}
                onClick={handleWasherClick}
              ></Washer>
            </div>
          </div>
        ) : selected.jonas ? (
          <div className="main-div">
            <div className="washers">
              <h1>Washers</h1>
            </div>
            <div className="dryers">
              <h1>Dryers</h1>
            </div>
          </div>
        ) : selected.cph ? (
          <div className="main-div">
            <div className="washers">
              <h1>Washers</h1>
            </div>
            <div className="dryers">
              <h1>Dryers</h1>
            </div>
          </div>
        ) : selected.humphrey ? (
          <div className="main-div">
            <div className="washers">
              <h1>Washers</h1>
            </div>
            <div className="dryers">
              <h1>Dryers</h1>
            </div>
          </div>
        ) : (
          <div className="main-div">
            <h1>Choose a laundry Room</h1>
          </div>
        )}
      </div>
    );
  }
};

export default Home;
