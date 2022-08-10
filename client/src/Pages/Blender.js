import React from "react";

export default function Blender() {
  return (
    <div className="content grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 font-mono">
      <div className="centerInfo container">
        <h2 className="subtitle">Blender Basics!</h2>
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
