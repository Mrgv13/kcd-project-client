import './progress-work.scss'

import ProgressBar from '../../common/components/progress-bar/ProgressBar'

import ButtonMain from '../../common/components/button/ButtonMain'

import Modal from '../../common/components/modal/Modal'

import { CloseBottom, Trash } from '../../common/utils/icons/exportIcons'

import ProgressForm from '../../common/components/progressForm/ProgressForm'

import { Context } from '../../index'

import {
  deleteWorkAttrebute,
  updateWorkAttrebute,
} from '../../common/http/workAtt-api'

import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { useParams } from 'react-router-dom'

const ProgressWork = observer(() => {
  const { workAttr } = useContext(Context)
  const params = useParams()
  const [workAtt, setWorkAtt] = useState({
    works_attributes_status: {},
  })

  const [name, setName] = useState('')
  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState('')
  const [price, setPrice] = useState(0)
  const [procent, setProcent] = useState(0)

  useEffect(() => {
    setName(workAtt.work_name)
    setDateStart(workAtt.date_start)
    setDateEnd(workAtt.date_end)
    setPrice(workAtt.price)
    setProcent(workAtt.works_attributes_status.percent_complited)
  }, [workAtt])

  useEffect(() => {
    void workAttr.getProjectsList(params.id)

    return () => workAttr.resetStore
  }, [workAttr])

  const [modalActive, setModalActive] = useState(false)

  const deleteWorkAtt = (id) => {
    deleteWorkAttrebute(id).then((data) => window.location.reload())
  }

  const updateWork = (id, updateAttrebute) => {
    updateWorkAttrebute(id, updateAttrebute).then((data) => data)
    window.location.reload()
  }

  return (
    <div className="progress__page">
      <>
        <div className="block1">
          <div className="name">{''}</div>
          <div>
            <div className="works__name">
              <span>Вид работы</span>
              <span>Продолжительность</span>
              <span>Затраты</span>
              <span>Процент выполнения</span>
            </div>
          </div>
          <div className="scroll__block">
            {workAttr.isWorksAttr.map((element) => (
              <div
                key={element.id}
                className="works__attribute"
                onClick={() => setWorkAtt(element)}>
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
          </div>
        </div>
        <div className="block2">
          <div>
            Вид работ{' '}
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            Продолжительность
            <input
              type="date"
              value={dateStart}
              onChange={(e) => setDateStart(e.target.value)}
            />
            <input
              type="date"
              value={dateEnd}
              onChange={(e) => setDateEnd(e.target.value)}
            />
          </div>
          <div>
            Затраты{' '}
            <input value={price} onChange={(e) => setPrice(+e.target.value)} />
          </div>
          <div>
            Процент выполнения
            <input
              value={procent}
              onChange={(e) => setProcent(+e.target.value)}
            />
          </div>
          <ButtonMain
            styleComponent={'default'}
            text={'Обновить'}
            onClick={() => {
              updateWork(workAtt.id, {
                work_name: name,
                date_start: dateStart,
                date_end: dateEnd,
                price: price,
                percent_complited: procent,
              })
            }}></ButtonMain>
        </div>
      </>

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
          <ProgressForm id={params.id} />
        </div>
      </Modal>
    </div>
  )
})

export default ProgressWork
