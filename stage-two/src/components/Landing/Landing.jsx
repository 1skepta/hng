import React from "react";
import Header from "../Header/Header";
import styles from "./Landing.module.css";
import TicketSelection from "../TicketSelection/TicketSelection";
import AttendeeDetails from "../AttendeeDetails/AttendeeDetails";

function Landing() {
  return (
    <div className={styles.back}>
      <Header />
      {/* <TicketSelection /> */}
      <AttendeeDetails />
    </div>
  );
}

export default Landing;
