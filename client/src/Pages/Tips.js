import React from "react";
import { Link } from "react-router-dom";
import Blender from "../utils/social_Icons/blender_logo.png";
import blenderImage from "../images/Blender.PNG";
import Unity from "../utils/social_Icons/unity.png";
import unityImage from "../images/Unity.png";
import caution from "../images/caution.png";
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
        <div className="p-3 m-auto">
          <img
            src={blenderImage}
            alt="Blender Tips"
            className="rounded outline-orange-500 outline outline-offset-2 outline-4"
          ></img>
        </div>

        <div className="pb-10" />
        <a href="https://www.blender.org/" className="m-auto">
          <img src={Blender} alt="Blender logo" width="900" height="900"></img>
        </a>
      </div>
      <div className="centerInfo container">
        <h2 className="subtitle">Unity Tips</h2>
        <p>Click below for detailed info</p>
        <Link to="unity" className="text-xs font-semibold italic text-sky-300">
          ~Extended Unity Info~
        </Link>
        <div className="pb-10" />
        <div className="p-3 m-auto">
          <img
            src={unityImage}
            alt="Unity Tips"
            className="rounded outline-sky-300 outline outline-offset-2 outline-4"
          ></img>
        </div>
        <div className="pb-10" />
        <a href="https://unity.com/" className="m-auto">
          <img src={Unity} alt="Blender logo" width="900" height="900"></img>
        </a>
      </div>
      <div className="rightInfo container">
        <h2 className="subtitle">Trouble Shooting</h2>
        <p>Click below for detailed info</p>
        <Link
          to="trouble"
          className="text-xs font-semibold italic text-yellow-300"
        >
          ~Extended Trouble Shooting Info~
        </Link>
        <div className="pb-10" />
        <div className="p-3">
          <img src={caution} alt="Unity Tips" className="m-auto"></img>
        </div>
        <div className="pb-5 bg-yellow-300 rounded" />
        <p className="text-justify pt-2 text-shadow-warn">
          This is a source for problems I have run into in the past and maybe
          you are having trouble with now.
        </p>
        <br></br>
        <p className="text-center text-shadow-warn">
          I hope that whatever error your having can be solved here!
        </p>
      </div>
    </div>
  );
}
