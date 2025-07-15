// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // Enable dark mode based on the 'class' attribute on the <html> tag
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Define your custom color palette
      colors: {
        primary: {
          50: '#E6E8F0',  // Very light primary shade (for subtle backgrounds/hovers)
          100: '#CCD1E0', // Lighter primary shade
          500: '#0A1B4C', // Primary (Dark Blue)
          600: '#091a43', // Slightly darker for hover states
          700: '#08173a', // Even darker for active states
        },
        secondary: {
          500: '#3B82F6', // Secondary (Light Blue)
          600: '#2563EB', // Slightly darker for hover states
        },
        success: {
          50: '#F0FDF4', // Lightest shade for alerts
          200: '#D1FAE5', // Border for alerts
          500: '#10B981', // Main green
          800: '#065F46', // Darker text for alerts
        },
        warning: {
          50: '#FFFBEB',
          200: '#FDE68A',
          500: '#F59E0B',
          800: '#92400E',
        },
        error: {
          50: '#FEF2F2',
          200: '#FECACA',
          500: '#EF4444',
          800: '#991B1B',
        },
        neutral: { // Renamed from 'text' and 'background' for clarity in config
          dark: '#1F2937', // Text (Dark)
          light: '#F3F4F6', // Background (Light Gray)
          'light-100': '#FAFAFA', // Even lighter background
          'light-200': '#E5E7EB', // Slightly darker light for borders/dividers
          'light-300': '#D1D5DB', // For step indicators
        },
      },
      // Define custom font families
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Roboto', 'Inter', 'sans-serif'],
      },
      // Define custom font sizes with line-heights
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['20px', { lineHeight: '28px', fontWeight: 'semibold' }],
        'xl': ['24px', { lineHeight: '32px', fontWeight: 'bold' }],
        '2xl': ['32px', { lineHeight: '40px', fontWeight: 'bold' }],
      },
      // Define custom spacing values
      spacing: {
        '18': '4.5rem',  // 72px
        '88': '22rem',   // 352px
        '128': '32rem',  // 512px
      },
      // Define custom border radius values
      borderRadius: {
        'sm': '4px',
        DEFAULT: '6px', // This is what `rounded` maps to
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      // Define custom box shadows
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'large': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'primary': '0 4px 12px rgba(10, 27, 76, 0.2)', // Using primary color
        'secondary': '0 4px 12px rgba(59, 130, 246, 0.2)', // Using secondary color
      },
    },
  },
  plugins: [],
}
