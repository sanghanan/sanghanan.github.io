import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Work from './components/Portfolio/Work';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <Work />
    </main>

    <ScrollUp />
    </>
  )
}

export default App