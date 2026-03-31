import React from 'react';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-4 py-16 text-center"
      aria-label="Contact section"
    >
      {/* Updated to text-4xl to match About and Projects */}
      <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
        Let’s Connect
      </h2>
      
      <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        I’m always open to discussing new opportunities, collaborations, or simply
        connecting with like-minded people. Drop me a message via email or reach out on
        LinkedIn.
      </p>

      <ul className="space-y-4 text-lg">
        <li className="flex items-center justify-center gap-2">
          <span>📧</span>
          <a
            href="mailto:khalos.moscato@gmail.com"
            className="text-primary underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary"
          >
            khalos.moscato@gmail.com
          </a>
        </li>
        <li className="flex items-center justify-center gap-2">
          <span>💼</span>
          <a
            href="https://www.linkedin.com/in/khalosmoscato/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary"
          >
            linkedin.com/in/khalosmoscato
          </a>
        </li>
        <li className="flex items-center justify-center gap-2">
          <span>🖥</span>
          <a
            href="https://github.com/khalosmoscato"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary"
          >
            github.com/khalosmoscato
          </a>
        </li>
        <li className="flex items-center justify-center gap-2">
          <span>📱</span>
          <span className="text-gray-700 dark:text-gray-300">+44 7865 359321</span>
        </li>
        <li className="flex items-center justify-center gap-2">
          <span>📍</span>
          <span className="text-gray-700 dark:text-gray-300">London, U.K.</span>
        </li>
      </ul>
    </section>
  );
};

export default Contact;