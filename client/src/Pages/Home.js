import React, { useState, useEffect } from "react";
import data from "../utils/commList";
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
          {/* maps out the data list of comms, checking if they are complete, in progress, or in que */}
          {data.map((comm) => {
            const isDone = (complete) => {
              if (complete === null) {
                return "text-slate-400";
              }
              if (complete) {
                return "text-green-400";
              } else return "text-yellow-400";
            };
            return (
              <>
                <p>
                  <span
                    key={comm.id}
                    className={`italic font-bold ${comm.color}`}
                  >
                    {comm.name}
                  </span>{" "}
                  <span className={`font-bold ${isDone(comm.complete)}`}>
                    {comm.complete !== null ? (
                      <>{comm.complete ? <>Complete!</> : <>In Progress!</>}</>
                    ) : (
                      <>In Queue</>
                    )}
                  </span>
                </p>
              </>
            );
          })}
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
