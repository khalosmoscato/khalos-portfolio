import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar: React.FC = () => (
  <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white/70 backdrop-blur dark:border-gray-800 dark:bg-gray-900/70">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <a
        href="#home"
        className="font-heading text-base font-bold whitespace-nowrap shrink-0 sm:text-xl"
        aria-label="Go to top of page"
      >
        Khalos Moscato
      </a>
      <div className="flex items-center gap-3 text-sm sm:gap-6 sm:text-base">
        <a
          href="#about"
          className="transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          About
        </a>
        <a
          href="#projects"
          className="transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Contact
        </a>
        <div className="ml-1 shrink-0">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;