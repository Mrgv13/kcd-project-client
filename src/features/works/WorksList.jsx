import ItemCard from '../../common/components/cards-list/card-item/ItemCard'

import Modal from '../../common/components/modal/Modal'

import { workChangeID } from '../../common/store/worksSlice'

import WorkCard from '../../common/components/works-card/WorkCard'

import { projects, works } from '../../mock'

import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'

const WorksList = () => {
  const [modalActive, setModalActive] = useState(false)
  const workID = useSelector((state) => state.work.work[0].id)
  const dispatch = useDispatch()

  return (
    <>
      <div className="project">
        <div className="text">Работы</div>
        <div className="project__recent">
          {!projects ? (
            <div>data not found</div>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  dispatch(workChangeID(project.id))
                }}>
                <ItemCard
                  key={project.id}
                  worksName={project.worksName}
                  worksAttributes={project.worksAttributes}
                  functional={() => setModalActive(true)}
                />
              </div>
            ))
          )}
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        {!!workID && (
          <WorkCard
            name={works.worksName}
            worksAttributes={works.worksAttributes}
          />
        )}
      </Modal>
    </>
  )
}

export default WorksList
