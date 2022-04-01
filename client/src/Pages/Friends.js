import React from "react";
//import Vrchat from "../utils/apiLogin";
import data from "../utils/images";

export default function Friends() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  return (
    <div className="content grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 font-mono">
      <div className="leftInfo container">
        <h2 className="subtitle">
          Helpful Friends on VRC for Avatar Development
        </h2>
        <p>helpful user *Name*</p>
      </div>
      <div className="centerInfo container">
        <h2 className="subtitle">Awesome Friends!</h2>
        <p>List of closest friends *Need to ask permission to place names*</p>
        <p>DawnStar</p>
        <p>Scipi, Pure, Innocent, and Holesome Nyan</p>
        <p>SilentWhisp</p>
      </div>
      <div className="rightInfo container">
        <h2 className="subtitle">Are you a friend yet?</h2>
        <p>Lets get to know each other!</p>
        <br />
        <p>
          List out neat things about myself, how long I have been working on
          avatars and playing on vrc. Maybe mention my ability to develop
          websites!
        </p>
      </div>
    </div>
  );
}
