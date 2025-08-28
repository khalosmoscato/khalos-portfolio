import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  it('renders links correctly', () => {
    render(<Navbar />);

    // Check if links are rendered
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();

    // Check brand/logo
    expect(screen.getByText(/Khalos CF Moscato/i)).toBeInTheDocument();
  });
});
