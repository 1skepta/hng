import React from "react";
import styles from "./TicketReady.module.css";

function TicketReady({ onBack, formData }) {
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
        <p>You can download or check your email for a copy</p>
      </div>
      <div className={styles.ticketcontainer}>
        <div className={styles.ticketbox}>
          <div className={styles.techember}>
            <h1>Techember Fest ''25</h1>
            <h3>🍭04 Rumens road, Ikoyi, Lagos</h3>
            <h3>📅March 15, 2025 | 7:00 PM</h3>
            {formData.profileImage && (
              <img
                src={formData.profileImage}
                alt="Profile"
                style={{
                  width: "150px",
                  margin: "13px 0 15px 0",
                  border: "3px solid #24a0b5",
                  borderRadius: "10px",
                }}
              />
            )}
            <div className={styles.details}>
              <div className={styles.big}>
                <div className={styles.small}>
                  <span>Name</span>
                  <h4>{formData.name}</h4>
                </div>
                <div className={styles.smalll}>
                  <span>Email</span>
                  <h4>{formData.email}</h4>
                </div>
              </div>
              <div className={styles.big}>
                <div className={styles.small}>
                  <span>Ticket Type:</span>
                  <h4>{formData.ticketType}</h4>
                </div>
                <div className={styles.smalll}>
                  <span>Quantity:</span>
                  <h4>{formData.ticketQuantity}</h4>
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
                <span>About the project</span>
                <h4>{formData.project}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hack}>
        <img src="/well.PNG" alt="QR code" />
      </div>
      <footer className={styles.nextncancel}>
        <button
          onClick={() => {
            alert("Dey Play 😂");
          }}
          className={styles.next}
        >
          Download Ticket
        </button>
        <button className={styles.cancel} onClick={onBack}>
          Book Another Ticket
        </button>
      </footer>
    </div>
  );
}

export default TicketReady;
