import React from "react";
import { createContext, useState } from "react";

export const PageContext = createContext();

export default function PageContextProvider(props) {
  const [page, setPage] = useState("Home");
  const [color, setColor] = useState("#5de8e5");
  return (
    <PageContext.Provider
      value={{
        page,
        setPage: (newPage) => {
          setPage(newPage);
        },
        color,
        setColor: (newColor) => {
          setColor(newColor);
        },
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
}
