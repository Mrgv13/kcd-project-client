import './progress-work.scss'
import ProgressBar from '../../components/progress-bar/ProgressBar'
import { works } from '../../../mock'

import ButtonMain from '../../components/button/ButtonMain'

import React, { useState } from 'react'

const ProgressWork = () => {
  const [workStatus, setWorkStatus] = useState(null)

  return (
    <div className="progress__page">
      <div className="block1">
        <div className="name">{works.worksName}</div>
        <div>
          <div className="works__name">
            <span>Вид работы</span>
            <span>Продолжительность</span>
            <span>Затраты</span>
            <span>Статус</span>
          </div>
        </div>
        <div className="scroll__block">
          {works.worksAttributes.map((element) => (
            <div
              className="works__attribute"
              onClick={() => setWorkStatus(element.status)}>
              <div>{element.name}</div>
              <div>{`${element.dateStart} - ${element.dateEnd}`}</div>
              <div>{element.price || 0} ₽</div>
              <div className="progress-bar__mini">
                {!!element.status ? (
                  <ProgressBar
                    completed={element.status.percentCompleted || 0}
                    bgcolor={'#7BD079'}
                    fontSize={'16px'}
                    textColor={element.status.percentCompleted < 36 && 'black'}
                  />
                ) : (
                  <ProgressBar
                    completed={0}
                    bgcolor={'#7BD079'}
                    fontSize={'16px'}
                    textColor={'black'}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="buttons">
          <ButtonMain
            styleComponent="default"
            text={'Добавить'}
            onClick={() => {}}
          />
          <ButtonMain
            styleComponent="default"
            text={'Удалить'}
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="block2">
        {!!workStatus ? (
          <div className="progress-bar">
            <ProgressBar
              completed={workStatus.percentCompleted || 0}
              bgcolor={'#7BD079'}
              textColor={workStatus.percentCompleted < 36 && 'black'}
            />
          </div>
        ) : (
          <div className="progress-bar">
            <ProgressBar
              completed={0}
              bgcolor={'#7BD079'}
              textColor={'black'}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProgressWork
