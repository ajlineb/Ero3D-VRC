import React from "react";
import { Columns } from "react-bulma-components";

export default function Home() {
  return (
    <div className="home">
      <Columns>
        <Columns.Column className="is-two-fifths">Hellos!</Columns.Column>
        <Columns.Column>Hellos!</Columns.Column>
        <Columns.Column>Hellos!</Columns.Column>
        <Columns.Column>Hellos!</Columns.Column>
      </Columns>
    </div>
  );
}
