import './item-card.scss'

import React from 'react'

const ItemCard = ({ worksName, worksAttributes, onClick }) => {
  return (
    <>
      <div className="project__card" onClick={onClick}>
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
    </>
  )
}

export default ItemCard
