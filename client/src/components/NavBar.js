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
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <ul className="navs navbar-item has-dropdown is-hoverable">
        <h1 className="title">Menu</h1>
        <div className="navbar-dropdown">
          {tabs.map((tab) => (
            <li>
              <Link
                to={tab}
                key={tab.id}
                active={active === tab}
                onClick={() => {
                  setActive(tab);
                }}
                className={
                  path[2] === tab
                    ? "tabs tab-active navbar-item "
                    : "tabs navbar-item"
                }
              >
                {handleTab(tab)}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
