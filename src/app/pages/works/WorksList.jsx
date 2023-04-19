import ItemCard from '../../components/cards-list/card-item/ItemCard'

import Modal from '../../components/modal/Modal'

import { workChangeID } from '../../../store/worksSlice'

import WorkCard from '../../components/works-card/WorkCard'

import { projects, works } from '../../../mock'

import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'

const WorksList = () => {
  const [modalActive, setModalActive] = useState(false)
  const workID = useSelector((state) => state.work.work[0].id)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log(workID);
  // }, [workID]);

  return (
    <>
      <div className="project">
        <div className="text">Работы</div>
        <div className="project__recent">
          {projects.map((project) => (
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
          ))}
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        {!!workID && (
          <WorkCard
            name={works.worksName}
            worksAttributes={works.worksAttributes}
          />
        )}
        {/*TODO запрос перечня работ по id*/}
      </Modal>
    </>
  )
}

export default WorksList
