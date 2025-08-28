import React from 'react';

interface ButtonProps { children: React.ReactNode; href?: string; onClick?: () => void }

// Single source of truth for buttons so styling stays consistent.
const Button: React.FC<ButtonProps> = ({ children, href, onClick }) => {
  const base = 'inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-primary text-white hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors';
  return href ? <a href={href} className={base}>{children}</a> : <button onClick={onClick} className={base}>{children}</button>;
};

export default Button;
