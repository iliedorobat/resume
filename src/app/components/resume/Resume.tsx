import React from "react";

import Achievements from "./achievements/Achievements";
import About from "./about/About";
import Background from "./background/Background";

function Resume() {
  return (
    <>
      <About />
      <Background />
      <Achievements />
    </>
  );
}

export default Resume;
