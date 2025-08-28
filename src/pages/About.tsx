import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-4xl px-4 py-16"
      aria-label="About section"
    >
      <h2 className="mb-6 text-3xl font-bold">About Me</h2>
      <p className="mb-4 text-lg">
        I’m <strong>Khalos Moscato</strong>, a creative and detail-oriented software
        engineer based in London, U.K. After excelling in luxury retail at Louis Vuitton
        and Oyuna, I transitioned into tech and have since built full-stack web and mobile
        apps with technologies like React, TypeScript, Node.js, C#, .NET, PostgreSQL,
        MongoDB, and AWS.
      </p>
      <p className="mb-4 text-lg">
        I’m passionate about <strong>DevOps</strong> and{' '}
        <strong>AI/ML engineering</strong>, and I’m always curious to explore new
        technologies, whether in fintech, biotech, or game development.
      </p>
      <p className="mb-6 text-lg">
        Outside of tech, you’ll find me <strong>cycling</strong>,{' '}
        <strong>travelling</strong>, playing the <strong>piano</strong>, or enjoying a
        good video game 🎮. I value openness, diversity, and collaboration, and I thrive
        in inclusive environments.
      </p>
      <a
        href="#contact"
        className="inline-block rounded-2xl bg-primary px-6 py-3 text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Get in Touch
      </a>
    </section>
  );
};

export default About;
