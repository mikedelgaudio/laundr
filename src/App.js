import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import { useState } from "react";
import Logout from "./components/Logout/Logout";
import Faq from "./components/Faq/Faq";
function App() {
  const [isUserLoggedIn, setLogin] = useState(false);

  const homeRoute = () => {
    if (sessionStorage.getItem("email") !== "null" || isUserLoggedIn) {
      return <Layout school="Stevens" admin="false" setLogin={setLogin} />;
      // you can swap Layout with Home
    } else {
      return <Login setLogin={setLogin} />;
    }
  };

  return (
    <div className="app-body">
      <Router>
        <Routes>
          <Route path="/" element={homeRoute()} />
          <Route path="/login" element={homeRoute()} />
          <Route path="/logout" element={<Logout setLogin={setLogin} />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/alt" element={<Layout />} />
          <Route path="/signup" element={<Signup />} />
          <Route component={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
