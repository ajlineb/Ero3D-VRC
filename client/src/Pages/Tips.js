import React from "react";
import { Link } from "react-router-dom";
import Blender from "../utils/social_Icons/blender_logo.png";
import data from "../utils/images";

export default function Tips() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  return (
    <div className="content grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 font-mono">
      <div className="leftInfo container">
        <h2 className="subtitle">Blender Tips</h2>
        <p>Click below for detailed info</p>
        <Link
          to="blender"
          className="text-xs font-semibold italic text-orange-500"
        >
          ~Extended Blender Info~
        </Link>
        <div className="pb-10" />
        <a href="https://www.blender.org/">
          <img src={Blender} alt="Blender logo"></img>
        </a>
      </div>
      <div className="centerInfo container">
        <h2 className="subtitle">Unity Tips</h2>
        <Link to="unity" className="text-xs font-semibold italic text-sky-300">
          ~Extended Unity Info~
        </Link>
      </div>
      <div className="rightInfo container">
        <h2 className="subtitle">Trouble Shooting</h2>
        <Link
          to="trouble"
          className="text-xs font-semibold italic text-rose-500"
        >
          ~Extended Trouble Shooting Info~
        </Link>
      </div>
    </div>
  );
}
