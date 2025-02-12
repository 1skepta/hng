import React from "react";

function Header() {
  return (
    <div className="text-white flex flex-r" style={{ backgroundColor: "#031e23" }}>
      <div>
        <img src="logo.png" alt="logo" />
      </div>
      <div className="text-white">MY TICKETS &#8594;</div>
    </div>
  );
}

export default Header;
