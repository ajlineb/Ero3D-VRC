import React from "react";

export default function Twitch(props) {
  return (
    <iframe
      className="stream"
      src={
        "https://player.twitch.tv/?channel=EroForce&parent=ero3dvrc.onrender.com"
      }
      height={props.height}
      width={props.width}
      title="EroForce Twitch"
      allowfullscreen
    ></iframe>
  );
}
