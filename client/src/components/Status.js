import React, { useState, useEffect } from "react";

export default function Status() {
  const precent = 10;
  return (
    <div className="m-auto pt-2">
      <p className="pb-2 text-center font-black">Current Commission Progress</p>
      <div className="progress-bar text-center text-xs pt-1">
        Commission Complete!
      </div>
    </div>
  );
}
