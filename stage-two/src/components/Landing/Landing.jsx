import React from "react";
import Header from "../Header/Header";
import styles from "./Landing.module.css";
import TicketSelection from "../TicketSelection/TicketSelection";
import AttendeeDetails from "../AttendeeDetails/AttendeeDetails";
import TicketReady from "../TicketReady/TicketReady";

function Landing() {
  return (
    <div className={styles.back}>
      <Header />
      {/* <TicketSelection /> */}
      <AttendeeDetails />
      {/* <TicketReady /> */}
    </div>
  );
}

export default Landing;
