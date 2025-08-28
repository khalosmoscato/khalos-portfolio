import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact page', () => {
  it('renders Contact page content', () => {
    render(<Contact />);

    expect(screen.getByRole('heading', { name: /Let’s Connect/i })).toBeInTheDocument();
    expect(
      screen.getByText(/I’m always open to discussing new opportunities/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /khalos.moscato@gmail.com/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /linkedin.com\/in\/khalosmoscato/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /github.com\/khalosmoscato/i }),
    ).toBeInTheDocument();
  });
});
