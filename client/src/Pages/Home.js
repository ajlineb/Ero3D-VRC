import React, { useState } from "react";
import data from "../utils/images";
import Authors from "../components/Carousel";
import gumData from "../utils/gumRoadItems";
import Modal from "../components/modal";

export default function Home() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  //handles image lightbox
  const [clickedImg, setClickedImg] = useState(null);

  const handleClick = (pic, index) => {
    setClickedImg(pic.src);
  };

  return (
    <div className="content grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 font-mono">
      <div className="leftInfo container">
        <h2 className="subtitle">List of Future/To come projects</h2>
        <p>Current list of Commisions:</p>
        <p>
          <span className="italic font-bold text-indigo-400">Paus</span> -
          <span className=" font-bold text-green-400"> Complete!</span>
        </p>
        <p>
          <span className="italic font-bold text-blue-400">DawnStar</span> -
          <span className=" font-bold text-yellow-400"> In Progress!</span>
        </p>
        <p>
          <span className="italic font-bold text-pink-600">Foxy</span> -
          <span className=" font-bold text-slate-400"> In Que</span>
        </p>
        <p>
          <span className="italic font-bold text-green-400">SilentWhisp</span> -
          <span className=" font-bold text-slate-400"> In Que</span>
        </p>
      </div>
      <div className="centerInfo container">
        <h2 className="subtitle">Completed Commisions!</h2>
        <div className="flex flex-wrap items-stretch ">
          {data.map((d, index) => {
            return (
              <div
                key={index}
                id={d.id}
                className="basis-1/2 ml-auto mr-auto mt-1 mb-1"
              >
                <h2 className="">{d.name}</h2>
                <picture>
                  <source srcSet={d.src} type="image/webp"></source>
                  <source srcSet={d.src2} type="image/webp"></source>
                  <img
                    className="pointer"
                    src={d.src2}
                    alt={d.alt}
                    onClick={() => handleClick(d, index)}
                  ></img>
                </picture>
                <p>{d.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="rightInfo container">
        <h2 className="subtitle">Items By Me!</h2>
        <p>
          Contact me directly for a{" "}
          <span className="text-purple-500 font-bold underline">discount</span>{" "}
          on price!
        </p>
        <br />
        <Authors data={gumData} />
      </div>
      {clickedImg && (
        <Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />
      )}
    </div>
  );
}
