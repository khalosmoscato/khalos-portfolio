import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact page', () => {
  it('renders Contact page content', () => {
    render(<Contact />);

    expect(screen.getByRole('heading', { name: /Let’s Connect/i })).toBeInTheDocument();
    expect(
      screen.getByText(/I’m always open to discussing new opportunities/i),
    ).toBeInTheDocument();
    
    // Using a broader search to ensure the links are found
    expect(screen.getByText(/khalos.moscato@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/linkedin.com\/in\/khalosmoscato/i)).toBeInTheDocument();
    expect(screen.getByText(/github.com\/khalosmoscato/i)).toBeInTheDocument();
  });
});