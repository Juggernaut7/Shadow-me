// src/pages/HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ShadowPreview from '../components/shadow-generator/ShadowPreview';
import CodeOutput from '../components/shadow-generator/CodeOutput';
import PresetsList from '../components/shadow-generator/PresetsList';

import { useTheme } from '../context/ThemeContext'; // To apply theme classes to the main container
import ShadowControls from '../components/shadow-generator/ShadownControls';
import SavedShadows from '../components/shadow-generator/SavedShadow';

/**
 * The main home page for the ShadowMe application.
 * It integrates all the generator components, header, and footer.
 */
const HomePage = () => {
  const { currentEffectiveTheme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${currentEffectiveTheme === 'dark' ? 'bg-neutral-dark' : 'bg-neutral-light'}`}>
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 font-body">
        <motion.h2
          className="font-heading text-2xl md:text-3xl font-bold text-center text-primary-500 dark:text-secondary-500 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Generate & Explore Box Shadows
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column: Shadow Controls */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ShadowControls />
          </motion.div>

          {/* Middle Column: Preview & Code Output */}
          <motion.div
            className="lg:col-span-1 flex flex-col gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ShadowPreview />
            <CodeOutput />
          </motion.div>

          {/* Right Column: Presets & Saved Shadows */}
          <motion.div
            className="lg:col-span-1 flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <PresetsList />
            <SavedShadows />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
