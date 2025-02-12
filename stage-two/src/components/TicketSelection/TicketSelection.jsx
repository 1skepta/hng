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
    </div>
  );
}

export default TicketSelection;
