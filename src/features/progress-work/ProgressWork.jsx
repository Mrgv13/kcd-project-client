import './progress-work.scss'
import ProgressBar from '../../common/components/progress-bar/ProgressBar'
import { works } from '../../mock'

import ButtonMain from '../../common/components/button/ButtonMain'

import Modal from '../../common/components/modal/Modal'

import { CloseBottom } from '../../common/utils/icons/exportIcons'

import ProgressForm from '../../common/components/progressForm/ProgressForm'

import React, { useState } from 'react'

const ProgressWork = () => {
  const [workStatus, setWorkStatus] = useState(null)
  const [modalActive, setModalActive] = useState(false)

  const [data, setData] = useState({})

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
              key={element.name}
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
            onClick={() => {
              setModalActive(true)
            }}
          />
          <ButtonMain
            styleComponent="default"
            text={'Редактировать'}
            onClick={() => {
              setModalActive(true)
            }}
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
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="modal__block">
          <div className="name__block">
            <div className="empty"></div>
            <div className="name">NAME</div>
            <div className="svg__icons">
              <CloseBottom
                stroke={'black'}
                onClick={() => {
                  setModalActive(false)
                }}
              />
            </div>
          </div>
          <ProgressForm data={data} setData={setData} />
        </div>
      </Modal>
    </div>
  )
}

export default ProgressWork
