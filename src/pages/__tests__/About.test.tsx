import { render, screen } from '@testing-library/react';
import About from '../About';
import '@testing-library/jest-dom';

describe('About Page', () => {
  test('renders about heading', () => {
    render(<About />);
    const headingElement = screen.getByText(/About Me/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders biography paragraphs', () => {
    render(<About />);
    
    // Using a function matcher to handle text split by <strong> tags
    const bioParagraph = screen.getByText((content, element) => {
      const hasText = (node: Element) => 
        node.textContent === "I am a polyglot engineer. While my primary focus is architecting robust back-end services with C#, I am equally proficient in TypeScript and Python. I believe in selecting the right tool for the job, whether that’s building a high-performance RESTful API or an accessible, mobile-first frontend.";
      return hasText(element as Element);
    });

    expect(bioParagraph).toBeInTheDocument();
  });
});