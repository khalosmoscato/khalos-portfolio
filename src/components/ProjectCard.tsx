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
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-shadow focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className="h-40 w-full object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="mb-2 font-heading text-xl">{title}</h3>
        <p className="mb-4 text-text-light dark:text-gray-300">{description}</p>
        {tags.length > 0 && (
          <ul className="mb-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-gray-300 px-2 py-1 text-xs dark:border-gray-600"
              >
                {t}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-4">
          <a
            href={link}
            className="font-medium text-primary hover:text-primary-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
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
