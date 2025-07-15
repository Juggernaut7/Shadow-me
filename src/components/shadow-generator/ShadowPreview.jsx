// src/components/shadow-generator/ShadowPreview.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { useTheme } from '../../context/ThemeContext';
import { useShadowGenerator } from '../../hooks/useShadownGenerator';

/**
 * Displays the live preview of the generated box-shadow.
 */
const ShadowPreview = () => {
  const { shadowStyle } = useShadowGenerator();
  const { currentEffectiveTheme } = useTheme();

  // Determine background color of the preview box based on theme for contrast
  const previewBgColor = currentEffectiveTheme === 'dark' ? 'bg-neutral-light-100' : 'bg-white';
  const previewTextColor = currentEffectiveTheme === 'dark' ? 'text-neutral-dark' : 'text-neutral-dark'; // Text inside preview box

  return (
    <Card className="flex flex-col items-center justify-center p-8 h-88 md:h-auto md:min-h-88"> {/* Min-height for consistency */}
      <h3 className="font-heading text-lg font-semibold text-neutral-dark dark:text-neutral-light mb-6">Live Preview</h3>
      <motion.div
        className={`w-48 h-48 rounded-lg flex items-center justify-center ${previewBgColor} ${previewTextColor} font-body text-sm font-medium border border-neutral-light-200 dark:border-neutral-dark/50`}
        style={shadowStyle}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        Shadow Box
      </motion.div>
    </Card>
  );
};

export default ShadowPreview;
