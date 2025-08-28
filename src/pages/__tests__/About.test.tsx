import { render, screen } from '@testing-library/react';
import About from '../About';
import '@testing-library/jest-dom';

describe('About page', () => {
  beforeEach(() => {
    render(<About />);
  });

  test('renders About page content', () => {
    // First paragraph (contains "Khalos Moscato")
    const paragraphs = screen.getAllByText(
      (_content, element) => !!element && element.textContent?.includes('Khalos Moscato'),
    );

    const firstParagraph = paragraphs.find((el) => el.tagName === 'P');
    expect(firstParagraph).toBeInTheDocument();

    // Second paragraph (contains "DevOps" and "AI/ML engineering")
    const secondParagraph = screen.getAllByText(
      (_content, element) =>
        !!element &&
        element.tagName === 'P' &&
        element.textContent?.includes('DevOps') &&
        element.textContent?.includes('AI/ML engineering'),
    )[0];
    expect(secondParagraph).toBeInTheDocument();

    // Third paragraph (contains "cycling", "travelling", "piano")
    const thirdParagraph = screen.getAllByText(
      (_content, element) =>
        !!element &&
        element.tagName === 'P' &&
        element.textContent?.includes('cycling') &&
        element.textContent?.includes('travelling') &&
        element.textContent?.includes('piano'),
    )[0];
    expect(thirdParagraph).toBeInTheDocument();

    // "Get in Touch" button/link
    const getInTouchButton = screen.getByRole('link', { name: /get in touch/i });
    expect(getInTouchButton).toBeInTheDocument();
  });
});
