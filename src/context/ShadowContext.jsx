// src/context/ShadowContext.jsx
import React, { createContext, useState, useContext, useCallback } from 'react';
import { DEFAULT_SHADOW_PROPERTIES } from '../utils/constants';

// Create a context for shadow properties
export const ShadowContext = createContext();

/**
 * Provides shadow properties context to its children.
 * Manages the state of all box-shadow related properties.
 */
export const ShadowProvider = ({ children }) => {
  const [shadowProperties, setShadowProperties] = useState(DEFAULT_SHADOW_PROPERTIES);

  /**
   * Updates a specific shadow property.
   * @param {string} name - The name of the property to update.
   * @param {number|string|boolean} value - The new value for the property.
   */
  const updateShadowProperty = useCallback((name, value) => {
    setShadowProperties(prevProps => ({
      ...prevProps,
      [name]: value,
    }));
  }, []);

  /**
   * Resets all shadow properties to their default values.
   */
  const resetShadow = useCallback(() => {
    setShadowProperties(DEFAULT_SHADOW_PROPERTIES);
  }, []);

  /**
   * Applies a set of predefined shadow properties.
   * @param {Object} preset - The preset object containing shadow properties.
   */
  const applyPreset = useCallback((preset) => {
    setShadowProperties({
      ...DEFAULT_SHADOW_PROPERTIES, // Ensure all properties are present, use defaults for missing ones
      ...preset,
    });
  }, []);

  const value = {
    shadowProperties,
    updateShadowProperty,
    resetShadow,
    applyPreset,
  };

  return (
    <ShadowContext.Provider value={value}>
      {children}
    </ShadowContext.Provider>
  );
};

/**
 * Custom hook to consume the ShadowContext.
 * @returns {{shadowProperties: Object, updateShadowProperty: Function, resetShadow: Function, applyPreset: Function}}
 */
export const useShadow = () => {
  const context = useContext(ShadowContext);
  if (context === undefined) {
    throw new Error('useShadow must be used within a ShadowProvider');
  }
  return context;
};
