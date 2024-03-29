import React from 'react';
import './Taskcard.css';
import delicon from './delete.png';

function Taskcard({task,i,deleteTask}) {
  
  return (
    <div key={i} className='task-card'>
      <h2 className='task'>{task}</h2>
      <img src={delicon} alt='delete' className='deleteicon' onClick={()=>{
        deleteTask(i);
      }}></img>
    </div>

  )
}

export default Taskcard;
