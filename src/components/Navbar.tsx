import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar: React.FC = () => (
  <nav className="bg-white/70 dark:bg-gray-900/70 backdrop-blur sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#home" className="font-heading text-xl font-bold" aria-label="Go to top of page">
        Khalos CF Moscato
      </a>
      <div className="flex items-center gap-4">
        <a href="#about" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2" aria-current="page">About</a>
        <a href="#projects" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Projects</a>
        <a href="#contact" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">Contact</a>
        <DarkModeToggle />
      </div>
    </div>
  </nav>
);

export default Navbar;