import React from "react";
import styles from "../styles/Portfolio.module.css";
import { AnimatePresence, motion } from "framer-motion";

export const Portfolio = () => {

  const variants = {
    start: {
      opacity: .95,
    },
    open: {
      rotateX: 60,
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }, 
    end: {
      opacity: .95
    }
  }
  return (
    <AnimatePresence>
      <div className={styles.container}>
        <motion.div className={styles.backgroundWave}
          variants={variants}
          intial="start"
          animate="open"
          exit="end">
            
          </motion.div>
        <section className={styles.gridLayout}>
          <h2 className={styles.title}>Portfolio</h2>
          <div className={styles.ticTacTitle}></div>
          <div className={styles.ticTacDescription}></div>
        </section>

      </div>
    </AnimatePresence>
  );
};

export default Portfolio;
