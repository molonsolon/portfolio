import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/Ring.module.css";

export const Ring = () => {
  return (
    <svg className={styles.ring} viewBox="0 0 400 400">
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="19%" stopColor="#E1F229" />
          <stop offset="55%" stopColor="#4F14E3" />
          <stop offset="85%" stopColor="#DC05FF" />
        </linearGradient>
      </defs>
      <g transform="translate(200, 200)">
        <circle
          cx="0"
          cy="0"
          r="40%"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1%"
        ></circle>
      </g>
    </svg>
  );
};

export default Ring;
