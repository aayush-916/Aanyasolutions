import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from './Home.module.css';

function Home() {
  return (
    <>
     <div style={{ overflow: "visible" }}>
      <motion.div
        className={styles.main}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
      >
        <div className={styles.tx}>
          <h1 id="tyw">
          We specialize in
            <ReactTypingEffect
              text={["Back Office Management ", "Inventory Management ", "Graphic Designing ", "Website Designing "]}
              speed={100} // Typing speed of each character
              eraseSpeed={100} // Erase speed of each character
              typingDelay={200} // Delay before typing each word
              eraseDelay={1200} // Delay before erasing each word
              className={styles.type}
            />
          </h1>
          <p>Empowering Your Business with Smart Solutions</p>
          <article className={styles.longar}>
          From streamlining daily operations to crafting standout digital experiences, we help businesses work smarter, look better, and grow faster. Let us handle the behind-the-scenes, so you can focus on what matters most.
          </article>
          <article className={styles.shortar}>
          From streamlining daily operations to crafting standout digital experiences, we help businesses work smarter, look better, and grow faster. Let us handle the behind-the-scenes, so you can focus on what matters most.
          </article>
          <Link to="/contact">
            <button className={styles["button-85"]}>Contact Us ➜</button>
          </Link>
        </div>

        <div className={styles.gif}>
          <img src="./im2.gif" alt="Animation"/>
        </div>
      </motion.div>
      </div>
    </>
  );
}

export default Home;
