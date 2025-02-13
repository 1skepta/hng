import React, { useState, useRef, useEffect } from "react";
import styles from "./TicketSelection.module.css";
import { ChevronDown } from "lucide-react";

function TicketSelection() {
  const [chevronOpen, setChevronOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(1);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setChevronOpen(!chevronOpen);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setChevronOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setChevronOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const TicketOption = ({ price, label, availability }) => (
    <div className={styles.lists}>
      <h1>{price}</h1>
      <p>{label}</p>
      <span>{availability}</span>
    </div>
  );

  return (
    <div className={styles.selectTicket}>
      <header>
        <h1>Ticket Selection</h1>
        <h3>Step 1/3</h3>
        <div className={styles.line}>
          <span className={styles.light}>.</span>
          <span className={styles.dark}></span>
        </div>
      </header>

      <section className={styles.techember}>
        <h1>
          <em>T</em>ec<em>h</em>ember Fest ''25
        </h1>
        <p>
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </p>
        <h3>🍭 [Event Location]</h3>
        <h3>March 15, 2025 | 7:00 PM</h3>
      </section>

      <div className={styles.line}>
        <span className={styles.dark}></span>
      </div>

      <section>
        <h2>Select Ticket Type:</h2>
        <div className={styles.ticketType}>
          <TicketOption
            price="Free"
            label="REGULAR ACCESS"
            availability="20/52"
          />
          <TicketOption price="$150" label="VIP ACCESS" availability="20/52" />
          <TicketOption price="$150" label="VVIP ACCESS" availability="20/52" />
        </div>
      </section>

      <section className={styles.bottom}>
        <h2>Number of Tickets</h2>
        <div className={styles.chevrondiv} ref={dropdownRef}>
          <button onClick={toggleDropdown} className={styles.chevron}>
            {selectedValue}
            <ChevronDown />
          </button>
          {chevronOpen && (
            <div className={styles.chevsmalldiv}>
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} onClick={() => handleSelect(num)}>
                  {num}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className={styles.nextncancel}>
        <button className={styles.next}>Next</button>
        <button className={styles.cancel}>Cancel</button>
      </footer>
    </div>
  );
}

export default TicketSelection;
