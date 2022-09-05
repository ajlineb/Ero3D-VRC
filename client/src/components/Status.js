import React, { useState, useEffect } from "react";

export default function Status() {
  return (
    <div className="m-auto pt-2">
      <p className="text-center font-black">Current Progress on Comission</p>
      <div className="progress-bar"></div>
    </div>
  );
}
