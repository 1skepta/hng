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
        <div className=" text-4xl text-green-400 text-wrap text-center">Skepa Remember i fixed this. The name is still Mr Pee !!!
           <p className="text-4xl text-teal-500 cursor-pointer hover:text-red-400">Hello Skepta </p>
        </div>
      </header>
    </div>
  );
}

export default AttendeeDetails;
