// src/components/shadow-generator/CodeOutput.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { copyToClipboard } from '../../utils/helpers';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { FaCopy } from 'react-icons/fa'; // Copy icon
import { IconContext } from 'react-icons';
import { useShadowGenerator } from '../../hooks/useShadownGenerator';

/**
 * Displays the generated CSS code and provides a copy-to-clipboard button.
 */
const CodeOutput = () => {
  const { formattedShadowCss } = useShadowGenerator();

  return (
    <Card className="p-6">
      <motion.h3
        className="font-heading text-lg font-semibold text-neutral-dark dark:text-neutral-light mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        CSS Code
      </motion.h3>
      <div className="relative bg-neutral-light-100 dark:bg-neutral-dark/70 rounded-md p-4 font-mono text-sm text-neutral-dark dark:text-neutral-light overflow-auto max-h-48">
        <pre className="whitespace-pre-wrap break-all">{formattedShadowCss}</pre>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(formattedShadowCss)}
          className="absolute top-2 right-2 p-2 rounded-md hover:bg-neutral-light-200 dark:hover:bg-neutral-dark/50"
          title="Copy to clipboard"
        >
          <IconContext.Provider value={{ className: "text-neutral-dark dark:text-neutral-light" }}>
            <FaCopy size={16} />
          </IconContext.Provider>
        </Button>
      </div>
    </Card>
  );
};

export default CodeOutput;
