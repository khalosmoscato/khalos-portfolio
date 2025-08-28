import React from 'react';

interface Props {
  title: string;
  description: string;
  link: string;
  github?: string;
  tags?: string[];
  imageUrl?: string;
}

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  link,
  github,
  tags = [],
  imageUrl,
}) => {
  return (
    <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="font-heading text-xl mb-2">{title}</h3>
        <p className="text-text-light dark:text-gray-300 mb-4">{description}</p>
        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-4">
            {tags.map((t) => (
              <li
                key={t}
                className="text-xs px-2 py-1 rounded-full border border-gray-300 dark:border-gray-600"
              >
                {t}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-4">
          <a
            href={link}
            className="text-primary hover:text-primary-light font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Live Demo →
          </a>
          {github && (
            <a
              href={github}
              className="text-text-light hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
