import React from "react";
import { useContext } from "react";
import { PageContext } from "../../contexts/pageContext/page.context";
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
