import React from "react";
import { useEffect, useRef } from "react";
import "./menu-cover.style.scss";
function MenuCover({ isMenuOpen }) {
  const tilesRef = useRef();
  useEffect(() => {
    if (isMenuOpen) {
      console.log(tilesRef.current.children[0].classList);
      for (let i = 0; i < tilesRef.current.children.length; i++) {
        setTimeout(
          () =>
            tilesRef.current.children[i].classList.toggle(
              "menu-cover-tiles-disabled"
            ),
          i * 200
        );
      }
    } else {
      for (let i = tilesRef.current.children.length - 1; i >= 0; i--) {
        setTimeout(
          () =>
            tilesRef.current.children[i].classList.toggle(
              "menu-cover-tiles-disabled"
            ),
          i * 200
        );
      }
    }
  }, [isMenuOpen]);
  return (
    <div className="menu-cover-tiles" ref={tilesRef}>
      <div className="menu-cover-tile"></div>
      <div className="menu-cover-tile"></div>
      <div className="menu-cover-tile"></div>
      <div className="menu-cover-tile"></div>
      <div className="menu-cover-tile"></div>
    </div>
  );
}

export default MenuCover;
