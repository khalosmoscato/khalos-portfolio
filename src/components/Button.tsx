import React from 'react';
import { colors } from '@styles/theme';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, href, onClick }) => {
  const base = `
    inline-flex items-center justify-center
    rounded-2xl px-6 py-3 font-medium
    bg-[${colors.primary}] text-white
    hover:bg-[${colors.primaryLight}]
    focus:outline-none focus:ring-2 focus:ring-[${colors.accent}]
    focus:ring-offset-2 transition-colors
  `;

  return href ? (
    <a href={href} className={base}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  );
};

export default Button;
