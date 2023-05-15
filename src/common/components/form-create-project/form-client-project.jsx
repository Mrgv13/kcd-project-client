import ButtonMain from '../button/ButtonMain'

import { Context } from '../../../index'

import { createProject } from '../../http/project-api'

import React, { useContext, useState } from 'react'

import './stayle.scss'

const FormClientProject = () => {
  const { user, projects } = useContext(Context)
  const [projectName, setProjectName] = useState('')

  const addProject = () => {
    createProject({
      project_name: projectName,
      userId: user.user.id,
    }).then((data) => {
      window.location.reload()
    })
  }
  return (
    <div className="form">
      <span>Введите название проекта</span>
      <input
        className="text"
        type={'text'}
        value={projectName}
        onChange={(event) => setProjectName(event.target.value)}
      />
      <div className="addButton">
        <ButtonMain
          styleComponent={'default'}
          text={'Создать проект'}
          onClick={addProject}
        />
      </div>
    </div>
  )
}

export default FormClientProject
