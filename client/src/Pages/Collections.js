import React from "react";
import data from "../utils/images";

export default function Collections() {
  //for my own mental sanity...
  //grid grid-cols-3 is similar to bootstrap with a row and three columns
  //to add gutters you will need gap-x for the gutter amounts

  return (
    <div className="content grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 font-mono">
      <div className="leftInfo container">
        <h2 className="subtitle">List of my Avatars</h2>
        <p>
          Here I will be placing an avatar I have created, modified, with an
          image and discription of what all I did. Include some struggles and
          accomplishments?
        </p>
        <br />
        <p>
          Name of Avatar:<br></br> Image of Avatar: <br></br>Modifications:
          <br></br>
          Struggles/accomplishments: <br></br>Base Used: ?
        </p>
        <br />
        <p>needs to be .mapped through a json from a fetch or manual list</p>
      </div>
      <div className="centerInfo container">
        <h2 className="subtitle">Base Models Used</h2>
        <p>
          List base model, the creator and an image of that model, include link
          to their website
        </p>
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
                  Work Type
                </th>
                <th className="border border-slate-500 bg-indigo-900 p-2">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-500 bg-indigo-300 p-2">
                  Texture Work
                </td>
                <td class="border border-slate-500 bg-indigo-800 p-1">$0.00</td>
              </tr>
              <tr>
                <td class="border border-slate-500 bg-indigo-300 p-2">
                  Avatar Physical Changes
                </td>
                <td class="border border-slate-500 bg-indigo-800 p-1">$0.00</td>
              </tr>
              <tr>
                <td class="border border-slate-500 bg-indigo-300 p-2">
                  Blend Shapes/Shape keys
                </td>
                <td class="border border-slate-500 bg-indigo-800 p-1">$0.00</td>
              </tr>
              <tr>
                <td class="border border-slate-500 bg-indigo-300 p-2">
                  EroChi Base
                </td>
                <td class="border border-slate-500 bg-indigo-800 p-1">$0.00</td>
              </tr>
              <tr>
                <td class="border border-slate-500 bg-indigo-300 p-2">
                  Custom Hair
                </td>
                <td class="border border-slate-500 bg-indigo-800 p-1">$0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
