import { Context } from '../../../index'

import { Trash } from '../../utils/icons/exportIcons'

import { deleteWorkAttrebute } from '../../http/workAtt-api'

import React, { useContext } from 'react'

import './work-card.scss'

import { observer } from 'mobx-react'

const WorkCard = observer(({ name = '', worksAttributes = [] }) => {
  const { projects, user, works } = useContext(Context)

  const deleteWorkAtt = (id) => {
    deleteWorkAttrebute(id).then((data) => data)
  }
  return (
    <div className="work__card">
      <div className="work__name">{name}</div>
      <div>
        {worksAttributes.map((el) => (
          <div key={el.id} className="work__attributes">
            <div
              onClick={() => {
                deleteWorkAtt(el.id)
              }}
              style={{ cursor: 'pointer', position: 'absolute', left: 0 }}>
              <Trash />
            </div>
            <div className="name">{el.work_name}</div>

            <div className="status">
              {el?.works_attributes_status && (
                <div
                  className={
                    el.works_attributes_status.complited
                      ? 'green oval'
                      : 'red oval'
                  }>
                  {el.works_attributes_status.text}
                </div>
              )}
            </div>

            <div className="date">{`${el.date_start} ${el.date_end}`}</div>
          </div>
        ))}
      </div>
    </div>
  )
})

export default WorkCard
