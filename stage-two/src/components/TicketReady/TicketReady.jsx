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
      <div className={styles.ticketcontainer}>
        <div className={styles.ticketbox}>
          <div className={styles.techember}>
            <h1>
              <em>T</em>ec<em>h</em>ember Fest ''25
            </h1>
            <h3>🍭04 Rumens road, Ikoy, Lagos</h3>
            <h3>📅March 15, 2025 | 7:00 PM</h3>
            <img src="" alt="" />
            <div className={styles.details}>
              <div className={styles.big}>
                <div className={styles.small}>
                  <span>Enter your name</span>
                  <h4>Avi Chukwu</h4>
                </div>
                <div className={styles.smalll}>
                  <span>Enter your email *</span> <h4>User@gmail.com</h4>
                </div>
              </div>
              <div className={styles.big}>
                <div className={styles.small}>
                  <span>Ticket Type: </span> <h4>VVIP</h4>
                </div>
                <div className={styles.smalll}>
                  <span>Ticket for : </span> <h4>1</h4>
                </div>
              </div>
              <div
                className={styles.big}
                style={{
                  borderBottom: "1px solid #08343c",
                  flexDirection: "column",
                  padding: "5px 0",
                }}
              >
                <span>Special Request ? </span>
                <h4>
                  Nil ? Or the users sad story they write in there gets this
                  whole space, Max of three rows
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hack}>
        <img src="/well.PNG" alt="qr code" />
      </div>
      <footer className={styles.nextncancel}>
        <button className={styles.next}>Next</button>
        <button className={styles.cancel}>Cancel</button>
      </footer>
    </div>
  );
}

export default TicketReady;
