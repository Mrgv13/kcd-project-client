import { Context } from '../../index'

import ButtonMain from '../../common/components/button/ButtonMain'

import { FrappeGantt } from 'frappe-gantt-react'

import './calendar.scss'

import { observer } from 'mobx-react'

import React, { useContext, useEffect, useState } from 'react'

const Calendar = observer(() => {
  const { projects, user, works, workAttr } = useContext(Context)
  const [activeArray, setActiveArray] = useState([])
  const [activeArray2, setActiveArray2] = useState([])

  const [workArr, setWorkArr] = useState([])
  const arr = []
  const arr2 = []
  const nowDate = new Date()

  useEffect(() => {
    void projects.getProjectsList(user.user.id)

    return () => projects.resetStore()
  }, [])

  const getAllWorks = (projectId) => {
    void works.resetStore()
    void workAttr.resetStore()

    void works.getProjectsList(projectId)
  }

  const getAllWorkAttr = (workId) => {
    void workAttr.resetStore()

    void workAttr.getProjectsList(workId)
  }

  const getColor = (dateStart, dateEnd, percent_complited) => {
    if (percent_complited === 100) return 'colorGreen'

    const data = `${nowDate.getFullYear()}.${nowDate.getMonth() + 1}.${
      nowDate.getDay() + 14
    }`
    if (
      Date.parse(dateStart) > Date.parse(data) &&
      Date.parse(dateEnd) > Date.parse(data)
    ) {
      return 'colorBlue'
    }
    if (
      Date.parse(dateStart) + (Date.parse(dateEnd) - Date.parse(dateStart)) >=
        Date.parse(data) &&
      Date.parse(dateEnd) >= Date.parse(data)
    ) {
      return 'colorYellow'
    }
    if (
      Date.parse(dateStart) + (Date.parse(dateEnd) - Date.parse(dateStart)) <
        Date.parse(data) &&
      Date.parse(dateEnd) < Date.parse(data)
    ) {
      return 'colorRed'
    }
  }

  useEffect(() => {
    works.isWorks.forEach((el, index) => {
      const color = getColor(
        el.date_start,
        el.date_end,
        el.works_status.percent_complited,
      )

      arr.push({
        id: el.id.toString(),
        name: el.work_name,
        start: el.date_start,
        end: el.date_end,
        progress: el.works_status.percent_complited,
        custom_class: color,
      })
      setWorkArr(arr)
    })
  }, [works.isWorks])

  useEffect(() => {
    workAttr.isWorksAttr.forEach((el, index) => {
      const color = getColor(el.date_start, el.date_end)

      arr2.push({
        id: el.id.toString(),
        name: el.work_name,
        start: el.date_start,
        end: el.date_end,
        progress: el.works_attributes_status.percent_complited,
        custom_class: color,
      })
      setWorkArr(arr2)
    })
  }, [workAttr.isWorksAttr])

  function toggle(id) {
    setActiveArray([id])
  }

  function toggle2(id) {
    setActiveArray2([id])
  }

  return (
    <div className="calendar__block">
      <div className="project">
        <span>Выберите проект:</span>
        {projects.isProjects.map((el, index) => (
          <ButtonMain
            key={el.id}
            text={el.project_name}
            styleComponent={`light ${activeArray.includes(el.id) && 'activeb'}`}
            onClick={() => {
              getAllWorks(el.id)
              toggle(el.id)
            }}></ButtonMain>
        ))}
      </div>
      <div className="project">
        <span>Выберите работу:</span>
        {works.isWorks.map((el, index) => (
          <ButtonMain
            key={el.id}
            text={el.work_name}
            styleComponent={`light ${
              activeArray2.includes(el.id) && 'activeb'
            }`}
            onClick={() => {
              getAllWorkAttr(el.id)
              toggle2(el.id)
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
