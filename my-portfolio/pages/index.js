import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Modal from '../components/Modal' 

export default function Home() {
  const [value, setValue] = useState(0);
  const [isToggled, setToggle ] = useState(false);
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

      <button onClick={() => setToggle(true)}>Contact</button>

      <main className={styles.main}>
        <h1 className={styles.title}>Joe Cee</h1>
        <Modal isToggled={isToggled} setToggle={setToggle}>
          <div className={styles.title} animate={{opacity: isToggled }}> contact forms </div>
        </Modal>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
