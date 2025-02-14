import React, { useRef, useState, useEffect } from "react";
import styles from "./AttendeeDetails.module.css";
import { FaCloudUploadAlt } from "react-icons/fa";

function AttendeeDetails({ onNext, onBack, formData, setFormData }) {
  const fileInputRef = useRef(null);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("idle"); // idle, uploading, success, error

  useEffect(() => {
    localStorage.setItem("name", formData.name);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("project", formData.project);
  }, [formData.name, formData.email, formData.project]);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Upload file to Cloudinary using fetch
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "ticket-generator");

    try {
      setUploadStatus("uploading");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dfiju18pp/image/upload",
        {
          method: "POST",
          body: uploadData,
        }
      );
      const data = await response.json();
      if (data.secure_url) {
        console.log("Uploaded Image URL:", data.secure_url);
        setFormData((prev) => ({
          ...prev,
          profileImage: data.secure_url,
        }));
        localStorage.setItem("profileImage", data.secure_url);
        setUploadStatus("success");
      } else {
        console.error("Error uploading image:", data);
        setUploadStatus("error");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadStatus("error");
    }
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
    e.preventDefault();
    if (!isEmailValid) {
      alert("Please enter a valid email address.");
      return;
    }
    onNext();
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
          <div className={styles.uploadcontainer}>
            <div className={styles.uploaddiv} onClick={handleUploadClick}>
              <FaCloudUploadAlt size={40} />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange} // triggers the Cloudinary upload
                required
              />
              <span>Drag & drop or click to upload</span>
            </div>
          </div>
          {uploadStatus === "uploading" && <p>Uploading image...</p>}
          {uploadStatus === "success" && <p>Image uploaded!</p>}
          {uploadStatus === "error" && <p>Image upload failed. Try again.</p>}
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
              ></textarea>
            </div>

            <div className={styles.nextncancel}>
              <button className={styles.submit} type="submit">
                Get My Free Ticket
              </button>
              <button className={styles.cancel} type="button" onClick={onBack}>
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
