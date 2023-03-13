import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.min.css';
import '@fontsource/roboto';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" hideProgressBar theme="dark" />
    </>
  );
}

export default MyApp;
