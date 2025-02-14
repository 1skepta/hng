import React, { useState, useRef, useEffect } from "react";
import styles from "./TicketSelection.module.css";
import { ChevronDown } from "lucide-react";

function TicketSelection({ onNext, formData, setFormData }) {
  const [chevronOpen, setChevronOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    formData.ticketQuantity || 1
  );
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setChevronOpen(!chevronOpen);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setFormData((prev) => ({ ...prev, ticketQuantity: value }));
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

  const TicketOption = ({
    price,
    label,
    availability,
    onSelect,
    isSelected,
  }) => (
    <div
      className={styles.lists}
      onClick={() => onSelect(price, label, availability)}
      style={{
        backgroundColor: isSelected ? "#0e464f" : "",
      }}
    >
      <h1>{price}</h1>
      <p>{label}</p>
      <span>{availability}</span>
    </div>
  );

  const handleTicketOptionSelect = (price, label, availability) => {
    setFormData((prev) => ({ ...prev, ticketType: label, ticketPrice: price }));
  };

  const handleNext = () => {
    if (!formData.ticketType) {
      alert("Please select a ticket type.");
      return;
    }
    onNext();
  };

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
      <div className={styles.tabletBox}>
        <section className={styles.techember}>
          <h1>Techember Fest ''25</h1>
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
              onSelect={handleTicketOptionSelect}
              isSelected={formData.ticketType === "REGULAR ACCESS"}
            />
            <TicketOption
              price="$150"
              label="VIP ACCESS"
              availability="20/52"
              onSelect={handleTicketOptionSelect}
              isSelected={formData.ticketType === "VIP ACCESS"}
            />
            <TicketOption
              price="$150"
              label="VVIP ACCESS"
              availability="20/52"
              onSelect={handleTicketOptionSelect}
              isSelected={formData.ticketType === "VVIP ACCESS"}
            />
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
          <button className={styles.next} onClick={handleNext}>
            Next
          </button>
          <button className={styles.cancel}>Cancel</button>
        </footer>
      </div>
    </div>
  );
}

export default TicketSelection;
