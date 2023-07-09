import React from "react";
import "./global-styles/index.scss";
import Home from "./scenes/home.component";
import PageContextProvider from "./contexts/pageContext/page.context";
function App() {
  return (
    <>
      <PageContextProvider>
        <Home />
      </PageContextProvider>
    </>
  );
}

export default App;
