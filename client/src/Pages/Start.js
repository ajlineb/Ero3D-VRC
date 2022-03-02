import React from "react";
import data from "../utils/images";

export default function Start() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  return (
    <div className="content grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 font-mono">
      <div className="centerInfo container">
        <h2 className="subtitle">Welcome!</h2>
        <p>Thanks for dropping by!</p> <br />
        <p>
          I hope you will find helpful tips and information around avatar
          creation here. If you would like to get in touch about an avatar idea
          or edits to your current model let me know!
        </p>
      </div>
    </div>
  );
}
