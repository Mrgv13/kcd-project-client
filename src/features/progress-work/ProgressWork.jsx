import './progress-work.scss'

import ProgressBar from '../../common/components/progress-bar/ProgressBar'

import { works } from '../../mock'

import ButtonMain from '../../common/components/button/ButtonMain'

import Modal from '../../common/components/modal/Modal'

import { CloseBottom, Trash } from '../../common/utils/icons/exportIcons'

import ProgressForm from '../../common/components/progressForm/ProgressForm'

import { Context } from '../../index'

import { deleteWorkAttrebute } from '../../common/http/workAtt-api'

import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { useParams } from 'react-router-dom'

const ProgressWork = observer(() => {
  const { workAttr } = useContext(Context)
  const params = useParams()

  useEffect(() => {
    void workAttr.getProjectsList(params.id)

    console.log(workAttr.isWorksAttr)

    return () => workAttr.resetStore
  }, [workAttr])

  const [workStatus, setWorkStatus] = useState(null)
  const [modalActive, setModalActive] = useState(false)

  const [data, setData] = useState({})

  const deleteWorkAtt = (id) => {
    deleteWorkAttrebute(id).then((data) => window.location.reload())
  }

  return (
    <div className="progress__page">
      {!works ? (
        <div>data not found</div>
      ) : (
        <>
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
              {workAttr.isWorksAttr.map((element) => (
                <div
                  key={element.id}
                  className="works__attribute"
                  onClick={() =>
                    setWorkStatus(element.works_attributes_status)
                  }>
                  <div>{element.work_name}</div>
                  <div>{`${element.date_start} - ${element.date_end}`}</div>
                  <div>{element.price} ₽</div>
                  <div className="progress-bar__mini">
                    {!!element.works_attributes_status ? (
                      <ProgressBar
                        completed={
                          element.works_attributes_status.percent_complited || 0
                        }
                        bgcolor={'#7BD079'}
                        fontSize={'16px'}
                        textColor={
                          element.works_attributes_status.percent_complited <
                            36 && 'black'
                        }
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
                  <div
                    onClick={() => {
                      deleteWorkAtt(element.id)
                    }}
                    style={{
                      cursor: 'pointer',
                      position: 'fixed',
                      right: 10,
                    }}>
                    <Trash />
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
                  completed={workStatus.percent_complited || 0}
                  bgcolor={'#7BD079'}
                  textColor={workStatus.percent_complited < 36 && 'black'}
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
        </>
      )}

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
})

export default ProgressWork
