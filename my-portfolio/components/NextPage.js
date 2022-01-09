import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NextPage.module.css";
import nextBtn from "../public/nextBtn.svg"

export const NextPage = ({ link }) => {
  return (
    <AnimatePresence>
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      className={styles.nextCtnr}
      whileHover={{
        scale: [1, 1.1, 1.05],
        transition: {
          duration: 0.65,
        },
      }}
    >
      <Link href={link}>
        <a>
          <Image src={nextBtn} alt="animated button to go to next page" />
        </a>
      </Link>
    </motion.div>
    </AnimatePresence>
  );
};

export default NextPage;
