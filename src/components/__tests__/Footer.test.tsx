import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  it('renders footer text', () => {
    render(<Footer />);

    expect(screen.getByText(/Khalos CF Moscato/i)).toBeInTheDocument();
    expect(screen.getByText(/Built with React \+ TypeScript/i)).toBeInTheDocument();
  });
});
