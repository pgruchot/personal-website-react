import React from "react";
import { useState, useRef, useEffect, useContext } from "react";
import { PageContext } from "../../contexts/pageContext/page.context";
import MenuCover from "../menu-cover/menu-cover.component";
import MenuButton from "../menu-button/menu-button.component";

import "./menu.style.scss";
function Menu() {
  const menuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuInProgress, setMenuInProgress] = useState(false);
  const { page, setPage, color } = useContext(PageContext);
  useEffect(() => {
    if (isMenuOpen) {
      menuRef.current.classList.remove("disabled");
      for (let i = 0; i < menuRef.current.children.length; i++) {
        setTimeout(() => {
          menuRef.current.children[i].classList.add("menu-link-active");
          if (i === menuRef.current.children.length - 1)
            setMenuInProgress(false);
        }, i * 200);
      }
    } else {
      for (let i = 0; i < menuRef.current.children.length + 1; i++) {
        setTimeout(
          () => {
            if (i < menuRef.current.children.length)
              menuRef.current.children[i].classList.remove("menu-link-active");
            else {
              menuRef.current.classList.add("disabled");
              setMenuInProgress(false);
            }
          },
          i < menuRef.current.children.length ? i * 200 : i * 400 //longer timeout allows the animation to finish
        );
      }
    }
  }, [isMenuOpen]);
  const onClickHandler = (navigateTo) => {
    setPage(navigateTo);
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <MenuCover isMenuOpen={isMenuOpen} />
      <MenuButton
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        menuInProgress={menuInProgress}
        setMenuInProgress={setMenuInProgress}
      />
      <div className="disabled menu-links" ref={menuRef}>
        <a
          href="#"
          className="menu-link"
          style={{ color: color }}
          onClick={() => onClickHandler("Home")}
        >
          Home
        </a>
        <a
          href="#"
          className="menu-link"
          style={{ color: color }}
          onClick={() => onClickHandler("About")}
        >
          About
        </a>
        <a
          href="#"
          className="menu-link"
          style={{ color: color }}
          onClick={() => onClickHandler("Contact")}
        >
          Contact
        </a>
        <a
          href="https://github.com/pgruchot"
          className="menu-link"
          style={{ color: color }}
        >
          github
        </a>
      </div>
    </>
  );
}

export default Menu;
