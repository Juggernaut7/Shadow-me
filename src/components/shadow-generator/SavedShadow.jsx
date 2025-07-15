// src/components/shadow-generator/SavedShadows.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useShadow } from '../../context/ShadowContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { toast } from 'react-toastify';
import { FaSave, FaTrash, FaPaintBrush } from 'react-icons/fa'; // Icons for save, delete, apply
import { IconContext } from 'react-icons';
import { useTheme } from '../../context/ThemeContext';
import { useShadowGenerator } from '../../hooks/useShadownGenerator';

/**
 * Manages user-saved box-shadows using localStorage.
 * Allows saving the current shadow, applying a saved one, and deleting saved shadows.
 */
const SavedShadows = () => {
  const { shadowProperties, applyPreset } = useShadow();
  const { shadowCss } = useShadowGenerator(); // Get the current generated CSS string
  const { currentEffectiveTheme } = useTheme();

  // useLocalStorage to store an array of saved shadows
  // Each saved shadow will be an object: { id: string, name: string, properties: ShadowProperties, css: string }
  const [savedShadows, setSavedShadows] = useLocalStorage('shadowme_saved_shadows', []);
  const [newShadowName, setNewShadowName] = useState('');

  // Function to generate a unique ID (simple timestamp for now)
  const generateUniqueId = () => Date.now().toString();

  const handleSaveShadow = () => {
    if (!newShadowName.trim()) {
      toast.error('Please enter a name for your shadow.', { theme: currentEffectiveTheme });
      return;
    }

    // Check if a shadow with the same name already exists
    if (savedShadows.some(s => s.name.toLowerCase() === newShadowName.trim().toLowerCase())) {
      toast.warn('A shadow with this name already exists. Please choose a different name.', { theme: currentEffectiveTheme });
      return;
    }

    const newSavedShadow = {
      id: generateUniqueId(),
      name: newShadowName.trim(),
      properties: { ...shadowProperties }, // Save a copy of current properties
      css: shadowCss, // Save the generated CSS string for quick display
    };

    setSavedShadows(prev => [...prev, newSavedShadow]);
    setNewShadowName(''); // Clear input
    toast.success('Shadow saved successfully!', { theme: currentEffectiveTheme });
  };

  const handleDeleteShadow = (id) => {
    setSavedShadows(prev => prev.filter(shadow => shadow.id !== id));
    toast.info('Shadow deleted.', { theme: currentEffectiveTheme });
  };

  const handleApplySavedShadow = (properties) => {
    applyPreset(properties); // Re-use applyPreset from ShadowContext
    toast.success('Saved shadow applied!', { theme: currentEffectiveTheme });
  };

  return (
    <Card className="p-6">
      <motion.h3
        className="font-heading text-lg font-semibold text-neutral-dark dark:text-neutral-light mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Saved Shadows
      </motion.h3>

      {/* Input to save current shadow */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          type="text"
          placeholder="Name your shadow"
          value={newShadowName}
          onChange={(e) => setNewShadowName(e.target.value)}
          className="flex-grow p-2 border border-neutral-light-200 dark:border-neutral-dark/50 rounded-md
                     bg-white dark:bg-neutral-dark text-neutral-dark dark:text-neutral-light
                     focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm font-body"
        />
        <Button
          onClick={handleSaveShadow}
          variant="primary"
          size="md"
          className="w-full sm:w-auto"
        >
          <IconContext.Provider value={{ className: "mr-1" }}>
            <FaSave size={14} />
          </IconContext.Provider>
          Save Current
        </Button>
      </div>

      {/* List of saved shadows */}
      {savedShadows.length === 0 ? (
        <motion.p
          className="text-sm text-neutral-dark/70 dark:text-neutral-light/70 text-center py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          No saved shadows yet. Save your favorites!
        </motion.p>
      ) : (
        <div className="space-y-3 max-h-88 overflow-y-auto pr-2"> {/* Added max-height and overflow for scrollability */}
          <AnimatePresence>
            {savedShadows.map((shadow) => (
              <motion.div
                key={shadow.id}
                className="p-3 rounded-md bg-neutral-light-100 dark:bg-neutral-dark/70 border border-neutral-light-200 dark:border-neutral-dark/50 flex items-center justify-between gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex-grow">
                  <p className="font-body text-sm font-medium text-neutral-dark dark:text-neutral-light mb-1">{shadow.name}</p>
                  <pre className="font-mono text-xs text-neutral-dark/60 dark:text-neutral-light/60 whitespace-pre-wrap break-all max-h-8 overflow-hidden">
                    {shadow.css}
                  </pre>
                </div>
                <div className="flex-shrink-0 flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleApplySavedShadow(shadow.properties)}
                    className="p-2"
                    title="Apply this shadow"
                  >
                    <IconContext.Provider value={{ className: "text-primary-500 dark:text-secondary-500" }}>
                      <FaPaintBrush size={14} />
                    </IconContext.Provider>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteShadow(shadow.id)}
                    className="p-2"
                    title="Delete shadow"
                  >
                    <IconContext.Provider value={{ className: "text-error-500" }}>
                      <FaTrash size={14} />
                    </IconContext.Provider>
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </Card>
  );
};

export default SavedShadows;
