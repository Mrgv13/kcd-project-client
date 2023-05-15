import './cards-list.scss'

import ItemCard from './card-item/ItemCard'

import { Context } from '../../../index'

import ButtonMain from '../button/ButtonMain'

import Modal from '../modal/Modal'

import FormClientProject from '../form-create-project/form-client-project'

import { Trash } from '../../utils/icons/exportIcons'

import { deleteProject } from '../../http/project-api'

import { observer } from 'mobx-react'

import React, { useContext, useState } from 'react'

const CardsList = observer(() => {
  const [activeModal, setActiveModal] = useState(false)
  const { projects } = useContext(Context)

  const delProject = (id) => {
    deleteProject(id).then((data) => data)
  }

  return (
    <>
      <div className="project">
        <div className="text">ВАШИ РАБОТЫ</div>
        <div className="addButton">
          <ButtonMain
            text={'Создать проект'}
            styleComponent={'default'}
            onClick={() => setActiveModal(true)}
          />
        </div>

        <div className="project__recent">
          {projects.isProjects.map((el) => (
            <div>
              <div
                onClick={() => {
                  delProject(el.id)
                  window.location.reload()
                }}
                style={{
                  position: 'absolute',
                  marginLeft: '350px',
                  cursor: 'pointer',
                }}>
                <Trash />
              </div>
              <ItemCard
                id={el.id}
                key={el.id}
                worksName={el.project_name}
                worksAttributes={el.works}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal
        active={activeModal}
        setActive={setActiveModal}
        children={<FormClientProject />}
      />
    </>
  )
})

export default CardsList
