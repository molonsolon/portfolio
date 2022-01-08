import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NextPage.module.css";
import nextBtn from "../public/nextBtn.svg"

export const NextPage = () => {
  return (
    <motion.div
      className={styles.nextCtnr}
      whileHover={{
        scale: [1, 1.1, 1.05],
        transition: {
          duration: 0.65,
        },
      }}
    >
      <Link href="/bio">
        <a>
          <Image src={nextBtn} alt="animated button to go to next page" />
        </a>
      </Link>
    </motion.div>
  );
};

export default NextPage;
