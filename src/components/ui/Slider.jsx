// src/components/ui/Slider.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons'; // For consistent icon styling

/**
 * Reusable Slider component for numerical input.
 * @param {Object} props - Component props.
 * @param {string} props.label - The label for the slider.
 * @param {React.ElementType} props.icon - React-icon component (e.g., FaArrowsAltH).
 * @param {number} props.value - The current value of the slider.
 * @param {Function} props.onChange - Callback function when the slider value changes.
 * @param {number} props.min - Minimum value for the slider.
 * @param {number} props.max - Maximum value for the slider.
 * @param {number} [props.step=1] - Step increment for the slider.
 * @param {string} [props.unit='px'] - Unit to display next to the value.
 */
const Slider = ({ label, icon: Icon, value, onChange, min, max, step = 1, unit = 'px' }) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <label className="block text-sm font-body font-medium text-neutral-dark dark:text-neutral-light mb-2 flex items-center gap-2">
        {Icon && (
          <IconContext.Provider value={{ className: "text-primary-500 dark:text-secondary-500" }}>
            <Icon size={16} />
          </IconContext.Provider>
        )}
        {label}
        <span className="ml-auto text-neutral-dark/70 dark:text-neutral-light/70 font-semibold">
          {value}{unit}
        </span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-neutral-light-200 dark:bg-neutral-dark/30 rounded-lg appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
                   [&::-webkit-slider-thumb]:bg-primary-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md
                   [&::-webkit-slider-thumb]:transition-colors [&::-webkit-slider-thumb]:duration-200
                   dark:[&::-webkit-slider-thumb]:bg-secondary-500
                   focus:[&::-webkit-slider-thumb]:ring-2 focus:[&::-webkit-slider-thumb]:ring-primary-500/50
                   dark:focus:[&::-webkit-slider-thumb]:ring-secondary-500/50"
      />
    </motion.div>
  );
};

export default Slider;
