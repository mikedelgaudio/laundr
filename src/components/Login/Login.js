import "./Login.css";
import logo from "../../assets/Login/logo.svg";
import userIcon from "../../assets/Login/user.svg";
import lockIcon from "../../assets/Login/lock.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(props) {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e = e || window.event;
    e.preventDefault();
    setLoginData({ email: "", password: "" });
    e.target.reset();
  };

  const allowLogin = () => {
    if (loginData.email && loginData.password) {
      props?.setLogin(true);
      sessionStorage.setItem("email", loginData.email);
      console.log(sessionStorage.getItem("email"));
      navigate("/");
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
            <p className="login-subheader">Welcome, please log in.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit.bind(this)}>
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
                autoComplete="username"
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
                autoComplete="current-password"
                value={loginData.password || ""}
                onChange={updateForm}
              />
            </div>
          </div>

          <div className="login-snackbar">
            <button
              className="btn-primary"
              type="submit"
              onClick={() => {
                allowLogin();
              }}
            >
              LOGIN
            </button>
          </div>
        </form>
        <div className="login-options-container">
          <button
            className="btn-alt"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
