import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Modal = ({ isToggled, setToggle, children }) => {
  return (
    <AnimatePresence>
      {isToggled && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button onClick={() => setToggle(false)}>Close</button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
