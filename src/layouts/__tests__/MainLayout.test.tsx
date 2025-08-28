import { render, screen, within } from '@testing-library/react';
import MainLayout from '../MainLayout';

test('MainLayout renders with children and navbar content', () => {
  render(
    <MainLayout>
      <div>Test Content</div>
    </MainLayout>,
  );

  // Check children
  expect(screen.getByText(/Test Content/i)).toBeInTheDocument();

  // Check Navbar only (avoid Footer duplicate)
  const navbar = screen.getByRole('navigation');
  const navbarUtils = within(navbar);
  expect(navbarUtils.getByText(/Khalos CF Moscato/i)).toBeInTheDocument();
});
