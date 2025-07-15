// src/components/layout/Header.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ToggleSwitch from '../ui/ToggleSwitch';
import { RiSunFill, RiMoonFill } from 'react-icons/ri'; // React Icons for sun/moon
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';

/**
 * Global Header component with app title and theme toggle.
 */
const Header = () => {
  const { theme, toggleTheme, currentEffectiveTheme } = useTheme();
  const isDarkMode = currentEffectiveTheme === 'dark';

  return (
    <motion.header
      className="w-full bg-white dark:bg-neutral-dark p-4 shadow-soft border-b border-neutral-light-200 dark:border-neutral-dark/50 flex justify-between items-center z-10 sticky top-0"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <h1 className="font-heading text-xl md:text-2xl font-bold text-primary-500 dark:text-secondary-500">
        ShadowMe<span className="text-secondary-500 dark:text-primary-500">.</span>
      </h1>

      <div className="flex items-center space-x-3">
        <IconContext.Provider value={{ className: "text-neutral-dark dark:text-neutral-light" }}>
          {isDarkMode ? <RiMoonFill size={20} /> : <RiSunFill size={20} />}
        </IconContext.Provider>
        <ToggleSwitch
          label="" // Label is handled by icon
          checked={isDarkMode}
          onChange={toggleTheme}
        />
      </div>
    </motion.header>
  );
};

export default Header;
