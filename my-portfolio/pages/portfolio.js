import React from "react";
import styles from "../styles/Portfolio.module.css";
import {
  AnimatePresence,
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Parallax from "../components/Parallax";

export const Portfolio = () => {
  const { scrollYProgress, scrollY } = useViewportScroll();
  const initialProgress = useTransform(scrollYProgress, (x) => x * 40);

  const easeScroll = useSpring(initialProgress, {
    stiffness: 400,
    damping: 120,
  });

  return (
    <AnimatePresence>
      <div className={styles.container}>
        <motion.div
          className={styles.backgroundWave}
          style={{ rotateX: easeScroll, translateY: 120 }}
        ></motion.div>
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
