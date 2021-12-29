import React from 'react';
import Link from 'next/link';
import styles from "../styles/Bio.module.css";
import Head from "next/head";
import Image from "next/image";
import textBoxesFront from "../public/textBoxesFront.svg"

export const Bio = () => {
  
  
  return (
    <div>
      <Head>
        <title>Bio</title>
        <meta
          name="Bio"
          content="A portfolio for the works of Joseph Coulter"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Link href="/">
        <a>
          Home
        </a>
      </Link>
      <section className={styles.mainSection}>
        <div className={styles.textBoxesCtnr}>
          <Image 
            className={styles.textBoxes}
            src={textBoxesFront} 
            alt="fun containers for text"
          />
          <h3 className={styles.title}>
            Hello!
          </h3>
        </div>
      </section>
    </div>
  )
}

export default Bio