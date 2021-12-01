import "../../../../styles/home.css";

const Washer = (props) => {
  return (
    <div className="washer" onClick={props?.handleWasherClick}>
      {props.use === "in-use" ? (
        <div>
          <h1 className="in-use">In Use</h1>
          <p>{props?.timer}</p>
        </div>
      ) : props.use === "free" ? (
        <h1 className="free">Free!</h1>
      ) : (
        <h1 className="ooo">Out of Order</h1>
      )}
      <div className="hidden">
        <p>
          {props?.type} {props?.number}
        </p>
      </div>
    </div>
  );
};

export default Washer;
