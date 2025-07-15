// src/components/shadow-generator/PresetsList.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { PRESET_SHADOWS } from '../../utils/constants';
import { useShadow } from '../../context/ShadowContext';
import { useTheme } from '../../context/ThemeContext';
import { FaPaintBrush } from 'react-icons/fa'; // Icon for applying preset
import { IconContext } from 'react-icons';

/**
 * Displays a list of predefined box-shadow presets.
 * Users can click on a preset to apply it to the current shadow properties.
 */
const PresetsList = () => {
  const { applyPreset } = useShadow();
  const { currentEffectiveTheme } = useTheme();

  const handleApplyPreset = (preset) => {
    applyPreset(preset);
  };

  return (
    <Card className="p-6">
      <motion.h3
        className="font-heading text-lg font-semibold text-neutral-dark dark:text-neutral-light mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Presets
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-88 overflow-y-auto pr-2"> {/* Added max-height and overflow for scrollability */}
        {PRESET_SHADOWS.map((preset, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-md bg-neutral-light-100 dark:bg-neutral-dark/70 border border-neutral-light-200 dark:border-neutral-dark/50 flex flex-col justify-between items-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <p className="font-body text-sm font-medium text-neutral-dark dark:text-neutral-light mb-2">{preset.name}</p>
            <div
              className={`w-full h-12 rounded-md mb-3 flex items-center justify-center border border-dashed border-neutral-light-300 dark:border-neutral-dark/30 ${currentEffectiveTheme === 'dark' ? 'bg-neutral-dark/50' : 'bg-white'}`}
              style={{
                boxShadow: `${preset.inset ? 'inset ' : ''}${preset.offsetX}px ${preset.offsetY}px ${preset.blurRadius}px ${preset.spreadRadius}px ${preset.color}${preset.alpha !== undefined ? `0${Math.round(preset.alpha * 255).toString(16).padStart(2, '0')}` : ''}` // Basic hex + alpha conversion for preview
              }}
              title={`box-shadow: ${preset.inset ? 'inset ' : ''}${preset.offsetX}px ${preset.offsetY}px ${preset.blurRadius}px ${preset.spreadRadius}px ${preset.color}${preset.alpha !== undefined ? `, alpha: ${preset.alpha}` : ''}`}
            >
              <span className="text-xs text-neutral-dark/50 dark:text-neutral-light/50">Preview</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleApplyPreset(preset)}
              className="w-full justify-center text-primary-500 dark:text-secondary-500 hover:bg-primary-50 dark:hover:bg-neutral-dark/30"
            >
              <IconContext.Provider value={{ className: "mr-1" }}>
                <FaPaintBrush size={14} />
              </IconContext.Provider>
              Apply
            </Button>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export default PresetsList;
