import React from 'react'
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useForm } from 'react-hook-form';

const FormTasks = () => {

  const {setNewTask, addTask} = useContext(TaskContext);

  const {register, handleSubmit} = useForm();

  const task = (data) => {
    setNewTask(data.task);
    addTask();
  };

  return (
    <>
      <form className='task-form' onSubmit={handleSubmit(task)}>
          <input 
            type="text" 
            className='task-form-input'
            {...register("task")} />
          <button className='task-form-btn'>Agregar tarea</button>
      </form>
    </>
  )
};

export default FormTasks;
