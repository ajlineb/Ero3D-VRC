import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { IoIosOptions } from "react-icons/io";

function Navbar(props) {
  const tabs = ["", "home", "collections", "friends", "tips"];
  const [active, setActive] = useState(tabs[0]);
  const [navbarOpen, setNavbarOpen] = useState(false); //toggling tab menu

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

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const path = window.location.href.split("/");
  //console.log(path);
  return (
    <>
      {props.isSmall ? (
        <>
          <nav>
            <button onClick={handleToggle}>
              {navbarOpen ? (
                <MdClose
                  style={{ color: "#fff", width: "2.5rem", height: "2.5rem" }}
                  className="bg-teal-500 shadow-lg shadow-teal-500/50 rounded p-1 hover:bg-indigo-500 hover:shadow-indigo-500/50 duration-300"
                />
              ) : (
                <IoIosOptions
                  style={{ color: "white", width: "2.5rem", height: "2.5rem" }}
                  className="bg-teal-500 shadow-lg shadow-teal-500/50 rounded p-1 hover:bg-indigo-500 hover:shadow-indigo-500/50 duration-300"
                />
              )}
            </button>
            <ul className={`menuNav ${navbarOpen ? "showMenu" : ""} `}>
              {tabs.map((tab) => (
                <li key={tab.toString()} className="text-xl pt-5 pb-5">
                  <Link
                    key={tab.toString()}
                    to={tab}
                    onClick={() => {
                      setActive(tab);
                      closeMenu();
                    }}
                    className={
                      path[3] === tab
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
        </>
      ) : (
        <nav>
          <ul className="nav-container">
            {tabs.map((tab) => (
              <li key={tab.toString()} className="navs">
                <Link
                  to={tab}
                  key={tab.toString()}
                  onClick={() => {
                    //console.log(path[4]);
                    setActive(tab);
                  }}
                  className={
                    path[3] === tab
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
      )}
    </>
  );
}

export default Navbar;
