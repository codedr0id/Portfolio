import React from "react";
import "../scss/Project.scss";

const Project = ({ title, img, description, tech, previewUrl, sourceUrl }) => {
  return (
    <li className="Project" key={title}>
      {img && (
        <figure className="Project__img">
          <img src={img} alt={title} />
        </figure>
      )}

      <div className="Project__details">
        <h3 className="Project__title">{title}</h3>
        <p className="Project__description">{description}</p>

        <ul className="Project__tech">{tech}</ul>

        {(previewUrl || sourceUrl) && (
          <div className="Project__links">
            {previewUrl && (
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta"
              >
                See Live
              </a>
            )}
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta cta-secondary"
              >
                Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </li>
  );
};

export default Project;