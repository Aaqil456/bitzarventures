import React from 'react';
import './styles/About.css'; // Import the CSS
import { motion } from 'framer-motion';

const About = () => {

  const pageTransition = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div className="about-container"
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition.transition}
    variants={pageTransition}>

      <h1>About Me</h1>
      <p>Write some information about yourself here.</p>

    </motion.div>
  );
};

export default About;
