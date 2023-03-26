import React from 'react';
import '../style/project-page.scss';
import ProjectCard from '../components/project-card/ProjectCard';

const ProjectPage = () => {
  return (
    <div className="project">
      <div className="text">ВАША РАБОТА</div>
      <div className="project__recent">
        <ProjectCard text={'CARD 1'} />
        <ProjectCard text={'CARD 2'} />
        <ProjectCard text={'CARD 3'} />
      </div>
    </div>
  );
};

export default ProjectPage;
