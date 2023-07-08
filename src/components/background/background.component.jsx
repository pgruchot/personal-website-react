import React from "react";
import "./background.style.scss";
import Animation from "../animation/animation.component";
function Background() {
  return (
    <>
      <Animation />
      <div className="animation-cover-shadow"></div>
    </>
  );
}

export default Background;
