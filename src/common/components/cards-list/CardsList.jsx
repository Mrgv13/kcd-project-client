import './cards-list.scss'

import ItemCard from './card-item/ItemCard'

import { Context } from '../../../index'

import { observer } from 'mobx-react'

import { useContext } from 'react'

const CardsList = observer(() => {
  const { projects } = useContext(Context)

  return (
    <div className="project">
      <div className="text">ВАШИ РАБОТЫ</div>
      <div className="project__recent">
        {projects.isProjects.map((el) => (
          <ItemCard
            key={el.id}
            worksName={el.project_name}
            worksAttributes={el.works}
          />
        ))}
      </div>
    </div>
  )
})

export default CardsList
