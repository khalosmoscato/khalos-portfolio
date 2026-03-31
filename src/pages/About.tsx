import React from 'react';

const About: React.FC = () => {
  const skillCategories = [
    { 
      title: 'Backend', 
      skills: 'C#, .NET 8 and 10, ASP.NET Core, Node.js, Python, REST APIs' 
    },
    { 
      title: 'Frontend', 
      skills: 'React, TypeScript, JavaScript, Tailwind CSS, Vite, HTML/CSS' 
    },
    { 
      title: 'Database & Cloud', 
      skills: 'PostgreSQL, Entity Framework, MongoDB, Supabase, Docker, AWS' 
    },
    { 
      title: 'Testing & Tools', 
      skills: 'TDD, xUnit, Moq, Vitest, Cypress, Git, CI/CD, Figma, Agile' 
    },
  ];

  return (
    <section
      id="about"
      className="mx-auto max-w-4xl px-4 py-16"
      aria-label="About section"
    >
      {/* Title updated to text-4xl and fully centered */}
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white">
        About Me
      </h2>
      
      {/* Paragraphs centered for a cohesive look with the title */}
      <div className="space-y-6 text-center text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        <p className="mx-auto max-w-3xl">
          I’m <strong>Khalos Moscato</strong>, a software engineer based in London specialising in the <strong>.NET ecosystem</strong>. 
          Transitioning from luxury management at <strong>Louis Vuitton</strong> and <strong>Oyuna</strong>, 
          I bring a high-stakes mindset to software development—focusing on the precision and reliability required for enterprise-grade systems.
        </p>

        <p className="mx-auto max-w-3xl">
          I am a <strong>polyglot engineer</strong>. While my primary focus is architecting robust back-end services with <strong>C#</strong>, 
          I am equally proficient in <strong>TypeScript</strong> and <strong>Python</strong>. I believe in selecting the right tool for the job, 
          whether that’s building a high-performance RESTful API or an accessible, mobile-first frontend.
        </p>
      </div>

      {/* Technical Toolkit Grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div 
            key={category.title} 
            className="flex flex-col h-full rounded-xl border border-gray-100 bg-gray-50/50 p-6 dark:border-gray-800 dark:bg-gray-900/50 transition-all hover:border-primary/30"
          >
            <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
              {category.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {category.skills}
            </p>
          </div>
        ))}
      </div>

      {/* Centered button/text container */}
      <div className="mt-12 flex flex-col items-center gap-6">
        <a
          href="#contact"
          className="inline-block rounded-2xl bg-primary px-8 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Get in Touch
        </a>
        <p className="text-center text-sm italic text-gray-500">
          Multilingual: English, Italian, Spanish, & Portuguese.
        </p>
      </div>
    </section>
  );
};

export default About;