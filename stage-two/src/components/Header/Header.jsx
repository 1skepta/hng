import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.parent}>
      <div>
        <img src="logo.png" alt="my logo" />
      </div>
      <ul className={styles.actionbar}>
        <li>Events</li> <li>My Tickets</li> <li>About Project</li>
      </ul>
      <div className={styles.myticket}>MY TICKETS &#8594;</div>
    </div>
  );
}

export default Header;
