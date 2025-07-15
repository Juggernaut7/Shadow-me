// src/components/ui/ColorPicker.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { FaPalette } from 'react-icons/fa'; // Example icon

/**
 * Reusable ColorPicker component for color input.
 * @param {Object} props - Component props.
 * @param {string} props.label - The label for the color picker.
 * @param {string} props.value - The current hex color value.
 * @param {Function} props.onChange - Callback function when the color changes.
 */
const ColorPicker = ({ label, value, onChange }) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
    >
      <label className="block text-sm font-body font-medium text-neutral-dark dark:text-neutral-light mb-2 flex items-center gap-2">
        <IconContext.Provider value={{ className: "text-primary-500 dark:text-secondary-500" }}>
          <FaPalette size={16} />
        </IconContext.Provider>
        {label}
        <span className="ml-auto text-neutral-dark/70 dark:text-neutral-light/70 font-semibold">
          {value}
        </span>
      </label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={value}
          onChange={onChange}
          className="w-10 h-10 p-0 border-none cursor-pointer rounded-md overflow-hidden
                     [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch-wrapper]:rounded-md
                     [&::-webkit-color-swatch]:rounded-md"
        />
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full p-2 border border-neutral-light-200 dark:border-neutral-dark/50 rounded-md
                     bg-white dark:bg-neutral-dark text-neutral-dark dark:text-neutral-light
                     focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          maxLength={7} // #RRGGBB
          placeholder="#000000"
        />
      </div>
    </motion.div>
  );
};

export default ColorPicker;
