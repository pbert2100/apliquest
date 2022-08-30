import { AnimatePresence } from "framer-motion";
import NextNProgress from 'nextjs-progressbar';
import Navbar from '../components/navbar.js';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <NextNProgress color="rgb(40, 216, 216)" height={3} options={{ showSpinner: false }} />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
};

export default MyApp
