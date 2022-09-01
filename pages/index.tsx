import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Myos | Portfolio</title>
        <meta name="description" content="Hello, welcome to my portfolio!" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
