import ItemCard from '../../common/components/cards-list/card-item/ItemCard'

import Modal from '../../common/components/modal/Modal'

import { Context } from '../../index'

import { CloseBottom, Trash } from '../../common/utils/icons/exportIcons'

import { createWork, deleteWork } from '../../common/http/work-aip'

import ButtonMain from '../../common/components/button/ButtonMain'

import React, { useContext, useEffect, useState } from 'react'

import { observer } from 'mobx-react'
import CurrencyInput from 'react-currency-input-field'

const WorksList = observer(() => {
  const { projects, user, works, workAttr } = useContext(Context)
  const [modalActiveAddWork, setModalActiveAddWork] = useState(false)
  const [dateStart, setDateStart] = useState('2023-01-01')
  const [dateEnd, setDateEnd] = useState('2023-01-02')
  const [projectId, setProjectId] = useState('2023-01-02')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)

  useEffect(() => {
    void projects.getProjectsList(user.user.id)

    return () => projects.resetStore()
  }, [])

  const getAllWorks = (projectId) => {
    void works.resetStore()

    void works.getProjectsList(projectId)
  }

  const deleteWorkAtt = (id) => {
    deleteWork(id).then((data) => data)
  }

  const createNewWork = (work) => {
    createWork(work).then((data) => data)
    window.location.reload()
  }

  return (
    <>
      <div className="project">
        <div style={{ display: 'flex' }}>
          выберите проект:
          {projects.isProjects.map((el) => (
            <button onClick={() => getAllWorks(el.id)}>
              {el.project_name}
            </button>
          ))}
        </div>

        <div className="text">Работы</div>
        <button onClick={() => setModalActiveAddWork(true)}>
          Создать работу
        </button>
        <div className="project__recent">
          {works.isWorks.map((work) => (
            <>
              <div
                key={work.id}
                onClick={() => {
                  void works.resetStoreWork()
                  void works.getOneWork(work.id)
                }}>
                <div
                  onClick={() => {
                    deleteWorkAtt(work.id)
                    window.location.reload()
                  }}
                  style={{
                    cursor: 'pointer',
                    position: 'fixed',
                    marginLeft: '360px',
                  }}>
                  <Trash />
                </div>
                <ItemCard
                  key={work.id}
                  id={work.id}
                  worksName={work.work_name}
                  price={work.price}
                  worksStatus={work.works_status}
                  worksAttributes={works.isWork.works_attributes}
                />
              </div>
            </>
          ))}
        </div>
      </div>
      {/*<Modal active={modalActive} setActive={setModalActive}>*/}
      {/*  {!works.loadingWork ? (*/}
      {/*    <WorkCard*/}
      {/*      name={works.isWork.work_name}*/}
      {/*      worksAttributes={works.isWork.works_attributes}*/}
      {/*    />*/}
      {/*  ) : (*/}
      {/*    <div>LOADING</div>*/}
      {/*  )}*/}
      {/*</Modal>*/}
      <Modal active={modalActiveAddWork} setActive={setModalActiveAddWork}>
        <div className="modal__block">
          <div className="name__block">
            <div className="svg__icons">
              <CloseBottom
                stroke={'black'}
                onClick={() => {
                  setModalActiveAddWork(false)
                }}
              />
            </div>
            <div style={{ display: 'flex' }}>
              выберите проект:
              {projects.isProjects.map((el) => (
                <button key={el.id} onClick={() => setProjectId(el.id)}>
                  {el.project_name}
                </button>
              ))}
            </div>
          </div>
          <form className="work__form">
            <div className="description">
              Название работы
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={30}
                required
              />
            </div>
            <div className="date">
              <span>Продолжительность выполнения, дней</span>
              <div className="date__input">
                <input
                  type="date"
                  value={dateStart}
                  onInput={(e) => setDateStart(e.target.value)}
                  required
                />
                <input
                  type="date"
                  value={dateEnd}
                  onInput={(e) => setDateEnd(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="price">
              Потрачено средств
              <CurrencyInput
                onValueChange={(value) => setPrice(value)}
                prefix="₽ "
                groupSeparator="  "
                decimalSeparator="."
                fixedDecimalLength={2}
                maxLength={12}
                step={1}
              />
            </div>
            <ButtonMain
              styleComponent="default"
              text={'Добавить'}
              onClick={(e) => {
                e.preventDefault()
                createNewWork({
                  date_start: dateStart,
                  date_end: dateEnd,
                  work_name: description,
                  price: +price,
                  projectId: projectId,
                })
              }}
            />
          </form>
        </div>
      </Modal>
    </>
  )
})

export default WorksList
