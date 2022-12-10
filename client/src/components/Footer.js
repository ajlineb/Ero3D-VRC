import React, { useState, useEffect } from "react";

export default function Footer() {
  const [transparent, setTransParent] = useState(""); //for a scrolling animation for the header container

  //checks window if scrolled down for nav bar
  function handleScroll() {
    let posY = window.scrollY + window.innerHeight;

    if (posY >= document.body.clientHeight) {
      setTransParent("footer-appear");
    } else {
      setTransParent("");
    }
  }
  //used to create a listener on scroll
  useEffect(() => {
    window.addEventListener("click", handleScroll); //changed to click so that upon changing a page it will refresh the posY //may need to change this if other pages become larger with a need for scroll
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className={`footer ${transparent}`}>
      <div>
        <p className="closing">
          Created By "EroForce" with ❤️{" "}
          <a href="https://github.com/ajlineb/ero3d-vrc">
            {" "}
            <span className="source-code">Source Code</span>
          </a>
        </p>
        <p className="closing">
          © 2022 <br></br>
          <span className="text-xs italic text-slate-400">
            Last Updated: 12/9/2022 10:35 pm EST
          </span>
        </p>
      </div>
    </div>
  );
}
