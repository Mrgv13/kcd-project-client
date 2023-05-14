import './item-card.scss'

import { Context } from '../../../../index'

import { PROGRESS_WORK } from '../../../routes/consts/projectRoutes'

import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'

const ItemCard = ({
  worksName,
  worksAttributes = [],
  functional,
  price,
  worksStatus = 0,
  id,
}) => {
  const navigate = useNavigate()
  const { workAttr } = useContext(Context)
  return (
    <>
      <div className="project__card" onClick={functional}>
        <div className="color__row"></div>
        <div>
          <div className="project__name">{worksName}</div>
          {price && worksStatus && (
            <div className="project__attributes">
              <ul>
                <li>{`Цена: ${price} ₽`}</li>
                <li>{`Процент выполнения: ${worksStatus.percent_complited} %`}</li>
              </ul>
            </div>
          )}
          <div
            className="last__active"
            onClick={() => {
              workAttr.setWorkId(id)
              navigate(PROGRESS_WORK + `/${id}`)
            }}>
            Недавняя активность
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCard
