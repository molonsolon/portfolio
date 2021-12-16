import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Modal from "../components/Modal";
import Accordion from "../components/Accordion";
import Nav from "../components/Nav";
import Ring from "../components/Ring";
import introVector from "../public/lineVector.svg";
import nextBtn from "../public/nextBtn.svg";

export default function Home() {
  const [isToggled, setToggle] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Joe Cee</title>
        <meta
          name="Portfolio"
          content="A portfolio for the works of Joseph Coulter"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <button onClick={() => setToggle(true)}>Contact</button> */}

      <main className={styles.main}>
        <Accordion title={"my info"} className={styles.info} />
        <motion.div className={styles.titleCtnr}>
          <motion.h1
            whileHover={{
              scale: [1, 0.8],
              backgroundSize: "400%",
              transition: {
                duration: 0.75,
                ease: "bounceOut",
              },
            }}
            className={styles.title}
          >
            Joe Cee
          </motion.h1>
        </motion.div>
        {/* <Modal isToggled={isToggled} setToggle={setToggle}>
          <div className={styles.title} animate={{opacity: isToggled }}> contact forms </div>
        </Modal> */}

        <div className={styles.ringCtnr}>
          <Ring />
        </div>
        <section className={styles.introTextCtnr}>
          <h2 className={styles.line1}>Coding simply</h2>
          <div className={styles.introVector}>
            <Image src={introVector} alt="A squiggly line graphic" />
          </div>
          <h2 className={styles.line2}>for the web</h2>
          <h2 className={styles.line3}>&</h2>
          <h2 className={styles.line4}>b e y o n d</h2>
        </section>
        <div className={styles.nextCtnr}>
          <Image src={nextBtn} alt="animated button to go to next page" />
        </div>
      </main>
    </div>
  );
}
