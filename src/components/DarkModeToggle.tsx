import React from 'react';
import useDarkMode from '@hooks/useDarkMode';

const DarkModeToggle: React.FC = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={toggleDarkMode}
      className="ml-2 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-gray-600"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;
