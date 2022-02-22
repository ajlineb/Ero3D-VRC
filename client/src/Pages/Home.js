import React from "react";

export default function Home() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts
  return (
    <div className="content grid grid-cols-3 font-mono">
      <div className="leftInfo container">
        <h2 className="subtitle">List of Future/To come projects</h2>
        <p>
          Here I will be placing future projects that I am working on for users
          that want a time frame on when they can start asking for commisions.
        </p>
      </div>
      <div className="centerInfo container">
        <h2 className="subtitle">Collage of Images</h2>
      </div>
      <div className="rightInfo container">
        <h2 className="subtitle">Resources</h2>
      </div>
    </div>
  );
}
