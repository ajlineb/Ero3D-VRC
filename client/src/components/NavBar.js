import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const tabs = ["home", "collections", "friends", "tips"];
  const [active, setActive] = useState(tabs[0]);

  //handles the name of the tabs
  function handleTab(tab) {
    if (tab === tabs[0]) {
      return "Home";
    }
    if (tab === tabs[1]) {
      return "Collections";
    }
    if (tab === tabs[2]) {
      return "Friends";
    } else {
      return "Tips";
    }
  }

  const path = window.location.pathname.split("/");

  return (
    <nav>
      <ul className="">
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
                path[2] === tab
                  ? "bg-teal-500 shadow-md shadow-teal-500/50 rounded p-1"
                  : ""
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

export default NavBar;
