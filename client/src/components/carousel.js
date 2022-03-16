//carousel used for showcasing basemodels images
import React, { useState, useEffect } from "react";
import data from "../utils/avatar_authors";

export default function Carousel() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  //used for searching through the images of the authors base model
  let gallery = [];
  let alt = [];
  const images = (index) => {
    gallery = [];
    return data[index].images.map((pic) => {
      return gallery.push(pic.src);
    });
  };
  console.log(data.length);

  const getList = () => {
    for (let i = 0; i < data.length; i++) {
      images(i);
    }
  };
  getList();

  //   //will be used for switching each image in the carousel
  //   const [currentImage, setCurrentImage] = useState(0);

  //   //does the actual scrolling of the image to next/previous image This is the switch.
  //   const scrollToImage = (i) => {
  //     setCurrentImage(i);
  //     gallery[i].current.scrollToImage({
  //       behaviour: "smooth",
  //       block: "nearest",
  //       inline: "start",
  //     });
  //   };

  //   //determins the length of the gallery
  //   const totalImages = gallery.length;

  //   //takes user to next image
  //   const nextImage = () => {
  //     if (currentImage >= totalImages - 1) {
  //       scrollToImage(0);
  //     } else {
  //       scrollToImage(currentImage + 1);
  //     }
  //   };

  //   //takes user to last image
  //   const previousImage = () => {
  //     if (currentImage === 0) {
  //       scrollToImage(totalImages - 1);
  //     } else {
  //       scrollToImage(currentImage - 1);
  //     }
  //   };

  //   //styling for the arrows
  //   const arrowStyle =
  //     "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  //   // sets up the clickable buttons for left and right
  //   const sliderControl = (isLeft) => {
  //     <button
  //       type="button"
  //       onClick={isLeft ? previousImage : nextImage}
  //       className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
  //       style={{ top: "40%" }}
  //     >
  //       <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
  //         {isLeft ? "◀" : "▶"}
  //       </span>
  //     </button>;
  //   };

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img src={gallery[0]} className="block w-full" alt="..." />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img src={gallery[1]} className="block w-full" alt="..." />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img src={gallery[2]} className="block w-full" alt="..." />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
