import React, { useEffect, useState } from "react";
import data2 from "../utils/completedCommissions";
import data from "../utils/images";

export default function Comissions(props) {
  //handles image lightbox
  //const [clickedImg, setClickedImg] = useState(null);  LOOK IM LEAVING THIS HEAR SO YOU LEARN FROM YOUR MISTAKE.
  //                                                     DONT USE A USESTATE IF YOU DONT NEED TO, THATS JUST GOING TO
  //                                                     CAUSE PROBLEMS

  const handleClick = (pic, index) => {
    // setClickedImg(pic.src);                           SAME HERE
    props.clickedImg2(pic.src);
  };

  return (
    <>
      {data2.map((d) => {
        return d.images.map((image) => {
          return (
            <div
              key={image.id}
              id={image.id}
              className="basis-1/2 ml-auto mr-auto mt-1 mb-1 pl-1 pr-1 "
            >
              <h2 className={`pb-2 text-lg ${image.color} font-black`}>
                {image.name}
              </h2>
              <picture>
                <source srcSet={image.src} type="image/webp"></source>
                <source srcSet={image.src2} type="image/webp"></source>
                <img
                  className={`pointer object-cover h-72 w-96 rounded-lg shadow-xl ${image.shadow}`}
                  src={image.src2}
                  alt={image.alt}
                  onClick={() => handleClick(image, image.id)}
                ></img>
              </picture>
              <p className="pt-2 text-sm">{image.description}</p>
            </div>
          );
        });
      })}
    </>
  );
}
