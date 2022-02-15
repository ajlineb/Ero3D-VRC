import React from "react";

import Login from "./Login";
import NavBar from "./Navbar";
import { Columns } from "react-bulma-components";

export default function Header() {
  return (
    <Columns className="header">
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
