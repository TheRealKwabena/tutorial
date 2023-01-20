import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);
    const addTask = (e) => {
        e.preventDefault();
        if(!text) {
            alert("Add a text")
            return
        }
        onAdd({text: text, day: date, reminder: reminder});
        setText('');
        setDate('');
        setReminder(false);
    }
  return (
  <form className='add-form' onSubmit={addTask}>
    <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}></input>
    </div>
    <div className='form-control'>
        <label>Date & Time </label>
        <input type='text' placeholder='Set Date and Time' value={date} onChange={(e) => setDate(e.target.value)}></input>
    </div>
    <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' placeholder='Set Date and Time' checked= {reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
    </div>

    <input type='submit' value='Save Task' className='btn btn-block'/>
  </form>
  )
}

export default AddTask