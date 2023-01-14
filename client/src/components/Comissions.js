import React, { useEffect, useState } from "react";
import data2 from "../utils/completedCommissions";

export default function Comissions(props) {
  //const [clickedImg, setClickedImg] = useState(null);  LOOK IM LEAVING THIS HEAR SO YOU LEARN FROM YOUR MISTAKE.
  //                                                     DONT USE A USESTATE IF YOU DONT NEED TO, THATS JUST GOING TO
  //                                                     CAUSE PROBLEMS

  const [currentCommission, SetCurrentCommission] = useState(0);

  //this handles wich image is clicked on
  const handleClick = (pic, index) => {
    props.clickedImg2(pic.src);
    props.clickedImg2Shadow(pic.shadow); //sends the shadow color of the image clicked
  };

  //these handle the left and right click buttons
  const handleComClickLeft = () => {
    //console.log("left!");
    if (currentCommission !== 0) SetCurrentCommission(currentCommission - 1);
    else SetCurrentCommission(data2.length - 1);
  };

  const handleComClickRight = () => {
    //.log("right!");
    if (currentCommission !== data2.length - 1)
      SetCurrentCommission(currentCommission + 1);
    else SetCurrentCommission(0);
  };

  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        <button
          onClick={handleComClickLeft}
          className="bg-teal-500 rounded px-3 hover:bg-indigo-500 font-bold text-xl hover:scale-105 duration-300"
        >{`<`}</button>
        <button
          onClick={handleComClickRight}
          className="bg-teal-500 rounded px-3 hover:bg-indigo-500 font-bold text-xl hover:scale-105 duration-300"
        >{`>`}</button>
      </div>
      <h2
        className={`pb-2 text-lg ${data2[currentCommission].images[0].color} font-black`}
      >
        {data2[currentCommission].name}
      </h2>
      <div className="flex flex-wrap items-stretch grow">
        {data2[currentCommission].images.map((image) => {
          return (
            <div
              key={image.id}
              id={image.id}
              className="basis-1/2 ml-auto mr-auto mt-1 mb-1 pl-1 pr-1 "
            >
              <picture>
                <source srcSet={image.src} type="image/webp"></source>
                <source srcSet={image.src2} type="image/webp"></source>
                <img
                  className={`pointer object-cover h-72 w-96 rounded-lg shadow-xl ${image.shadow} hover:scale-105 duration-300`}
                  src={image.src2}
                  alt={image.alt}
                  onClick={() => handleClick(image, image.id)}
                ></img>
              </picture>
              <p className="pt-2 text-sm font-bold">{image.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
