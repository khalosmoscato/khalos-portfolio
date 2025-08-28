import React from 'react';
import type { ReactNode } from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

interface Props { children: ReactNode }

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-background-dark text-text dark:text-text-inverted">
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;