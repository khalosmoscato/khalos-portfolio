import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders all placeholder sections and header/footer text', () => {
    render(<App />);

    // Check all placeholder sections
    const placeholders = ['Home page placeholder', 'About page placeholder', 'Projects page placeholder', 'Contact page placeholder'];
    placeholders.forEach((text) => {
      expect(screen.getByText(new RegExp(text, 'i'))).toBeInTheDocument();
    });

    // Check navbar text
    const nav = screen.getByRole('navigation');
    expect(within(nav).getByText(/Khalos CF Moscato/i)).toBeInTheDocument();

    // Check footer text
    const footer = screen.getByRole('contentinfo');
    expect(within(footer).getByText(/Khalos CF Moscato/i)).toBeInTheDocument();
    expect(within(footer).getByText(/Built with React \+ TypeScript/i)).toBeInTheDocument();
  });
});

