import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const tabs = ["", "home", "collections", "friends", "tips"];
  const [active, setActive] = useState(tabs[0]);

  //handles the name of the tabs
  function handleTab(tab) {
    if (tab === tabs[0]) {
      return "Start";
    }
    if (tab === tabs[1]) {
      return "Home";
    }
    if (tab === tabs[2]) {
      return "Collections";
    }
    if (tab === tabs[3]) {
      return "Friends";
    } else {
      return "Tips";
    }
  }

  const path = window.location.pathname.split("/");
  console.log(path[1]);

  return (
    <nav>
      <ul className="nav-container">
        {tabs.map((tab) => (
          <li className="navs">
            <Link
              to={tab}
              key={tab.id}
              active={active === tab}
              onClick={() => {
                setActive(tab);
              }}
              className={
                path[1] === tab
                  ? "bg-teal-500 shadow-lg shadow-teal-500/50 rounded p-1 hover:bg-indigo-500 hover:shadow-indigo-500/50 duration-300"
                  : "p-1"
              }
            >
              {handleTab(tab)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
