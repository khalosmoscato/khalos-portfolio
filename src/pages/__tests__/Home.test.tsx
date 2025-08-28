import { render, screen } from '@testing-library/react';
import Home from '../Home';
import MainLayout from '../../layouts/MainLayout';

it('renders Home page placeholder', () => {
  render(<MainLayout><Home /></MainLayout>);
  expect(screen.getByText(/Home page placeholder/i)).toBeInTheDocument();
});
