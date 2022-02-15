import React, { useState } from "react";
import { Columns } from "react-bulma-components";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navs">
      <a href="#" className=" is-primary is-rounded ">
        Home
      </a>
      <a href="#" className=" is-primary is-rounded ">
        Collections
      </a>
      <a href="#" className=" is-primary is-rounded ">
        Friends
      </a>
      <a href="#" className=" is-primary is-rounded ">
        Tips
      </a>
    </nav>
  );
}

export default NavBar;
