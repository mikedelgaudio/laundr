import "./ContactUs.css";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function ContactUs() {
  const [contactData, setContactForm] = useState({ email: "", message: "" });
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (contactData.email !== "" && contactData.message !== "") setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {
    e = e || window.event;
    e.preventDefault();

    // logic to handle bad username and password
    setContactForm({ email: "", message: "" });
    e.target.reset();
  };

  const updateForm = (e) => {
    if (e.target.id === "email") {
      setContactForm({
        ...contactData,
        email: e.target.value,
      });
    }

    if (e.target.id === "message") {
      setContactForm({
        ...contactData,
        message: e.target.value,
      });
    }
  };
  return (
    <div className="contact-container">
      <div className="contact-heading">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Sometimes, things can get confusing... we're here to help!
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="visuallyhidden" htmlFor="email">
          Email
        </label>
        <div className="position-relative">
          <input
            className="contact-input"
            required
            type="text"
            name="email"
            id="email"
            placeholder="EMAIL"
            value={contactData.email || ""}
            onChange={updateForm}
          />
        </div>

        <label className="visuallyhidden" htmlFor="message">
          Email
        </label>
        <div className="position-relative">
          <textarea
            className="contact-input"
            required
            type="text"
            name="message"
            id="message"
            placeholder="MESSAGE"
            value={contactData.message || ""}
            onChange={updateForm}
          />
        </div>
        <div className="login-snackbar">
          <button className="btn-blue" type="submit" onClick={handleClick}>
            Send
          </button>
        </div>
      </form>
      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your message was successfully sent! We'll get back to you within 2-3
          business days
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ContactUs;
