import React, { useState, useEffect } from "react";
import data from "../utils/images";
import Authors from "../components/Carousel";
import gumData from "../utils/gumRoadItems";
import Modal from "../components/modal";
import { Helmet } from "react-helmet";

import Comissions from "../components/Comissions";

export default function Home() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  //handles image lightbox
  const [clickedImg, setClickedImg] = useState();
  const [incoming, setIncoming] = useState();

  useEffect(() => {
    setClickedImg(incoming);
  }, [incoming]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ero3D - Home</title>
        <link rel="" href="https://ero3dvrc.onrender.com/home" />
      </Helmet>
      <div className="content grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 font-mono">
        <div className="leftInfo container">
          <h2 className="subtitle">List of Future/To come projects</h2>
          <p>Current list of Commisions:</p>
          <p>
            <span className="italic font-bold text-purple-600">PJBomb2</span> -
            <span className=" font-bold text-green-400"> Complete!</span>
          </p>
          <p>
            <span className="italic font-bold text-indigo-400">Paus</span> -
            <span className=" font-bold text-green-400"> Complete!</span>
          </p>
          <p>
            <span className="italic font-bold text-green-400">SilentWhisp</span>{" "}
            -<span className=" font-bold text-green-400"> Complete!</span>
          </p>
          <p>
            <span className="italic font-bold text-orange-400">DawnStar</span> -
            <span className=" font-bold text-yellow-400"> In Progress!</span>
          </p>
          <p>
            <span className="italic font-bold text-pink-600">
              AtlasTheDrunk
            </span>{" "}
            -<span className=" font-bold text-slate-400"> In Que</span>
          </p>
          <p>
            <span className="italic font-bold text-pink-400">Foxy</span> -
            <span className=" font-bold text-slate-400"> In Que</span>
          </p>
        </div>
        <div className="centerInfo container">
          <h2 className="subtitle">Completed Commisions!</h2>
          <Comissions clickedImg2={setIncoming} />
        </div>
        <div className="rightInfo container">
          <h2 className="subtitle">Items By Me!</h2>
          <p>
            Contact me directly for a{" "}
            <span className="text-purple-500 font-bold underline">
              discount
            </span>{" "}
            on price!
          </p>
          <br />
          <Authors data={gumData} />
        </div>
        {clickedImg && (
          <Modal
            clickedImg={incoming}
            setClickedImg={setClickedImg}
            setincoming={setIncoming}
          />
        )}
      </div>
    </>
  );
}
