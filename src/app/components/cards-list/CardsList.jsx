import ItemCard from './card-item/ItemCard'

import React from 'react'
import './cards-list.scss'

const CardsList = ({ projects }) => {
  return (
    <div className="project">
      <div className="text">ВАШИ РАБОТЫ</div>
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

export default CardsList
