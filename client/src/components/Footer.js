import React, { useState, useEffect } from "react";

export default function Footer() {
  const [transparent, setTransParent] = useState(""); //for a scrolling animation for the header container

  //checks window if scrolled down for nav bar
  function handleScroll() {
    console.log(document.body.scrollHeight);
    let posY = window.scrollY + window.innerHeight;

    if (posY >= document.body.clientHeight) {
      setTransParent("footer-appear");
    } else {
      setTransParent("");
    }
  }
  //used to create a listener on scroll
  useEffect(() => {
    window.addEventListener("click", handleScroll);
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
        <p className="closing">© 2022 </p>
      </div>
    </div>
  );
}
