import './brigade-page.scss'

import ItemCard from '../../common/components/cards-list/card-item/ItemCard'

import React from 'react'

const projects = [
  {
    id: 1,
    worksName: 'Бригада 1',
    worksAttributes: [
      'Иванов И. И.',
      'Иванов И. И.',
      'Иванов И. И.',
      'Иванов И. И.',
      'Иванов И. И.',
    ],
  },
  {
    id: 2,
    worksName: 'Бригада 2',
    worksAttributes: [
      'Иванов И. И.',
      'Иванов И. И.',
      'Иванов И. И.',
      'Иванов И. И.',
      'Иванов И. И.',
    ],
  },
  {
    id: 3,
    worksName: 'Бригада 3',
    worksAttributes: [
      'Иванов И. И.',
      'Иванов И. И.',
      'Иванов И. И.',
      'Иванов И. И.',
      'Иванов И. И.',
    ],
  },
]

const BrigadesList = () => {
  return (
    <div className="project">
      <div className="text">БРИГАДЫ</div>
      <div className="project__recent">
        {projects.map((project) => (
          <ItemCard
            key={project.id}
            worksName={project.worksName}
            worksAttributes={project.worksAttributes}
          />
        ))}
      </div>
    </div>
  )
}

export default BrigadesList
