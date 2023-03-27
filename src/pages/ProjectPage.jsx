import ProjectsList from '../components/project-page-components/projects-list/ProjectsList';

import React from 'react';

// mocking

const projects = [
  {
    id: 1,
    worksName: 'Project 1',
  },
  {
    id: 2,
    worksName: 'Project 1',
  },
  {
    id: 3,
    worksName: 'Project 1',
  },
];

//

const ProjectPage = () => {
  return (
    <>
      <ProjectsList projects={projects} />
    </>
  );
};

export default ProjectPage;
