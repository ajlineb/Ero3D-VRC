import React from "react";
import { Link } from "react-router-dom";
import Blender from "../utils/social_Icons/blender_logo.png";
import blenderImage from "../images/Blender.PNG";
import Unity from "../utils/social_Icons/unity.png";
import unityImage from "../images/Unity.png";
import caution from "../images/caution.png";
import data from "../utils/images";
import { Helmet } from "react-helmet";

export default function Tips() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ero3D - Tips</title>
        <link rel="" href="https://ero3dvrc.onrender.com/tips" />
      </Helmet>
      <div className="content grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 font-mono">
        <div className="leftInfo container">
          <h2 className="subtitle">Blender Tips</h2>
          <p className="pb-2">Click below for detailed info</p>
          <Link to="blender" className="text-s">
            <button className="bg-orange-500 shadow-lg shadow-orange-500/50 rounded p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 hover:shadow-indigo-500/50 duration-300">
              {" "}
              <span className="font-black italic">~Extended Blender Info~</span>
            </button>
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
            <img
              src={Blender}
              alt="Blender logo"
              width="900"
              height="900"
            ></img>
          </a>
        </div>
        <div className="centerInfo container">
          <h2 className="subtitle">Unity Tips</h2>
          <p className="pb-2">Click below for detailed info</p>
          <Link to="unity" className="text-s">
            <button className="bg-sky-500 shadow-lg shadow-sky-500/50 rounded p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 hover:shadow-indigo-500/50 duration-300">
              {" "}
              <span className="font-black italic">~Extended Unity Info~</span>
            </button>
          </Link>
          <div className="pb-10" />
          <div className="p-3 m-auto">
            <img
              src={unityImage}
              alt="Unity Tips"
              className="rounded outline-sky-500 outline outline-offset-2 outline-4"
            ></img>
          </div>
          <div className="pb-10" />
          <a href="https://unity.com/" className="m-auto">
            <img src={Unity} alt="Blender logo" width="900" height="900"></img>
          </a>
        </div>
        <div className="rightInfo container">
          <h2 className="subtitle">Trouble Shooting</h2>
          <p className="pb-2">Click below for detailed info</p>
          <Link to="trouble" className="text-s">
            <button className="bg-yellow-500 shadow-lg shadow-yellow-500/50 rounded p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 hover:shadow-indigo-500/50 duration-300">
              {" "}
              <span className="font-black italic">
                ~Extended Trouble Shooting Info~
              </span>
            </button>
          </Link>
          <div className="pb-10" />
          <div className="p-3">
            <img src={caution} alt="Unity Tips" className="m-auto"></img>
          </div>
          <div className="pb-5 bg-yellow-500 rounded outline outline-offset-1 outline-3 outline-neutral-900" />
          <p className="text-justify pt-2 text-shadow-warn">
            This is a source for problems I have run into in the past and maybe
            you are having trouble with now.
          </p>
          <br></br>
          <p className="text-center text-shadow-warn">
            I hope that whatever error you're having can be solved here!
          </p>
        </div>
      </div>
    </>
  );
}
