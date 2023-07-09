import React from "react";
import { useState, useContext } from "react";
import { PageContext } from "../../contexts/pageContext/page.context";
import "./text.style.scss";
function Text() {
  const { page, color } = useContext(PageContext);
  const coloredSpan = (text, isLink) => {
    return !isLink ? (
      <span style={{ color: color }}>{text}</span>
    ) : (
      <span style={{ color: color }}>
        <a
          href="https://github.com/pgruchot"
          style={{
            color: color,
            borderColor: color,
            borderStyle: "solid",
            borderWidth: "2px",
          }}
        >
          {text}
        </a>
      </span>
    );
  };
  const setText = () => {
    switch (page) {
      case "Home":
        return (
          <div className="text-container">
            <h1 className="text-h1-upper">Hey!</h1>
            <h1 className="text-h1-lower">
              i'm {coloredSpan("patryk", false)}.
            </h1>
          </div>
        );
      case "About":
        return (
          <div className="text-container">
            <p>
              i'm a recent graduate IT engineer from{" "}
              {coloredSpan("Opole", false)}. My specialty is{" "}
              {coloredSpan("web development", false)}, *mostly* done with
              {coloredSpan(" JavaScript", false)} based technologies.
              <span className="text-animate" style={{ color: color }}>
                |
              </span>
            </p>
          </div>
        );
      case "Contact":
        return (
          <div className="text-container">
            <p>
              contact me @: <br />
              {coloredSpan("patryk.gruchot@outlook.com")}
              <br />
              Check my personal projects @:
              <br />
              {coloredSpan("github", true)}
            </p>
          </div>
        );
      default:
        return (
          <div className="text-container text1 active">
            <h1 className="text-h1 text1-h1-1">Hey!</h1>
            <h1 className="text-h1 text1-h1-2">
              i'm <span>patryk</span>.
            </h1>
          </div>
        );
    }
  };
  return <>{setText()}</>;
}

export default Text;
