import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

const ListTasks = () => {

  const {tasks, deleteTask} = useContext(TaskContext);

  return (
    <ul className='task-ul'>
        {tasks && tasks.map((task, id) => (
            <li 
              className='task-li' 
              key={id}>
              {task}
              <button className='task-btn' onClick={() => deleteTask(id)}><i className="bi bi-trash-fill"></i></button>
            </li>
        ))}
    </ul>   
  )
};

export default ListTasks;
