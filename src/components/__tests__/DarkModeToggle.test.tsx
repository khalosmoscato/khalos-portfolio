import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import DarkModeToggle from '../DarkModeToggle';

// Create a mock function
const toggleDarkModeMock = vi.fn();

// Mock the useDarkMode hook
vi.mock('@hooks/useDarkMode', () => ({
  default: () => ({
    isDark: false,
    toggleDarkMode: toggleDarkModeMock,
  }),
}));

describe('DarkModeToggle component', () => {
  it('renders the toggle and calls toggleDarkMode on click', async () => {
    const user = userEvent.setup();

    render(<DarkModeToggle />);

    const button = screen.getByRole('button', { name: /toggle dark mode/i });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(toggleDarkModeMock).toHaveBeenCalled();
  });
});
