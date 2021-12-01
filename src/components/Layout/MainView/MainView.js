import "./MainView.css";
import Washer from "./Washer/Washer";

function MainView(props) {
  return (
    <div className="main-container">
      {props?.selected.davis ? (
        <div className="main-div">
          <h1 className="title">Washers</h1>
          <div className="washers">
            <Washer
              number="1"
              type="washer"
              use={props?.washers.washer1}
              onClick={props?.handleWasherClick}
            ></Washer>
            <Washer
              number="2"
              type="washer"
              use={props?.washers.washer2}
              onClick={props?.handleWasherClick}
            ></Washer>
            <Washer
              number="3"
              type="washer"
              use={props?.washers.washer3}
              onClick={props?.handleWasherClick}
            ></Washer>
          </div>
          <h1 className="title">Dryers</h1>

          <div className="dryers">
            <Washer
              number="1"
              type="dryer"
              use={props?.dryers.dryer1}
              onClick={props?.handleWasherClick}
            ></Washer>
            <Washer
              number="2"
              type="dryer"
              use={props?.dryers.dryer2}
              onClick={props?.handleWasherClick}
            ></Washer>
            <Washer
              number="3"
              type="dryer"
              use={props?.dryers.dryer3}
              onClick={props?.handleWasherClick}
            ></Washer>
          </div>
        </div>
      ) : props?.selected.jonas ? (
        <div className="main-div">
          <div className="washers">
            <h1>Washers</h1>
          </div>
          <div className="dryers">
            <h1>Dryers</h1>
          </div>
        </div>
      ) : props?.selected.cph ? (
        <div className="main-div">
          <div className="washers">
            <h1>Washers</h1>
          </div>
          <div className="dryers">
            <h1>Dryers</h1>
          </div>
        </div>
      ) : props?.selected.humphrey ? (
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

export default MainView;
