import React from 'react';

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-4 text-center"
      aria-label="Home section"
    >
      <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
        Hi, I’m Khalos Calogero Filho Moscato 👋
      </h1>
      <p className="mb-6 max-w-2xl text-lg sm:text-xl">
        Turning ideas into code with <strong>React</strong>, <strong>TypeScript</strong>,{' '}
        <strong>C#</strong> & <strong>Python</strong>. Passionate about building
        accessible, responsive, and impactful digital experiences.
      </p>
      <a
        href="#projects"
        className="rounded-2xl bg-primary px-6 py-3 text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
      >
        View My Projects
      </a>
    </section>
  );
};

export default Home;
