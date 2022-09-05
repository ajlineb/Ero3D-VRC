import React, { useState, useEffect } from "react";

export default function Status() {
  const precent = 10;
  return (
    <div className="m-auto pt-2">
      <p className="pb-2 text-center font-black">
        Current Progress on Comission
      </p>
      <div className="progress-bar text-center text-xs pt-1">
        18 of 20 parts complete
      </div>
    </div>
  );
}
