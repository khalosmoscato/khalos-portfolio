import React from 'react';
import type { ReactNode } from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text dark:bg-background-dark dark:text-text-inverted">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
