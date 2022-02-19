import React, { useState, useEffect } from "react";

import Login from "./Login";
import NavBar from "./Navbar";
import { Columns } from "react-bulma-components";

export default function Header() {
  const [transparent, setTransParent] = useState("");

  //checks window if scrolled down for nav bar
  function handleScroll() {
    let posY = window.scrollY;
    if (posY > 0) {
      setTransParent("is-black");
      console.log(transparent);
    } else {
      setTransParent("");
      console.log(transparent);
    }
  }
  //used to create a listener on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <Columns className={`header ${transparent}`}>
      <Columns.Column className="is-one-fifth">
        <h1 className="title">ERO 3D VRC</h1>
      </Columns.Column>
      <Columns.Column>
        <NavBar />
      </Columns.Column>
      <Columns.Column className="">
        <Login />
      </Columns.Column>
    </Columns>
  );
}
