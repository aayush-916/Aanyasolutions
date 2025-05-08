import React, { useState } from "react";
import styles from './Contact.module.css';

function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
  };

  return (
    <>
      <div className={styles.contact_us_2}>
        <div className={styles["responsive-container-block"] + " " + styles["big-container"]}>
          <div className={styles.blueBG}></div>
          <div className={styles["responsive-container-block"] + " " + styles.container}>
            <form
              className={styles["form-box"]}
              action="https://formsubmit.co/sunilgupta@aanyasolutions.net"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className={styles["container-block"] + " " + styles["form-wrapper"]} id="contact">
                <p className={styles["text-blk"] + " " + styles["contactus-head"]}>Contact Us</p>

                <div className={styles["responsive-container-block"]}>
                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]} ${styles["wk-desk-6"]}`}>
                    <p className={styles["text-blk"] + " " + styles["input-title"]}>NAME</p>
                    <input
                      className={styles.input}
                      type="text"
                      name="name"
                      placeholder="Please enter first name..."
                      required
                    />
                  </div>

                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-desk-6"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]}`}>
                    <p className={styles["text-blk"] + " " + styles["input-title"]}>EMAIL</p>
                    <input
                      className={styles.input}
                      type="email"
                      name="email"
                      placeholder="Please enter email..."
                      required
                    />
                  </div>

                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-desk-6"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]}`}>
                    <p className={styles["text-blk"] + " " + styles["input-title"]}>PHONE NUMBER</p>
                    <input
                      className={styles.input}
                      type="tel"
                      name="phone"
                      placeholder="Please enter phone number..."
                      required
                    />
                  </div>

                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]} ${styles["wk-desk-12"]} ${styles["wk-ipadp-12"]}`}>
                    <p className={styles["text-blk"] + " " + styles["input-title"]}> REQUIREMENT</p>
                    <textarea
                      className={styles.textinput}
                      name="requirement"
                      placeholder="Please enter your requirement...(Optional)"
                    ></textarea>
                  </div>
                </div>

                {loading ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <button type="submit" className={styles["submit-btn"]}>Submit</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
