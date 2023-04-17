import CardsList from '../../components/cards-list/CardsList'

import React from 'react'

// mocking

const projects = [
  {
    id: 1,
    worksName: 'Бригада 1',
    worksAttributes: ['Детали', 'Сроки', 'Ресурсы'],
  },
  {
    id: 2,
    worksName: 'Бригада 2',
    worksAttributes: ['Детали', 'Сроки', 'Ресурсы'],
  },
  {
    id: 3,
    worksName: 'Бригада 3',
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
