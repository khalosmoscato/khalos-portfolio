import { render, screen } from '@testing-library/react';
import Projects from '../Projects';
import '@testing-library/jest-dom';

describe('Projects Page', () => {
  test('renders projects heading', () => {
    render(<Projects />);
    const headingElement = screen.getByText(/^Projects$/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders project cards', () => {
    render(<Projects />);
    const projectCards = screen.getAllByRole('heading', { level: 3 });
    expect(projectCards.length).toBeGreaterThan(0);
  });
});