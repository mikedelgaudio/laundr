import "../../../../styles/home.css";

const Washer = (props) => {
  return (
    <div className="washer">
      {props.use === "in-use" ? (
        <h1 className="in-use">In Use</h1>
      ) : props.use === "free" ? (
        <h1 className="free">Free!</h1>
      ) : (
        <h1 className="ooo">Out of Order</h1>
      )}
    </div>
  );
};

export default Washer;
