import ItemCard from '../../components/cards-list/card-item/ItemCard'

import React from 'react'

const WorksList = () => {
  const projects = [
    {
      id: 1,
      worksName: 'Подготовительные работы',
      worksAttributes: [
        'Заключение договора',
        'Выплата аванса',
        'Перебазировка компании',
        'Передача объекта и документов',
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

  return (
    <div className="project">
      <div className="text">Работы</div>
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

export default WorksList
