import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects page', () => {
  it('renders Projects page content', () => {
    render(<Projects />);

    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument();
    expect(
      screen.getByText(/I’ll soon showcase selected projects here/i),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();
    expect(screen.getByText(/Coming Soon 🚧/i)).toBeInTheDocument();
  });
});
