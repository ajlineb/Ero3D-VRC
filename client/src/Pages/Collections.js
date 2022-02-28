import React from "react";
import data from "../utils/images";

export default function Collections() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  return (
    <div className="content grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 font-mono">
      <div className="leftInfo container">
        <h2 className="subtitle">List of my Avatars</h2>
        <p>
          Here I will be placing an avatar I have created, modified, with an
          image and discription of what all I did. Include some struggles and
          accomplishments?
        </p>
        <p>
          Name of Avatar:<br></br> Image of Avatar: <br></br>Modifications:
          <br></br>
          Struggles/accomplishments: <br></br>Base Used: ?
        </p>
      </div>
      <div className="centerInfo container">
        <h2 className="subtitle">Base Models Used</h2>
        <p>
          List base model, the creator and an image of that model, include link
          to their website
        </p>
      </div>
      <div className="rightInfo container">
        <h2 className="subtitle">Pricing</h2>
        <p>
          Explain on what prices can be expected based on the type of work being
          done
        </p>
      </div>
    </div>
  );
}
