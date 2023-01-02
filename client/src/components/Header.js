import React, { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";

import Login from "./Login";
import NavBar from "./Navbar";
import Status from "./Status";

export default function Header() {
  const [transparent, setTransParent] = useState("transparent"); //for a scrolling animation for the header container

  //checks window if scrolled down for nav bar
  function handleScroll() {
    let posY = window.scrollY;
    if (posY > 0) {
      setTransParent("");
    } else {
      setTransParent("transparent");
    }
  }
  //used to create a listener on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  //used for changing the tabs menu into hamburger menu on smaller screens
  const { height, width } = useWindowDimensions();

  return (
    <div className={`header flex flex-row flex-wrap ${transparent}`}>
      <div className=" basis-1/4">
        <h1 className="title">ERO 3D VRC</h1>
      </div>
      <div className="basis-1/2 flex flex-wrap justify-evenly">
        {width > 1000 ? <NavBar isSmall={false} /> : <NavBar isSmall={true} />}
      </div>
      <div className="basis-1/4">
        <Login />
      </div>
      <Status />
    </div>
  );
}
