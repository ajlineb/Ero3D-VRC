import React from "react";
import data from "../utils/images";
import git from "../utils/social_Icons/github.svg";
import linkedin from "../utils/social_Icons/linkedin.svg";
import youtube from "../utils/social_Icons/youtube.svg";

export default function Start() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  return (
    <div className="content grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 font-mono">
      <div className="centerInfo container">
        <h2 className="subtitle">Welcome!</h2>
        <p>Thanks for dropping by!</p> <br />
        <p>
          I hope you will find helpful tips and information around avatar
          creation here. If you would like to get in touch about an avatar idea
          or edits to your current model let me know!
        </p>
      </div>
      <div className=" container">
        <h2 className="subtitle">Contact</h2>
        <br />
        <div className="social ">
          <a href="https://github.com/ajlineb">
            <img src={git} alt="github logo" className="duration-300"></img>
          </a>
          <a href="https://www.linkedin.com/in/anthjlin/">
            <img
              src={linkedin}
              alt="linkedin logo"
              className="duration-300"
            ></img>
          </a>
          <a href="https://www.youtube.com/channel/UCtlk4tTuQpMtjJUR2z_dTUA">
            <img
              src={youtube}
              alt="youtube logo"
              className="duration-300"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
