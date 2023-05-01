import React from 'react'

import './work-card.scss'

const WorkCard = ({ name, worksAttributes }) => {
  return (
    <div className="work__card">
      <div className="work__name">{name}</div>
      <div>
        {worksAttributes.map((element) => (
          <div key={element.name} className="work__attributes">
            <div className="name">{element.name}</div>

            <div className="status">
              {element?.status && (
                <div
                  className={
                    element.status.completed ? 'green oval' : 'red oval'
                  }>
                  {element.status.text}
                </div>
              )}
            </div>

            <div className="date">{`${element?.dateStart} ${element?.dateEnd}`}</div>

            <div className="works__include">
              {element.worksAttributes.length !== 0 &&
                element.worksAttributes.map((element) => (
                  <div key={element.name} className="work__include__item">
                    <div className="name">{element.name}</div>
                    <div
                      className={
                        element.status.completed ? 'green oval' : 'red oval'
                      }>
                      {element.status.text}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkCard
