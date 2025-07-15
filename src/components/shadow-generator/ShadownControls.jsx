// src/components/shadow-generator/ShadowControls.jsx
import React from 'react';
import { useShadow } from '../../context/ShadowContext';
import Card from '../ui/Card';
import Slider from '../ui/Slider';
import ColorPicker from '../ui/ColorPicker';
import ToggleSwitch from '../ui/ToggleSwitch';
import Button from '../ui/Button';
import { FaArrowsAltH, FaArrowsAltV, FaExpand, FaCompress, FaSquare } from 'react-icons/fa'; // Icons for sliders
import { motion } from 'framer-motion';

/**
 * Contains all input controls for customizing box-shadow properties.
 */
const ShadowControls = () => {
  const { shadowProperties, updateShadowProperty, resetShadow } = useShadow();

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    updateShadowProperty(name, parseFloat(value)); // Ensure numerical value
  };

  const handleColorChange = (e) => {
    updateShadowProperty('color', e.target.value);
  };

  const handleAlphaChange = (e) => {
    updateShadowProperty('alpha', parseFloat(e.target.value));
  };

  const handleInsetToggle = () => {
    updateShadowProperty('inset', !shadowProperties.inset);
  };

  return (
    <Card className="p-6">
      <motion.h3
        className="font-heading text-lg font-semibold text-neutral-dark dark:text-neutral-light mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Shadow Controls
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {/* Offset X Slider */}
        <Slider
          label="Offset X"
          icon={FaArrowsAltH}
          value={shadowProperties.offsetX}
          onChange={handleSliderChange}
          name="offsetX"
          min={-50}
          max={50}
          step={1}
        />

        {/* Offset Y Slider */}
        <Slider
          label="Offset Y"
          icon={FaArrowsAltV}
          value={shadowProperties.offsetY}
          onChange={handleSliderChange}
          name="offsetY"
          min={-50}
          max={50}
          step={1}
        />

        {/* Blur Radius Slider */}
        <Slider
          label="Blur Radius"
          icon={FaExpand}
          value={shadowProperties.blurRadius}
          onChange={handleSliderChange}
          name="blurRadius"
          min={0}
          max={100}
          step={1}
        />

        {/* Spread Radius Slider */}
        <Slider
          label="Spread Radius"
          icon={FaCompress}
          value={shadowProperties.spreadRadius}
          onChange={handleSliderChange}
          name="spreadRadius"
          min={-50}
          max={50}
          step={1}
        />

        {/* Color Picker */}
        <ColorPicker
          label="Shadow Color"
          value={shadowProperties.color}
          onChange={handleColorChange}
        />

        {/* Alpha (Opacity) Slider */}
        <Slider
          label="Opacity"
          icon={FaSquare} // Using FaSquare as a generic icon for opacity
          value={shadowProperties.alpha}
          onChange={handleAlphaChange}
          name="alpha"
          min={0}
          max={1}
          step={0.01}
          unit="" // No unit for alpha
        />
      </div>

      {/* Inset Toggle */}
      <ToggleSwitch
        label="Inset Shadow"
        checked={shadowProperties.inset}
        onChange={handleInsetToggle}
      />

      {/* Reset Button */}
      <div className="mt-6 flex justify-end">
        <Button variant="outline" onClick={resetShadow}>
          Reset
        </Button>
      </div>
    </Card>
  );
};

export default ShadowControls;
