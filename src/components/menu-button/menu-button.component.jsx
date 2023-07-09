import React from "react";
import { useState } from "react";
import "./menu-button.style.scss";
function MenuButton({
  isMenuOpen,
  setIsMenuOpen,
  menuInProgress,
  setMenuInProgress,
}) {
  const onClickHandler = () => {
    if (menuInProgress) return;
    setMenuInProgress(true);
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="menu-button-container" onClick={onClickHandler}>
      <div className="menu-button">
        <div
          className={
            isMenuOpen
              ? "menu-button-line menu-button-line1"
              : "menu-button-line"
          }
        ></div>
        <div
          className={
            isMenuOpen
              ? "menu-button-line menu-button-line2"
              : "menu-button-line"
          }
        ></div>
        <div
          className={
            isMenuOpen
              ? "menu-button-line menu-button-line3"
              : "menu-button-line"
          }
        ></div>
      </div>
    </div>
  );
}

export default MenuButton;
