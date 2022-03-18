import React from "react";
import data from "../utils/basemodels";
import Authors from "../components/Carousel";

export default function Collections() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  //this function maps out each image in the collage within the avatar data
  function mapping(d) {
    //the double return statement.... pain
    return d.map((pic) => {
      return (
        <div className="p-1">
          <img
            className="w-40 h-35 mx-auto rounded-t-md"
            src={pic.src}
            alt={pic.alt}
          ></img>
          <p className="text-xs font-semibold bg-gray-800 mx-auto  xl:w-40 h-35 rounded-b-md text-break overflow-hidden">
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
                    <h1 className="text-teal-300 font-semibold">{d.name}</h1>
                    <br></br>
                    <p>
                      <span className="text-indigo-600 font-semibold">
                        Modifications:
                      </span>{" "}
                      <br></br>
                      <span className="text-xs font-semibold text-justify">
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
        <p>
          Explain on what prices can be expected based on the type of work being
          done
        </p>
        <br />
        <div className="flex justify-center">
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
                  $15.00
                </td>
              </tr>
              <tr>
                <td className="border border-slate-500 bg-indigo-300 p-2">
                  Avatar Physical Changes
                </td>
                <td class="border border-slate-500 bg-indigo-800 p-1">
                  $20.00
                </td>
              </tr>
              <tr>
                <td className="border border-slate-500 bg-indigo-300 p-2">
                  Blend Shapes/Shape keys
                </td>
                <td className="border border-slate-500 bg-indigo-800 p-1">
                  $20.00
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
                  $15.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
