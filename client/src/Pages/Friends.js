import React from "react";
//import Vrchat from "../utils/apiLogin";
import data from "../utils/friendsList";
import image from "../images/ProfilePic_Bunz.gif";

export default function Friends() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  const mapping = () => {
    return data.map((d, id) => {
      let bg = "bg-slate-700";
      let shadow = "shadow-indigo-500/80";
      if (id % 2 === 1 || !id === 0) {
        bg = "bg-slate-800";
        shadow = "shadow-cyan-500/50";
      }
      return (
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-0 lg:gap-0 pb-10 ">
          <div
            className={`rounded-l-md p-3 flex justify-center items-center ${bg}`}
          >
            <img
              className={`rounded-md shadow-lg object-fill h-48 w-96 ${shadow}`}
              src={d.thumbnail}
              alt={d.thumbnail}
            ></img>
          </div>
          <div className={`rounded-r-md pl-4 pr-4 pb-4 ${bg}`}>
            <h1>{d.name}</h1>
            <br />
            <p className="text-xs font-semibold text-justify">{d.bio}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="content grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 font-mono">
      <div className="leftInfo container">
        <h2 className="subtitle">
          Helpful Friends on VRC for Avatar Development
        </h2>
        <p>helpful user *Name*</p>
      </div>
      <div className="centerInfo container">
        <h2 className="subtitle">Awesome Friends!</h2>
        {mapping()}
      </div>
      <div className="rightInfo container">
        <h2 className="subtitle">Are you a friend yet?</h2>
        <p className="font-black">Lets get to know each other!</p>
        <p className="text-xs font-semibold italic text-indigo-500">
          (Send me a DM if you are already a friend and want to be on here!)
        </p>
        <br />
        <div className="rounded-md overflow-hidden flex justify-center items-center pb-7">
          <img
            className="object-fill h-56 w-80 rounded shadow-lg shadow-violet-400/50"
            src={image}
            alt="Ero's Avatar"
          ></img>
        </div>
        <p className="text-justify">
          Hello! My name is EroForce but most of my friends just call me Ero. I
          enjoy working with furry avatars and have been for three years now!
        </p>
        <br />
        <p className="text-justify">
          I have done a lot of sculpting of avatar features, creating
          blendshapes, body part switches, hair creation that is fully rigged,
          and much more!
        </p>
        <br />
        <p className="text-justify">
          As a side note I even develop websites from frontend to backend server
          development. If you would like to hangout and chat in VRChat just send
          a DM to EroForce on Discord!
        </p>
      </div>
    </div>
  );
}
