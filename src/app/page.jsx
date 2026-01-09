'use client'
import Header from '@/components/Header.jsx';
import Main from '@/components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

import React from 'react';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
