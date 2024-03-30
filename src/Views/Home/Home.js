import React, { useEffect, useState } from 'react';
import './Home.css';
import Addicon from './addicon.png';
import Taskcard from '../../Components/Taskcard/Taskcard';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewtask] = useState('');
  const [error, setError] = useState();
  const [choice,setChoice]=useState();

  function addTask() {
    if (newtask === '') {
      setError('Please Enter a task');
      return;
    } else {
      setError();
    }
    setTasks([
      {
        title:newtask,
        category:choice
      }, ...tasks])
    setNewtask('')
  }

  const deleteTask=(index)=>{
    const newtasks=tasks;
    newtasks.splice(index,1);
    setTasks([...newtasks]);
    localStorage.setItem('tasks',JSON.stringify(newtasks));

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
    <div className='todo-body'> 
      <h1 className='App-title'>Todo List</h1>
      <div className='input-box-container'>
        <input type='text'
          placeholder='Enter a Task to be add '
          className='input'
          value={newtask}
          onChange={(e) => { setNewtask(e.currentTarget.value) }}
        ></input>
        <select className='choice' value={choice} onChange={(e)=>{setChoice(e.target.value)}}>
          <option value='choice'>Category</option>
          <option value='Study📚'>Study📚</option>
          <option value='Shopping🛍️'>Shopping🛍️</option>
          <option value='Goal 🎯'>Goal 🎯</option>
          <option value='Hobbies🎨'>Hobbies🎨</option>
          <option value='Health🏃‍♀️'>Health🏃‍♀️</option>
        </select>
        <img src={Addicon}
          className='add-icon'
          onClick={addTask}
        ></img>
      </div>
      <p className='error-message'>{error}</p>
      <div className='task-container'>
        {
          tasks.map((task, i) => {
            const{title,category}=task;
            return (
              <Taskcard title={title}  category={category} key={i} deleteTask={deleteTask}></Taskcard>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home;
