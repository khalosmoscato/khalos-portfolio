import React from 'react';

// Minimal footer - keep it small and informative.
const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-text-light dark:text-gray-400">
      © {year} Khalos CF Moscato · Built with React + TypeScript
    </footer>
  );
};

export default Footer;
