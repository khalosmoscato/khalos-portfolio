import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders all main sections', () => {
    // Home, About, Projects, Contact sections
    expect(screen.getByLabelText(/Home section/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/About section/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Projects section/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact section/i)).toBeInTheDocument();

    // Footer links (best practice: scope to footer)
    const footer = screen.getByRole('contentinfo'); // targets <footer>
    expect(within(footer).getByRole('link', { name: /GitHub/i })).toBeInTheDocument();
    expect(within(footer).getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument();
  });
});
