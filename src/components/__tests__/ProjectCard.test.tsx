import { render, within } from '@testing-library/react';
import ProjectCard from '../ProjectCard';

const project = {
  title: 'Test Project',
  description: 'This is a test project',
  link: 'https://example.com',
};

test('ProjectCard renders project title, description, and link', () => {
  const { container } = render(<ProjectCard {...project} />);

  // Scope queries inside the article (card)
  const card = container.querySelector('article')!;
  const utils = within(card);

  expect(utils.getByText(project.title)).toBeInTheDocument();
  expect(utils.getByText(project.description)).toBeInTheDocument();
  expect(utils.getByRole('link', { name: /Live Demo/i })).toHaveAttribute(
    'href',
    project.link,
  );
});
