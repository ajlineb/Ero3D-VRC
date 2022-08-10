import React, { useState } from "react";
import data from "../utils/basemodels";
import Authors from "../components/Carousel";
import Modal from "../components/modal";

export default function Collections() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (pic, index) => {
    setCurrentIndex(index);
    setClickedImg(pic.src);
  };

  const handleRotationRight = () => {
    console.log("clicked!");
    const totalLength = data.data.length;
    if (currentIndex + 1 > totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexof(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  //this function maps out each image in the collage within the avatar data
  function mapping(d) {
    //the double return statement.... pain
    return d.map((pic, index) => {
      return (
        <div key={index} className="p-1">
          <picture>
            <source srcSet={pic.src} type="image/webp"></source>
            <source srcSet={pic.src2} type="image/webp"></source>
            <img
              className="w-full rounded-t-md pointer"
              src={pic.src2}
              alt={pic.alt}
              onClick={() => handleClick(pic, index)}
            ></img>
          </picture>
          <p className="text-xs font-semibold bg-gray-800 mx-auto  w-full rounded-b-md text-break overflow-hidden">
            {pic.title}
          </p>
        </div>
      );
    });
  }

  return (
    <div className="content grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 font-mono">
      <div className="leftInfo container">
        <h2 className="subtitle">List of my Avatars</h2>
        <div>
          {/* for displaying each avatar, its images, and text about them */}
          {data.map((d) => {
            return (
              <div className="py-5">
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-2 pb-5">
                  <div>
                    <img
                      className="rounded-md shadow-lg shadow-cyan-500/50"
                      src={d.thumbnailImageUrl}
                      alt={d.alt}
                    ></img>
                  </div>
                  <div>
                    <h1 className="text-teal-300 font-semibold text-break overflow-hidden">
                      {d.name}
                    </h1>
                    <br></br>
                    <p>
                      <span className="text-indigo-600 font-semibold">
                        Modifications:
                      </span>{" "}
                      <br></br>
                      <span className="text-xs font-semibold">
                        {d.modifications}
                      </span>
                    </p>
                    <br></br>
                    <p>
                      {" "}
                      <span className="text-cyan-500 font-semibold">
                        Base Used:{" "}
                      </span>
                      <span font-semibold>{d.baseUsed}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-pink-300 font-semibold">Collage </span>
                  <span className="grid grid-cols-3 bg-indigo-900 items-center rounded-md shadow-lg shadow-indigo-500/50 p-1">
                    {/* This is where the collage gets outputted */}
                    {mapping(d.collage)}{" "}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="centerInfo container">
        <h2 className="subtitle">Base Models Used</h2>
        <Authors />
      </div>
      <div className="rightInfo container">
        <h2 className="subtitle">Pricing</h2>
        <br />
        <div className="flex flex-col justify-evenly">
          <table className="border-collapse border border-slate-500 table-auto ">
            <thead>
              <tr>
                <th className="border border-slate-500 bg-indigo-500 p-1">
                  Comission Type
                </th>
                <th className="border border-slate-500 bg-indigo-900 p-2">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-500 bg-indigo-300 p-2">
                  Texture Work
                </td>
                <td className="border border-slate-500 bg-indigo-800 p-1">
                  $20.00+
                </td>
              </tr>
              <tr>
                <td className="border border-slate-500 bg-indigo-300 p-2">
                  Avatar Physical Changes
                </td>
                <td class="border border-slate-500 bg-indigo-800 p-1">
                  $30.00
                </td>
              </tr>
              <tr>
                <td className="border border-slate-500 bg-indigo-300 p-2">
                  Blend Shapes/Shape keys
                </td>
                <td className="border border-slate-500 bg-indigo-800 p-1">
                  $20.00+
                </td>
              </tr>
              <tr>
                <td className="border border-slate-500 bg-indigo-300 p-2">
                  EroChi Base
                </td>
                <td className="border border-slate-500 bg-indigo-800 p-1">
                  $55.00
                </td>
              </tr>
              <tr>
                <td className="border border-slate-500 bg-indigo-300 p-2">
                  Custom Hair
                </td>
                <td className="border border-slate-500 bg-indigo-800 p-1">
                  $35.00+
                </td>
              </tr>
              <tr>
                <td className="border border-slate-500 bg-indigo-300 p-2">
                  Custom Clothing/Accessories
                </td>
                <td className="border border-slate-500 bg-indigo-800 p-1">
                  $25.00+
                </td>
              </tr>
            </tbody>
          </table>

          <br className="m-5" />
          <p className="text-justify">
            <span className="font-black works-info">Texture Work: </span>
            Full body textures, hair, eyes, clothing etc. Can also make AO
            textures.
          </p>
          <br className="m-5" />
          <p className="text-justify">
            <span className="font-black works-info">
              Avatar Physical Changes:{" "}
            </span>
            From sculpting body parts, to resizing, to adding all covered here!
          </p>
          <br className="m-5" />
          <p className="text-justify">
            <span className="font-black works-info">
              Blend Shapes/Shape keys:{" "}
            </span>
            Want to make parts of the avatar change? Big ears to small ears,
            breasts to no breasts, thiccness to smol all covered here.
          </p>
          <br className="m-5" />
          <p className="text-justify">
            <span className="font-black works-info">EroChi Base: </span>
            Want the EroChi model? Will include clothing, shapekeys for toggling
            breasts, textures included and AO, and Unity project for easy start
            with animations.
          </p>
          <br className="m-5" />
          <p className="text-justify">
            <span className="font-black works-info">Custom Hair: </span>
            Able to make hair from scratch, add bones and weight paint. UVs will
            be setup too for textures.
          </p>
          <br className="m-5" />
          <p className="text-justify ">
            <span className="font-black works-info">
              Custom Clothing/Accessories:{" "}
            </span>
            I can create some simple clothing like shirts, bras, underwear,
            thigh highs, collars, etc.. from scratch to match the description
            you are looking for. This will include UV Mapping, texture works,
            and weight painting. Simple items starting $25, more complex items
            will be more.
          </p>
        </div>
      </div>
      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          handleRotationRight={handleRotationRight}
          setClickedImg={setClickedImg}
          handelRotationLeft={handelRotationLeft}
        />
      )}
    </div>
  );
}
