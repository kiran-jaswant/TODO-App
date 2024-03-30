import React from 'react';
import './Taskcard.css';
import delicon from './delete.png';

function Taskcard({title,category,i,deleteTask}) {
  
  return (
    <div key={i} className='task-card'>
      <h2 className='task'>{title}</h2>
      <span className='category'>{category}</span>
      <img src={delicon} alt='delete' className='deleteicon' onClick={()=>{
        deleteTask(i);
      }}></img>
    </div>

  )
}

export default Taskcard;
