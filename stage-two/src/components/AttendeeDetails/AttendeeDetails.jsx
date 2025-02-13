import React, { useRef } from "react";
import styles from "./AttendeeDetails.module.css";
import { FaCloudUploadAlt } from "react-icons/fa";

function AttendeeDetails() {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
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
      <div className={styles.upload}>
        <h2>Upload Profile Photo</h2>
        <div className={styles.uploaddiv} onClick={handleUploadClick}>
          <FaCloudUploadAlt size={40} />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <span>Drag & drop or click to upload</span>
        </div>
      </div>
    </div>
  );
}

export default AttendeeDetails;
