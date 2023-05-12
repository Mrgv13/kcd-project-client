import { Context } from '../../index'

import CardsList from '../../common/components/cards-list/CardsList'

import React, { useContext, useEffect } from 'react'

import { observer } from 'mobx-react'
import { BeatLoader } from 'react-spinners'

const ProjectPage = observer(() => {
  const { projects, user } = useContext(Context)

  useEffect(() => {
    void projects.getProjectsList(user.user.id)

    return () => projects.resetStore()
  }, [])

  if (projects.loading) {
    return (
      <BeatLoader
        style={{ position: 'absolute', top: '50%', left: '50%' }}
        color="#6200EE"
      />
    )
  }

  return <CardsList />
})

export default ProjectPage
