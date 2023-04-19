import './progress-work.scss'
import ProgressBar from '../../components/progress-bar/ProgressBar'
import { works } from '../../../mock'

import React, { useState } from 'react'

const ProgressWork = () => {
  const [workStatus, setWorkStatus] = useState(null)

  return (
    <div className="progress__page">
      <div className="block1">
        <div className="name">{works.worksName}</div>
        <div className="block1__body">
          <span>Вид работы</span>
          <span>Продолжительность</span>
          <span>Затраты</span>
          <span>Статус</span>
          {works.worksAttributes.map((element) => (
            <>
              <div
                onClick={() => setWorkStatus(element.status)}
                style={{ cursor: 'pointer' }}>
                {element.name}
              </div>
              <div>{`${element.dateStart} - ${element.dateEnd}`}</div>
              <div>{element.price}</div>
              <div>{element.status.percentCompleted}</div>
            </>
          ))}
        </div>
      </div>
      <div className="block2">
        {!!workStatus ? (
          <div className="progress-bar">
            <ProgressBar
              completed={workStatus.percentCompleted}
              bgcolor={'green'}
            />
          </div>
        ) : (
          <div>NO ATTRIBUTE</div>
        )}
      </div>
    </div>
  )
}

export default ProgressWork
