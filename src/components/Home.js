import React from 'react';
import './styles/Home.css'; // Import the CSS
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const pageTransition = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div className="home-container" 
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition.transition}
    variants={pageTransition}>
      
      <h1>Welcome to Bitzarventure</h1>
      <p>This is the home page with an introduction of bitzarventure</p>
    </motion.div>
  );
};

export default Home;
