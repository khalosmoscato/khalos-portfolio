import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import '@testing-library/jest-dom';

describe('Navbar Component', () => {
  test('renders navbar brand name', () => {
    render(<Navbar />);
    const brandElement = screen.getByText(/Khalos Moscato/i);
    expect(brandElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });
});