import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

const ErrorTasks = () => {

  const {error} = useContext(TaskContext);

  return (
    <>
      {error && <p className='task-error'>{error}!</p>}
    </>
  )
};

export default ErrorTasks;
