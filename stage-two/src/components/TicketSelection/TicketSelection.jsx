import React from "react";
import styles from "./TicketSelection.module.css";

function TicketSelection() {
  return (
    <div className={styles.selectTicket}>
      <div>
        <h1>Ticket Selection</h1>
        <h3>Step 1/3</h3>
        <div className={styles.line}>
          <span className={styles.light}>.</span>
          <span className={styles.dark}></span>
        </div>
      </div>
      <div className={styles.techember}>
        <h1>
          <em>T</em>ec<em>h</em>ember Fest "25
        </h1>
        <p>
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </p>
        <h3>🍭 [Event Location]​</h3>
        <h3>March 15, 2025 | 7:00 PM</h3>
      </div>
      <div className={styles.line}>
        <span className={styles.dark}></span>
      </div>
      <div>
        <h2>Select Ticket Type:</h2>
        <div className={styles.ticketType}>
          <div>
            <h1>Free</h1>
            <p>REGULAR ACCESS</p>
            <span>20/52</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketSelection;
