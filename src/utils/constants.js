// src/utils/constants.js

/**
 * @typedef {Object} ShadowProperties
 * @property {number} offsetX - Horizontal offset in pixels.
 * @property {number} offsetY - Vertical offset in pixels.
 * @property {number} blurRadius - Blur radius in pixels.
 * @property {number} spreadRadius - Spread radius in pixels.
 * @property {string} color - Shadow color (hex or rgba).
 * @property {boolean} inset - Whether the shadow is inset.
 */

/**
 * Default initial properties for the box shadow.
 * @type {ShadowProperties}
 */
export const DEFAULT_SHADOW_PROPERTIES = {
  offsetX: 0,
  offsetY: 10,
  blurRadius: 15,
  spreadRadius: -3,
  color: '#000000', // Default black
  alpha: 0.2,       // Default alpha for rgba conversion
  inset: false,
};

/**
 * Predefined shadow presets for quick selection.
 * @type {Array<Object>}
 */
export const PRESET_SHADOWS = [
  {
    name: 'Subtle Lift',
    offsetX: 0,
    offsetY: 4,
    blurRadius: 6,
    spreadRadius: -1,
    color: '#000000',
    alpha: 0.1,
    inset: false,
  },
  {
    name: 'Soft Glow',
    offsetX: 0,
    offsetY: 0,
    blurRadius: 20,
    spreadRadius: 0,
    color: '#3B82F6', // Using secondary color
    alpha: 0.3,
    inset: false,
  },
  {
    name: 'Deep Shadow',
    offsetX: 0,
    offsetY: 10,
    blurRadius: 20,
    spreadRadius: -5,
    color: '#000000',
    alpha: 0.4,
    inset: false,
  },
  {
    name: 'Inset Button',
    offsetX: 2,
    offsetY: 2,
    blurRadius: 5,
    spreadRadius: 0,
    color: '#000000',
    alpha: 0.2,
    inset: true,
  },
  {
    name: 'Top Light',
    offsetX: 0,
    offsetY: -5,
    blurRadius: 10,
    spreadRadius: -2,
    color: '#000000',
    alpha: 0.15,
    inset: false,
  },
  {
    name: 'Diagonal Pop',
    offsetX: 8,
    offsetY: 8,
    blurRadius: 15,
    spreadRadius: 0,
    color: '#000000',
    alpha: 0.25,
    inset: false,
  },
];
