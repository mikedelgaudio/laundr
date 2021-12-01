import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import MainView from "./MainView/MainView";
import Faq from "../Faq/Faq";
import { useState } from "react";
import "./Layout.css";
import ContactUs from "../ContactUs/ContactUs";
import { ImportExportSharp, SettingsOutlined } from "@mui/icons-material";

function Layout() {
  const [selected, setSelected] = useState({
    davis: true,
    jonas: false,
    cph: false,
    humphrey: false,
  });
  const [endTimers, setTimer] = useState({
    washer1: new Date(),
    washer2: new Date(),
    washer3: new Date(),
    dryer1: new Date(),
    dryer2: new Date(),
    dryer3: new Date(),
  });
  const [timeLeft, setTimeLeft] = useState({
    washer1: "0:00",
    washer2: "0:00",
    washer3: "0:00",
    dryer1: "0:00",
    dryer2: "0:00",
    dryer3: "0:00",
  });
  const [favorited, setFavorited] = useState({
    davis: true,
    jonas: false,
    cph: false,
    humphrey: false,
  });
  const [washers, setWasher] = useState({
    washer1: "free",
    washer2: "free",
    washer3: "ooo",
  });
  const [dryers, setDryer] = useState({
    dryer1: "free",
    dryer2: "free",
    dryer3: "ooo",
  });

  const [nav, setNav] = useState({
    page: "main",
  });

  const setSelectedState = (e) => {
    let html = `${e.target.innerHTML}`;

    if (html.includes("Davis")) {
      setSelected({ davis: true, jonas: false, cph: false, humphrey: false });
    } else if (html.includes("Jonas")) {
      setSelected({ davis: false, jonas: true, cph: false, humphrey: false });
    } else if (html.includes("Castle Point")) {
      setSelected({ davis: false, jonas: false, cph: true, humphrey: false });
    } else if (html.includes("Humphrey")) {
      setSelected({ davis: false, jonas: false, cph: false, humphrey: true });
    }
  };

  const handleWasherClick = (e) => {
    let admin = sessionStorage.getItem("email");
    let html = `${e.target.innerHTML}`;
    if (admin !== "admin@stevens.edu") {
      if (html.includes("Free")) {
        if (html.includes("washer")) {
          let now = new Date();
          let end = new Date();
          end.setMinutes(now.getMinutes() + 26);
          const newTimeLeft = now - end;
          const minutes = Math.floor(
            (newTimeLeft % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((newTimeLeft % (1000 * 60)) / 1000);

          if (html.includes(" 1<")) {
            setWasher({
              washer1: "in-use",
              washer2: washers.washer2,
              washer3: washers.washer3,
            });
            setTimer({
              washer1: end,
              washer2: endTimers.washer2,
              washer3: endTimers.washer3,
              dryer1: endTimers.dryer1,
              dryer2: endTimers.dryer2,
              dryer3: endTimers.dryer3,
            });
            setTimeLeft({
              washer1: `${minutes}:${seconds}`,
              washer2: timeLeft.washer2,
              washer3: timeLeft.washer3,
              dryer1: timeLeft.dryer1,
              dryer2: timeLeft.dryer2,
              dryer3: timeLeft.dryer3,
            });
          }
          if (html.includes(" 2<")) {
            setWasher({
              washer1: washers.washer1,
              washer2: "in-use",
              washer3: washers.washer3,
            });
            setTimer({
              washer1: endTimers.washer1,
              washer2: end,
              washer3: endTimers.washer3,
              dryer1: endTimers.dryer1,
              dryer2: endTimers.dryer2,
              dryer3: endTimers.dryer3,
            });
            setTimeLeft({
              washer1: timeLeft.washer1,
              washer2: `${minutes}:${seconds}`,
              washer3: timeLeft.washer3,
              dryer1: timeLeft.dryer1,
              dryer2: timeLeft.dryer2,
              dryer3: timeLeft.dryer3,
            });
          }
          if (html.includes(" 3<")) {
            setWasher({
              washer1: washers.washer1,
              washer2: washers.washer2,
              washer3: "in-use",
            });
            setTimer({
              washer1: endTimers.washer1,
              washer2: endTimers.washer2,
              washer3: end,
              dryer1: endTimers.dryer1,
              dryer2: endTimers.dryer2,
              dryer3: endTimers.dryer3,
            });
            setTimeLeft({
              washer1: timeLeft.washer1,
              washer2: timeLeft.washer2,
              washer3: `${minutes}:${seconds}`,
              dryer1: timeLeft.dryer1,
              dryer2: timeLeft.dryer2,
              dryer3: timeLeft.dryer3,
            });
          }
        }
        if (html.includes("dryer")) {
          let now = new Date();
          let end = new Date();
          end.setMinutes(now.getMinutes() + 45);
          const newTimeLeft = now - end;
          const minutes = Math.floor(
            (newTimeLeft % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((newTimeLeft % (1000 * 60)) / 1000);

          if (html.includes(" 1<")) {
            setDryer({
              dryer1: "in-use",
              dryer2: dryers.dryer2,
              dryer3: dryers.dryer3,
            });
            setTimer({
              washer1: endTimers.washer1,
              washer2: endTimers.washer2,
              washer3: endTimers.washer3,
              dryer1: end,
              dryer2: endTimers.dryer2,
              dryer3: endTimers.dryer3,
            });
            setTimeLeft({
              washer1: timeLeft.washer1,
              washer2: timeLeft.washer2,
              washer3: timeLeft.washer3,
              dryer1: `${minutes}:${seconds}`,
              dryer2: timeLeft.dryer2,
              dryer3: timeLeft.dryer3,
            });
          }
          if (html.includes(" 2<")) {
            setDryer({
              dryer1: dryers.dryer1,
              dryer2: "in-use",
              dryer3: dryers.dryer3,
            });
            setTimer({
              washer1: endTimers.washer1,
              washer2: endTimers.washer2,
              washer3: endTimers.washer3,
              dryer1: endTimers.dryer1,
              dryer2: end,
              dryer3: endTimers.dryer3,
            });
            setTimeLeft({
              washer1: timeLeft.washer1,
              washer2: timeLeft.washer2,
              washer3: timeLeft.washer3,
              dryer1: timeLeft.dryer1,
              dryer2: `${minutes}:${seconds}`,
              dryer3: timeLeft.dryer3,
            });
          }
          if (html.includes(" 3<")) {
            setDryer({
              dryer1: dryers.dryer1,
              dryer2: dryers.dryer2,
              dryer3: "in-use",
            });
            setTimer({
              washer1: endTimers.washer1,
              washer2: endTimers.washer2,
              washer3: endTimers.washer3,
              dryer1: endTimers.dryer1,
              dryer2: endTimers.dryer2,
              dryer3: end,
            });
            setTimeLeft({
              washer1: timeLeft.washer1,
              washer2: timeLeft.washer2,
              washer3: timeLeft.washer3,
              dryer1: timeLeft.dryer1,
              dryer2: timeLeft.dryer2,
              dryer3: `${minutes}:${seconds}`,
            });
          }
        }
      }
    } else {
      if (html.includes("Out")) {
        if (html.includes("washer")) {
          let now = new Date();
          let end = new Date();
          end.setMinutes(now.getMinutes() + 26);
          const newTimeLeft = now - end;
          const minutes = Math.floor(
            (newTimeLeft % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((newTimeLeft % (1000 * 60)) / 1000);

          if (html.includes(" 1<")) {
            setWasher({
              washer1: "free",
              washer2: washers.washer2,
              washer3: washers.washer3,
            });
          }
          if (html.includes(" 2<")) {
            setWasher({
              washer1: washers.washer1,
              washer2: "free",
              washer3: washers.washer3,
            });
          }
          if (html.includes(" 3<")) {
            setWasher({
              washer1: washers.washer1,
              washer2: washers.washer2,
              washer3: "free",
            });
          }
        }
        if (html.includes("dryer")) {
          let now = new Date();
          let end = new Date();
          end.setMinutes(now.getMinutes() + 45);
          const newTimeLeft = now - end;
          const minutes = Math.floor(
            (newTimeLeft % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((newTimeLeft % (1000 * 60)) / 1000);

          if (html.includes(" 1<")) {
            setDryer({
              dryer1: "free",
              dryer2: dryers.dryer2,
              dryer3: dryers.dryer3,
            });
          }
          if (html.includes(" 2<")) {
            setDryer({
              dryer1: dryers.dryer1,
              dryer2: "free",
              dryer3: dryers.dryer3,
            });
          }
          if (html.includes(" 3<")) {
            setDryer({
              dryer1: dryers.dryer1,
              dryer2: dryers.dryer2,
              dryer3: "free",
            });
          }
        }
      }

      if (html.includes("Free")) {
        if (html.includes("washer")) {
          let now = new Date();
          let end = new Date();
          end.setMinutes(now.getMinutes() + 26);
          const newTimeLeft = now - end;
          const minutes = Math.floor(
            (newTimeLeft % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((newTimeLeft % (1000 * 60)) / 1000);

          if (html.includes(" 1<")) {
            setWasher({
              washer1: "ooo",
              washer2: washers.washer2,
              washer3: washers.washer3,
            });
          }
          if (html.includes(" 2<")) {
            setWasher({
              washer1: washers.washer1,
              washer2: "ooo",
              washer3: washers.washer3,
            });
          }
          if (html.includes(" 3<")) {
            setWasher({
              washer1: washers.washer1,
              washer2: washers.washer2,
              washer3: "ooo",
            });
          }
        }
        if (html.includes("dryer")) {
          let now = new Date();
          let end = new Date();
          end.setMinutes(now.getMinutes() + 45);
          const newTimeLeft = now - end;
          const minutes = Math.floor(
            (newTimeLeft % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((newTimeLeft % (1000 * 60)) / 1000);

          if (html.includes(" 1<")) {
            setDryer({
              dryer1: "ooo",
              dryer2: dryers.dryer2,
              dryer3: dryers.dryer3,
            });
          }
          if (html.includes(" 2<")) {
            setDryer({
              dryer1: dryers.dryer1,
              dryer2: "ooo",
              dryer3: dryers.dryer3,
            });
          }
          if (html.includes(" 3<")) {
            setDryer({
              dryer1: dryers.dryer1,
              dryer2: dryers.dryer2,
              dryer3: "ooo",
            });
          }
        }
      }

      if (html.includes("In")) {
        if (html.includes("washer")) {
          let now = new Date();
          let end = new Date();
          end.setMinutes(now.getMinutes() + 26);
          const newTimeLeft = now - end;
          const minutes = Math.floor(
            (newTimeLeft % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((newTimeLeft % (1000 * 60)) / 1000);

          if (html.includes(" 1<")) {
            setWasher({
              washer1: "free",
              washer2: washers.washer2,
              washer3: washers.washer3,
            });
          }
          if (html.includes(" 2<")) {
            setWasher({
              washer1: washers.washer1,
              washer2: "free",
              washer3: washers.washer3,
            });
          }
          if (html.includes(" 3<")) {
            setWasher({
              washer1: washers.washer1,
              washer2: washers.washer2,
              washer3: "free",
            });
          }
        }
        if (html.includes("dryer")) {
          let now = new Date();
          let end = new Date();
          end.setMinutes(now.getMinutes() + 45);
          const newTimeLeft = now - end;
          const minutes = Math.floor(
            (newTimeLeft % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((newTimeLeft % (1000 * 60)) / 1000);

          if (html.includes(" 1<")) {
            setDryer({
              dryer1: "free",
              dryer2: dryers.dryer2,
              dryer3: dryers.dryer3,
            });
          }
          if (html.includes(" 2<")) {
            setDryer({
              dryer1: dryers.dryer1,
              dryer2: "free",
              dryer3: dryers.dryer3,
            });
          }
          if (html.includes(" 3<")) {
            setDryer({
              dryer1: dryers.dryer1,
              dryer2: dryers.dryer2,
              dryer3: "free",
            });
          }
        }
      }
    }
  };
  const displayMain = () => {
    const interval = setInterval(function () {
      const now = new Date();
      if (timeLeft.dryer1 !== "0:00") {
        const newTimeLeft = now - endTimers.dryer1;
        const minutes = Math.abs(
          Math.floor((newTimeLeft % (1000 * 60 * 60)) / (1000 * 60))
        );
        const seconds = Math.abs(
          Math.floor((newTimeLeft % (1000 * 60)) / 1000)
        );

        setTimeLeft({
          dryer1: `${minutes}:${seconds}`,
          washer2: timeLeft.washer2,
          washer3: timeLeft.washer3,
          washer1: timeLeft.washer1,
          dryer2: timeLeft.dryer2,
          dryer3: timeLeft.dryer3,
        });
        if (minutes === 0 && seconds === 0) {
          setDryer({
            dryer1: "free",
            dryer2: washers.washer2,
            dryer3: washers.washer3,
          });
          setTimeLeft({
            dryer1: `0:00`,
            washer2: timeLeft.washer2,
            washer3: timeLeft.washer3,
            dryer1: timeLeft.dryer1,
            washer2: timeLeft.washer2,
            dryer3: timeLeft.dryer3,
          });
          setTimer({
            dryer1: new Date(),
            washer2: endTimers.washer2,
            washer3: endTimers.washer3,
            washer1: endTimers.washer1,
            dryer2: endTimers.dryer2,
            dryer3: endTimers.dryer3,
          });
        }
      }
      if (timeLeft.dryer2 !== "0:00") {
        const newTimeLeft = now - endTimers.dryer2;
        const minutes = Math.abs(
          Math.floor((newTimeLeft % (1000 * 60 * 60)) / (1000 * 60))
        );
        const seconds = Math.abs(
          Math.floor((newTimeLeft % (1000 * 60)) / 1000)
        );

        setTimeLeft({
          dryer2: `${minutes}:${seconds}`,
          washer2: timeLeft.washer2,
          washer3: timeLeft.washer3,
          dryer1: timeLeft.dryer1,
          washer2: timeLeft.washer2,
          dryer3: timeLeft.dryer3,
        });
        if (minutes === 0 && seconds === 0) {
          setDryer({
            dryer2: "free",
            dryer1: dryers.dryer2,
            dryer3: dryers.dryer3,
          });
          setTimeLeft({
            dryer2: `0:00`,
            washer2: timeLeft.washer2,
            washer3: timeLeft.washer3,
            dryer1: timeLeft.dryer1,
            washer1: timeLeft.washer1,
            dryer3: timeLeft.dryer3,
          });
          setTimer({
            dryer2: new Date(),
            washer2: endTimers.washer2,
            washer3: endTimers.washer3,
            dryer1: endTimers.dryer1,
            washer1: endTimers.washer1,
            dryer3: endTimers.dryer3,
          });
        }
      }
      if (timeLeft.dryer3 !== "0:00") {
        const newTimeLeft = now - endTimers.dryer3;
        const minutes = Math.abs(
          Math.floor((newTimeLeft % (1000 * 60 * 60)) / (1000 * 60))
        );
        const seconds = Math.abs(
          Math.floor((newTimeLeft % (1000 * 60)) / 1000)
        );

        setTimeLeft({
          dryer3: `${minutes}:${seconds}`,
          washer2: timeLeft.washer2,
          washer3: timeLeft.washer3,
          dryer1: timeLeft.dryer1,
          dryer2: timeLeft.dryer2,
          washer1: timeLeft.washer1,
        });
        if (minutes === 0 && seconds === 0) {
          setDryer({
            dryer3: "free",
            dryer2: dryers.dryer2,
            dryer3: dryers.dryer3,
          });
          setTimeLeft({
            dryer3: `0:00`,
            washer2: timeLeft.washer2,
            washer3: timeLeft.washer3,
            dryer1: timeLeft.dryer1,
            dryer2: timeLeft.dryer2,
            washer1: timeLeft.washer1,
          });
          setTimer({
            dryer3: new Date(),
            washer2: endTimers.washer2,
            washer3: endTimers.washer3,
            dryer1: endTimers.dryer1,
            dryer2: endTimers.dryer2,
            washer1: endTimers.washer1,
          });
        }
      }
      if (timeLeft.washer1 !== "0:00") {
        const newTimeLeft = now - endTimers.washer1;
        const minutes = Math.abs(
          Math.floor((newTimeLeft % (1000 * 60 * 60)) / (1000 * 60))
        );
        const seconds = Math.abs(
          Math.floor((newTimeLeft % (1000 * 60)) / 1000)
        );

        setTimeLeft({
          washer1: `${minutes}:${seconds}`,
          washer2: timeLeft.washer2,
          washer3: timeLeft.washer3,
          dryer1: timeLeft.dryer1,
          dryer2: timeLeft.dryer2,
          dryer3: timeLeft.dryer3,
        });
        if (minutes === 0 && seconds === 0) {
          setWasher({
            washer1: "free",
            washer2: washers.washer2,
            washer3: washers.washer3,
          });
          setTimeLeft({
            washer1: `0:00`,
            washer2: timeLeft.washer2,
            washer3: timeLeft.washer3,
            dryer1: timeLeft.dryer1,
            dryer2: timeLeft.dryer2,
            dryer3: timeLeft.dryer3,
          });
          setTimer({
            washer1: new Date(),
            washer2: endTimers.washer2,
            washer3: endTimers.washer3,
            dryer1: endTimers.dryer1,
            dryer2: endTimers.dryer2,
            dryer3: endTimers.dryer3,
          });
        }
      }
      if (timeLeft.washer2 !== "0:00") {
        const newTimeLeft = now - endTimers.washer2;
        const minutes = Math.abs(
          Math.floor((newTimeLeft % (1000 * 60 * 60)) / (1000 * 60))
        );
        const seconds = Math.abs(
          Math.floor((newTimeLeft % (1000 * 60)) / 1000)
        );

        setTimeLeft({
          washer2: `${minutes}:${seconds}`,
          washer1: timeLeft.washer1,
          washer3: timeLeft.washer3,
          dryer1: timeLeft.dryer1,
          dryer2: timeLeft.dryer2,
          dryer3: timeLeft.dryer3,
        });
        if (minutes === 0 && seconds === 0) {
          setWasher({
            washer2: "free",
            washer1: washers.washer1,
            washer3: washers.washer3,
          });
          setTimeLeft({
            washer2: `0:00`,
            washer1: timeLeft.washer1,
            washer3: timeLeft.washer3,
            dryer1: timeLeft.dryer1,
            dryer2: timeLeft.dryer2,
            dryer3: timeLeft.dryer3,
          });
          setTimer({
            washer2: new Date(),
            washer1: endTimers.washer1,
            washer3: endTimers.washer3,
            dryer1: endTimers.dryer1,
            dryer2: endTimers.dryer2,
            dryer3: endTimers.dryer3,
          });
        }
      }
      if (timeLeft.washer3 !== "0:00") {
        const newTimeLeft = now - endTimers.washer3;
        const minutes = Math.abs(
          Math.floor((newTimeLeft % (1000 * 60 * 60)) / (1000 * 60))
        );
        const seconds = Math.abs(
          Math.floor((newTimeLeft % (1000 * 60)) / 1000)
        );

        setTimeLeft({
          washer3: `${minutes}:${seconds}`,
          washer2: timeLeft.washer2,
          washer1: timeLeft.washer1,
          dryer1: timeLeft.dryer1,
          dryer2: timeLeft.dryer2,
          dryer3: timeLeft.dryer3,
        });
        if (minutes === 0 && seconds === 0) {
          setWasher({
            washer3: "free",
            washer2: washers.washer2,
            washer1: washers.washer1,
          });
          setTimeLeft({
            washer3: `0:00`,
            washer2: timeLeft.washer2,
            washer1: timeLeft.washer1,
            dryer1: timeLeft.dryer1,
            dryer2: timeLeft.dryer2,
            dryer3: timeLeft.dryer3,
          });
          setTimer({
            washer3: new Date(),
            washer2: endTimers.washer2,
            washer1: endTimers.washer1,
            dryer1: endTimers.dryer1,
            dryer2: endTimers.dryer2,
            dryer3: endTimers.dryer3,
          });
        }
      }
    }, 1000);

    switch (nav.page) {
      case "main":
        return (
          <MainView
            selected={selected}
            favorited={favorited}
            washers={washers}
            dryers={dryers}
            timers={timeLeft}
            handleWasherClick={handleWasherClick}
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
      <Sidebar
        school={"Stevens"}
        select={setSelectedState}
        selected={selected}
      />
      <Navbar setNav={setNav} />
      <main className="main-view">{displayMain()}</main>
    </div>
  );
}

export default Layout;
