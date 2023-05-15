import './item-card.scss'

import { Context } from '../../../../index'

import {
  PROGRESS_WORK,
  WORKS_ROUTE,
} from '../../../routes/consts/projectRoutes'

import { getCalcPercent } from '../../../http/work-aip'

import React, { useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'

const ItemCard = observer(
  ({ worksName, functional, price, worksStatus = 0, id }) => {
    const navigate = useNavigate()
    const [percent, setPercent] = useState(0)
    useEffect(() => {
      getCalcPercent(id).then((data) => setPercent(data.data || 0))
    }, [])
    const { workAttr, works } = useContext(Context)

    return (
      <>
        <div className="project__card" onClick={functional}>
          <div className="color__row"></div>
          <div>
            <div className="project__name">{worksName}</div>
            {price && worksStatus ? (
              <>
                <div className="project__attributes">
                  <ul>
                    <li>{`Цена: ${price} ₽`}</li>
                    <li>{`Процент выполнения: ${percent} %`}</li>
                  </ul>
                </div>
                <div
                  className="last__active"
                  onClick={() => {
                    workAttr.setWorkId(id)
                    navigate(PROGRESS_WORK + `/${id}`)
                  }}>
                  Детали работы
                </div>
              </>
            ) : (
              <div
                className="last__active"
                onClick={() => {
                  void works.resetStore()

                  void works.getProjectsList(id)
                  navigate(WORKS_ROUTE + `/${id}`)
                }}>
                Управление работами
              </div>
            )}
          </div>
        </div>
      </>
    )
  },
)

export default ItemCard
