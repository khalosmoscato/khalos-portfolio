import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 py-6 text-center text-sm text-text-light dark:border-gray-800 dark:text-gray-400">
      © {year} Khalos CF Moscato · Built with React + TypeScript ·{' '}
      <a
        href="https://github.com/khalosmoscato"
        className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      >
        GitHub
      </a>{' '}
      ·{' '}
      <a
        href="https://www.linkedin.com/in/khalosmoscato/"
        className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      >
        LinkedIn
      </a>
    </footer>
  );
};

export default Footer;
