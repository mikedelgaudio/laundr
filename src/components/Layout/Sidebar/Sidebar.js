import { useState } from "react";
import { makeStyles } from "@mui/styles";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import "../../../styles/home.css";

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
    minHeight: "100vh",
    position: "absolute",
    padding: "1em",
    maxWidth: "200px",
  },
  star: {
    color: "#FFCA0D",
    cursor: "pointer",
  },
});

function Sidebar(props) {
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

  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <div className="navbar-header">
        <p>{props.school} Laundry Rooms</p>
        {props.selected.davis ? (
          <div
            className="selected-laundry-room-name-div"
            onClick={props.select}
          >
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
          <div className="laundry-room-name-div" onClick={props.select}>
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
        )}
        {props.selected.jonas ? (
          <div
            className="selected-laundry-room-name-div"
            onClick={props.select}
          >
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
            <p className="laundry-room-name" onClick={props.select}>
              Jonas
            </p>
          </div>
        )}
        {props.selected.cph ? (
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
            <p className="laundry-room-name" onClick={props.select}>
              Castle Point
            </p>
          </div>
        )}
        {props.selected.humphrey ? (
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
            <p className="laundry-room-name" onClick={props.select}>
              Humphrey's
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
