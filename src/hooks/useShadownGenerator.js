// src/hooks/useShadowGenerator.js
import { useMemo } from 'react';
import { useShadow } from '../context/ShadowContext';
import { hexToRgba } from '../utils/helpers';
import { useDebounce } from './useDebunce';


/**
 * Custom hook to generate the CSS box-shadow string based on current properties.
 * It debounces the shadow string generation for smoother updates on continuous inputs.
 * @returns {{
 * shadowCss: string,
 * formattedShadowCss: string,
 * shadowStyle: React.CSSProperties
 * }} An object containing the raw CSS string, a formatted string for display, and a style object for React.
 */
export function useShadowGenerator() {
  const { shadowProperties } = useShadow();

  // Destructure properties for easier use and to ensure all dependencies are explicit
  const { offsetX, offsetY, blurRadius, spreadRadius, color, alpha, inset } = shadowProperties;

  // Debounce the properties to prevent excessive re-renders during rapid slider changes
  // Using a small delay like 10ms for responsiveness, adjust if needed
  const debouncedOffsetX = useDebounce(offsetX, 10);
  const debouncedOffsetY = useDebounce(offsetY, 10);
  const debouncedBlurRadius = useDebounce(blurRadius, 10);
  const debouncedSpreadRadius = useDebounce(spreadRadius, 10);
  const debouncedColor = useDebounce(color, 10);
  const debouncedAlpha = useDebounce(alpha, 10);
  const debouncedInset = useDebounce(inset, 10);

  // Memoize the generation of the shadow CSS string
  const shadowCss = useMemo(() => {
    // Convert hex color to RGBA for transparency control
    const rgbaColor = hexToRgba(debouncedColor, debouncedAlpha);

    // Construct the box-shadow string
    // Format: [inset] <offset-x> <offset-y> <blur-radius> <spread-radius> <color>
    const shadowString = `${debouncedOffsetX}px ${debouncedOffsetY}px ${debouncedBlurRadius}px ${debouncedSpreadRadius}px ${rgbaColor}`;

    return inset ? `inset ${shadowString}` : shadowString;
  }, [
    debouncedOffsetX,
    debouncedOffsetY,
    debouncedBlurRadius,
    debouncedSpreadRadius,
    debouncedColor,
    debouncedAlpha,
    debouncedInset,
    inset // Inset is a boolean, doesn't need debouncing itself, but its effect on the string does
  ]);

  // For displaying the CSS, sometimes a more readable format is preferred
  const formattedShadowCss = useMemo(() => {
    const lines = [
      `box-shadow: ${shadowCss};`,
      `-webkit-box-shadow: ${shadowCss};`,
      `-moz-box-shadow: ${shadowCss};`
    ];
    return lines.join('\n');
  }, [shadowCss]);

  // Create a style object for React components
  const shadowStyle = useMemo(() => {
    return {
      boxShadow: shadowCss
    };
  }, [shadowCss]);


  return { shadowCss, formattedShadowCss, shadowStyle };
}
