import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.parent}>
      <div>
        <img src="logo.png" alt="my logo" />
      </div>
      <div className={styles.myticket}>MY TICKETS &#8594;</div>
    </div>
  );
}

export default Header;
