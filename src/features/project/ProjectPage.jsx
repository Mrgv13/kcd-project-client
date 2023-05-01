import CardsList from '../../common/components/cards-list/CardsList'

import React from 'react'

// mocking

const projects = [
  {
    id: 1,
    worksName: 'Проект 1',
    worksAttributes: ['Детали', 'Сроки', 'Ресурсы'],
  },
  {
    id: 2,
    worksName: 'Проект 2',
    worksAttributes: ['Детали', 'Сроки', 'Ресурсы'],
  },
  {
    id: 3,
    worksName: 'Проект 3',
    worksAttributes: ['Детали', 'Сроки', 'Ресурсы'],
  },
]

//

const ProjectPage = () => {
  return (
    <>
      <CardsList projects={projects} />
    </>
  )
}

export default ProjectPage
