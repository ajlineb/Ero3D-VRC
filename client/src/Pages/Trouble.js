import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Trouble() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ero3D - Tips/Trouble</title>
        <link rel="" href="https://ero3dvrc.onrender.com/tips/trouble" />
      </Helmet>
      <div className="content grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 font-mono">
        <div className="centerInfo container">
          <h2 className="subtitle">Trouble Shooting!</h2>
          <div>
            <Link to="/tips">
              <button className="bg-yellow-500 shadow-lg shadow-yellow-500/50 rounded pl-2 pr-2 pt-1 pb-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 hover:shadow-indigo-500/50 duration-300">
                Back
              </button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-evenly">
            <div className="p-4">
              <h2 className="text-xl p-2 text-purple-500">
                Questions/Errors with Blender
              </h2>
              <p>Useful tips here!</p>
            </div>
            <div className="p-4">
              <h2 className="text-xl p-2 text-teal-500">
                Questions/Errors with Unity
              </h2>
              <p>Useful tips here!</p>
            </div>
            <div className="p-4">
              <h2 className="text-xl p-2 text-cyan-500">
                Questions/Errors with VRChat
              </h2>
              <p>Useful tips here!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
