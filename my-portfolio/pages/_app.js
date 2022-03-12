import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router}) {
  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <motion.div 
        key={router.route}
        initial={false}
        animate={{opacity: 1}}
        exit={{opacity: 0, backgroundColor: 'black',
        filter: `invert()`,
        opacity: 0}}
        transition={{
          bounceDamping: 500,
          duration: 0.3,
          
        }}
      >
        <Component {...pageProps} key={router.route} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
