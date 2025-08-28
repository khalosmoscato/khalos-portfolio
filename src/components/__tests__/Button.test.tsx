import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';
import { vi } from 'vitest';

it('renders Button and handles click', async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click me</Button>);

  await user.click(screen.getByRole('button', { name: /click me/i }));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
