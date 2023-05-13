import ItemCard from '../../common/components/cards-list/card-item/ItemCard'

import Modal from '../../common/components/modal/Modal'

import WorkCard from '../../common/components/works-card/WorkCard'

import { Context } from '../../index'

import { useDispatch, useSelector } from 'react-redux'
import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react'

const WorksList = observer(() => {
  const { projects, user, works } = useContext(Context)
  const [modalActive, setModalActive] = useState(false)
  const workID = useSelector((state) => state.work.work[0].id)
  const dispatch = useDispatch()

  useEffect(() => {
    void projects.getProjectsList(user.user.id)

    return () => projects.resetStore()
  }, [])

  const getAllWorks = (projectId) => {
    void works.resetStore()

    void works.getProjectsList(projectId)
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
        <div className="project__recent">
          {works.isWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => {
                void works.resetStoreWork()
                void works.getOneWork(work.id)
              }}>
              <ItemCard
                key={work.id}
                worksName={work.work_name}
                worksAttributes={work.works_attributes}
                functional={() => setModalActive(true)}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        {!works.loadingWork ? (
          <WorkCard
            name={works.isWork.work_name}
            worksAttributes={works.isWork.works_attributes}
          />
        ) : (
          <div>LOADING</div>
        )}
      </Modal>
    </>
  )
})

export default WorksList
