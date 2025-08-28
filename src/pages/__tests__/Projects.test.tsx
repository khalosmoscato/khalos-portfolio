import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

it('renders Projects page placeholder', () => {
  render(<Projects />);
  expect(screen.getByText(/Projects page placeholder/i)).toBeInTheDocument();
});
