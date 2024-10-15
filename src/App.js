import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Mission from './components/Mission';
import './App.css'; // Import the CSS

import { AnimatePresence } from 'framer-motion'; // Import AnimatePresence


const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/mission" element={<Mission />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  );
};

export default App;