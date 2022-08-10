import React from "react";
import { Link } from "react-router-dom";

export default function Blender() {
  return (
    <div className="content grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 font-mono">
      <div className="centerInfo container">
        <h2 className="subtitle">Blender Basics!</h2>
        <div>
          <Link to="/tips">
            <button className="bg-orange-500 shadow-lg shadow-orange-500/50 rounded pl-2 pr-2 pt-1 pb-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 hover:shadow-indigo-500/50 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-evenly">
          <div className="p-4">
            <h2 className="text-xl p-2 text-purple-500">Tips For Sculpting</h2>
            <p>Useful tips here!</p>
          </div>
          <div className="p-4">
            <h2 className="text-xl p-2 text-teal-500">Tips For UV Mapping</h2>
            <p>Useful tips here!</p>
          </div>
          <div className="p-4">
            <h2 className="text-xl p-2 text-cyan-500">Tips For Parenting</h2>
            <p>Useful tips here!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
