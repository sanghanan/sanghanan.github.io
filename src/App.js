import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Work from './components/Portfolio/Work';
import ScrollUp from './components/scrollup/ScrollUp';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <Skills/>
      <Work />
    </main>

    <ScrollUp />
    </>
  )
}

export default App