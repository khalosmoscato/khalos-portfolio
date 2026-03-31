import React from 'react';

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="mx-auto max-w-4xl px-4 py-16"
      aria-label="Projects section"
    >
      {/* Centered Header for Desktop and Mobile */}
      <div className="flex flex-col gap-4 mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          A selection of my recent work focusing on scalable architecture, 
          user-centric design, and robust testing patterns.
        </p>
      </div>
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        
        {/* ZUBI Project Card */}
        <div className="flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition-all hover:shadow-md dark:bg-gray-900 dark:border-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-primary">Zubi</h3>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
              E-Commerce PWA
            </span>
          </div>
          
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            An accessible, <strong>mobile-first</strong> e-commerce platform. Built with a focus on <strong>TDD</strong>, 
            using Cypress for integration testing and Tailwind CSS for a highly responsive, 
            inclusive user interface.
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind CSS', 'Cypress', 'TDD', 'Node.js'].map((tech) => (
              <span key={tech} className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 sm:flex-row">
            <a
              href="https://github.com/khalosmoscato/zubi-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl bg-gray-900 px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Backend Code
            </a>
            <a
              href="https://github.com/khalosmoscato/zubi-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-center text-sm font-bold transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              Frontend Code
            </a>
          </div>
        </div>

        {/* PokéLike Project Card */}
        <div className="flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition-all hover:shadow-md dark:bg-gray-900 dark:border-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-primary">PokéLike</h3>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              API & Dashboard
            </span>
          </div>
          
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            A decoupled manager featuring a <strong>RESTful API</strong> built with <strong>ASP.NET Core</strong>. 
            Implements data persistence with <strong>PostgreSQL</strong> and is fully <strong>Dockerised</strong> 
            for consistent development.
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            {['.NET 8', 'C#', 'PostgreSQL', 'Docker', 'Entity Framework'].map((tech) => (
              <span key={tech} className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 sm:flex-row">
            <a
              href="https://github.com/khalosmoscato/pokelike-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl bg-gray-900 px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Backend Code
            </a>
            <a
              href="https://github.com/khalosmoscato/pokelike-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-center text-sm font-bold transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              Frontend Code
            </a>
          </div>
        </div>
      </div>

      {/* Enterprise Project Bar - Centered Content */}
      <div className="mt-12 flex flex-col items-center justify-between rounded-2xl border border-dashed border-gray-300 p-8 dark:border-gray-700 sm:flex-row">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Major Enterprise .NET Project
          </h3>
          <p className="text-sm text-gray-500">
            Currently architecting a high-stakes application with Clean Architecture and TDD.
          </p>
        </div>
        <div className="mt-4 inline-block animate-pulse rounded-full bg-gray-100 px-6 py-2 text-xs font-bold uppercase tracking-widest text-gray-400 dark:bg-gray-800 sm:mt-0">
          Coming June 2026
        </div>
      </div>
    </section>
  );
};

export default Projects;