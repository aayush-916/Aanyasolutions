import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <div className={styles['footer-brand']}>
          <h2>Aanya Solutions</h2>
          <p>Your partner in innovative web and app development solutions.</p>
        </div>

        <div className={styles['footer-details']}>
          <h3>Contact Us</h3>
          <p> 1535, Sector 16A, Vasundhara, Ghaziabad-201012 </p>
          <p>Phone: <span className={styles['contact-placeholder']}><a href="tel:+918368859076">+91 8368859076 </a></span></p>
          <p>Email: <span className={styles['contact-placeholder']}><a href="">sunilgupta@aanyasolutions.net</a></span></p>
          {/* <p>Email: <span className={styles['contact-placeholder']}><a href=""></a></span></p> */}
        </div>

        <div className={styles['footer-social']}>
          <h3>Follow Us</h3>
          {/* <a href="https://facebook.com" target="_blank" className={styles['social-icon']} rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" className={styles['social-icon']} rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a> */}
          <a href="" target="_blank" className={styles['social-icon']} rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="" target="_blank" className={styles['social-icon']} rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        

        <div className={styles['footer-extra']}>
          <h3>More Information</h3>
          <p><Link to="/about">About Us</Link></p>
          <p><Link to="/contact">Contact Us</Link></p>
          <p><Link to="/service">Our Services</Link></p>
          <p><a href="/PrivacyPolicy">Privacy Policy</a></p>
        </div>
      </div>

      <div className={styles['footer-bottom']}>
        <p>&copy; 2025 Aanya Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
