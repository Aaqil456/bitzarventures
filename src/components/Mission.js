import React from 'react';
import './styles/Mission.css'; // Import the CSS
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';



const Mission = () => {

  const pageTransition = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.5 },
  };

  return (

    <motion.div className="mission-container"
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition.transition}
    variants={pageTransition}>

      <h1>My Mission</h1>
      <p>Showcase your projects here with details.</p>
    </motion.div>
  );
};

export default Mission;