import React from "react";
import { Columns } from "react-bulma-components";

export default function Home() {
  return (
    <div className="content">
      <Columns>
        <Columns.Column className="is-two-fifths">Hellos!</Columns.Column>
        <Columns.Column>
          <h1 className="text-3xl font-bold underline">Hellos!</h1>
        </Columns.Column>
        <Columns.Column>Hellos!</Columns.Column>
        <Columns.Column>Hellos!</Columns.Column>
      </Columns>
    </div>
  );
}
