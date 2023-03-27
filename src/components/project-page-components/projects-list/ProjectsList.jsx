import ProjectCard from './project-card/ProjectCard';

import React from 'react';
import './projects-list.scss';

const ProjectsList = ({ projects }) => {
  return (
    <div className="project">
      <div className="text">ВАШИ РАБОТЫ</div>
      <div className="project__recent">
        {projects.map((project) => (
          <ProjectCard key={project.id} worksName={project.worksName} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
