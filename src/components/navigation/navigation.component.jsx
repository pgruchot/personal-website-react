import React from "react";
import { useContext } from "react";
import { PageContext } from "../../contexts/pageContext/page.context";
import "./navigation.style.scss";
function Navigation() {
  const { page, setPage, color } = useContext(PageContext);
  return (
    <div className="navigation">
      <a
        href="#"
        className={page === "Home" ? "navigation-link-active" : ""}
        style={
          page === "Home"
            ? {
                backgroundColor: color,
                boxShadow: `0px 0px 15px 1px ${color}`,
              }
            : {}
        }
        onClick={() => setPage("Home")}
      ></a>
      <a
        href="#"
        className={page === "About" ? "navigation-link-active" : ""}
        style={
          page === "About"
            ? {
                backgroundColor: color,
                boxShadow: `0px 0px 15px 1px ${color}`,
              }
            : {}
        }
        onClick={() => setPage("About")}
      ></a>
      <a
        href="#"
        className={page === "Contact" ? "navigation-link-active" : ""}
        style={
          page === "Contact"
            ? {
                backgroundColor: color,
                boxShadow: `0px 0px 15px 1px ${color}`,
              }
            : {}
        }
        onClick={() => setPage("Contact")}
      ></a>
    </div>
  );
}

export default Navigation;
