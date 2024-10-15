import React from 'react';
import './styles/Portfolio.css'; // Import the CSS
import { motion } from 'framer-motion';

const Projects = () => {
  const pageTransition = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div className="portfolio-container"
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition.transition}
    variants={pageTransition}>

      <h1>My Portfolio</h1>
      <p>Showcase your projects here with details.</p>

    </motion.div>
  );
};

export default Projects;
