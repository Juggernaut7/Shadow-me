// src/utils/helpers.js
import { toast } from 'react-toastify';

/**
 * Converts a hex color string to an RGBA string.
 * @param {string} hex - The hex color string (e.g., "#RRGGBB").
 * @param {number} alpha - The alpha transparency value (0 to 1).
 * @returns {string} The RGBA color string (e.g., "rgba(R, G, B, A)").
 */
export const hexToRgba = (hex, alpha) => {
  let r = 0, g = 0, b = 0;

  // Handle #RRGGBB format
  if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  } else if (hex.length === 4) { // Handle #RGB shorthand
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Copies text to the clipboard and shows a toast notification.
 * @param {string} text - The text to copy.
 */
export const copyToClipboard = (text) => {
  // Use document.execCommand('copy') as navigator.clipboard.writeText() might not work in some iframe environments
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    toast.success('CSS copied to clipboard!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark", // Or 'light' based on app theme
    });
  } catch (err) {
    console.error('Failed to copy text: ', err);
    toast.error('Failed to copy CSS.', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark", // Or 'light' based on app theme
    });
  } finally {
    document.body.removeChild(textarea);
  }
};
