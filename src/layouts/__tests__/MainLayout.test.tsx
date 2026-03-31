import { render, screen, within } from '@testing-library/react';
import MainLayout from '../MainLayout';
import '@testing-library/jest-dom';

describe('MainLayout Component', () => {
  test('renders navbar and footer within the layout', () => {
    render(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    );

    const navbar = screen.getByRole('navigation');
    const navbarUtils = within(navbar);
    expect(navbarUtils.getByText(/Khalos Moscato/i)).toBeInTheDocument();

    expect(screen.getByText(/Test Content/i)).toBeInTheDocument();
    expect(screen.getByText(/Khalos Moscato/i)).toBeInTheDocument();
  });
});