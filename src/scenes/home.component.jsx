import React from "react";
import Background from "../components/background/background.component";
import Logo from "../components/logo/logo.component";
import Menu from "../components/menu/menu.component";
import Text from "../components/text/text.component";
import Navigation from "../components/navigation/navigation.component";
import ColorBox from "../components/color-box/color-box.component";
function Home() {
  return (
    <>
      <Background />
      <Menu />
      <Logo />
      <Text />
      <Navigation />
      <ColorBox />
    </>
  );
}

export default Home;
