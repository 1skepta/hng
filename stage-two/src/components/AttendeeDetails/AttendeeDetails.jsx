import React from "react";
import styles from "./AttendeeDetails.module.css";

function AttendeeDetails() {
  return (
    <div className={styles.attendeedetails}>
      <header>
        <div className={styles.flex}>
          <h1>Attendee Details</h1>
          <h3>Step 2/3</h3>
        </div>

        <div className={styles.line}>
          <span className={styles.light}>.</span>
          <span className={styles.dark}></span>
        </div>
      </header>
    </div>
  );
}

export default AttendeeDetails;
