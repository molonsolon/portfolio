import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Slideshow.module.css";
import nextBtnPlain from "../public/nextBtnPlain.svg";

const PAGES = [
  `My name is Joseph Coulter. I’m an aspiring web developer living in Portland, Oregon.
   In 2019, I earned a degree in English from Lewis & Clark College. I'm currently working as a Laborer at Otis Construction.
  `,
  `I have been teaching myself HTML, CSS, and Javascript since July of 2021. 
   I learn using tech docs and resources such as Free Code Academy and The Odin Project. Currently, I'm boosting my skills in Next.js.`,
  `I balance my passion for coding with music, video art, and writing. 
   I fell in love with coding because it allowed me to combine these art forms and share their synthesis in an accessible form.`,
];

export const Slideshow = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (direction) => {
    setPage([page + direction, direction]);
    console.log(page);
  };

  const variants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <AnimatePresence>
      <motion.div>
        <motion.p
          key={page}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className={styles.bioText}
        >
          {PAGES[page]}
        </motion.p>
        {page < 2 && (
          <motion.div
            onClick={() => paginate(1)}
            className={styles.nextText}
            whileHover={{
              x: 10,
              scale: 1.05,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <Image
              src={nextBtnPlain}
              alt="a button to show more text in biography"
            />
          </motion.div>
        )}
        {page > 0 && (
          <motion.div
            onClick={() => paginate(-1)}
            className={styles.prevText}
            whileHover={{
              x: 10,
              scale: 1.05,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <Image
              src={nextBtnPlain}
              alt="a button to show more text in biography"
            />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Slideshow;