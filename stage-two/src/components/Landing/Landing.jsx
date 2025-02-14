import React, { useState } from "react";
import Header from "../Header/Header";
import styles from "./Landing.module.css";
import TicketSelection from "../TicketSelection/TicketSelection";
import AttendeeDetails from "../AttendeeDetails/AttendeeDetails";
import TicketReady from "../TicketReady/TicketReady";

function Landing() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ticketType: "",
    ticketPrice: "",
    ticketQuantity: 1,
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    project: localStorage.getItem("project") || "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className={styles.back}>
      <Header />
      {step === 1 && (
        <TicketSelection
          onNext={nextStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 2 && (
        <AttendeeDetails
          onNext={nextStep}
          onBack={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 3 && <TicketReady onBack={prevStep} formData={formData} />}
    </div>
  );
}

export default Landing;
