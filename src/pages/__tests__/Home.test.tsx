import { render, screen } from '@testing-library/react';
import Home from '../Home';
import MainLayout from '../../layouts/MainLayout';

describe('Home page', () => {
  it('renders Home page content', () => {
    render(
      <MainLayout>
        <Home />
      </MainLayout>,
    );

    expect(
      screen.getByRole('heading', { name: /Hi, I’m Khalos Calogero Filho Moscato/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Turning ideas into code with/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View My Projects/i })).toBeInTheDocument();
  });
});
