import './item-card.scss'

import React from 'react'

const ItemCard = ({ worksName, worksAttributes = [], functional }) => {
  return (
    <>
      <div className="project__card" onClick={functional}>
        <div className="color__row"></div>
        <div>
          <div className="project__name">{worksName}</div>
          <div className="project__attributes">
            <ul>
              {worksAttributes.map((element) => (
                <li key={element.id}>{element.work_name}</li>
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
