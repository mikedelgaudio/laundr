import "./Signup.css";
import logo from "../../assets/Login/logo.svg";
import userIcon from "../../assets/Login/user.svg";
import lockIcon from "../../assets/Login/lock.svg";
import { useNavigate } from "react-router-dom";
import { useState, forwardRef } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Signup() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e = e || window.event;
    e.preventDefault();

    // logic to handle bad username and password

    if (loginData.password === loginData.confirmPassword) {
      setLoginData({ email: "", password: "", confirmPassword: "" });
      e.target.reset();
      navigate("/login");
    } else {
      handleClick();
    }
  };

  const updateForm = (e) => {
    if (e.target.id === "email") {
      setLoginData({
        ...loginData,
        email: e.target.value,
      });
    }

    if (e.target.id === "password") {
      setLoginData({
        ...loginData,
        password: e.target.value,
      });
    }

    if (e.target.id === "confirmPassword") {
      setLoginData({
        ...loginData,
        confirmPassword: e.target.value,
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-bogo">
          <div className="logo-container">
            <img
              className="logo"
              src={logo}
              alt="laundry machine outlined logo"
            />
          </div>
          <div className="login-heading-container">
            <h1 className="login-header">Laundr</h1>
            <p className="login-subheader">
              Let's get you signed up! Please fill in some information below.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login-fields-container">
            <label className="visuallyhidden" htmlFor="email">
              Email
            </label>
            <div className="position-relative">
              <img
                className="input-icon"
                src={userIcon}
                alt="user stroke icon"
                aria-hidden="true"
              />
              <input
                className="login-input"
                required
                type="text"
                name="email"
                id="email"
                placeholder="EMAIL"
                value={loginData.email || ""}
                onChange={updateForm}
              />
            </div>

            <label className="visuallyhidden" htmlFor="password">
              Password
            </label>
            <div className="position-relative">
              <img
                className="input-icon"
                src={lockIcon}
                alt="closed lock stroke icon"
                aria-hidden="true"
              />
              <input
                required
                className="login-input"
                type="password"
                name="password"
                id="password"
                placeholder="PASSWORD"
                value={loginData.password || ""}
                onChange={updateForm}
              />
            </div>
            <label className="visuallyhidden" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="position-relative">
              <img
                className="input-icon"
                src={lockIcon}
                alt="closed lock stroke icon"
                aria-hidden="true"
              />
              <input
                required
                className="login-input"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="CONFIRM PASSWORD"
                value={loginData.confirmPassword || ""}
                onChange={updateForm}
              />
            </div>
          </div>

          <div className="login-snackbar">
            <button className="btn-primary" type="submit" onClick={() => {}}>
              Sign up
            </button>
          </div>
        </form>
        <div className="login-options-container">
          <span className="text-white">Already have an account?</span>
          <button
            className="btn-alt"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </button>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Your passwords do not match! Please try typing again.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Signup;
