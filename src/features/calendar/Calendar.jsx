import { Context } from '../../index'

import ButtonMain from '../../common/components/button/ButtonMain'

import { FrappeGantt } from 'frappe-gantt-react'

import './calendar.scss'

import { observer } from 'mobx-react'

import React, { useContext, useEffect, useState } from 'react'

const Calendar = observer(() => {
  const { projects, user, works, workAttr } = useContext(Context)
  const arr = []
  const [workArr, setWorkArr] = useState([])

  useEffect(() => {
    void projects.getProjectsList(user.user.id)

    return () => projects.resetStore()
  }, [])

  const getAllWorks = (projectId) => {
    void works.resetStore()

    void works.getProjectsList(projectId)
  }

  useEffect(() => {
    works.isWorks.forEach(
      (el) =>
        arr.push({
          id: el.id.toString(),
          name: el.work_name,
          start: el.date_start,
          end: el.date_end,
          progress: el.works_status.percent_complited,
        }),
      setWorkArr(arr),
    )
  }, [works.isWorks])

  return (
    <div className="calendar__block">
      <div className={'project'}>
        <span>Выберите проект:</span>
        {projects.isProjects.map((el) => (
          <ButtonMain
            text={el.project_name}
            styleComponent={'light'}
            onClick={() => {
              getAllWorks(el.id)
            }}></ButtonMain>
        ))}
      </div>

      {!(workArr.length === 0) && (
        <FrappeGantt
          tasks={workArr}
          onClick={(task) => console.log(task, 'click')}
          onDateChange={(task, start, end) =>
            console.log(task, start, end, 'date')
          }
          onProgressChange={(task, progress) =>
            console.log(task, progress, 'progress')
          }
          onTasksChange={(tasks) => console.log(tasks, 'tasks')}
        />
      )}
    </div>
  )
})

export default Calendar
