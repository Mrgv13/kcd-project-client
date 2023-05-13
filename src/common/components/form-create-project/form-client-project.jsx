import ButtonMain from '../button/ButtonMain'

import { Context } from '../../../index'

import { createProject } from '../../http/project-api'

import React, { useContext, useState } from 'react'

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
    <>
      <input
        type={'text'}
        value={projectName}
        onChange={(event) => setProjectName(event.target.value)}
      />
      <ButtonMain
        styleComponent={'default'}
        text={'push'}
        onClick={addProject}
      />
    </>
  )
}

export default FormClientProject
