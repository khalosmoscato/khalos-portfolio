import React from "react";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 max-w-5xl mx-auto"
      aria-label="Projects section"
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <p className="mb-6 text-lg">
        I’ll soon showcase selected projects here — from full-stack apps to experiments in accessibility, DevOps, and machine learning.  
        Meanwhile, you can explore my code on{" "}
        <a
          href="https://github.com/khalosmoscato"
          className="text-primary underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>.
      </p>

      {/* Placeholder grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="p-6 border rounded-2xl shadow-sm bg-white dark:bg-gray-900">
          <h3 className="text-xl font-semibold mb-2">Coming Soon 🚧</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Watch this space for my portfolio projects, case studies, and live demos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
