import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Updates from './components/pages/Updates';
import Ideas from './components/pages/Ideas';
import About from './components/pages/About';
import { AnimatePresence } from 'framer-motion';

function App() {

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={useLocation()} key={useLocation().key}>
          <Route path='/' element={<Home />} />
          <Route path='/updates' element={<Updates />} />
          <Route path='/ideas' element={<Ideas />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
