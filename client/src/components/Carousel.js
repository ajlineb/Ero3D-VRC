//carousel used for showcasing basemodels images
import React from "react";
import data from "../utils/avatar_authors";

export default function Carousel() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  const length = data.length;

  const gallery = (l) => {
    l = length;
    return data.map((author, index) => {
      return (
        <div className="pb-10 mb-10 bg-gradient-to-br from-indigo-500 to-teal-500 shadow-lg shadow-indigo-500/50 rounded-md">
          <div>
            <h1 className="text-xl">{author.avatarName}</h1>
            <p className="text-sm">{author.author}</p>
          </div>
          <a href={author.url}>
            <div
              id={`carouselExampleIndicators${index}`}
              class="carousel slide relative space-x-4"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                  type="button"
                  data-bs-target={`#carouselExampleIndicators${index}`}
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target={`#carouselExampleIndicators${index}`}
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target={`#carouselExampleIndicators${index}`}
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active float-left w-full">
                  <img
                    src={author.images[0].src}
                    class="block w-11/12 h-96 m-5 rounded-md"
                    alt="Wild Landscape"
                  />
                </div>
                <div class="carousel-item float-left w-full">
                  <img
                    src={author.images[1].src}
                    class="block w-11/12 h-96 m-5 rounded-md"
                    alt="Camera"
                  />
                </div>
                <div class="carousel-item float-left w-full">
                  <img
                    src={author.images[2].src}
                    class="block w-11/12 h-96 m-5 rounded-md"
                    alt="Exotic Fruits"
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 left-button"
                type="button"
                data-bs-target={`#carouselExampleIndicators${index}`}
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target={`#carouselExampleIndicators${index}`}
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
              <br></br>
            </div>
          </a>

          <div>
            <p className="text-sm px-10">{author.notes}</p>
            <br></br>
            <p className="text-sm font-black italic px-10">
              Pricing: {author.price}
            </p>
          </div>
        </div>
      );
    });
  };
  return <>{gallery()}</>;
}
