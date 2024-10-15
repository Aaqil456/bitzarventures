import React from 'react';
import './styles/Contact.css'; // Import the CSS
import { motion } from 'framer-motion';


const Contact = () => {

  const pageTransition = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div className="contact-container"
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition.transition}
    variants={pageTransition}>

      <h1>Contact Me</h1>
      <p>Provide your contact details or a form here.</p>

    </motion.div>
  );
};

export default Contact;
