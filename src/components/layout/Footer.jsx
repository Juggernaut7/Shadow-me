// src/components/layout/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Global Footer component.
 */
const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-white dark:bg-neutral-dark p-4 mt-8 border-t border-neutral-light-200 dark:border-neutral-dark/50 text-center text-sm text-neutral-dark/70 dark:text-neutral-light/70 font-body"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.5 }}
    >
      <p>&copy; {new Date().getFullYear()} ShadowMe. All rights reserved. Built with react for the contest.</p>
    </motion.footer>
  );
};

export default Footer;
