import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

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
