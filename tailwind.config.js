/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#2563EB', light: '#3B82F6', dark: '#1E40AF' },
        accent: { DEFAULT: '#F59E0B', dark: '#B45309' },
        background: { DEFAULT: '#F9FAFB', dark: '#111827' },
        text: { DEFAULT: '#111827', light: '#6B7280', inverted: '#FFFFFF' }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif']
      },
      spacing: { section: '5rem' },
      borderRadius: { xl: '1rem', '2xl': '1.5rem' },
      boxShadow: { card: '0 4px 12px rgba(0,0,0,0.1)' }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
