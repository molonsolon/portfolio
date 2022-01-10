import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Parallax = ({ children, offset = 50 }) => {
  const [elementTop, setElementTop] = useState(0);
  const [browserHeight, setBrowserHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useViewportScroll();

  const initialHeight = elementTop - browserHeight;
  const endHeight = elementTop + offset;

  const y = useTransform(
    scrollY,
    [initialHeight, endHeight],
    [offset, -offset]
  );

  useEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(element.getBoundingClientRect().top) + window.scrollY ||
        setBrowserHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default Parallax;

Parallax.propTypes = {
  children: PropTypes.node,
  offset: PropTypes.number,
};
