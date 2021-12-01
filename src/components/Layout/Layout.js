import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import MainView from "./MainView/MainView";
import Faq from "../Faq/Faq";
import { useState } from "react";
import "./Layout.css";
import ContactUs from "../ContactUs/ContactUs";

function Layout() {
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

  const [nav, setNav] = useState({
    page: "main",
  });

  const displayMain = () => {
    switch (nav.page) {
      case "main":
        return (
          <MainView
            selected={selected}
            favorited={favorited}
            washers={washers}
            dryers={dryers}
          />
        );
      case "faq":
        return <Faq />;
      case "contactUs":
        return <ContactUs />;
      default:
        break;
    }
  };

  return (
    <div className="layout">
      <Sidebar school={"Stevens"} />
      <Navbar setNav={setNav} />
      <main className="main-view">{displayMain()}</main>
    </div>
  );
}

export default Layout;
