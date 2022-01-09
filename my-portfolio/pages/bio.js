import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Bio.module.css";
import Head from "next/head";
import Image from "next/image";
import textBoxesFront from "../public/textBoxesFront.svg";
import lineVectorStretch from "../public/lineVectorStretch.svg";
import { motion, AnimatePresence } from "framer-motion";
import Slideshow from "../components/Slideshow";
import NextPage from "../components/NextPage";

export const Bio = () => {
  const [textPage, setTextPage] = useState(0);

  const pageToParent = (page) => {
    setTextPage(page);
    console.log(page);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Bio</title>
        <meta
          name="Bio"
          content="A portfolio for the works of Joseph Coulter"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/">
        <a className={styles.homeLink}>Home</a>
      </Link>
      <section className={styles.mainSection}>
        <motion.div
          animate={{
            x: [0, 5, 10],
            y: [0, -5, 5],
            transition: {
              duration: 5,
              damping: 500,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          exit={{ x: 0, y: 0 }}
          className={styles.textBoxesCtnr}
        >
          <Image
            className={styles.textBoxes}
            src={textBoxesFront}
            alt="fun containers for text"
          />
          <h3 className={styles.title}>Hello!</h3>
          <Slideshow pageToParent={pageToParent} />
        </motion.div>
      </section>
      <AnimatePresence>
        <motion.div>
          {textPage === 2 && <NextPage link="/portfolio"/>}
        </motion.div>

      </AnimatePresence>

      <span className={styles.decorationCtnr}>
        <span className={styles.vectorCtnr}>
          <Image
            src={lineVectorStretch}
            alt="orange curly line seperating the bottom and top halves of the page"
          />
        </span>
        <div className={styles.footerDecoration}></div>
      </span>
    </div>
  );
};

export default Bio;
