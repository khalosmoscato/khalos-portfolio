import { render, screen } from '@testing-library/react';
import About from '../About';

it('renders About page placeholder', () => {
  render(<About />);
  expect(screen.getByText(/About page placeholder/i)).toBeInTheDocument();
});
