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
        <p>DawnStar</p>
        <p>Scipi, Pure, Innocent, and Holesome Nyan</p>
        <p>SilentWhisp</p>
      </div>
      <div className="rightInfo container">
        <h2 className="subtitle">Are you a friend yet?</h2>
        <p className="font-black">Lets get to know each other!</p>
        <br />
        <p className="text-justify">
          Hello! My name is EroForce but most of my friends just call me Ero. I
          enjoy working with furry avatars and have been for three years now!
        </p>
        <br />
        <p className="text-justify">
          I haved done a lot of sculpting of avatar features, creating
          blendshapes, body part switches, hair creation that is fully rigged,
          and much more!
        </p>
        <br />
        <p className="text-justify">
          As a side note I even develop websites from frontend to backend server
          development. If you would like to hangout and chat in VRChat just send
          a DM to EroForce on Discord!
        </p>
      </div>
    </div>
  );
}
