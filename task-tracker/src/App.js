import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router'
import Tasks from './components/Tasks'
import Header from './components/Header'
import Footer from './components/Footer'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = async() => {
      const data = await fetchTasks()
      setTasks(data);


    }
    getTasks()
  }, [])
  
  const fetchTasks = async() => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = res.json();
    console.log(data)
    return data
  }
  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    console.log(data)
    return data
  }

  const [showAddTask, setShowAddTask]  = useState(false);
  const toggleForm = () => {
    const reverse = !showAddTask
    console.log('toggle form ' , reverse)
    setShowAddTask(reverse)
  }
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const changeReminder = async (id) => {
    const existingTask = await fetchTask(id);
    const newTask = {...existingTask, reminder: !existingTask.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
    const data = await res.json();
    console.log(data)
    setTasks(tasks.map((task) => task.id === id ? newTask: task))
  }
  const addTask = async (task) => {
   
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    console.log(data)
    setTasks([...tasks, data])
    
  }
  return (
    <div className="container">
     <Header title='Task Tracker' showAdd={showAddTask} onShow={toggleForm}/>
     {showAddTask?<AddTask onAdd={addTask}/> : ''}
      {tasks.length > 0 ?<Tasks tasks={tasks} onChangeReminder= {changeReminder} onDelete={deleteTask} /> : 'No tasks available'}
      <Footer />
    </div>
  );
}

export default App;
