import React from "react";
import data from "../utils/images";

export default function Home() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  return (
    <div className="content grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 font-mono">
      <div className="leftInfo container">
        <h2 className="subtitle">List of Future/To come projects</h2>
        <p>
          Here I will be placing future projects that I am working on for users
          that want a time frame on when they can start asking for commisions.
        </p>
        <p>
          Here I will be placing future projects that I am working on for users
          that want a time frame on when they can start asking for commisions.
        </p>
        <p>
          Here I will be placing future projects that I am working on for users
          that want a time frame on when they can start asking for commisions.
        </p>
      </div>
      <div className="centerInfo container">
        <h2 className="subtitle">Collage of Images</h2>
        {data.map((d) => {
          return (
            <div id={d.id} className="collage">
              <h4>{d.name}</h4>
              <img src={d.src} alt={d.alt}></img>
              <p>{d.description}</p>
            </div>
          );
        })}
      </div>
      <div className="rightInfo container">
        <h2 className="subtitle">Resources</h2>
        <p>
          These resources may very from just the tools I use to work on models
          to websites and friends that help!
        </p>
        <p>Might be helpful to make these a data type too...</p>
      </div>
    </div>
  );
}
