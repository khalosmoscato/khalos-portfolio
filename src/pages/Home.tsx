import React from "react";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center px-4"
      aria-label="Home section"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Hi, I’m Khalos Calogero Filho Moscato 👋
      </h1>
      <p className="text-lg sm:text-xl mb-6 max-w-2xl">
        Turning ideas into code with <strong>React</strong>, <strong>TypeScript</strong>, <strong>C#</strong> & <strong>Python</strong>.  
        Passionate about building accessible, responsive, and impactful digital experiences.
      </p>
      <a
        href="#projects"
        className="bg-primary text-white px-6 py-3 rounded-2xl shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
      >
        View My Projects
      </a>
    </section>
  );
};

export default Home;