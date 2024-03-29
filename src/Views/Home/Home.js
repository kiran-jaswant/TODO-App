import React, { useEffect, useState } from 'react';
import './Home.css';
import Addicon from './addicon.png';
import Taskcard from '../../Components/Taskcard/Taskcard';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewtask] = useState('');
  const [error, setError] = useState();

  function addTask() {
    if (newtask === '') {
      setError('Please Enter a task');
      return;
    } else {
      setError();
    }
    setTasks([newtask, ...tasks])
    setNewtask('')
  }
  const deleteTask=(index)=>{
    const newtasks=tasks;
    newtasks.splice(index,1);
    setTasks([...newtasks])

  }
  useEffect(() => {
    if (tasks.length === 0) {
      return
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);
  useEffect(() => {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      setTasks(JSON.parse(tasks));
    }
  }, []);
  return (
    <div>
      <h1 className='App-title'>Todo List</h1>
      <div className='input-box-container'>
        <input type='text'
          placeholder='Enter a Task to be add '
          className='input'
          value={newtask}
          onChange={(e) => { setNewtask(e.currentTarget.value) }}
        ></input>
        <img src={Addicon}
          className='add-icon'
          onClick={addTask}
        ></img>
      </div>
      <p className='error-message'>{error}</p>
      <div className='task-container'>
        {
          tasks.map((task, i) => {
            return (
              <Taskcard task={task} key={i} deleteTask={deleteTask}></Taskcard>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home;
