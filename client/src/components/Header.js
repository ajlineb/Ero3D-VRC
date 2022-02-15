import React from "react";

import NavBar from "./NavBar";
import { Columns } from "react-bulma-components";

export default function Header() {
  return (
    <Columns className="header">
      <Columns.Column className="is-half">
        {" "}
        <h1 className="title">ERO 3D VRC</h1>
      </Columns.Column>
      <Columns.Column className="is-offset-5">
        {" "}
        <NavBar />
      </Columns.Column>
    </Columns>
  );
}
