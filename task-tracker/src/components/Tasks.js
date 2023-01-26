import React from 'react'
import Task from './Task'
const Tasks = ({tasks, onDelete, onChangeReminder}) => {
  return (
    <>
    {tasks.map((task, index) => <Task key={index} task={task} onDelete={onDelete} onChangeReminder={onChangeReminder}/> )}
    </>
  )
}

export default Tasks