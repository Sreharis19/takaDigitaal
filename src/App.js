import React, { useCallback, useEffect, useState } from 'react';
import './styles.css';

import favicon from './assets/img/favicon.png';
import logo from './assets/img/logo.png';
import { images } from './data/work';
import useReveal from './hooks/useReveal';

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

const sitename = 'Taka Digital';

function App() {
  const [lb, setLb] = useState(null);
  useReveal();

  useEffect(() => {
    document.title = 'Taka Digital — Quantum sensing & AI for infrastructure';
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'shortcut icon';
      document.head.appendChild(link);
    }
    link.href = favicon;
  }, []);

  const open = useCallback((src) => setLb(images.findIndex((i) => i.src === src)), []);
  const close = useCallback(() => setLb(null), []);

  return (
    <>
      <Header sitename={sitename} logo={logo} />
      <main>
        <Hero onOpen={open} />
        <Projects onOpen={open} />
        <News onOpen={open} />
        <About />
        <Contact />
      </main>
      <Footer logo={logo} sitename={sitename} />
      <Lightbox items={images} index={lb} onClose={close} onIndex={setLb} />
    </>
  );
}

export default App;
