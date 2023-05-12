import React from 'react'
import { FrappeGantt } from 'frappe-gantt-react'
import './calendar.scss'

const Calendar = () => {
  const tasks = [
    {
      id: 'Task 1',
      name: 'Работа 1',
      start: '2023-04-17',
      end: '2023-04-25',
      progress: 100,
      //dependencies: '',
    },
    {
      id: 'Task 2',
      name: 'Работа 2',
      start: '2023-04-25',
      end: '2023-04-30',
      progress: null,
      dependencies: 'Task 1',
    },
    {
      id: 'Task 3',
      name: 'Работа 3',
      start: '2023-05-05',
      end: '2023-05-23',
      progress: 0,
      dependencies: 'Task 2, Task 1',
    },
    {
      id: 'Task 3',
      name: 'Работа 3',
      start: '2023-05-05',
      end: '2023-05-23',
      progress: 0,
      dependencies: 'Task 2, Task 1',
    },
  ]

  return (
    <div className="calendar__block">
      <FrappeGantt
        tasks={tasks}
        // viewMode={this.state.mode}
        onClick={(task) => console.log(task, 'click')}
        onDateChange={(task, start, end) =>
          console.log(task, start, end, 'date')
        }
        onProgressChange={(task, progress) =>
          console.log(task, progress, 'progress')
        }
        onTasksChange={(tasks) => console.log(tasks, 'tasks')}
      />
    </div>
  )
}

export default Calendar
