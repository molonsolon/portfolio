import React from "react";
import styles from "../styles/Portfolio.module.css";
import Image from "next/image";
import textBox from "../public/textBox.png";
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
          <div className={`${styles.ticTacTitle} ${styles.displayBoxes}`}>
            {/* <Image src={textBox} alt="stylized container for text" /> */}
            <p>
              Tic-Tac-Overdrive
            </p>
          </div>

          <div className={`${styles.ticTacDescription} ${styles.displayBoxes}`} >
            {/* <Image src={textBox} alt="stylized container for text" /> */}
          </div>

          <div className={`${styles.citySoundsTitle} ${styles.displayBoxes}`}>
            {/* <Image src={textBox} alt="stylized container for text" /> */}
          </div>

          <div className={`${styles.citySoundsDescription} ${styles.displayBoxes}`}>
            {/* <Image src={textBox} alt="stylized container for text" /> */}
          </div>

          <div className={`${styles.calcTitle} ${styles.displayBoxes}`}>
            {/* <Image src={textBox} alt="stylized container for text" /> */}
          </div>

          <div className={`${styles.calcDescription} ${styles.displayBoxes}`}>
            {/* <Image src={textBox} alt="stylized container for text" /> */}
          </div>
          <div className={`${styles.codePenTitle} ${styles.displayBoxes}`}>
            {/* <Image src={textBox} alt="stylized container for text" /> */}
          </div>

          <div className={`${styles.codePenDescription} ${styles.displayBoxes}`}>
            {/* <Image src={textBox} alt="stylized container for text" /> */}
          </div>



        </section>
      </div>
    </AnimatePresence>
  );
};

export default Portfolio;
