import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();

  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        <div className="brand-container">
          {/* <Link className="" to="/">
            Laundr
          </Link> */}
          <a
            className="brand-title"
            onClick={() => props?.setNav({ page: "main" })}
          >
            Laundr
          </a>
        </div>

        <div className="menu-container">
          <div className="links-container">
            {/* <Link className="nav-link" to="/faq">
              FAQ
            </Link>
            <Link className="nav-link" to="/contact-us">
              Contact Us
            </Link> */}
            <a
              className="nav-link"
              onClick={() => props?.setNav({ page: "faq" })}
            >
              FAQ
            </a>
            <a
              className="nav-link"
              onClick={() => props?.setNav({ page: "contactUs" })}
            >
              Contact Us
            </a>
          </div>
          <button className="btn-blue" onClick={() => navigate("/logout")}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
