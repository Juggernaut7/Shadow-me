// src/App.jsx
import React from 'react';
import HomePage from './pages/HomePage';

/**
 * The main application component for ShadowMe.
 * It renders the HomePage, which contains all the core functionality and UI.
 */
function App() {
  return (
    // The main layout and theme classes are handled by HomePage's root div
    // and ThemeProvider in main.jsx.
    <HomePage />
  );
}

export default App;
