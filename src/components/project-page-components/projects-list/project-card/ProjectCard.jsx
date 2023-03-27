import React from 'react';
import './project-card.scss';

const ProjectCard = ({ worksName }) => {
  return (
    <div className="project__card">
      <div className="color__row"></div>
      <div>
        <div className="project__name">{worksName}</div>
        <div className="project__attributes">
          <ul>
            <li>Детали</li>
            <li>Сроки</li>
            <li>Ресурсы</li>
          </ul>
        </div>
        <div className="last__active">Недавняя активность</div>
      </div>
    </div>
  );
};

export default ProjectCard;
