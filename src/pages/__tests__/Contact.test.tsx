import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

it('renders Contact page placeholder', () => {
  render(<Contact />);
  expect(screen.getByText(/Contact page placeholder/i)).toBeInTheDocument();
});
