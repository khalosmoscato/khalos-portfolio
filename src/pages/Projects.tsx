import React from 'react';

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-4 py-16"
      aria-label="Projects section"
    >
      <h2 className="mb-8 text-3xl font-bold">Projects</h2>
      <p className="mb-6 text-lg">
        I’ll soon showcase selected projects here — from full-stack apps to experiments in
        accessibility, DevOps, and machine learning. Meanwhile, you can explore my code on{' '}
        <a
          href="https://github.com/khalosmoscato"
          className="text-primary underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      {/* Placeholder grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-gray-900">
          <h3 className="mb-2 text-xl font-semibold">Coming Soon 🚧</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Watch this space for my portfolio projects, case studies, and live demos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
