import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Accordion from "../components/Accordion";
import Ring from "../components/Ring";
import introVector from "../public/lineVector.svg";
import nextBtn from "../public/nextBtn.svg";
import logo from "../public/portfolio-logo.png";
import Link from "next/link";
import NextPage from "../components/NextPage"

export default function Home() {

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

      <main className={styles.main}>
        <Accordion title={"my info"} className={styles.info} />

        <motion.div
          className={styles.titleCtnr}
          drag
          whileHover={{
            scale: [1, 0],
            boxShadow: "0 0 20px green",
            transition: {
              duration: 2,
              ease: "easeInOut",
              damping: 500,
            },
          }}
        >
          <Link href="/">
            <a>
              <Image className={styles.title} src={logo} alt="Joe Cee" />
            </a>
          </Link>
        </motion.div>

        <motion.div
          className={styles.ringCtnr}
          animate={{
            rotate: 360,
            transition: {
              duration: 15,
              ease: "linear",
              stiffness: 0,
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          <Ring />
        </motion.div>
        <section className={styles.introTextCtnr}>
          <h2 className={styles.line1}>Coding simply</h2>
          <div className={styles.introVector}>
            <Image src={introVector} alt="A squiggly line graphic" />
          </div>
          <h2 className={styles.line2}>for the web</h2>
          <h2 className={styles.line3}>&</h2>
          <h2 className={styles.line4}>b e y o n d</h2>
        </section>

        <NextPage link="/bio" />
      </main>
    </div>
  );
}
