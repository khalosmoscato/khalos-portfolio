import React from 'react';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-4 py-16 text-center"
      aria-label="Contact section"
    >
      <h2 className="mb-6 text-3xl font-bold">Let’s Connect</h2>
      <p className="mb-6 text-lg">
        I’m always open to discussing new opportunities, collaborations, or simply
        connecting with like-minded people. Drop me a message via email or reach out on
        LinkedIn.
      </p>

      <ul className="space-y-3 text-lg">
        <li>
          📧{' '}
          <a
            href="mailto:khalos.moscato@gmail.com"
            className="text-primary underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary"
          >
            khalos.moscato@gmail.com
          </a>
        </li>
        <li>
          💼{' '}
          <a
            href="https://www.linkedin.com/in/khalosmoscato/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary"
          >
            linkedin.com/in/khalosmoscato
          </a>
        </li>
        <li>
          🖥{' '}
          <a
            href="https://github.com/khalosmoscato"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary"
          >
            github.com/khalosmoscato
          </a>
        </li>
        <li>📱 +44 7865 359321</li>
        <li>📍 London, U.K.</li>
      </ul>
    </section>
  );
};

export default Contact;
