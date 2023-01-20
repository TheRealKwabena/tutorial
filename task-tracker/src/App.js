import { useState } from 'react'
import Tasks from './components/Tasks'
import Header from './components/Header'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id:2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Food shopping',
      day: 'Feb 5th at 2:30 pm',
      reminder: false
    }
])
  const [showAddTask, setShowAddTask]  = useState(false);
  const toggleForm = () => {
    const reverse = !showAddTask
    console.log('toggle form ' , reverse)
    setShowAddTask(reverse)
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const changeReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task))
  }
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask ])
    console.log(task)
  }
  return (
    <div className="container">
     <Header title='Task Tracker' onShow={toggleForm}/>
     {showAddTask?<AddTask onAdd={addTask}/> : ''}
      {tasks.length > 0 ?<Tasks tasks={tasks} onChangeReminder= {changeReminder} onDelete={deleteTask} /> : 'No tasks available'}

    </div>
  );
}

export default App;
