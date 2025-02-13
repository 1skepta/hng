import React from "react";
import styles from "./TicketReady.module.css";

function TicketReady() {
  return (
    <div className={styles.ticketready}>
      <header>
        <div className={styles.flex}>
          <h1>Ready</h1>
          <h3>Step 3/3</h3>
        </div>
        <div className={styles.line}>
          <span className={styles.light}>.</span>
        </div>
      </header>
      <div className={styles.bookedticket}>
        <h1>Your Ticket is Booked!</h1>
        <p>You can download or Check your email for a copy</p>
      </div>
      <div className={styles.container}>
        <div className={styles.box}></div>
        <div className={styles.border}></div>
      </div>
    </div>
  );
}

export default TicketReady;
