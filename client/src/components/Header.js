import React, { useState, useEffect } from "react";

import Login from "./Login";
//import NavBar from "./Navbar.js";

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

  return (
    <div className={`header flex flex-row flex-wrap  ${transparent}`}>
      <div className=" basis-1/4">
        <h1 className="title">ERO 3D VRC</h1>
      </div>
      <div className="  basis-1/2">{/* <NavBar /> */}</div>
      <div className=" basis-1/4">
        <Login />
      </div>
    </div>
  );
}
