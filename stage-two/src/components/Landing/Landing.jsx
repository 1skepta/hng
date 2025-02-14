import React, { useState } from "react";
import Header from "../Header/Header";
import styles from "./Landing.module.css";
import TicketSelection from "../TicketSelection/TicketSelection";
import AttendeeDetails from "../AttendeeDetails/AttendeeDetails";
import TicketReady from "../TicketReady/TicketReady";

function Landing() {
  const initialStep = Number(localStorage.getItem("currentStep")) || 1;
  const [step, setStep] = useState(initialStep);

  const [formData, setFormData] = useState({
    ticketType: "",
    ticketPrice: "",
    ticketQuantity: 1,
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    project: localStorage.getItem("project") || "",
  });

  const nextStep = () => {
    const newStep = step + 1;
    setStep(newStep);
    localStorage.setItem("currentStep", newStep);
  };

  const prevStep = () => {
    const newStep = step - 1;
    setStep(newStep);
    localStorage.setItem("currentStep", newStep);
  };

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
