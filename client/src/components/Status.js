import React, { useState, useEffect } from "react";

export default function Status() {
  const precent = 10; //was going to be used for the status
  //when updating the completion info use "0 of 20 complete" or "Commission complete!"
  return (
    <div className="m-auto pt-2">
      <p className="pb-2 text-center font-black">Current Commission Progress</p>
      <div className="progress-bar text-center text-xs pt-1">
        COMPLETE!{/* 18 of 20 complete  */}
      </div>
    </div>
  );
}
