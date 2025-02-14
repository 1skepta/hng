import React, { useRef, useState, useEffect } from "react";
import styles from "./AttendeeDetails.module.css";
import { FaCloudUploadAlt } from "react-icons/fa";

function AttendeeDetails() {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    project: localStorage.getItem("project") || "",
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("name", formData.name);
      localStorage.setItem("email", formData.email);
      localStorage.setItem("project", formData.project);
    }, 500);

    return () => clearTimeout(timeout);
  }, [formData]);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    }
  };

  const handleBlur = (e) => {
    if (e.target.name === "email") {
      setEmailTouched(true);
    }
  };

  const handleSubmit = (e) => {
    if (!isEmailValid) {
      e.preventDefault();
      alert("Please enter a valid email address.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

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
      <div className={styles.tabletBox}>
        <div className={styles.upload}>
          <h2>Upload Profile Photo</h2>
          <div className={styles.uploaddiv} onClick={handleUploadClick}>
            <FaCloudUploadAlt size={40} />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              required
            />
            <span>Drag & drop or click to upload</span>
          </div>
        </div>

        <div className={styles.line}>
          <span className={styles.dark} style={{ width: "100%" }}></span>
        </div>

        <div className={styles.details}>
          <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
            <div className={styles.name}>
              <h3>Enter your name</h3>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className={styles.email}>
              <h3>Enter your email*</h3>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="Your email address"
              />
              {!isEmailValid && emailTouched && (
                <p className={styles.error}>Invalid email address</p>
              )}
            </div>

            <div className={styles.about}>
              <h3>About the project</h3>
              <textarea
                name="project"
                value={formData.project}
                onChange={handleChange}
                required
                placeholder="Textarea"
              ></textarea>
            </div>

            <div className={styles.nextncancel}>
              <button className={styles.submit} type="submit">
                Get My Free Ticket
              </button>
              <button className={styles.cancel} type="button">
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AttendeeDetails;
