import React from "react";
import Header from "./Header";
import ChatBox from "./ChatBox";
import OutputDisplay from "./OutputDisplay";

function Landing() {
  return (
    <div className="p-5">
      <Header />
      <OutputDisplay />
      <ChatBox />
    </div>
  );
}

export default Landing;
