import React from "react";
import Header from "../Header/Header";
import styles from "./Landing.module.css";
import TicketSelection from "../TicketSelection/TicketSelection";

function Landing() {
  return (
    <div className={styles.back}>
      <Header />
      <TicketSelection />
    </div>
  );
}

export default Landing;
