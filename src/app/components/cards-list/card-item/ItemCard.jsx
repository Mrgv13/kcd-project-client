import React from 'react'
import './item-card.scss'

const ItemCard = ({ worksName, worksAttributes }) => {
  return (
    <div className="project__card">
      <div className="color__row"></div>
      <div>
        <div className="project__name">{worksName}</div>
        <div className="project__attributes">
          <ul>
            {worksAttributes.map((element) => (
              <li key={element}>{element}</li>
            ))}
          </ul>
        </div>
        <div className="last__active">Недавняя активность</div>
      </div>
    </div>
  )
}

export default ItemCard
