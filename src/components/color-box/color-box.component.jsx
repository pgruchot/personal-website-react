import React from "react";
import { useContext } from "react";
import { PageContext } from "../../contexts/pageContext/page.context";
import "./color-box.style.scss";
function ColorBox() {
  const colorArray = ["#5de8e5", "#f44d9b", "#e9275b", "#392270"];
  const { color, setColor } = useContext(PageContext);

  return (
    <div className="color-box">
      <div
        className="color-box-select"
        style={{ borderColor: colorArray[0] }}
        onClick={() => setColor(colorArray[0])}
      >
        <div
          className={
            color === colorArray[0]
              ? "color-fill color-fill-active"
              : "color-fill"
          }
          style={{ backgroundColor: colorArray[0] }}
        ></div>
      </div>
      <div
        className="color-box-select"
        style={{ borderColor: colorArray[1] }}
        onClick={() => setColor(colorArray[1])}
      >
        <div
          className={
            color === colorArray[1]
              ? "color-fill color-fill-active"
              : "color-fill"
          }
          style={{ backgroundColor: colorArray[1] }}
        ></div>
      </div>
      <div
        className="color-box-select"
        style={{ borderColor: colorArray[2] }}
        onClick={() => setColor(colorArray[2])}
      >
        <div
          className={
            color === colorArray[2]
              ? "color-fill color-fill-active"
              : "color-fill"
          }
          style={{ backgroundColor: colorArray[2] }}
        ></div>
      </div>
      <div
        className="color-box-select"
        style={{ borderColor: colorArray[3] }}
        onClick={() => setColor(colorArray[3])}
      >
        <div
          className={
            color === colorArray[3]
              ? "color-fill color-fill-active"
              : "color-fill"
          }
          style={{ backgroundColor: colorArray[3] }}
        ></div>
      </div>
    </div>
  );
}

export default ColorBox;
